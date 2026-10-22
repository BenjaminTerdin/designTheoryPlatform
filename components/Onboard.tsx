"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const options = [
  {
    value: "yes",
    label: "Yes",
    description: "I'm familiar with design theory.",
  },
  {
    value: "a-little",
    label: "A little",
    description: "I know some of the basics.",
  },
  {
    value: "no",
    label: "No",
    description: "I'm starting from the beginning.",
  },
];

export default function Onboard() {
  const router = useRouter();
  const [showExperience, setShowExperience] = useState(false);
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("designTheory.name") ?? "");
    setExperience(localStorage.getItem("designTheory.experience") ?? "");
  }, []);

  function nextStep(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName) return;

    localStorage.setItem("designTheory.name", trimmedName);
    setName(trimmedName);
    setShowExperience(true);
  }

  function goBack() {
    setShowExperience(false);
  }

  function startLearning(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName || !experience) return;

    localStorage.setItem("designTheory.name", trimmedName);
    localStorage.setItem("designTheory.experience", experience);
    localStorage.setItem("designTheory.onboardingComplete", "true");

    router.push("/learn");
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-5 py-12 font-sans text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(8,127,140,0.08),transparent_38%),radial-gradient(ellipse_at_85%_85%,rgba(166,217,54,0.10),transparent_36%)]"
      />

      <section className="relative w-full max-w-lg">
        <Card className="border-border/70 bg-card shadow-sm">
          <CardContent className="p-6 sm:p-9">
            <div className="mb-8 space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Let’s make this
                <br />
                <span className="font-serif font-normal italic">
                  <span className="animate-gradient-flow bg-gradient-to-r from-[#064E78] via-[#087F8C] via-[#A6D936] via-[#E4EF83] to-[#279653] bg-[length:300%_300%] bg-clip-text text-transparent">
                    personal.
                  </span>
                </span>
              </h1>

              <p className="max-w-sm text-base leading-7 text-muted-foreground">
                A couple of quick details will help us find the right starting
                point for you.
              </p>
            </div>

            {!showExperience ? (
              <form onSubmit={nextStep} className="space-y-7">
                <div className="space-y-2">
                  <Label htmlFor="name">What should we call you?</Label>
                  <Input
                    id="name"
                    autoComplete="given-name"
                    placeholder="Your first name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" disabled={!name.trim()}>
                    Next
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={startLearning} className="space-y-7">
                <fieldset className="space-y-3">
                  <legend className="text-sm font-medium">
                    Have you studied design theory before?
                  </legend>

                  <RadioGroup
                    value={experience}
                    onValueChange={setExperience}
                    className="gap-2"
                  >
                    {options.map((option) => (
                      <Label
                        key={option.value}
                        htmlFor={option.value}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
                          experience === option.value
                            ? "border-foreground/50 bg-muted"
                            : "border-border hover:bg-muted/50"
                        }`}
                      >
                        <RadioGroupItem
                          id={option.value}
                          value={option.value}
                        />
                        <span>
                          <span className="block text-sm font-medium">
                            {option.label}
                          </span>
                          <span className="block text-sm text-muted-foreground">
                            {option.description}
                          </span>
                        </span>
                      </Label>
                    ))}
                  </RadioGroup>
                </fieldset>

                <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setShowExperience(false)}
                  className="group/button inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-transparent bg-clip-padding px-6 text-base font-medium whitespace-nowrap transition-all outline-none select-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5"
                >
                  <ArrowLeft className="size-5" />
                  Back
                </button>

                  <Button type="submit" disabled={!experience}>
                    Start now
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}