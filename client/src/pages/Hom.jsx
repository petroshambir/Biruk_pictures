

import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProtectedImage from "../components/ProtectedImage";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

/* =========================================================
   DEFAULT CONTENT
========================================================= */

const DEFAULT_DESCRIPTIONS = [
  "A carefully preserved moment, created with emotion, atmosphere and timeless visual language.",
  "Natural expressions and quiet details transformed into a story worth remembering.",
  "Every frame carries a feeling, a place and a moment that deserves to live beyond the day.",
  "Real people, real emotion and beautifully observed moments brought together as one visual story.",
  "A cinematic collection created around atmosphere, movement and unforgettable human connection.",
];

const DEFAULT_HEADINGS = [
  "The Story Begins",
  "Moments Between Moments",
  "A Day Worth Remembering",
  "Details With Meaning",
  "Memories That Remain",
];

/* =========================================================
   HELPERS
========================================================= */

const generateSlug = (titleText) => {
  if (!titleText) return "";

  return titleText
    .toLowerCase()
    .replace(/["']/g, "")
    .replace(/&/g, "and")
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
};

const fixImageUrl = (url) => {
  if (!url) return "";

  return url
    .replace(
      "http://localhost:5000",
      "https://biruk-pictures-server.onrender.com"
    )
    .replace(
      "http://localhost:4000",
      "https://biruk-pictures-server.onrender.com"
    );
};

/* =========================================================
   SMALL UI
========================================================= */

function GoldLine() {
  return (
    <span className="block h-px w-12 bg-[#b99658]" />
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

/* =========================================================
   IMAGE
========================================================= */

function EditorialImage({
  src,
  alt = "",
  className = "",
  onClick,
}) {
  if (!src) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative block w-full overflow-hidden bg-[#171612] text-left ${className}`}
      aria-label={`Open ${alt || "image"}`}
    >
      <ProtectedImage
        src={src}
        alt={alt}
        showLogoOnly={true}
        className="
          block
          h-full
          w-full
          object-cover
          object-center
          transition
          duration-1000
          ease-out
          group-hover:scale-[1.035]
        "
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute inset-4 border border-white/15 transition duration-500 group-hover:border-[#b99658]/70" />

      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between opacity-80 transition group-hover:opacity-100">
        <span className="text-[8px] tracking-[0.28em] text-white/65">
          BIRUK PICTURE
        </span>

        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-md transition group-hover:border-[#b99658] group-hover:bg-[#b99658] group-hover:text-black">
          <PlusIcon />
        </span>
      </div>
    </button>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  const [featuredIndex, setFeaturedIndex] = useState(0);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState([]);

  /* =======================================================
     LOAD PROJECTS
  ======================================================= */

  useEffect(() => {
    let mounted = true;

    const loadProjects = async () => {
      try {
        const response = await fetch(
          "https://biruk-pictures-server.onrender.com/api/projects"
        );

        if (!response.ok) {
          throw new Error("Failed to load projects");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Projects response is not an array");
        }

        const processedData = data.map((section) => {
          let descriptions = [];
          let headings = [];

          let mainDesc =
            section.desc ||
            section.description ||
            "";

          if (
            typeof section.description === "string" &&
            section.description.includes("||DESCS||")
          ) {
            const parts =
              section.description.split("||DESCS||");

            mainDesc = parts[0] || "";

            try {
              descriptions = parts[1]
                ? JSON.parse(parts[1])
                : [];
            } catch {
              descriptions = [];
            }

            try {
              headings = parts[2]
                ? JSON.parse(parts[2])
                : [];
            } catch {
              headings = [];
            }
          }

          const images = Array.isArray(section.images)
            ? section.images
                .map(fixImageUrl)
                .filter(Boolean)
            : [];

          return {
            ...section,
            images,
            desc: mainDesc,
            descriptions,
            headings,
          };
        });

        if (mounted) {
          setSections(processedData);
        }
      } catch (error) {
        console.error("Projects loading error:", error);

        if (mounted) {
          setSections([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadProjects();

    return () => {
      mounted = false;
    };
  }, []);

  /* =======================================================
     ALL IMAGES
  ======================================================= */

  const allImages = useMemo(() => {
    return sections.flatMap((section) =>
      Array.isArray(section.images)
        ? section.images
        : []
    );
  }, [sections]);

  const featuredImage =
    allImages[featuredIndex] || allImages[0];

  /* =======================================================
     FEATURED NAVIGATION
  ======================================================= */

  const nextFeatured = () => {
    if (!allImages.length) return;

    setFeaturedIndex(
      (current) =>
        (current + 1) % allImages.length
    );
  };

  const previousFeatured = () => {
    if (!allImages.length) return;

    setFeaturedIndex(
      (current) =>
        (current - 1 + allImages.length) %
        allImages.length
    );
  };

  /* =======================================================
     LIGHTBOX
  ======================================================= */

  const openGallery = (images, startIndex = 0) => {
    if (!Array.isArray(images) || !images.length) {
      return;
    }

    const slides = images
      .filter(Boolean)
      .map((src) => ({
        src,
      }));

    setLightboxSlides(slides);
    setLightboxOpen(true);
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#e9e4d8] text-[#181713]">

      {/* =====================================================
          EXISTING HERO
      ===================================================== */}

      <Hero />

      {/* =====================================================
          BRAND INTRO
      ===================================================== */}

      <section className="relative bg-[#e9e4d8]">

        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[180px_1fr_300px] lg:items-start">

            <div className="flex items-center gap-3">

              <GoldLine />

              <span className="text-[9px] tracking-[0.3em] text-[#766b57]">
                01 / IDENTITY
              </span>

            </div>

            <div>

              <h1 className="max-w-5xl font-serif text-5xl font-light leading-[0.95] sm:text-6xl lg:text-[82px]">
                Stories made to
                <span className="ml-2 italic text-[#a38348]">
                  stay.
                </span>
              </h1>

            </div>

            <div className="border-l border-[#b99658]/40 pl-6">

              <p className="text-sm leading-7 text-[#5f5a4e]">
                BIRUK PICTURE creates cinematic
                photography and films for weddings,
                celebrations and meaningful moments.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURED STORY
      ===================================================== */}

      {featuredImage && (
        <section className="bg-[#d9d2c3]">

          <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-7 lg:px-10 lg:py-8">

            <div className="grid overflow-hidden lg:grid-cols-[1fr_290px]">

              {/* IMAGE */}

              <div className="relative min-h-[58vh] overflow-hidden bg-[#25241f] sm:min-h-[70vh] lg:min-h-[76vh]">

                <ProtectedImage
                  src={featuredImage}
                  alt="Biruk Picture featured story"
                  showLogoOnly={true}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                  "
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/10" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute left-7 top-7 sm:left-10 sm:top-10">

                  <span className="font-mono text-xs tracking-[0.2em] text-white/65">
                    {String(featuredIndex + 1).padStart(2, "0")}
                  </span>

                </div>

                <div className="absolute bottom-7 left-7 right-7 sm:bottom-10 sm:left-10 sm:right-10">

                  <span className="text-[8px] tracking-[0.35em] text-[#d0b070]">
                    BIRUK PICTURE / FEATURED
                  </span>

                  <h2 className="mt-3 max-w-3xl font-serif text-4xl font-light leading-none text-white sm:text-6xl lg:text-7xl">
                    Moments
                    <span className="ml-2 italic text-[#d0b070]">
                      without limits.
                    </span>
                  </h2>

                </div>

              </div>

              {/* SIDE PANEL */}

              <aside className="flex flex-col justify-between bg-[#25241f] p-7 text-white sm:p-9 lg:p-10">

                <div>

                  <span className="text-[8px] tracking-[0.3em] text-white/35">
                    SELECTED WORK
                  </span>

                  <div className="mt-8">

                    <span className="font-serif text-6xl font-light text-[#c6a35e]">
                      {String(
                        featuredIndex + 1
                      ).padStart(2, "0")}
                    </span>

                    <span className="mx-3 text-white/20">
                      /
                    </span>

                    <span className="font-mono text-xs text-white/40">
                      {String(
                        allImages.length
                      ).padStart(2, "0")}
                    </span>

                  </div>

                  <p className="mt-8 text-sm leading-7 text-white/45">
                    A visual collection shaped by
                    atmosphere, emotion and honest
                    human connection.
                  </p>

                </div>

                <div className="mt-12">

                  <div className="mb-8 flex gap-2">

                    <button
                      type="button"
                      onClick={previousFeatured}
                      className="flex h-12 w-12 items-center justify-center border border-white/15 text-white/60 transition hover:border-[#c6a35e] hover:bg-[#c6a35e] hover:text-black"
                      aria-label="Previous image"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={nextFeatured}
                      className="flex h-12 w-12 items-center justify-center border border-white/15 text-white/60 transition hover:border-[#c6a35e] hover:bg-[#c6a35e] hover:text-black"
                      aria-label="Next image"
                    >
                      →
                    </button>

                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      openGallery(allImages)
                    }
                    className="group flex items-center gap-5 border-t border-white/10 pt-6 text-[8px] tracking-[0.3em] text-[#c6a35e]"
                  >
                    OPEN THE COLLECTION

                    <span className="transition group-hover:translate-x-2">
                      <ArrowIcon />
                    </span>

                  </button>

                </div>

              </aside>

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          SERVICES STRIP
      ===================================================== */}

      <section className="border-y border-[#b9af9e] bg-[#f1ede4]">

        <div className="mx-auto grid max-w-[1500px] md:grid-cols-4">

          {[
            ["01", "WEDDINGS", "Cinematic wedding stories"],
            ["02", "PORTRAITS", "Elegant personal imagery"],
            ["03", "EVENTS", "Energy, atmosphere and detail"],
            ["04", "FILMS", "Stories crafted in motion"],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="border-b border-[#c8c0b2] px-6 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:py-10 md:last:border-r-0"
            >

              <span className="font-mono text-[8px] tracking-[0.2em] text-[#a38348]">
                {number}
              </span>

              <h3 className="mt-4 font-serif text-xl font-light">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#777062]">
                {text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* =====================================================
          STORIES
      ===================================================== */}

      <section className="bg-[#ece7dc]">

        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

          <div className="mb-16 flex flex-col justify-between gap-8 border-b border-[#bdb4a4] pb-8 lg:flex-row lg:items-end">

            <div>

              <div className="mb-5 flex items-center gap-3">

                <GoldLine />

                <span className="text-[9px] tracking-[0.3em] text-[#766b57]">
                  02 / STORIES
                </span>

              </div>

              <h2 className="font-serif text-5xl font-light sm:text-6xl lg:text-8xl">
                Recent
                <span className="ml-3 italic text-[#a38348]">
                  work.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-[#6d675c]">
              A curated selection of celebrations,
              portraits and cinematic stories
              created by Biruk Picture.
            </p>

          </div>

          {loading ? (

            <div className="flex min-h-[300px] items-center justify-center border border-[#c8c0b2]">

              <div className="text-center">

                <div className="mx-auto mb-5 h-px w-16 bg-[#b99658]" />

                <span className="text-[8px] tracking-[0.3em] text-[#777062]">
                  LOADING STORIES
                </span>

              </div>

            </div>

          ) : sections.length === 0 ? (

            <div className="flex min-h-[300px] items-center justify-center border border-[#c8c0b2]">

              <span className="text-[8px] tracking-[0.3em] text-[#777062]">
                NO STORIES AVAILABLE
              </span>

            </div>

          ) : (

            <div className="space-y-28">

              {sections.map((section, index) => {

                const images = Array.isArray(section.images)
                  ? section.images
                  : [];

                if (!images.length) return null;

                const title =
                  section.names?.trim() ||
                  section.title ||
                  "Untitled Story";

                const description =
                  section.desc ||
                  section.description ||
                  DEFAULT_DESCRIPTIONS[
                    index %
                      DEFAULT_DESCRIPTIONS.length
                  ];

                const headings =
                  section.headings?.length
                    ? section.headings
                    : DEFAULT_HEADINGS;

                return (

                  <article
                    key={
                      section._id ||
                      `story-${index}`
                    }
                  >

                    {/* STORY HEADER */}

                    <div className="mb-8 grid gap-6 lg:grid-cols-[80px_1fr_auto] lg:items-end">

                      <span className="font-mono text-sm text-[#a38348]">
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      <div>

                        <span className="text-[8px] tracking-[0.3em] text-[#817868]">
                          {section.date ||
                            "FEATURED STORY"}
                        </span>

                        <h3 className="mt-2 font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
                          {title}
                        </h3>

                      </div>

                      <Link
                        to={`/gallery/${section._id}`}
                        className="group flex items-center gap-4 text-[8px] tracking-[0.25em] text-[#a38348]"
                      >
                        VIEW STORY

                        <span className="transition group-hover:translate-x-2">
                          <ArrowIcon />
                        </span>
                      </Link>

                    </div>

                    {/* MAIN IMAGE */}

                    <div className="grid gap-5 lg:grid-cols-[1.55fr_0.45fr]">

                      <EditorialImage
                        src={images[0]}
                        alt={title}
                        onClick={() =>
                          openGallery(images)
                        }
                        className="min-h-[460px] sm:min-h-[600px] lg:min-h-[700px]"
                      />

                      <div className="flex flex-col justify-between bg-[#d8d0c1] p-7 sm:p-9 lg:p-10">

                        <div>

                          <GoldLine />

                          <h4 className="mt-6 max-w-xs font-serif text-3xl font-light leading-tight">
                            {headings[0] ||
                              "The Story Begins"}
                          </h4>

                          <p className="mt-5 text-sm leading-7 text-[#6b6559]">
                            {description}
                          </p>

                        </div>

                        <div className="mt-10">

                          <span className="font-mono text-[8px] tracking-[0.2em] text-[#88795e]">
                            BIRUK PICTURE
                          </span>

                          <div className="mt-3 h-px w-full bg-[#b8ad9b]" />

                        </div>

                      </div>

                    </div>

                    {/* SMALL IMAGES */}

                    {images.length > 1 && (

                      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {images
                          .slice(1, 5)
                          .map((image, imageIndex) => (

                            <div
                              key={`${index}-${imageIndex}`}
                            >

                              <EditorialImage
                                src={image}
                                alt={title}
                                onClick={() =>
                                  openGallery(
                                    images
                                  )
                                }
                                className="h-[330px]"
                              />

                              <div className="mt-4">

                                <span className="font-mono text-[8px] tracking-[0.2em] text-[#a38348]">
                                  FRAME{" "}
                                  {String(
                                    imageIndex + 2
                                  ).padStart(
                                    2,
                                    "0"
                                  )}
                                </span>

                                <p className="mt-2 font-serif text-lg font-light text-[#3d3a34]">
                                  {headings[
                                    imageIndex + 1
                                  ] ||
                                    DEFAULT_HEADINGS[
                                      imageIndex + 1
                                    ]}
                                </p>

                              </div>

                            </div>

                          ))}

                      </div>

                    )}

                  </article>

                );
              })}

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="bg-[#25241f] text-white">

        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <span className="text-[8px] tracking-[0.3em] text-[#c6a35e]">
                03 / OUR PHILOSOPHY
              </span>

            </div>

            <div>

              <h2 className="max-w-6xl font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-7xl">

                We don't simply
                <span className="ml-2 italic text-[#c6a35e]">
                  capture
                </span>

                <br />

                what happens.

              </h2>

              <p className="mt-8 max-w-2xl text-sm leading-8 text-white/45 sm:text-base">
                We look for the atmosphere between
                the moments. The expression before
                the smile. The movement, silence,
                light and emotion that make your
                story uniquely yours.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-3">

                {[
                  "EMOTION",
                  "LIGHT",
                  "STORY",
                ].map((item, index) => (

                  <div
                    key={item}
                    className="border-t border-white/15 pt-5"
                  >

                    <span className="font-mono text-[8px] text-[#c6a35e]">
                      0{index + 1}
                    </span>

                    <p className="mt-3 text-[9px] tracking-[0.25em] text-white/45">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#d9d2c3]">

        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <span className="text-[8px] tracking-[0.3em] text-[#796e5d]">
                04 / YOUR STORY
              </span>

              <h2 className="mt-6 max-w-5xl font-serif text-5xl font-light leading-none sm:text-6xl lg:text-8xl">

                Your moment.
                <br />

                <span className="italic text-[#a38348]">
                  Your story.
                </span>

              </h2>

            </div>

            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-8 border border-[#9d7c42] bg-[#25241f] px-8 py-6 text-[8px] tracking-[0.3em] text-[#d7b873] transition duration-300 hover:bg-[#a38348] hover:text-black"
            >

              START A CONVERSATION

              <span className="transition group-hover:translate-x-2">
                <ArrowIcon />
              </span>

            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
      />

      {/* =====================================================
          EXISTING FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
}

export default Home;