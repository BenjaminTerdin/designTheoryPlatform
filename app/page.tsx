
import { Button } from "@/components/ui/button";
import Link from "next/link";

import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StartResumeButton from "@/components/StartResumeButton";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center page-padding">
        <div className="content-width max-w-3xl text-center">
          <p className="uppercase tracking-[0.3em] text-muted-foreground mb-6">
            The fundamentals of design
          </p>

          <h1 className="font-semibold">
            The "basics" of
            <br />
            <span className="animate-gradient-flow bg-gradient-to-r from-[#064E78] via-[#087F8C] via-[#A6D936] via-[#E4EF83] to-[#279653] bg-[length:300%_300%] bg-clip-text font-serif font-normal italic text-transparent">
              Design theory
            </span>
          </h1>

          <p className="mt-8 max-w-xl mx-auto text-muted-foreground">
            Explore the principles behind great design, from visual
            hierarchy and balance to typography, color, and composition.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
              <StartResumeButton
                onboardHref="/onboard"
                courseHref="/learn"
              />

            <Button 
              variant="outline">
              
                Learn more
              </Button>
          </div>
        </div>
      </main>

      <About />
      <FinalCTA />
      <Footer />
    </>
  );
}
