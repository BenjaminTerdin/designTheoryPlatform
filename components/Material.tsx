
type LessonSection = {
  heading: string;
  paragraphs: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
};

type Lesson = {
  id: number;
  title: string;
  introduction: string;
  sections: LessonSection[];
  video?: {
    title: string;
    url: string;
    description: string;
  };
  sources: {
    title: string;
    url: string;
  }[];
};

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Layout theory",
    introduction:
      "Learn how balance, symmetry, asymmetry and proportions influence the way a web page is perceived.",
    sections: [
      {
        heading: "Balance and visual weight",
        paragraphs: [
          "A layout describes how text, images, headings, buttons and other elements are arranged in relation to one another. Visual balance describes how the visual weight of these elements is distributed across a composition. A large photograph may have as much visual weight as several smaller text elements, depending on its size, colour, contrast and position.",
          "When all prominent elements are concentrated in one area, a composition can feel unbalanced. Distributing them more thoughtfully can create a more coherent layout. Balance does not mean that everything must be centred or that both sides must be identical. What matters is how the complete composition is perceived and whether it supports the purpose of the page.",
        ],
        image: {
          src: "/material/01.jpg",
          alt: "An example of layout balance, proportion and composition.",
          caption:
            "Balance and proportion influence how the elements of a layout work together.",
        },
      },
      {
        heading: "Symmetry and asymmetry",
        paragraphs: [
          "A symmetrical layout distributes elements in a similar way around an imaginary axis. For example, a page might have a centred heading and two equally sized information cards. Symmetry can create a sense of order, stability and predictability.",
          "An asymmetrical layout uses elements that differ in size, position or visual weight. A large image on the left, for example, can be balanced by a heading and a short paragraph on the right. Asymmetry can create movement and visual interest without making the overall composition feel unbalanced. Neither approach is automatically better; the choice depends on the content, audience and intended expression.",
        ],
      },
      {
        heading: "The golden ratio",
        paragraphs: [
          "The golden ratio is a mathematical proportion of approximately 1:1.618. Designers can use it as a tool when dividing a composition into areas or deciding the relative proportions of elements. For example, a main content area and a side panel might be arranged using this relationship.",
          "The golden ratio is not a guarantee of an attractive, usable or balanced design. Readability, content, accessibility and the user's needs remain important. It is best understood as one possible compositional tool rather than a universal rule that every designer must follow.",
        ],
      },
    ],
    sources: [
      {
        title: "Interaction Design Foundation — Design Principles",
        url: "https://ixdf.org/literature/topics/design-principles",
      },
      {
        title: "Interaction Design Foundation — The Golden Ratio",
        url: "https://assets.interaction-design.org/literature/topics/golden-ratio",
      },
    ],
  },
  {
    id: 2,
    title: "Typography",
    introduction:
      "Discover how typefaces, text size, font weight and spacing make information easier to understand.",
    sections: [
      {
        heading: "Typographic hierarchy",
        paragraphs: [
          "Typography is the way text is designed and presented. It does more than make words readable: it helps organise information and communicate what matters most. Typographic hierarchy means giving different levels of text distinct visual roles.",
          "A main heading might be large and prominent, a subheading smaller, and body text more restrained. These differences help readers understand where a section begins, what it is about and which details belong to it. Hierarchy can be created through size, weight, colour, spacing and position. If every text element looks the same, it becomes harder to scan the page.",
        ],
      },
      {
        heading: "Typeface families and visual weight",
        paragraphs: [
          "Typeface families have different visual characteristics. Serif typefaces have small finishing strokes on letters, while sans-serif typefaces do not. Monospace typefaces give characters equal horizontal spacing and are often used for code. Display typefaces are designed to stand out, especially at larger sizes.",
          "Visual weight also affects emphasis. A bold heading may appear more important than a thin line of text at the same size. Using too many typefaces, weights and sizes at once can make a page feel inconsistent. A deliberate, limited typographic system helps create a recognisable structure. No single typeface family is best for every website; the choice depends on context, readability and the intended tone.",
        ],
        image: {
          src: "/material/02.jpg",
          alt: "A visual example of typography, typeface choices and text hierarchy.",
          caption:
            "Typeface, size, weight and spacing establish typographic hierarchy.",
        },
      },
      {
        heading: "Readability and spacing",
        paragraphs: [
          "Readable typography depends on more than the typeface. Text size, contrast, line spacing and line length also affect how comfortably people can read. Very long lines can make it difficult to find the beginning of the next line, while insufficient line spacing can make paragraphs feel crowded.",
          "Typography must also work across screen sizes and when users enlarge text. A design that looks elegant on a large monitor may be difficult to read on a phone. Designers should evaluate both the visual appearance and practical readability of their choices. The goal is for typography to support the content, not compete with it.",
        ],
      },
    ],
    sources: [
      {
        title: "web.dev — Typography",
        url: "https://web.dev/learn/design/typography/",
      },
      {
        title: "W3C — Visual Presentation",
        url: "https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation",
      },
    ],
  },
  {
    id: 3,
    title: "Colour theory",
    introduction:
      "Understand colour properties, associations, brand identity and the importance of sufficient contrast.",
    sections: [
      {
        heading: "Colour properties",
        paragraphs: [
          "Colour is used to organise information, create contrast and give a website a consistent visual identity. Three useful properties are hue, saturation and lightness. Hue describes which colour is present, such as blue, green or red. Saturation describes how intense or muted a colour appears, while lightness describes how light or dark it is.",
          "Designers combine these properties to build colour palettes with different expressions. A muted palette may create a restrained appearance, while vivid colours can help emphasise particular elements. Colour should not be chosen only because it looks attractive. It must also work with the content, audience and purpose of the website.",
        ],
        image: {
          src: "/material/03.jpg",
          alt: "A visual example of colour relationships, palettes and contrast.",
          caption:
            "Colour relationships contribute to emphasis, contrast and visual identity.",
        },
      },
      {
        heading: "Colour psychology and brand identity",
        paragraphs: [
          "Colour psychology explores how colours can be associated with feelings, ideas and characteristics. Blue may be used to communicate a professional or calm impression, while vivid warm colours may be used to suggest energy or draw attention. However, these associations are not universal. They can vary with culture, personal experience, context and the colours used alongside them.",
          "A brand's colour palette can support recognition when colours are used consistently across its logo, buttons, illustrations and other visual elements. Designers should consider what the brand wants to communicate and test whether the chosen palette supports that message. It is misleading to assume that a particular colour always produces the same emotional response in every person.",
        ],
      },
      {
        heading: "Contrast and accessibility",
        paragraphs: [
          "Contrast is the visible difference between elements, such as dark text on a light background. It helps users distinguish text, buttons, icons and other interface elements. Under WCAG 2.2 level AA, normal text generally needs a contrast ratio of at least 4.5:1. Large text generally needs at least 3:1.",
          "A colour combination can look attractive but still be difficult for some people to read. Colour should also not be the only way to communicate important information. For example, a form error should not be indicated only by turning a field red; a text explanation or symbol can make the message clearer. Good colour design combines visual expression with readability and accessibility.",
        ],
      },
    ],
    video: {
      title: "W3C — Colors with Good Contrast",
      url: "https://www.youtube-nocookie.com/embed/a9kNUv6N8Rk",
      description:
        "A short accessibility video explaining why foreground and background colours need sufficient contrast.",
    },
    sources: [
      {
        title: "Interaction Design Foundation — Design Principles",
        url: "https://ixdf.org/literature/topics/design-principles",
      },
      {
        title: "W3C — Understanding Contrast (Minimum)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
      },
    ],
  },
  {
    id: 4,
    title: "Responsive design",
    introduction:
      "Explore why a website's layout needs to adapt to different screen sizes and user needs.",
    sections: [
      {
        heading: "What responsive design means",
        paragraphs: [
          "Responsive design is an approach to creating websites that adapt to the available space and device. The same page may be viewed on a wide desktop monitor, a tablet or a mobile phone. Because screen sizes and proportions differ, the same arrangement does not always work well on every device.",
          "Responsive design is not simply about shrinking everything. It is about keeping a page understandable, readable and usable in different conditions. Text, images, navigation and buttons may all need to adapt. The central goal is to preserve the website's purpose and make its content accessible to users across different screen sizes.",
        ],
      },
      {
        heading: "Layout changes and content priorities",
        paragraphs: [
          "When a layout adapts to a smaller screen, some elements may need to move or change. Two columns may become one, a sidebar may move below the main content, and navigation may become more compact. Images must fit their containers, while headings and body text need to remain readable.",
          "Breakpoints are points at which a layout changes to better suit the available width. They should be chosen based on when the content needs to change, rather than only targeting specific device models. Designers must also decide what information users should see first, because a mobile page often requires more scrolling.",
        ],
        image: {
          src: "/material/04.jpg",
          alt: "A visual example of responsive design across different screen sizes.",
          caption:
            "Responsive design adapts content and layout to the available screen space.",
        },
      },
      {
        heading: "Responsive design as a design problem",
        paragraphs: [
          "Responsive design is not only a technical challenge. It also concerns how people read, navigate and use a page in different situations. A desktop layout may become difficult on mobile if text is cramped, buttons are hard to use or related content becomes separated.",
          "A useful exercise is to compare the same page on a desktop and a phone. Identify which elements moved, changed size or received different priority, and explain why. A good responsive layout preserves the meaning and usefulness of the page even when its visual structure changes.",
        ],
      },
    ],
    sources: [
      {
        title: "MDN Web Docs — Responsive Web Design",
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
      },
    ],
  },
  {
    id: 5,
    title: "Gestalt principles",
    introduction:
      "Learn how proximity, similarity, closure and figure-ground relationships influence how people group visual information.",
    sections: [
      {
        heading: "How people perceive groups",
        paragraphs: [
          "Gestalt principles describe patterns in how people organise visual information and perceive relationships between elements. When looking at a website, people do not see only separate buttons, images and text lines. They also try to understand which elements belong together and how the page is organised.",
          "Designers can use these principles to create clearer groups and make information easier to scan. Two particularly useful principles in interface design are proximity and similarity. Other examples include closure and figure-ground. These principles describe common patterns of perception, not absolute rules that apply identically to every person or situation.",
        ],
        image: {
          src: "/material/05.jpg",
          alt: "A visual example of Gestalt principles and relationships between shapes.",
          caption:
            "Proximity, similarity and contrast influence how people group visual elements.",
        },
      },
      {
        heading: "Proximity and similarity",
        paragraphs: [
          "The principle of proximity states that elements placed close together are often perceived as belonging to the same group. On a website, a heading, its description and a related button can be placed near one another to show their connection. A larger gap can separate that group from the next section. Spacing communicates structure without requiring borders around every element.",
          "The principle of similarity states that elements sharing visual characteristics, such as colour, shape or size, are often perceived as related. If several buttons look alike, users may expect them to have similar roles. Proximity and similarity can work together to make navigation, cards and forms easier to understand.",
        ],
      },
      {
        heading: "Closure and figure-ground",
        paragraphs: [
          "The principle of closure describes how people may perceive a complete shape even when parts of its outline are missing. For example, an icon made from a few lines may still be recognised as a familiar symbol.",
          "Figure-ground describes how people distinguish a prominent object from its surroundings. A button with a clear contrast against its background is easier to notice. If the boundary between an element and its background is unclear, users may struggle to identify what is interactive. Gestalt principles help designers organise navigation, forms, menus and content cards so that visual grouping reflects the actual relationships between the information.",
        ],
      },
    ],
    video: {
      title: "Nielsen Norman Group — Proximity: Gestalt Principle for UI Design",
      url: "https://www.youtube-nocookie.com/embed/",
      description:
        "A short explanation of why nearby interface elements are perceived as related.",
    },
    sources: [
      {
        title: "Nielsen Norman Group — Proximity Principle",
        url: "https://www.nngroup.com/articles/gestalt-proximity/",
      },
      {
        title: "Nielsen Norman Group — Similarity Principle",
        url: "https://www.nngroup.com/articles/gestalt-similarity/",
      },
      {
        title: "Nielsen Norman Group — Proximity Video",
        url: "https://www.nngroup.com/videos/proximity-gestalt/",
      },
    ],
  },
  {
    id: 6,
    title: "Visual hierarchy",
    introduction:
      "Discover how size, contrast, placement and whitespace help users understand what matters most on a page.",
    sections: [
      {
        heading: "What visual hierarchy means",
        paragraphs: [
          "Visual hierarchy describes how a design communicates the relative importance of information. A website may contain a heading, an image, an introduction, navigation and a button. If every element has the same size, colour and visual weight, it may be difficult to know where to start.",
          "Designers create hierarchy by giving important elements a more prominent visual role. A main heading might introduce the subject, a subheading might explain it, and body text might provide details. The hierarchy should reflect the actual purpose of the content. If a decorative element attracts more attention than the information users need, the page may communicate the wrong priorities.",
        ],
      },
      {
        heading: "Size, contrast and placement",
        paragraphs: [
          "Size is one way to establish hierarchy: larger elements often attract more attention than smaller ones. Contrast makes an element stand out from its surroundings through differences in colour, lightness, shape or size. A button with a clear colour against a neutral background may be easier to notice.",
          "Placement and typography also influence hierarchy. Elements positioned within a clear heading area or grouped with related content can be easier to interpret. Usually, several properties work together rather than one feature doing all the work. If everything is large, colourful and bold, the differences disappear. Emphasis should therefore be used selectively.",
        ],
        image: {
          src: "/material/06.jpg",
          alt: "A visual example of hierarchy, emphasis and the arrangement of design elements.",
          caption:
            "Visual hierarchy uses emphasis, contrast, placement and whitespace to guide attention.",
        },
      },
      {
        heading: "Whitespace and focal points",
        paragraphs: [
          "Whitespace, also called negative space, is the space around and between design elements. It does not have to be white. It can separate sections, create room around a heading and make a button or image more prominent. When every element is crowded together, the page may feel harder to scan.",
          "Visual hierarchy does not force every visitor to follow exactly the same eye movement. People scan pages differently depending on their task and context. Designers can, however, make certain elements more prominent and increase the chance that users notice them. When analysing a page, ask: What do I notice first? What seems most important? Which design choices create that effect? Does the order help the user understand the page and achieve their goal?",
        ],
      },
    ],
    sources: [
      {
        title: "Nielsen Norman Group — 5 Principles of Visual Design in UX",
        url: "https://www.nngroup.com/articles/principles-visual-design/",
      },
      {
        title: "Interaction Design Foundation — Design Principles",
        url: "https://ixdf.org/literature/topics/design-principles",
      },
    ],
  },
];

type MaterialProps = {
  step: number;
};

export default function Material({ step }: MaterialProps) {
  const lesson = lessons[step - 1];

  if (!lesson) return null;

  return (
    <article>
      <h2>{lesson.title}</h2>

      {lesson.sections.map((section, index) => (
        <section key={index} className="space-y-4">
          <h3 className="font-serif text-xl font-normal italic">
            {section.heading}
          </h3>

          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}

          {section.image && (
            <figure className="py-4">
              <img
                src={section.image.src}
                alt={section.image.alt}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />

              {section.image.caption && (
                <figcaption>{section.image.caption}</figcaption>
              )}
            </figure>
          )}
        </section>
      ))}
    </article>
  );
}
