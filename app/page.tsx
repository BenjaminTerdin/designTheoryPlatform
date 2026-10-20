import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center page-padding">
      <div className="content-width max-w-3xl text-center">
        <p className="uppercase tracking-[0.3em] text-muted-foreground mb-6">
          The fundamentals of design
        </p>

        <h1>
          The "basics" of
          <br />
          <span className="font-serif font-normal italic">
            Design theory
          </span>
        </h1>

        <p className="mt-8 max-w-xl mx-auto text-muted-foreground">
          Explore the principles behind great design, from visual
          hierarchy and balance to typography, color, and composition.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button>Get started</Button>
          <Button variant="outline">Learn more</Button>
        </div>
      </div>
    </main>
  );
}
