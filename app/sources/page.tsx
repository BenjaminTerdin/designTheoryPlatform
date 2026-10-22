
const sources = [
  {
    number: "01",
    title: "Layout Theory",
    topics: "Balance, symmetry, asymmetry, and the golden ratio",
    organization: "Interaction Design Foundation",
    url: "https://ixdf.org/literature/topics/design-principles",
    domain: "ixdf.org",
  },
  {
    number: "02",
    title: "Typography",
    topics: "Typographic hierarchy, font families, and visual weight",
    organization: "web.dev",
    url: "https://web.dev/learn/design/typography",
    domain: "web.dev",
  },
  {
    number: "03",
    title: "Color Psychology",
    topics: "Color associations, emotions, brand identity, and visual contrast",
    organization: "World Wide Web Consortium (W3C)",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
    domain: "w3.org",
  },
  {
    number: "04",
    title: "Responsive Design",
    topics: "How layouts adapt across mobile devices and desktop screens",
    organization: "MDN Web Docs",
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
    domain: "developer.mozilla.org",
  },
  {
    number: "05",
    title: "Gestalt Principles and Visual Perception",
    topics:
      "How people perceive visual patterns, relationships, and groups of elements",
    organization: "Nielsen Norman Group",
    url: "https://www.nngroup.com/articles/principles-visual-design",
    domain: "nngroup.com",
  },
  {
    number: "06",
    title: "Visual Hierarchy and Attention",
    topics:
      "How contrast, scale, spacing, and emphasis guide a user's attention",
    organization: "Nielsen Norman Group",
    url: "https://www.nngroup.com/articles/visual-hierarchy-ux-definition",
    domain: "nngroup.com",
  },
];

export default function SourcesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-24">
        <header className="mb-12 border-b pb-8">
          <p className="mb-3 text-sm text-muted-foreground">
            DesignTheoryPlatform
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Sources & References
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Explore the research, educational resources, and documentation
            that support the six design principles covered throughout
            DesignTheoryPlatform.
          </p>
        </header>

        <section aria-label="Design theory references">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Reference library
            </h2>
            <span className="text-sm text-muted-foreground">
              {sources.length} sources
            </span>
          </div>

          <div className="divide-y border-y">
            {sources.map((source) => (
              <article
                key={source.number}
                className="group grid gap-4 py-7 sm:grid-cols-[3rem_1fr] sm:gap-6"
              >
                <span className="text-sm font-medium tabular-nums text-muted-foreground">
                  {source.number}
                </span>

                <div className="min-w-0">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {source.title}
                  </h3>

                  <p className="mt-2 leading-7 text-muted-foreground">
                    {source.topics}
                  </p>

                  <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-medium">
                        {source.organization}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {source.domain}
                      </p>
                    </div>

                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 decoration-muted-foreground/40 transition-colors hover:decoration-foreground"
                    >
                      Visit source
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t pt-6 text-sm leading-6 text-muted-foreground">
          <p>
            These external resources provide background information for the
            educational content on DesignTheoryPlatform. The original
            materials remain the property of their respective authors and
            publishers.
          </p>

          <p className="mt-4">
            Questions about our educational content?{" "}
            <a
              href="mailto:07benter@skola.boras.se"
              className="text-foreground underline underline-offset-4"
            >
              Contact us
            </a>
            .
          </p>
        </footer>
      </div>
    </main>
  );
}
