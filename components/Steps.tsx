
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

  const [step, setStep] = useState(defaultProgress.step);
  const [showAnswers, setShowAnswers] = useState(
    defaultProgress.showAnswers
  );
  const [completed, setCompleted] = useState(
    defaultProgress.completed
  );
  const [loaded, setLoaded] = useState(false);

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
      // Ignore invalid saved progress.
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const progress: CourseProgress = {
      step,
      showAnswers,
      completed,
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Continue if browser storage is unavailable.
    }
  }, [step, showAnswers, completed, loaded]);

  function handleComplete() {
    if (step < 6) {
      setStep((current) => current + 1);
      setShowAnswers(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCompleted(true);
    }
  }

  function goToStep(nextStep: number) {
    if (nextStep < 1 || nextStep > 6) return;

    setStep(nextStep);
    setShowAnswers(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restartCourse() {
    setStep(1);
    setShowAnswers(false);
    setCompleted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!loaded) {
    return (
      <main
        className="min-h-[70vh]"
        aria-busy="true"
      />
    );
  }

  if (completed) {
    return (
      <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl items-center justify-center px-5 py-12">
        <Card className="w-full border-border/70 shadow-sm">
          <CardContent className="flex flex-col items-center gap-5 p-8 text-center sm:p-12">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="size-8 text-primary" />
            </div>

            <div className="space-y-3">
              <h1 className="font-serif text-3xl font-normal italic tracking-tight sm:text-4xl">
                Course completed.
              </h1>

              <p className="max-w-md leading-7 text-muted-foreground">
                You have completed all six learning steps. You now
                have a stronger foundation in the theory behind
                effective web layouts.
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
      <header className="mb-10 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              DesignTheoryPlatform
            </p>

            <h1 className="font-serif text-3xl font-normal italic tracking-tight sm:text-4xl">
              Design theory
            </h1>

            <p className="text-sm text-muted-foreground">
              Lesson {step} of 6
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

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4 text-sm">
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
            className="h-1.5 overflow-hidden rounded-full bg-muted"
          >
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>
        </div>
      </header>

      <section className="space-y-7">
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
              <CardContent className="p-5 sm:p-9">
                {/*
                  Article typography:
                  h2 = main lesson title
                  h3 = section headings
                  p  = body paragraphs
                  figure = images and captions
                */}
                <div
                  className="
                    [&_article]:space-y-10
                    [&_article>h2]:mb-10
                    [&_article>h2]:font-serif
                    [&_article>h2]:text-3xl
                    [&_article>h2]:font-normal
                    [&_article>h2]:italic
                    [&_article>h2]:tracking-tight
                    sm:[&_article>h2]:text-4xl
                    [&_article>section]:space-y-4
                    [&_article_h3]:font-serif
                    [&_article_h3]:text-xl
                    [&_article_h3]:font-normal
                    [&_article_h3]:italic
                    [&_article_h3]:tracking-tight
                    sm:[&_article_h3]:text-2xl
                    [&_article_p]:text-sm
                    [&_article_p]:leading-7
                    [&_article_p]:text-muted-foreground
                    sm:[&_article_p]:text-base
                    [&_article_figure]:my-7
                    [&_article_figure_img]:block
                    [&_article_figure_img]:h-auto
                    [&_article_figure_img]:w-full
                    [&_article_figure_img]:object-cover
                    [&_article_figure_figcaption]:mt-3
                    [&_article_figure_figcaption]:text-xs
                    [&_article_figure_figcaption]:leading-5
                    [&_article_figure_figcaption]:text-muted-foreground
                  "
                >
                  <Material step={step} />
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
              <Button
                variant="outline"
                onClick={() => goToStep(step - 1)}
                disabled={step === 1}
                className="w-full sm:w-auto"
              >
                <ArrowLeft className="mr-2 size-4" />
                Previous lesson
              </Button>

              <Button
                onClick={() => {
                  setShowAnswers(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full sm:w-auto"
              >
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
