
import StartResumeButton from "./StartResumeButton";

export default function FinalCTA() {
  return (
    <section
    id="learn"
    className="w-full px-6 py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 rounded-2xl bg-primary px-8 py-12 text-primary-foreground md:px-16 md:py-16">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Do you want to learn{" "}
          <span className="font-serif italic font-normal">
            design theory?
          </span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed opacity-85 md:text-lg">
          Discover the principles of great design and learn how to create
          thoughtful, effective visual experiences.
        </p>

        <StartResumeButton
                variant="outline"
                name="Start now"
                onboardHref="/onboard"
                courseHref="/learn"
              />
      </div>
    </section>
  );
}
