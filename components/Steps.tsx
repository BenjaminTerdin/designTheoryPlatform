
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  LogOut,
} from "lucide-react";

import Material from "./Material";
import Answer from "./Answer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const STORAGE_KEY = "designTheory.courseProgress";

type CourseProgress = {
  step: number;
  showAnswers: boolean;
  completed: boolean;
};

const defaultProgress: CourseProgress = {
  step: 1,
  showAnswers: false,
  completed: false,
};

export default function Steps() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [showAnswers, setShowAnswers] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Restore saved progress when the course opens.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const progress = JSON.parse(saved) as CourseProgress;

        if (
          Number.isInteger(progress.step) &&
          progress.step >= 1 &&
          progress.step <= 6
        ) {
          setStep(progress.step);
          setShowAnswers(Boolean(progress.showAnswers));
          setCompleted(Boolean(progress.completed));
        }
      }
    } catch {
      // Ignore invalid saved progress and start from the beginning.
    }

    setLoaded(true);
  }, []);

  // Save whenever the user's course progress changes.
  useEffect(() => {
    if (!loaded) return;

    const progress: CourseProgress = {
      step,
      showAnswers,
      completed,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [step, showAnswers, completed, loaded]);

  function handleComplete() {
    if (step < 6) {
      setStep((current) => current + 1);
      setShowAnswers(false);
    } else {
      setCompleted(true);
    }
  }

  function restartCourse() {
    setStep(1);
    setShowAnswers(false);
    setCompleted(false);
  }

  // Avoid briefly showing the wrong step before localStorage loads.
  if (!loaded) {
    return <main className="min-h-[70vh]" aria-busy="true" />;
  }

  if (completed) {
    return (
      <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl items-center justify-center px-5 py-12">
        <Card className="w-full border-border/70 shadow-sm">
          <CardContent className="flex flex-col items-center gap-5 p-8 text-center sm:p-12">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="size-8 text-primary" />
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-semibold italic tracking-tight">
                Course completed!
              </h1>
              <p className="max-w-md text-muted-foreground">
                You have completed all six learning steps. Well done!
              </p>
            </div>

            <Button onClick={restartCourse}>
              Start again
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-10 sm:py-14">
      <header className="mb-8 space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-serif font-normal italic tracking-tight">
              Design theory
            </h1>
            <p className="text-sm text-muted-foreground">
              Step {step} of 6
            </p>
          </div>

          <Button
            variant="outline"
            onClick={() => router.push("/")}
            aria-label="Exit course and return home"
          >
            <LogOut className="mr-2 size-4" />
            Exit
          </Button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Course progress</span>
            <span className="text-muted-foreground">
              {Math.round((step / 6) * 100)}% through
            </span>
          </div>

          <div
            role="progressbar"
            aria-label="Course progress"
            aria-valuemin={0}
            aria-valuemax={6}
            aria-valuenow={step}
            className="h-2 overflow-hidden rounded-full bg-muted"
          >
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>
        </div>
      </header>

      <section className="space-y-6">
        {showAnswers ? (
          <Answer
            key={step}
            step={step}
            onComplete={handleComplete}
            onBackToMaterial={() => setShowAnswers(false)}
          />
        ) : (
          <>
            <Card className="border-border/70 shadow-sm">
              <CardContent className="p-5 sm:p-8">
                <Material step={step} />
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  if (step > 1) {
                    setStep((current) => current - 1);
                    setShowAnswers(false);
                  }
                }}
                disabled={step === 1}
              >
                <ArrowLeft className="mr-2 size-4" />
                Back
              </Button>

              <Button onClick={() => setShowAnswers(true)}>
                Start quiz
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
