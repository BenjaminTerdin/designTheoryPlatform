
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

const STORAGE_KEY = "designTheory.courseProgress";

type Props = {
  name?: string;
  onboardHref?: string;
  courseHref?: string;
} & Omit<ComponentProps<typeof Button>, "onClick" | "children">;

export default function StartResumeButton({
  name = "Get Started",
  onboardHref = "/onboard",
  courseHref = "/steps",
  variant = "default",
  ...buttonProps
}: Props) {
  const router = useRouter();
  const [destination, setDestination] = useState(onboardHref);
  const [label, setLabel] = useState(name);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let nextLabel = name;
    let nextDestination = onboardHref;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const progress = JSON.parse(saved);

        if (progress.completed) {
          nextLabel = "Start again";
        } else if (progress.step >= 1 && progress.step <= 6) {
          nextLabel = "Resume";
          nextDestination = courseHref;
        }
      }
    } catch {
      // Use the default label if saved data is invalid.
    }

    setLabel(nextLabel);
    setDestination(nextDestination);
    setLoaded(true);
  }, [name, onboardHref, courseHref]);

  return (
  <Button
    {...buttonProps}
    variant={variant}
    className={[
      buttonProps.className,
      variant === "outline" ? "text-black" : "",
    ]
      .filter(Boolean)
      .join(" ")}
    disabled={!loaded || buttonProps.disabled}
    onClick={() => router.push(destination)}
  >
    {label}
    <ArrowRight className="ml-2 size-4" />
  </Button>
  );
}
