"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button"

export default function About() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const container = videoContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-background px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <div id="left" className="text-left">
          <h2 className="text-3xl font-semibold md:text-5xl">
            What is{" "}
            <span className="font-serif italic font-normal">
              design theory?
            </span>
          </h2>

          <p className="mt-6 text-muted-foreground">
            Design theory explores the principles behind effective visual
            communication, from color and typography to balance, contrast,
            and composition. It helps you understand why designs work and
            how to create meaningful, engaging experiences.
          </p>

          <Button className={"mt-6"}>Get Started</Button>
        </div>

        <div
          id="right"
          ref={videoContainerRef}
          className="w-full overflow-hidden rounded-2xl bg-muted"
        >
          {shouldLoadVideo && (
            <video
              className="block h-auto w-full rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              aria-label="Introduction to design theory"
            >
              <source src="/aboutExplainer-optimized.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          )}
        </div>
      </div>
    </section>
  );
}