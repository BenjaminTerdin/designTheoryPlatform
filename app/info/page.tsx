
const designPrinciples = [
  {
    number: "01",
    title: "Layout Theory",
    description:
      "Balance, symmetry, asymmetry, and the golden ratio.",
  },
  {
    number: "02",
    title: "Typography",
    description:
      "Typographic hierarchy, font families, and the visual weight of text.",
  },
  {
    number: "03",
    title: "Color Psychology",
    description:
      "How colors influence emotions, associations, and brand identity.",
  },
  {
    number: "04",
    title: "Responsive Design Theory",
    description:
      "The principles behind adapting layouts to mobile and desktop screens, with an emphasis on theory rather than implementation.",
  },
  {
    number: "05",
    title: "Gestalt Principles and Visual Perception",
    description:
      "How the human eye groups elements and recognizes patterns, including the principles of proximity and similarity.",
  },
  {
    number: "06",
    title: "Visual Hierarchy and Focal Points",
    description:
      'How contrast, scale, spacing, and "white space" guide the viewer\'s attention across a page.',
  },
];

const learningObjectives = [
  "Explain and justify design decisions using established layout theory and Gestalt principles.",
  "Develop visual concepts in which typography and color palettes work together to communicate a specific message.",
  "Analyze a web layout and identify how visual hierarchy is used to guide the user's attention.",
];

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-24">
        <header className="mb-16 border-b pb-10">
          <p className="mb-3 text-sm text-muted-foreground">
            About the project
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Understanding the theory behind great design.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            DesignTheoryPlatform is an educational platform designed to help
            aspiring developers understand the principles behind effective
            web layouts and visual communication.
          </p>
        </header>

        <div className="space-y-16">
          <section>
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              01 / Purpose
            </p>

            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Why this platform exists
            </h2>

            <div className="mt-5 max-w-3xl space-y-4 leading-7 text-muted-foreground">
              <p>
                The purpose of this project is to educate and guide young
                developers in web layout design, an essential part of modern
                web development. The platform focuses on the theoretical
                foundations that influence how digital interfaces are
                structured, perceived, and understood.
              </p>

              <p>
                Through educational materials, interactive quizzes, and
                structured learning activities, users are introduced to six
                fundamental areas of design theory. The aim is to build a
                strong conceptual foundation before moving on to practical
                design work or implementation through code.
              </p>

              <p>
                Users who successfully complete the learning materials and
                quizzes will develop a deeper understanding of the six design
                principles that form the foundation of this platform.
              </p>
            </div>

            <div className="mt-8 grid gap-0 divide-y border-y">
              {designPrinciples.map((principle) => (
                <article
                  key={principle.number}
                  className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5"
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="font-semibold">
                      {principle.title}
                    </h3>
                    <p className="mt-1 leading-7 text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              02 / Learning Objectives
            </p>

            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What learners will achieve
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
              The goal of this project and its accompanying website is to
              educate developers in web layout and the theories that underpin
              much of web design and development.
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
              After completing the learning materials, listening to the
              relevant content, finishing all exercises, and earning their
              diploma, participants should be able to:
            </p>

            <ol className="mt-8 space-y-6">
              {learningObjectives.map((objective, index) => (
                <li
                  key={objective}
                  className="grid grid-cols-[2.5rem_1fr] gap-4"
                >
                  <span className="flex size-10 items-center justify-center border text-sm font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-1 leading-7">{objective}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 border-l-2 pl-5">
              <p className="font-medium">
                The most important outcome
              </p>
              <p className="mt-2 leading-7 text-muted-foreground">
                Learners should be able to critically analyze a web layout
                and explain how its visual hierarchy directs attention,
                establishes relationships, and communicates information.
              </p>
            </div>
          </section>

          <section>
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              03 / Target Audience
            </p>

            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Who this platform is for
            </h2>

            <div className="mt-5 max-w-3xl space-y-4 leading-7 text-muted-foreground">
              <p>
                The platform is intended for aspiring developers, students,
                and beginners in web development and digital design.
                It is particularly suited to people with a strong interest
                in technology and design who want to understand the
                principles behind effective visual composition.
              </p>

              <p>
                Users may already have some technical knowledge or experience
                with coding but lack a deeper understanding of design theory,
                visual composition, and web hierarchy.
              </p>

              <p>
                The learning experience is designed to bridge this gap by
                providing the theoretical framework needed to make informed
                design decisions before progressing to practical creation,
                interface development, or coding.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-6 border-t pt-8">

          <p className="text-sm">
            Questions about the project?{" "}
            <a
              href="mailto:07benter@skola.boras.se"
              className="underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-foreground"
            >
              07benter@skola.boras.se
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
