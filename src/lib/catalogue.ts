// Every product shown on the /store catalogue page.
//
// To add a product: copy one entry, change the fields, and drop its cover
// image in public/store/ (named <id>.webp). To add an Amazon paperback to a
// product, fill in `amazonUrl` and the "Paperback on Amazon" button appears.

import { BYC_BOOK1_AMAZON_URL, BYC_BOOK1_TPT_URL, FOTA_AMAZON_URL, FOTA_TPT_URL } from "@/lib/buildYourCase";
import {
  ADVENT_AMAZON_URL,
  ADVENT_TPT_URL,
  CURSIVE_AMAZON_URL,
  CURSIVE_TPT_URL,
  ROMANS_TPT_URL,
} from "@/lib/products";

/** Miss Pam's whole TPT store. */
export const TPT_STORE_URL = "https://www.teacherspayteachers.com/Store/Miss-Pam-Teaches";

/**
 * Miss Pam's Amazon author page (all paperbacks in one place).
 * Leave empty until you have it; while empty, the "Shop all on Amazon" button is hidden.
 */
export const AMAZON_STORE_URL = "";

const TPT = "https://www.teacherspayteachers.com/Product/";

export type CategoryId =
  | "handwriting"
  | "argument"
  | "creative"
  | "novels"
  | "math"
  | "free";

export interface Category {
  id: CategoryId;
  title: string;
  blurb: string;
}

export interface Product {
  /** TPT product number; also the cover image name in public/store/. */
  id: string;
  title: string;
  category: CategoryId;
  grades: string;
  /** TPT price, e.g. "$12.99" or "Free". */
  price: string;
  /** Page count, from the TPT listing's Highlights. */
  pages?: number;
  /** True when the TPT listing says an answer key is included. */
  answerKey?: boolean;
  /** Teaching duration from the TPT listing, e.g. "30 minutes". */
  duration?: string;
  /** Original price when on sale, e.g. "$11.00". */
  compareAt?: string;
  blurb: string;
  details?: string[];
  tptUrl: string;
  amazonUrl?: string;
  /** Amazon paperback price, shown on the Amazon button, e.g. "$17.99". */
  amazonPrice?: string;
  /** Other Amazon editions, shown under the Amazon button. */
  amazonNote?: string;
  badge?: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "handwriting",
    title: "Cursive Handwriting & Coloring Books",
    blurb:
      "Trace it, write it, color it. Printable PDFs on TPT, and paperbacks on Amazon for families who would rather not print.",
  },
  {
    id: "argument",
    title: "Argument Writing & Debate",
    blurb:
      "Claim, reason, evidence, counterclaim. Students learn to build an argument one part at a time.",
  },
  {
    id: "creative",
    title: "Creative Writing",
    blurb:
      "Story-driven prompts and multi-week adventures that teach real craft: suspense, dialogue, worldbuilding and more.",
  },
  {
    id: "novels",
    title: "Novel Studies & Reading",
    blurb:
      "No-prep study guides for classic literature, with vocabulary, comprehension and writing that asks students to think.",
  },
  {
    id: "math",
    title: "Math & SAT Prep",
    blurb:
      "Step-by-step practice from pre-algebra to SAT-level questions, with full answer keys.",
  },
  {
    id: "free",
    title: "Free Resources",
    blurb: "Try Miss Pam's materials before you buy. Download, print and go.",
  },
];

export const PRODUCTS: Product[] = [
  // ── Handwriting & coloring ────────────────────────────────────────────
  {
    id: "18369808",
    title: "O Come, Let Us Adore Him: Christmas Advent Cursive Handwriting & Coloring Book",
    category: "handwriting",
    grades: "Grades 5–12 & adults",
    price: "$7.00",
    pages: 102,
    duration: "1 month",
    badge: "Christmas pick",
    blurb:
      "Count down to Christmas one verse at a time. 25 days through Luke 2, December 1 to Christmas morning: trace and write each verse in cursive, color vintage frames and scenes, and reflect.",
    details: ["25 daily verses from Luke 2", "Cursive tracing + copywork", "Vintage coloring pages"],
    tptUrl: ADVENT_TPT_URL,
    amazonUrl: ADVENT_AMAZON_URL,
    amazonPrice: "$9.99",
  },
  {
    id: "18369580",
    title: "Cursive Handwriting Workbook for Middle School",
    category: "handwriting",
    grades: "Grades 6–8",
    price: "$12.99",
    pages: 204,
    duration: "1 year",
    blurb:
      "Beautiful cursive and a bigger vocabulary in one 204-page workbook. Middle schoolers practice with real words that matter: 300 academic vocabulary words, the 50 states and the months.",
    details: ["Letters, numbers, then 30 vocabulary units", "Trace it, write it, learn it"],
    tptUrl: CURSIVE_TPT_URL,
    amazonUrl: CURSIVE_AMAZON_URL,
    amazonPrice: "$17.99",
  },
  {
    id: "18376942",
    title: "Be Ye Transformed: A Handwriting & Coloring Book for Teens and Adults",
    category: "handwriting",
    grades: "Grades 7–12 & adults",
    price: "$8.00",
    pages: 136,
    blurb:
      "A 35-day scripture journey through Romans 12 and 13 (KJV). Read a verse, trace it in dotted cursive, write it on your own, color rose-framed pages and reflect on a question.",
    details: ["4 pages per day", "Great for Bible study & quiet time"],
    tptUrl: ROMANS_TPT_URL,
  },

  // ── Argument writing ──────────────────────────────────────────────────
  {
    id: "17404401",
    title: "Build Your Case: Argument Writing & Debate Prep",
    category: "argument",
    grades: "Grades 5–7",
    price: "$15.99",
    pages: 89,
    answerKey: true,
    duration: "2 months",
    blurb:
      "An 8-week program that teaches the six parts of a strong argument. Support fades week by week until students plan and write a full argument on their own. Includes a Parent & Teacher Guide.",
    details: ["8 weeks", "Claim, evidence, counterclaim & response", "Parent & Teacher Guide"],
    tptUrl: BYC_BOOK1_TPT_URL,
    amazonUrl: BYC_BOOK1_AMAZON_URL,
    amazonPrice: "$19.79",
    amazonNote: "Also on Kindle ($11.99) and in hardcover ($29.99)",
  },
  {
    id: "18249113",
    title: "From Opinions to Arguments: Argument Writing Mini Unit",
    category: "argument",
    grades: "Grades 6–8",
    price: "$3.50",
    pages: 18,
    answerKey: true,
    duration: "3 hours",
    blurb:
      "Three hands-on lessons that turn an opinion into a clear claim, supported by a reason and explained in the student's own words. The perfect starting point before Build Your Case.",
    details: ["3 lessons, 30–45 minutes each", "Claim, reason & explanation"],
    tptUrl: FOTA_TPT_URL,
    amazonUrl: FOTA_AMAZON_URL,
    amazonPrice: "$9.99",
    amazonNote: "Also on Kindle ($5.99)",
  },

  // ── Creative writing ──────────────────────────────────────────────────
  {
    id: "17494956",
    title: "The Compass and the Echo: 11-Week Fantasy Creative Writing Adventure",
    category: "creative",
    grades: "Grades 6–9",
    price: "$15.00",
    pages: 65,
    blurb:
      "Your student becomes a Realmwalker: designing an avatar, building a fantasy world, meeting a Guide and writing a complete original story, one skill at a time over eleven weeks.",
    details: ["11 weeks of story-driven lessons", "Ends with a complete original story"],
    tptUrl: `${TPT}The-Compass-and-the-Echo-11-Week-Fantasy-Creative-Writing-Adventure-grade-6-9-17494956`,
  },
  {
    id: "18184645",
    title: "Nova & Pip: Ninety Seconds to Dock (Neon Vale Sci-Fi Prompt)",
    category: "creative",
    grades: "Grades 6–12",
    price: "$3.00",
    pages: 8,
    duration: "2 days",
    blurb:
      "A damaged passenger ship, a child who needs help and an engine running out of time. Students write dialogue alongside Nova, a super-intelligent robot, and Pip, her robot dog.",
    tptUrl: `${TPT}Sci-Fi-Creative-Writing-Prompt-Dialogue-Nova-Pip-Ninety-Seconds-to-Dock-18184645`,
  },
  {
    id: "17826567",
    title: "Window on Floor 209: Suspense (Neon Vale Sci-Fi Prompt)",
    category: "creative",
    grades: "Grades 6–12",
    price: "$2.00",
    pages: 5,
    duration: "30 minutes",
    blurb:
      "The building across the street has been empty for years. Tonight, someone in its window looks exactly like you. Clear guidance for building suspense.",
    tptUrl: `${TPT}Sci-Fi-Creative-Writing-Prompt-Window-on-Floor-209-Suspense-17826567`,
  },
  {
    id: "17826601",
    title: "The Aerocab That Wouldn't Stop: Rising Action (Neon Vale Sci-Fi Prompt)",
    category: "creative",
    grades: "Grades 6–12",
    price: "$2.00",
    pages: 5,
    duration: "30 minutes",
    blurb:
      "Your flying taxi won't stop and your parcel starts vibrating. Students learn to build a story where each attempt causes the next problem.",
    tptUrl: `${TPT}Sci-Fi-Creative-Writing-Prompt-The-Aerocab-That-Wouldnt-Stop-Rising-Action-17826601`,
  },
  {
    id: "17826629",
    title: "The Girl on the Billboard: Dialogue (Neon Vale Sci-Fi Prompt)",
    category: "creative",
    grades: "Grades 6–12",
    price: "$2.00",
    pages: 5,
    duration: "30 minutes",
    blurb:
      "The girl on the billboard stops advertising moon holidays and speaks directly to you. Students turn a strange encounter into a conversation that changes the story.",
    tptUrl: `${TPT}Sci-Fi-Creative-Writing-Prompt-The-Girl-on-the-Billboard-Dialogue-17826629`,
  },
  {
    id: "17826660",
    title: "The Photon Viper Mechanic: Foreshadowing (Neon Vale Sci-Fi Prompt)",
    category: "creative",
    grades: "Grades 6–12",
    price: "$2.00",
    pages: 5,
    duration: "30 minutes",
    blurb:
      "Inside a broken engine, a mechanic finds a tiny version of the whole city. Students plant clues and write a mystery solved through evidence.",
    tptUrl: `${TPT}Sci-Fi-Creative-Writing-Prompt-The-Photon-Viper-Mechanic-Foreshadowing-17826660`,
  },
  {
    id: "17826698",
    title: "Galactic Ramen at Midnight: Characterization (Neon Vale Sci-Fi Prompt)",
    category: "creative",
    grades: "Grades 6–12",
    price: "$2.00",
    pages: 5,
    duration: "30 minutes",
    blurb:
      "One bowl of ramen, two strangers and three knocks from beneath the floor. Students reveal who their characters are through what they do.",
    tptUrl: `${TPT}Sci-Fi-Creative-Writing-Prompt-Galactic-Ramen-at-Midnight-Characterization-17826698`,
  },
  {
    id: "17826738",
    title: "The Street That Disappeared: Worldbuilding (Neon Vale Sci-Fi Prompt)",
    category: "creative",
    grades: "Grades 6–12",
    price: "$2.00",
    pages: 5,
    duration: "30 minutes",
    blurb:
      "The delivery address still exists. The street does not. Students invent something impossible and make its rules believable.",
    tptUrl: `${TPT}Sci-Fi-Creative-Writing-Prompt-The-Street-That-Disappeared-Worldbuilding-17826738`,
  },
  {
    id: "17826760",
    title: "The Last Light in Neon Vale: Climax (Neon Vale Sci-Fi Prompt)",
    category: "creative",
    grades: "Grades 6–12",
    price: "$2.00",
    pages: 5,
    duration: "30 minutes",
    blurb:
      "The city goes dark and one backup system remains. Students write a climax where the character's choice really matters.",
    tptUrl: `${TPT}Sci-Fi-Creative-Writing-Prompt-The-Last-Light-in-Neon-Vale-Climax-17826760`,
  },
  {
    id: "16826460",
    title: "Story Science: The Cell City",
    category: "creative",
    grades: "Grade 7",
    price: "$5.25",
    pages: 16,
    blurb:
      "Science meets storytelling. Students become the Mayor of Cell City, where every organelle works like a city department, and write their way through a power crisis.",
    details: ["Life science: cell parts & functions", "Creative writing assignment"],
    tptUrl: `${TPT}Story-Science-The-Cell-City-7th-Grade-Life-Science-Cell-Parts-Functions-16826460`,
  },

  // ── Novel studies & reading ───────────────────────────────────────────
  {
    id: "18376377",
    title: "The Fellowship of the Ring Chapters 1–2 Study Guide Bundle",
    category: "novels",
    grades: "Grades 6–12 & adults",
    price: "$9.00",
    pages: 40,
    answerKey: true,
    duration: "1 month",
    compareAt: "$11.00",
    badge: "Save $2",
    blurb:
      "Two complete, no-prep guides in one bundle: from Bilbo's birthday party to the night Frodo learns the true history of his ring. Vocabulary, puzzles, maps, questions and an essay.",
        tptUrl: `${TPT}Fellowship-of-the-Ring-Chapters-12-Study-Guide-Bundle-Novel-Study-18376377`,
  },
  {
    id: "16000013",
    title: "The Fellowship of the Ring Chapter 1 Study Guide",
    category: "novels",
    grades: "Grades 6–12 & adults",
    price: "$5.50",
    pages: 20,
    answerKey: true,
    duration: "1 week",
    blurb:
      "Bring \"A Long-expected Party\" to life with a 20-page guide to the characters, locations and vocabulary of Chapter 1.",
    tptUrl: `${TPT}Fellowship-of-the-Ring-Chapter-1-Study-Guide-Characters-Locations-Vocabulary-16000013`,
  },
  {
    id: "16677826",
    title: "The Fellowship of the Ring Chapter 2 Study Guide",
    category: "novels",
    grades: "Grades 6–12 & adults",
    price: "$5.50",
    pages: 20,
    answerKey: true,
    duration: "1 week",
    blurb:
      "\"The Shadow of the Past\": a quiet evening at Bag End becomes the moment everything changes. Vocabulary, characters and questions for Chapter 2.",
    tptUrl: `${TPT}Fellowship-of-the-Ring-Chapter-2-Study-Guide-Vocabulary-Characters-Questions-16677826`,
  },
  {
    id: "16475515",
    title: "Tuck Everlasting 8-Week Novel Study",
    category: "novels",
    grades: "Grades 4–9",
    price: "$9.59",
    pages: 21,
    duration: "2 months",
    blurb:
      "Most novel studies ask what happened. This one asks what it means: literary devices, philosophical themes, Socratic discussion and differentiated writing prompts every week.",
    details: ["8 weeks", "Literary analysis + Socratic seminar"],
    tptUrl: `${TPT}Tuck-Everlasting-8-Week-Novel-Study-Literary-Analysis-Writing-Promp-Socratic-16475515`,
  },
  {
    id: "16669588",
    title: "Sarah, Plain and Tall Study Guide & Novel Unit",
    category: "novels",
    grades: "Grades 3–5",
    price: "$5.50",
    pages: 14,
    answerKey: true,
    duration: "2 weeks",
    blurb:
      "A complete guide that goes beyond comprehension worksheets and teaches young readers to think, analyze and write like real readers.",
    tptUrl: `${TPT}Sarah-Plain-and-Tall-Study-Guide-Novel-Unit-Grades-3-5-Comprehension-Vocabul-16669588`,
  },
  {
    id: "17601403",
    title: "Moby-Dick Chapters 13–15 Reading Guide",
    category: "novels",
    grades: "Grades 9–12",
    price: "$2.25",
    pages: 4,
    blurb:
      "A 4-page active-reading tracker for \"Wheelbarrow,\" \"Nantucket\" and \"Chowder,\" with vocabulary, a scene overview and a coloring page.",
    tptUrl: `${TPT}Moby-Dick-Chapters-13-15-Reading-Guide-Vocabulary-Coloring-Page-Comprehend-17601403`,
  },
  {
    id: "16678177",
    title: "Reading Comprehension Prompts for Any Book: Character, Plot & Theme",
    category: "novels",
    grades: "Grades 6–8",
    price: "$2.00",
    pages: 5,
    blurb:
      "20 guided literary analysis prompts that work with any middle school novel, with writing hooks for fantasy, mystery, historical and realistic fiction.",
    tptUrl: `${TPT}Reading-Comprehension-Multi-Book-Character-Plot-Theme-Prompts-Grades-6-7-8-16678177`,
  },
  {
    id: "16008513",
    title: "Tornadoes, Hurricanes & Natural Disasters: Nonfiction Comprehension",
    category: "novels",
    grades: "Grades 4–6",
    price: "$3.00",
    pages: 16,
    answerKey: true,
    blurb:
      "High-interest nonfiction passages that pull in even reluctant readers while building real comprehension skills.",
    tptUrl: `${TPT}Tornadoes-Hurricanes-Natural-Disasters-Nonfiction-Comprehension-3-4-5-Grades-16008513`,
  },

  // ── Math & SAT ────────────────────────────────────────────────────────
  {
    id: "18270400",
    title: "SAT Math Diagnostic Level 2: Real SAT-Level Questions",
    category: "math",
    grades: "Grades 7–10",
    price: "$3.00",
    pages: 8,
    answerKey: true,
    duration: "90 minutes",
    blurb:
      "16 medium and hard questions in the style of the digital SAT. The answer key names the trap behind every wrong choice so students know exactly what to watch for.",
    details: ["All 4 SAT Math domains", "Answer key with explanations"],
    tptUrl: `${TPT}SAT-Math-Diagnostic-Level-2-Real-SAT-Level-Questions-How-to-Improve-18270400`,
  },
  {
    id: "17098911",
    title: "Adding vs. Multiplying Terms: Combining Like Terms & Exponent Rules",
    category: "math",
    grades: "Grades 6–10",
    price: "$4.00",
    pages: 36,
    answerKey: true,
    blurb:
      "A 34-page bundle on the skill that trips students up most: knowing when to add and when to multiply. Like terms, product of powers and power of a power.",
    details: ["Pre-Algebra & Algebra 1"],
    tptUrl: `${TPT}Algebra-1-Pre-AlgebraCombining-Like-Terms-Product-of-Powers-Power-of-a-Power-17098911`,
  },
  {
    id: "17557802",
    title: "Regular Polygon Interior & Exterior Angles Worksheets",
    category: "math",
    grades: "Grades 7–12",
    price: "$1.50",
    blurb:
      "Scaffolded, step-by-step practice for finding interior angle sums, one interior angle and one exterior angle in regular polygons.",
    tptUrl: `${TPT}Regular-Polygon-Interior-and-Exterior-Angles-Worksheets-3-Step-Practice-17557802`,
  },
  {
    id: "17100862",
    title: "Simplify & Distribute: Combining Like Terms & the Distributive Property",
    category: "math",
    grades: "Grades 6–10",
    price: "$1.00",
    answerKey: true,
    blurb:
      "12 no-prep problems in 3 parts, from combining like terms to distributing and combining in the same problem. Full answer key.",
    tptUrl: `${TPT}Simplify-Distribute-Combining-Like-Terms-Distributive-Property-No-Prep-17100862`,
  },

  // ── Free ──────────────────────────────────────────────────────────────
  {
    id: "16752710",
    title: "Free SAT Math Diagnostic Level 1: Foundations Check",
    category: "free",
    grades: "Grades 8–12",
    price: "Free",
    pages: 12,
    answerKey: true,
    duration: "90 minutes",
    blurb:
      "40 questions that check the basic skills every SAT Math question is built on, plus a letter to parents on how the score actually goes up.",
    tptUrl: `${TPT}Free-SAT-Math-Diagnostic-Level-1-Foundations-Check-Find-What-to-Improve-16752710`,
  },
  {
    id: "16465539",
    title: "Free 5 Hard SAT Math Problems: Module 2 Practice",
    category: "free",
    grades: "Grades 7–12",
    price: "Free",
    pages: 13,
    answerKey: true,
    duration: "2 hours",
    blurb:
      "The kind of problems that separate a 650 from a 750, each solved step by step the way a tutor actually teaches it.",
    tptUrl: `${TPT}Free-5-Hard-SAT-Math-Problems-Module-2-Practice-Step-by-Step-Solutions-16465539`,
  },
  {
    id: "18066003",
    title: "Free Systems of Equations Worksheets: Elimination & Graphing",
    category: "free",
    grades: "Grades 8–10",
    price: "Free",
    pages: 16,
    answerKey: true,
    duration: "2 days",
    blurb:
      "4 step-by-step worksheets on solving by elimination and by graphing, with a full answer key and every graph drawn.",
    tptUrl: `${TPT}FREE-Systems-of-Equations-Worksheets-Elimination-Graphing-Answer-Key-18066003`,
  },
  {
    id: "17844917",
    title: "Free Creative Writing Activity: The Town Inside the Mountain",
    category: "free",
    grades: "Grades 6–8",
    price: "Free",
    pages: 5,
    duration: "40 minutes",
    blurb:
      "An earthquake, a landslide and a switched-off phone that rings. A complete mystery and fantasy story lesson.",
    tptUrl: `${TPT}FREE-Creative-Writing-Activity-Mystery-Fantasy-Grades-68-17844917`,
  },
  {
    id: "17681810",
    title: "Free Fantasy Mystery Story Planner: The Forest Moved Last Night",
    category: "free",
    grades: "Grades 6–9",
    price: "Free",
    pages: 9,
    duration: "3 days",
    blurb:
      "A graphic organizer for students who freeze at a blank page: structured choices first, then room to invent.",
    tptUrl: `${TPT}FREE-Fantasy-Mystery-Story-Planner-Graphic-Organizer-Writing-Prompt-Grades-6-9-17681810`,
  },
  {
    id: "17494905",
    title: "The Compass and the Echo: Week 1 Free Sample",
    category: "free",
    grades: "Grades 6–9",
    price: "Free",
    pages: 25,
    duration: "30 minutes",
    blurb:
      "Try the first week of the fantasy writing adventure: imagine a new world and write a story opening full of sensory detail.",
    tptUrl: `${TPT}The-Compass-and-the-Echo-Week-1-FREE-Fantasy-Creative-Writing-Prompt-Grades-6-9-17494905`,
  },
  {
    id: "16059611",
    title: "Neon Vale Free Sci-Fi Writing Sampler",
    category: "free",
    grades: "Grades 6–12",
    price: "Free",
    pages: 7,
    duration: "3 days",
    blurb:
      "A seven-page sampler with the original city artwork, sci-fi writing lessons and a preview of all seven Story Architect adventures.",
    tptUrl: `${TPT}Neon-Vale-FREE-Sci-Fi-Creative-Writing-Prompts-Story-Architect-Sampler-16059611`,
  },
  {
    id: "16668669",
    title: "Sarah, Plain and Tall: Free Vocabulary & Writing Starter Guide",
    category: "free",
    grades: "Grades 3–6",
    price: "Free",
    pages: 7,
    blurb:
      "A ready-to-use vocabulary list, a quick word game and one in-depth writing prompt for the reader who is ready to think.",
    tptUrl: `${TPT}Sarah-Plain-and-Tall-Free-Vocabulary-Writing-Starter-Guide-Grades-35-16668669`,
  },
  {
    id: "15964352",
    title: "Data Detectives: 7th Grade Statistics Standards Overview",
    category: "free",
    grades: "Grade 7",
    price: "Free",
    pages: 7,
    blurb:
      "A teacher and homeschool reference aligning statistics and probability to TEKS, Common Core, California and Florida B.E.S.T.",
    tptUrl: `${TPT}Standards-Overview-Data-Detective-7th-Statistics-Probability-Data-Bundle-15964352`,
  },
];
