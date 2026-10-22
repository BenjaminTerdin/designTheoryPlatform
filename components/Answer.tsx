
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react";

type AnswerProps = {
  step: number;
  onComplete: () => void;
  onBackToMaterial: () => void;
};

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

type Quiz = {
  title: string;
  questions: Question[];
};

const quizzes: Record<string, Quiz[]> = {
  beginner: [
    {
      title: "Layout and balance",
      questions: [
        {
          question: "What does visual balance mean in design?",
          options: [
            "Elements feel visually balanced",
            "Every element has the same size",
            "Everything is placed in the center",
            "Only symmetrical layouts are used",
          ],
          correctAnswer: 0,
          explanation:
            "Visual balance is about how visual weight is distributed across a composition.",
        },
        {
          question: "What is a symmetrical layout?",
          options: [
            "A layout with no alignment",
            "A layout with similar elements on both sides",
            "A layout with only text",
            "A layout with different colours everywhere",
          ],
          correctAnswer: 1,
          explanation:
            "Symmetry uses corresponding elements on either side of an axis.",
        },
        {
          question: "What is visual weight?",
          options: [
            "The physical weight of a screen",
            "The number of elements on a page",
            "How strongly an element attracts attention",
            "The length of a paragraph",
          ],
          correctAnswer: 2,
          explanation:
            "Size, colour, contrast and position can make an element feel more visually prominent.",
        },
        {
          question: "Can an asymmetrical layout still feel balanced?",
          options: ["No, never", "Only with equal-sized elements", "Only in print", "Yes, with careful visual weight"],
          correctAnswer: 3,
          explanation:
            "Different elements can balance one another through their size, position, colour and visual weight.",
        },
        {
          question: "What is the golden ratio used for in design?",
          options: [
            "A proportion that can help guide composition",
            "A rule that all text must follow",
            "A colour contrast measurement",
            "A technique for making images responsive",
          ],
          correctAnswer: 0,
          explanation:
            "The golden ratio is one proportional tool designers can use, not a universal rule.",
        },
      ],
    },
    {
      title: "Typography",
      questions: [
        {
          question: "What is typography?",
          options: [
            "The process of compressing images",
            "The design and arrangement of text",
            "The placement of buttons",
            "The selection of page backgrounds",
          ],
          correctAnswer: 1,
          explanation:
            "Typography concerns how typefaces and text are designed, arranged and presented.",
        },
        {
          question: "What is a type hierarchy used for?",
          options: [
            "Making all text identical",
            "Removing paragraph spacing",
            "Showing the relative importance of text",
            "Replacing the page layout",
          ],
          correctAnswer: 2,
          explanation:
            "Headings, subheadings and body text communicate different levels of importance.",
        },
        {
          question: "Which typeface category traditionally has small finishing strokes on letters?",
          options: ["Sans-serif", "Monospace", "Display only", "Serif"],
          correctAnswer: 3,
          explanation:
            "Serif typefaces have small finishing strokes called serifs.",
        },
        {
          question: "What can make a paragraph easier to read?",
          options: [
            "Comfortable line length and spacing",
            "Using the smallest possible text",
            "Removing all paragraph breaks",
            "Using many unrelated typefaces",
          ],
          correctAnswer: 0,
          explanation:
            "Appropriate line length and spacing help readers follow text comfortably.",
        },
        {
          question: "What is visual weight in typography?",
          options: [
            "How many words a heading contains",
            "How bold or prominent text appears",
            "The physical weight of a device",
            "The number of fonts installed",
          ],
          correctAnswer: 1,
          explanation:
            "Font weight, size and contrast affect how prominent text appears.",
        },
      ],
    },
    {
      title: "Colour and contrast",
      questions: [
        {
          question: "What does colour contrast help readers do?",
          options: [
            "Understand the site's programming language",
            "Predict the page loading time",
            "Distinguish foreground content from its background",
            "Change the screen resolution",
          ],
          correctAnswer: 2,
          explanation:
            "Contrast helps text and other interface elements stand out from their surroundings.",
        },
        {
          question: "Which combination usually provides strong text contrast?",
          options: [
            "Light grey on white",
            "Yellow on white",
            "Pale blue on light grey",
            "Dark text on a light background",
          ],
          correctAnswer: 3,
          explanation:
            "Dark text on a light background often provides strong contrast, though actual colours still matter.",
        },
        {
          question: "What does saturation describe?",
          options: [
            "How intense or muted a colour appears",
            "How large an element is",
            "How far apart letters are",
            "How quickly a page loads",
          ],
          correctAnswer: 0,
          explanation:
            "Saturation describes colour intensity, from vivid to more muted.",
        },
        {
          question: "Why should colour not be the only way to communicate an error?",
          options: [
            "Colours cannot be displayed on websites",
            "Some users may not distinguish the colours",
            "Colour always slows down a website",
            "Errors must only use icons",
          ],
          correctAnswer: 1,
          explanation:
            "An icon or text label can communicate the error to users who cannot distinguish the colour difference.",
        },
        {
          question: "Do colour associations mean the same thing in every culture and context?",
          options: [
            "Yes, without exception",
            "Only on mobile devices",
            "No, associations can vary",
            "Only for neutral colours",
          ],
          correctAnswer: 2,
          explanation:
            "Colour associations depend on cultural context, personal experience and the situation.",
        },
      ],
    },
    {
      title: "Responsive design",
      questions: [
        {
          question: "What is responsive web design?",
          options: [
            "A design that only works on phones",
            "A design that uses one fixed width",
            "A design that removes all images",
            "A design that adapts to different screen sizes",
          ],
          correctAnswer: 3,
          explanation:
            "Responsive design adapts layouts and content to different viewports and devices.",
        },
        {
          question: "What is a breakpoint commonly used for?",
          options: [
            "Changing layout when a viewport reaches a chosen width",
            "Stopping all page interactions",
            "Changing every text colour",
            "Preventing images from loading",
          ],
          correctAnswer: 0,
          explanation:
            "Breakpoints let a layout change when there is enough or too little room for its content.",
        },
        {
          question: "Which approach is generally best for small screens?",
          options: [
            "Keep all desktop columns unchanged",
            "Prioritise important content and fit the available space",
            "Hide all navigation permanently",
            "Make every element smaller without checking readability",
          ],
          correctAnswer: 1,
          explanation:
            "Responsive layouts should preserve usability and prioritise content within limited space.",
        },
        {
          question: "Should responsive design consider only screen width?",
          options: [
            "Yes, width is the only factor",
            "Only for desktop sites",
            "No, content and interaction needs matter too",
            "Only when using images",
          ],
          correctAnswer: 2,
          explanation:
            "A responsive experience also needs to account for content, readability and how people interact with the interface.",
        },
        {
          question: "When should you test a responsive layout?",
          options: [
            "Only after launch",
            "Only on the largest screen",
            "Only when the site has animations",
            "Across relevant viewport sizes during development",
          ],
          correctAnswer: 3,
          explanation:
            "Testing during development helps identify layout problems before the site is finished.",
        },
      ],
    },
    {
      title: "Gestalt principles",
      questions: [
        {
          question: "What does the Gestalt principle of proximity describe?",
          options: [
            "Nearby elements tend to be perceived as related",
            "Large text is always more readable",
            "Bright colours always attract attention",
            "All elements should be symmetrical",
          ],
          correctAnswer: 0,
          explanation:
            "Proximity makes elements placed near one another appear related.",
        },
        {
          question: "What is the Gestalt principle of similarity?",
          options: [
            "Elements must be placed in a grid",
            "Similar-looking elements tend to be perceived as related",
            "Every section needs a different font",
            "All content must have equal spacing",
          ],
          correctAnswer: 1,
          explanation:
            "Elements sharing visual characteristics, such as shape or colour, are often perceived as a group.",
        },
        {
          question: "What does figure-ground describe?",
          options: [
            "The speed of an animation",
            "The order of HTML elements",
            "How people distinguish a subject from its background",
            "How a grid changes on mobile",
          ],
          correctAnswer: 2,
          explanation:
            "Figure-ground helps people distinguish a prominent object or region from its background.",
        },
        {
          question: "What is closure in Gestalt design?",
          options: [
            "Removing all whitespace",
            "Making every shape rectangular",
            "Grouping only by colour",
            "Perceiving a complete shape despite missing parts",
          ],
          correctAnswer: 3,
          explanation:
            "People can perceive a complete form even when parts of its outline are missing.",
        },
        {
          question: "Why group related form fields together?",
          options: [
            "Proximity helps users understand their relationship",
            "It makes all text the same size",
            "It removes the need for labels",
            "It guarantees faster loading",
          ],
          correctAnswer: 0,
          explanation:
            "Grouping related fields makes their relationship easier to understand.",
        },
      ],
    },
    {
      title: "Visual hierarchy",
      questions: [
        {
          question: "What is visual hierarchy?",
          options: [
            "A list of programming rules",
            "The arrangement of elements to communicate importance",
            "A fixed set of brand colours",
            "A method for compressing images",
          ],
          correctAnswer: 1,
          explanation:
            "Visual hierarchy guides people through content according to its relative importance.",
        },
        {
          question: "Which change can make a heading more prominent?",
          options: [
            "Reducing its contrast",
            "Making it identical to body text",
            "Increasing its size or contrast",
            "Placing it inside a dense paragraph",
          ],
          correctAnswer: 2,
          explanation:
            "Size and contrast are common ways to increase an element's visual prominence.",
        },
        {
          question: "What is whitespace in design?",
          options: [
            "Only a white page background",
            "Space that must always be removed",
            "An area reserved for advertisements",
            "Unoccupied space around or between elements",
          ],
          correctAnswer: 3,
          explanation:
            "Whitespace is the space around content, regardless of whether that space is white.",
        },
        {
          question: "Why establish a clear focal point?",
          options: [
            "To guide attention towards the most important content",
            "To make every element equally prominent",
            "To avoid using headings",
            "To fill every empty area",
          ],
          correctAnswer: 0,
          explanation:
            "A focal point gives the viewer a clear place to begin looking.",
        },
        {
          question: "What can happen when every element has equal visual emphasis?",
          options: [
            "The hierarchy becomes clearer automatically",
            "It becomes harder to identify what matters most",
            "The page always becomes more accessible",
            "Users immediately understand the intended order",
          ],
          correctAnswer: 1,
          explanation:
            "If everything competes equally for attention, the intended reading order can become unclear.",
        },
      ],
    },
  ],
  experienced: [
    {
      title: "Layout and balance",
      questions: [
        {
          question: "A layout has a large dark image on the left and several small pale elements on the right. What best explains how it could remain balanced?",
          options: [
            "Every element must have the same dimensions",
            "The image must be moved to the centre",
            "The combined visual weight of the right-side elements can counterbalance the image",
            "The pale elements must all become darker than the image",
          ],
          correctAnswer: 2,
          explanation:
            "Balance depends on the distribution of visual weight, not identical element dimensions.",
        },
        {
          question: "What is a limitation of using the golden ratio as a layout rule?",
          options: [
            "It cannot describe proportions",
            "It guarantees poor readability",
            "It only applies to typography",
            "It does not guarantee a successful composition by itself",
          ],
          correctAnswer: 3,
          explanation:
            "The golden ratio can guide proportion, but content, context and usability still determine whether a layout works.",
        },
        {
          question: "Which layout is asymmetrical but could still be balanced?",
          options: [
            "A large element on one side balanced by several smaller elements on the other",
            "Two identical columns mirrored around the centre",
            "A page where every element is removed",
            "A page where all content overlaps without intention",
          ],
          correctAnswer: 0,
          explanation:
            "Asymmetrical balance can be created by counterbalancing different elements.",
        },
        {
          question: "Why assess visual weight rather than only counting elements?",
          options: [
            "Element count determines contrast",
            "Elements differ in size, contrast, colour and prominence",
            "Visual weight only matters in print",
            "Every element attracts the same amount of attention",
          ],
          correctAnswer: 1,
          explanation:
            "A single high-contrast element can attract more attention than several subtle elements.",
        },
        {
          question: "When is symmetry especially useful?",
          options: [
            "When every composition must feel chaotic",
            "When the content requires no structure",
            "When a formal, orderly or stable impression is appropriate",
            "When all elements need different alignments",
          ],
          correctAnswer: 2,
          explanation:
            "Symmetry often communicates order and stability, although the best approach depends on the design goal.",
        },
      ],
    },
    {
      title: "Typography",
      questions: [
        {
          question: "A page uses a 32px heading and a 16px body font, but both look equally prominent. What should the designer investigate first?",
          options: [
            "Whether the database is indexed",
            "Whether the page has enough images",
            "Whether every element has the same width",
            "The fonts' weight, contrast, spacing and surrounding layout",
          ],
          correctAnswer: 3,
          explanation:
            "Hierarchy depends on more than size: weight, contrast, spacing and context also affect prominence.",
        },
        {
          question: "Why might a long body paragraph be difficult to read even with a legible typeface?",
          options: [
            "Its line length or spacing may make tracking lines difficult",
            "All serif fonts are inaccessible",
            "Body text must always be centred",
            "A typeface determines the page's network speed",
          ],
          correctAnswer: 0,
          explanation:
            "Line length and spacing affect how easily readers follow and return to the next line.",
        },
        {
          question: "When is a monospace typeface particularly useful?",
          options: [
            "For every heading on every site",
            "When characters need consistent horizontal spacing, such as in code",
            "Only for decorative logos",
            "When all words need different widths",
          ],
          correctAnswer: 1,
          explanation:
            "Monospace typefaces give each character the same horizontal advance, which is useful for code and aligned data.",
        },
        {
          question: "What is the main risk of using too many typefaces without a clear system?",
          options: [
            "The browser cannot render any text",
            "The layout becomes automatically responsive",
            "The typographic hierarchy can become inconsistent",
            "Contrast ratios stop applying",
          ],
          correctAnswer: 2,
          explanation:
            "An uncontrolled mix of typefaces can weaken consistency and make hierarchy harder to understand.",
        },
        {
          question: "How should a designer choose between a serif and a sans-serif typeface?",
          options: [
            "Always use serif for body text",
            "Always use sans-serif for headings",
            "Choose whichever has the most decorative letters",
            "Evaluate context, readability, tone and the overall design system",
          ],
          correctAnswer: 3,
          explanation:
            "Neither category is universally best; the choice should suit the context and intended reading experience.",
        },
      ],
    },
    {
      title: "Colour and contrast",
      questions: [
        {
          question: "Under WCAG AA, what is the minimum contrast ratio for normal-sized text?",
          options: ["4.5:1", "3:1", "7:1 in every case", "1:1"],
          correctAnswer: 0,
          explanation:
            "WCAG AA requires a contrast ratio of at least 4.5:1 for normal text.",
        },
        {
          question: "What minimum contrast ratio does WCAG AA require for qualifying large text?",
          options: ["1.5:1", "3:1", "4.5:1", "10:1"],
          correctAnswer: 1,
          explanation:
            "Qualifying large text has a minimum WCAG AA contrast ratio of 3:1.",
        },
        {
          question: "A status indicator uses red and green alone to distinguish failure from success. What is the strongest improvement?",
          options: [
            "Make both colours more saturated",
            "Use a different shade of green",
            "Add text labels or distinct icons alongside colour",
            "Remove the status information",
          ],
          correctAnswer: 2,
          explanation:
            "Redundant text or icon cues communicate status without relying solely on colour perception.",
        },
        {
          question: "Why can a brand colour that looks attractive in a logo fail as small body text on white?",
          options: [
            "Brand colours cannot be used on websites",
            "Small text is not affected by contrast",
            "All saturated colours fail accessibility checks",
            "The colour may not provide enough contrast at that text size",
          ],
          correctAnswer: 3,
          explanation:
            "A colour's visual appeal does not guarantee sufficient contrast for small text.",
        },
        {
          question: "Why should colour associations be treated as contextual rather than universal?",
          options: [
            "Meaning can vary by culture, context and experience",
            "Colour has no visual effect",
            "Every culture assigns identical meanings to colours",
            "Colour psychology applies only to printed work",
          ],
          correctAnswer: 0,
          explanation:
            "Colour associations vary, so designers should consider their audience and context.",
        },
      ],
    },
    {
      title: "Responsive design",
      questions: [
        {
          question: "A three-column layout becomes cramped on a narrow viewport. What is the best response?",
          options: [
            "Keep all three columns regardless of readability",
            "Adapt the layout based on available space and content needs",
            "Hide all text",
            "Force the viewport to become wider",
          ],
          correctAnswer: 1,
          explanation:
            "Responsive layouts should adapt to available space while preserving content and usability.",
        },
        {
          question: "What should guide the choice of a responsive breakpoint?",
          options: [
            "A fixed list of device brands only",
            "The designer's preferred monitor size",
            "The point at which the content or layout needs to change",
            "The colour palette",
          ],
          correctAnswer: 2,
          explanation:
            "Breakpoints should respond to the needs of the layout, not merely specific device labels.",
        },
        {
          question: "Why can a fixed-width container be problematic on mobile?",
          options: [
            "Fixed widths always improve readability",
            "Mobile browsers cannot display containers",
            "It automatically removes semantic HTML",
            "It may exceed the viewport and cause horizontal scrolling",
          ],
          correctAnswer: 3,
          explanation:
            "A container wider than the viewport can overflow and make content harder to use.",
        },
        {
          question: "What is a key benefit of testing intermediate viewport widths?",
          options: [
            "It can reveal awkward transitions between layout states",
            "It guarantees the design needs no further testing",
            "It replaces accessibility testing",
            "It removes the need for flexible layouts",
          ],
          correctAnswer: 0,
          explanation:
            "Intermediate widths can reveal wrapping and spacing problems that are not visible at common device sizes.",
        },
        {
          question: "Which statement best describes responsive design?",
          options: [
            "It means building a separate website for every phone",
            "It combines adaptable layouts with content and usability considerations",
            "It means shrinking every desktop element by the same percentage",
            "It only applies to images",
          ],
          correctAnswer: 1,
          explanation:
            "Responsive design adapts the presentation to the viewport while maintaining a usable experience.",
        },
      ],
    },
    {
      title: "Gestalt principles",
      questions: [
        {
          question: "A form has labels very close to their input fields but far from the next fields' labels. Which principle helps explain the grouping?",
          options: [
            "Closure",
            "Figure-ground",
            "Proximity",
            "Symmetry",
          ],
          correctAnswer: 2,
          explanation:
            "Proximity makes nearby elements appear related, helping users associate labels with their fields.",
        },
        {
          question: "A row of identical-looking icons is perceived as a related group despite gaps between them. Which principle is most relevant?",
          options: [
            "Closure",
            "Figure-ground",
            "Asymmetrical balance",
            "Similarity",
          ],
          correctAnswer: 3,
          explanation:
            "Similarity encourages people to group elements that share visual characteristics.",
        },
        {
          question: "Why is figure-ground separation important for a call-to-action button?",
          options: [
            "It helps the button stand out from its surroundings",
            "It ensures the button uses a serif typeface",
            "It determines the button's network request",
            "It removes the need for contrast",
          ],
          correctAnswer: 0,
          explanation:
            "Clear figure-ground separation helps people distinguish the button from the surrounding interface.",
        },
        {
          question: "A logo appears complete even though parts of its outline are missing. Which principle is demonstrated?",
          options: [
            "Proximity",
            "Closure",
            "Responsive design",
            "Visual weight",
          ],
          correctAnswer: 1,
          explanation:
            "Closure describes the tendency to perceive a complete form despite gaps in its outline.",
        },
        {
          question: "What is a potential drawback of grouping unrelated controls too closely?",
          options: [
            "The page becomes responsive automatically",
            "The controls gain semantic labels",
            "Users may infer a relationship that was not intended",
            "All controls become equally prominent",
          ],
          correctAnswer: 2,
          explanation:
            "Proximity can imply a relationship, so spacing should reflect the actual information structure.",
        },
      ],
    },
    {
      title: "Visual hierarchy",
      questions: [
        {
          question: "A page has several competing high-contrast elements. What is the likely effect?",
          options: [
            "The intended focal point becomes guaranteed",
            "Whitespace becomes irrelevant",
            "All users follow the same reading order",
            "Attention may become fragmented because too many elements compete",
          ],
          correctAnswer: 3,
          explanation:
            "When many elements compete for prominence, users may struggle to identify the intended starting point.",
        },
        {
          question: "How can whitespace improve an interface?",
          options: [
            "By separating groups and clarifying relationships",
            "By guaranteeing a particular brand personality",
            "By replacing every heading",
            "By making every element equally prominent",
          ],
          correctAnswer: 0,
          explanation:
            "Whitespace can separate content, reduce visual clutter and reinforce grouping.",
        },
        {
          question: "Why is a clear focal point useful on a landing page?",
          options: [
            "It makes every section identical",
            "It helps direct attention toward the primary message or action",
            "It removes the need for navigation",
            "It guarantees a conversion",
          ],
          correctAnswer: 1,
          explanation:
            "A focal point gives the viewer a visual entry point, though it cannot guarantee a particular user action.",
        },
        {
          question: "Which combination is most appropriate for establishing a deliberate hierarchy?",
          options: [
            "Identical sizes, contrast and spacing everywhere",
            "Random font sizes and unrelated colours",
            "Consistent size, contrast, placement and spacing choices",
            "Removing headings and alignment",
          ],
          correctAnswer: 2,
          explanation:
            "Consistent use of size, contrast, placement and spacing helps communicate relative importance.",
        },
        {
          question: "Why should a designer test hierarchy with real content?",
          options: [
            "Placeholder text always has the same dimensions",
            "Real content makes contrast unnecessary",
            "Hierarchy depends only on the logo",
            "Actual text length and meaning can change the visual balance",
          ],
          correctAnswer: 3,
          explanation:
            "Real content can change wrapping, density and prominence, revealing issues hidden by placeholders.",
        },
      ],
    },
  ],
};


export default function Answer({
  step,
  onComplete,
  onBackToMaterial,
}: AnswerProps) {
  const [experience, setExperience] = useState("beginner");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [failedQuestions, setFailedQuestions] = useState<number[]>([]);
  const [roundFailed, setRoundFailed] = useState<number[]>([]);
  const [questionIndices, setQuestionIndices] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [roundComplete, setRoundComplete] = useState(false);
  const [retrying, setRetrying] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedExperience = localStorage.getItem("designTheory.experience");

    setExperience(
      savedExperience === "Yes" || savedExperience === "A little"
        ? "experienced"
        : "beginner"
    );

    const savedAnswers = JSON.parse(
      localStorage.getItem(`designTheory.answers.${step}`) || "{}"
    );

    const savedFailed = JSON.parse(
      localStorage.getItem(`designTheory.failed.${step}`) || "[]"
    );

    setAnswers(savedAnswers);
    setFailedQuestions(savedFailed);
    setQuestionIndices([0, 1, 2, 3, 4]);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setRoundScore(0);
    setRoundFailed([]);
    setFinished(false);
    setRoundComplete(false);
    setRetrying(false);
    setLoaded(true);
  }, [step]);

  const quiz = quizzes[experience][step - 1];

  if (!loaded) {
    return <p className="text-muted-foreground">Loading quiz...</p>;
  }

  if (!quiz) {
    return <p>Quiz not found.</p>;
  }

  const currentQuestionNumber = questionIndices[questionIndex];
  const question = quiz.questions[currentQuestionNumber];

  if (!question) {
    return <p>Question not found.</p>;
  }

  function submitAnswer() {
    if (selectedAnswer === null || finished) return;

    const isCorrect = selectedAnswer === question.correctAnswer;

    const updatedAnswers = {
      ...answers,
      [currentQuestionNumber]: selectedAnswer,
    };

    const updatedFailed = isCorrect
      ? failedQuestions.filter((index) => index !== currentQuestionNumber)
      : Array.from(new Set([...failedQuestions, currentQuestionNumber]));

    const updatedRoundFailed = isCorrect
      ? roundFailed.filter((index) => index !== currentQuestionNumber)
      : Array.from(new Set([...roundFailed, currentQuestionNumber]));

    setAnswers(updatedAnswers);
    setFailedQuestions(updatedFailed);
    setRoundFailed(updatedRoundFailed);

    localStorage.setItem(
      `designTheory.answers.${step}`,
      JSON.stringify(updatedAnswers)
    );

    localStorage.setItem(
      `designTheory.failed.${step}`,
      JSON.stringify(updatedFailed)
    );

    if (isCorrect) {
      setRoundScore((current) => current + 1);

      if (!retrying) {
        setScore((current) => current + 1);
      }
    }

    setFinished(true);
  }

  function nextQuestion() {
    if (questionIndex < questionIndices.length - 1) {
      setQuestionIndex((current) => current + 1);
      setSelectedAnswer(null);
      setFinished(false);
      return;
    }

    setRoundComplete(true);
  }

  function retryFailedQuestions() {
    const remaining = [...failedQuestions];

    if (remaining.length === 0) {
      onComplete();
      return;
    }

    setQuestionIndices(remaining);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setRoundFailed([]);
    setRoundScore(0);
    setFinished(false);
    setRoundComplete(false);
    setRetrying(true);
  }

  function finishQuiz() {
    const results = JSON.parse(
      localStorage.getItem("designTheory.results") || "{}"
    );

    results[step] = {
      score,
      total: quiz.questions.length,
      completed: true,
    };

    localStorage.setItem("designTheory.results", JSON.stringify(results));
    localStorage.setItem(`designTheory.failed.${step}`, "[]");

    onComplete();
  }

  if (roundComplete) {
    const remainingFailed = failedQuestions.length;

    return (
      <section className="mx-auto w-full max-w-2xl space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Topic {step} of 6
          </p>
          <h2 className="text-2xl font-semibold">{quiz.title}</h2>
        </div>

        <div className="rounded-xl border bg-card p-6 sm:p-8">
          {remainingFailed === 0 ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  All questions correct!
                </h3>
                <p className="text-muted-foreground">
                  You have answered every question correctly. You can continue
                  to the next topic.
                </p>
              </div>

              <Button onClick={finishQuiz} className="w-full sm:w-auto">
                Continue to next topic
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  {retrying ? "Keep practising" : "Review your answers"}
                </h3>
                <p className="text-muted-foreground">
                  {retrying
                    ? `${remainingFailed} question${remainingFailed === 1 ? "" : "s"} still need${remainingFailed === 1 ? "s" : ""} a correct answer. Keep going!`
                    : `You answered ${score} of ${quiz.questions.length} correctly on your first attempt. ${remainingFailed} question${remainingFailed === 1 ? "" : "s"} will be repeated.`}
                </p>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm font-medium">
                  Questions to retry: {remainingFailed}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  You must answer all of them correctly before moving on.
                </p>
              </div>

              <Button
                onClick={retryFailedQuestions}
                className="w-full sm:w-auto"
              >
                Retry failed questions
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-2xl space-y-6">
      <div className="flex items-center justify-between gap-4">
        <Button
          type="button"
          variant="ghost"
          onClick={onBackToMaterial}
          className="-ml-3"
        >
          <ArrowLeft className="mr-2 size-4" />
          Back to lesson
        </Button>

        <span className="text-sm text-muted-foreground">
          {retrying ? "Retrying failed questions" : "First attempt"}
        </span>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Topic {step} of 6 · Question {questionIndex + 1} of{" "}
          {questionIndices.length}
        </p>

        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{
              width: `${((questionIndex + 1) / questionIndices.length) * 100}%`,
            }}
          />
        </div>

        <h2 className="text-2xl font-semibold">{quiz.title}</h2>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">{question.question}</h3>

        <div className="grid gap-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;

            let optionStyle =
              "border-border hover:border-foreground/40";

            if (isSelected) {
              optionStyle = "border-foreground bg-muted";
            }

            if (finished && isCorrect) {
              optionStyle = "border-green-600 bg-green-50 text-green-950";
            }

            if (finished && isSelected && !isCorrect) {
              optionStyle = "border-red-500 bg-red-50 text-red-950";
            }

            return (
              <button
                key={option}
                type="button"
                disabled={finished}
                onClick={() => setSelectedAnswer(index)}
                className={`rounded-xl border p-4 text-left transition ${optionStyle} disabled:cursor-default`}
              >
                <span className="mr-3 font-semibold">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {finished && (
        <div
          className={`rounded-xl p-4 ${
            selectedAnswer === question.correctAnswer
              ? "bg-green-50 text-green-950"
              : "bg-red-50 text-red-950"
          }`}
        >
          <p className="font-medium">
            {selectedAnswer === question.correctAnswer
              ? "Correct!"
              : "Not quite. This question will be repeated."}
          </p>
          <p className="mt-1 text-sm">{question.explanation}</p>
        </div>
      )}

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {retrying
            ? `${failedQuestions.length} failed remaining`
            : `First-attempt score: ${score}/${quiz.questions.length}`}
        </p>

        {!finished ? (
          <Button
            type="button"
            onClick={submitAnswer}
            disabled={selectedAnswer === null}
          >
            Check answer
          </Button>
        ) : (
          <Button type="button" onClick={nextQuestion}>
            {questionIndex < questionIndices.length - 1
              ? "Next question"
              : "Finish round"}
            <ArrowRight className="ml-2 size-4" />
          </Button>
        )}
      </div>
    </section>
  );
}
