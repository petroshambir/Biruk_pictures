
// import React, { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";

// import Hero from "../components/Hero";
// import Footer from "../components/Footer";
// import ProtectedImage from "../components/ProtectedImage";

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// /* =========================================================
//    DEFAULT CONTENT
// ========================================================= */

// const DEFAULT_DESCRIPTIONS = [
//   "01. The Beginning of Forever — Our First Look",
//   "02. A Tender Moment Caught in Time",
//   "03. Walking Hand in Hand Towards Tomorrow",
//   "04. Joy and Laughter Shared with Loved Ones",
//   "05. The Grand Celebration and Vows",
//   "06. Unforgettable Emotions of the Day",
//   "07. Elegance in Every Single Detail",
//   "08. Dancing Under the Evening Lights",
//   "09. Sweet Whispers and Quiet Glances",
//   "10. Cherished Memories to Last a Lifetime",
//   "11. A Magical Evening Full of Grace",
//   "12. Smiles That Brighten the Whole World",
//   "13. Embracing the Warmth of Family",
//   "14. Looking Into Each Other's Eyes",
//   "15. The Perfect Ending to a Perfect Day",
// ];

// const DEFAULT_HEADINGS = [
//   "The Story Begins",
//   "Tender Highlight",
//   "Walking Together",
//   "Shared Laughter",
//   "Featured Memory",
//   "Pure Emotion",
//   "Elegant Detail",
//   "Evening Magic",
//   "Quiet Glance",
//   "Cherished Moment",
//   "Graceful Evening",
//   "Bright Smile",
//   "Family Warmth",
//   "Deep Connection",
//   "Grand Finale",
// ];

// /* =========================================================
//    HELPERS
// ========================================================= */

// const generateSlug = (titleText) => {
//   if (!titleText) return "";

//   return titleText
//     .toLowerCase()
//     .replace(/["']/g, "")
//     .replace(/&/g, "and")
//     .trim()
//     .replace(/[^\w\s-]/g, "")
//     .replace(/\s+/g, "-");
// };

// const fixImageUrl = (url) => {
//   if (!url) return "";

//   return url
//     .replace(
//       "http://localhost:5000",
//       "https://habesha-film-production-server.onrender.com"
//     )
//     .replace(
//       "http://localhost:4000",
//       "https://habesha-film-production-server.onrender.com"
//     );
// };

// /* =========================================================
//    IMAGE FRAME
// ========================================================= */

// function ImageFrame({
//   src,
//   alt = "",
//   className = "",
//   children,
// }) {
//   if (!src) return null;

//   return (
//     <div
//       className={`
//         relative flex h-full w-full items-center justify-center
//         overflow-hidden bg-[#0b0b0b]
//         ${className}
//       `}
//     >
//       <ProtectedImage
//         src={src}
//         alt={alt}
//         className="
//           block
//           h-auto
//           w-auto
//           max-h-full
//           max-w-full
//           object-contain
//           object-center
//         "
//         showLogoOnly={true}
//       />

//       <div className="pointer-events-none absolute inset-3 border border-white/[0.12] sm:inset-4" />

//       {children}
//     </div>
//   );
// }

// /* =========================================================
//    HOME
// ========================================================= */

// function Home() {
//   const [sections, setSections] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [open, setOpen] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);

//   const [featured, setFeatured] = useState(0);

//   /* =======================================================
//      LOAD PROJECTS
//   ======================================================= */

//   useEffect(() => {
//     let mounted = true;

//     const loadProjects = async () => {
//       try {
//         const response = await fetch(
//           "https://habesha-film-production-server.onrender.com/api/projects"
//         );

//         if (!response.ok) {
//           throw new Error("Failed to load projects");
//         }

//         const data = await response.json();

//         if (!Array.isArray(data)) {
//           throw new Error("Projects response is not an array");
//         }

//         const processedData = data.map((section) => {
//           let parsedDescriptions = [];
//           let parsedHeadings = [];

//           let mainDesc =
//             section.desc ||
//             section.description ||
//             "";

//           if (
//             typeof section.description === "string" &&
//             section.description.includes("||DESCS||")
//           ) {
//             const parts = section.description.split("||DESCS||");

//             mainDesc = parts[0] || "";

//             try {
//               parsedDescriptions = parts[1]
//                 ? JSON.parse(parts[1])
//                 : [];
//             } catch {
//               parsedDescriptions = [];
//             }

//             try {
//               parsedHeadings = parts[2]
//                 ? JSON.parse(parts[2])
//                 : [];
//             } catch {
//               parsedHeadings = [];
//             }
//           }

//           const fixedImages = Array.isArray(section.images)
//             ? section.images
//                 .map(fixImageUrl)
//                 .filter(Boolean)
//             : [];

//           return {
//             ...section,
//             images: fixedImages,
//             desc: mainDesc,
//             descriptions: parsedDescriptions,
//             headings: parsedHeadings,
//           };
//         });

//         if (mounted) {
//           setSections(processedData);
//         }
//       } catch (error) {
//         console.error("Projects loading error:", error);

//         if (mounted) {
//           setSections([]);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     loadProjects();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   /* =======================================================
//      ALL IMAGES
//   ======================================================= */

//   const allImages = useMemo(() => {
//     return sections.flatMap((section) =>
//       Array.isArray(section.images)
//         ? section.images
//         : []
//     );
//   }, [sections]);

//   /* =======================================================
//      FEATURED IMAGE
//   ======================================================= */

//   useEffect(() => {
//     if (!allImages.length) {
//       setFeatured(0);
//       return;
//     }

//     setFeatured((current) =>
//       current >= allImages.length ? 0 : current
//     );
//   }, [allImages.length]);

//   const featuredImage =
//     allImages[featured] || allImages[0];

//   const nextFeatured = () => {
//     if (!allImages.length) return;

//     setFeatured(
//       (current) =>
//         (current + 1) % allImages.length
//     );
//   };

//   const previousFeatured = () => {
//     if (!allImages.length) return;

//     setFeatured(
//       (current) =>
//         (current - 1 + allImages.length) %
//         allImages.length
//     );
//   };

//   /* =======================================================
//      LIGHTBOX
//   ======================================================= */

//   const openGallery = (images) => {
//     if (!Array.isArray(images) || !images.length) {
//       return;
//     }

//     const slides = images
//       .filter(Boolean)
//       .map((src) => ({ src }));

//     if (!slides.length) return;

//     setCurrentImages(slides);
//     setOpen(true);
//   };

//   /* =======================================================
//      RENDER
//   ======================================================= */

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#070707] text-white">

//       {/* HERO */}

//       <Hero />

//       {/* =====================================================
//           CINEMATIC FEATURE
//       ===================================================== */}

//       {featuredImage && (
//         <section className="relative border-b border-white/[0.08] bg-[#080808]">

//           <div className="mx-auto w-full max-w-[1600px] px-3 py-4 sm:px-6 sm:py-5 lg:px-10">

//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 border border-white/[0.08]
//                 bg-[#0b0b0b]
//                 lg:grid
//                 lg:min-h-[720px]
//                 lg:grid-cols-[1fr_390px]
//               "
//             >

//               {/* =================================================
//                   IMAGE SIDE
//               ================================================= */}

//               <div
//                 className="
//                   relative
//                   order-1
//                   flex
//                   min-h-[360px]
//                   w-full
//                   items-center
//                   justify-center
//                   overflow-hidden
//                   bg-[#090909]
//                   sm:min-h-[500px]
//                   lg:min-h-[720px]
//                 "
//               >

//                 <ProtectedImage
//                   src={featuredImage}
//                   alt="Featured film production"
//                   className="
//                     block
//                     h-auto
//                     w-auto
//                     max-h-full
//                     max-w-full
//                     object-contain
//                     object-center
//                   "
//                   showLogoOnly={true}
//                 />

//                 {/* IMAGE OVERLAYS */}

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/35" />

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

//                 <div className="pointer-events-none absolute inset-3 border border-white/[0.12] sm:inset-6 lg:inset-9" />

//                 {/* IMAGE NUMBER */}

//                 <div className="absolute left-5 top-5 z-20 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
//                   <span className="font-serif text-4xl font-light text-white/20 sm:text-6xl lg:text-7xl">
//                     {String(featured + 1).padStart(2, "0")}
//                   </span>
//                 </div>

//               </div>

//               {/* =================================================
//                   MOBILE CONTROLS

//                   These are BELOW the IMAGE on mobile.
//                   On desktop they remain in the TEXT SIDE.
//               ================================================= */}

//               <div
//                 className="
//                   order-2
//                   flex
//                   items-center
//                   justify-between
//                   border-t
//                   border-white/[0.08]
//                   bg-[#090909]
//                   px-5
//                   py-4
//                   lg:hidden
//                 "
//               >

//                 <span className="text-[8px] tracking-[0.3em] text-white/30">
//                   FRAME {String(featured + 1).padStart(2, "0")} /{" "}
//                   {String(allImages.length).padStart(2, "0")}
//                 </span>

//                 <div className="flex gap-2">

//                   <button
//                     type="button"
//                     onClick={previousFeatured}
//                     aria-label="Previous image"
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       border
//                       border-white/20
//                       text-lg
//                       text-white/70
//                       transition
//                       hover:border-[#d6b36a]
//                       hover:bg-[#d6b36a]
//                       hover:text-black
//                     "
//                   >
//                     ←
//                   </button>

//                   <button
//                     type="button"
//                     onClick={nextFeatured}
//                     aria-label="Next image"
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       border
//                       border-white/20
//                       text-lg
//                       text-white/70
//                       transition
//                       hover:border-[#d6b36a]
//                       hover:bg-[#d6b36a]
//                       hover:text-black
//                     "
//                   >
//                     →
//                   </button>

//                 </div>

//               </div>

//               {/* =================================================
//                   TEXT SIDE

//                   MOBILE:
//                   BELOW IMAGE + MOBILE CONTROLS

//                   DESKTOP:
//                   RIGHT SIDE
//               ================================================= */}

//               <div
//                 className="
//                   order-3
//                   relative
//                   flex
//                   min-h-[420px]
//                   flex-col
//                   justify-between
//                   border-t
//                   border-white/[0.08]
//                   bg-[#0a0a0a]
//                   p-6
//                   sm:p-10
//                   lg:order-2
//                   lg:min-h-[720px]
//                   lg:border-l
//                   lg:border-t-0
//                   lg:p-12
//                 "
//               >

//                 <div>

//                   {/* BRAND */}

//                   <div className="mb-10 flex items-center gap-3 sm:mb-12">

//                     <span className="h-px w-8 bg-[#d6b36a] sm:w-10" />

//                     <span className="text-[8px] tracking-[0.3em] text-[#d6b36a] sm:text-[9px]">
//                       YOSIEAL FILM PRODUCTION
//                     </span>

//                   </div>

//                   {/* CATEGORY */}

//                   <p className="text-[8px] uppercase tracking-[0.3em] text-white/35 sm:text-[9px] sm:tracking-[0.35em]">
//                     Wedding • Events • Cinematic
//                   </p>

//                   {/* MAIN TITLE */}

//                   <h1
//                     className="
//                       mt-5
//                       font-serif
//                       text-[42px]
//                       font-light
//                       leading-[0.95]
//                       sm:text-6xl
//                       lg:text-7xl
//                     "
//                   >
//                     Stories

//                     <span className="block italic text-[#d6b36a]">
//                       Worth
//                     </span>

//                     Remembering.
//                   </h1>

//                   <div className="mt-7 h-px w-16 bg-[#d6b36a]/60 sm:mt-8 sm:w-20" />

//                   <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
//                     We transform real emotions,
//                     beautiful celebrations and
//                     unforgettable moments into
//                     cinematic visual stories.
//                   </p>

//                   {/* MOBILE VIEW GALLERY */}

//                   <button
//                     type="button"
//                     onClick={() => openGallery(allImages)}
//                     className="
//                       mt-8
//                       border
//                       border-white/20
//                       bg-black/20
//                       px-4
//                       py-3
//                       text-[8px]
//                       tracking-[0.25em]
//                       text-white/70
//                       backdrop-blur-md
//                       transition
//                       hover:border-[#d6b36a]
//                       hover:bg-[#d6b36a]
//                       hover:text-black
//                       lg:hidden
//                     "
//                   >
//                     VIEW GALLERY
//                     <span className="ml-2 text-base">
//                       ↗
//                     </span>
//                   </button>

//                 </div>

//                 {/* =================================================
//                     DESKTOP CONTROLS
//                 ================================================= */}

//                 <div className="mt-12">

//                   <div className="mb-5 flex items-end justify-between">

//                     <div>

//                       <span className="text-[8px] tracking-[0.3em] text-white/30">
//                         CURRENT FRAME
//                       </span>

//                       <div className="mt-1 font-serif text-2xl text-[#d6b36a]">

//                         {String(featured + 1).padStart(2, "0")}

//                         <span className="mx-2 text-white/20">
//                           /
//                         </span>

//                         <span className="text-sm text-white/40">
//                           {String(allImages.length).padStart(2, "0")}
//                         </span>

//                       </div>

//                     </div>

//                     {/* DESKTOP ARROWS */}

//                     <div className="hidden gap-2 lg:flex">

//                       <button
//                         type="button"
//                         onClick={previousFeatured}
//                         aria-label="Previous image"
//                         className="
//                           flex
//                           h-11
//                           w-11
//                           items-center
//                           justify-center
//                           border
//                           border-white/20
//                           text-lg
//                           text-white/70
//                           transition
//                           hover:border-[#d6b36a]
//                           hover:bg-[#d6b36a]
//                           hover:text-black
//                         "
//                       >
//                         ←
//                       </button>

//                       <button
//                         type="button"
//                         onClick={nextFeatured}
//                         aria-label="Next image"
//                         className="
//                           flex
//                           h-11
//                           w-11
//                           items-center
//                           justify-center
//                           border
//                           border-white/20
//                           text-lg
//                           text-white/70
//                           transition
//                           hover:border-[#d6b36a]
//                           hover:bg-[#d6b36a]
//                           hover:text-black
//                         "
//                       >
//                         →
//                       </button>

//                     </div>

//                   </div>

//                   {/* PROGRESS */}

//                   <div className="h-px w-full bg-white/10">

//                     <span
//                       className="block h-px bg-[#d6b36a] transition-all duration-500"
//                       style={{
//                         width: `${
//                           allImages.length
//                             ? ((featured + 1) /
//                                 allImages.length) *
//                               100
//                             : 0
//                         }%`,
//                       }}
//                     />

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>
//       )}

//       {/* =====================================================
//           INTRO
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//         <div className="grid gap-12 lg:grid-cols-[220px_1fr]">

//           <div className="flex items-start gap-3">

//             <span className="mt-2 h-px w-12 bg-[#d6b36a]" />

//             <div>

//               <p className="text-[9px] tracking-[0.35em] text-[#d6b36a]">
//                 OUR PHILOSOPHY
//               </p>

//               <p className="mt-3 text-[9px] leading-5 tracking-[0.15em] text-white/25">
//                 EMOTION
//                 <br />
//                 LIGHT
//                 <br />
//                 STORY
//               </p>

//             </div>

//           </div>

//           <div className="max-w-5xl">

//             <h2 className="font-serif text-4xl font-light leading-[1.05] sm:text-5xl lg:text-7xl">

//               We don't just

//               <span className="italic text-[#d6b36a]">
//                 {" "}capture
//               </span>

//               <br />

//               moments.

//             </h2>

//             <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
//               We preserve the feeling behind them.
//               Every wedding, celebration and special
//               occasion becomes a visual story crafted
//               with cinematic composition, natural
//               emotion and timeless detail.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           PROJECTS
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-[1400px] px-5 pb-28 sm:px-8 lg:px-12">

//         <div className="mb-20 flex flex-col justify-between gap-8 border-b border-white/[0.08] pb-8 sm:flex-row sm:items-end">

//           <div>

//             <span className="text-[9px] tracking-[0.35em] text-[#d6b36a]">
//               SELECTED WORK
//             </span>

//             <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
//               Our Stories
//             </h2>

//           </div>

//           <p className="max-w-xs text-xs leading-6 text-white/35">
//             A collection of moments,
//             celebrations and stories
//             captured by Yosieal.
//           </p>

//         </div>

//         {loading ? (

//           <div className="flex min-h-[350px] items-center justify-center">

//             <div className="flex items-center gap-4 text-[9px] tracking-[0.3em] text-white/40">

//               <span className="h-2 w-2 animate-pulse rounded-full bg-[#d6b36a]" />

//               PREPARING THE STORIES...

//             </div>

//           </div>

//         ) : sections.length === 0 ? (

//           <div className="flex min-h-[350px] items-center justify-center border border-white/[0.08]">

//             <span className="text-[9px] tracking-[0.3em] text-white/30">
//               NO STORIES AVAILABLE
//             </span>

//           </div>

//         ) : (

//           <div className="space-y-32">

//             {sections.map((section, index) => {

//               const titleLower =
//                 section.title
//                   ? section.title.toLowerCase()
//                   : "";

//               const isWedding =
//                 titleLower.includes("wedding");

//               const isBridal =
//                 titleLower.includes("bridal");

//               const isBaby =
//                 titleLower.includes("baby") ||
//                 titleLower.includes("baptism");

//               const headings =
//                 section.headings?.length
//                   ? section.headings
//                   : DEFAULT_HEADINGS;

//               const descriptions =
//                 section.descriptions?.length
//                   ? section.descriptions
//                   : DEFAULT_DESCRIPTIONS;

//               const displayHeading =
//                 section.names?.trim() ||
//                 section.title ||
//                 "Untitled Project";

//               return (

//                 <article
//                   key={section._id || `project-${index}`}
//                   className="relative"
//                 >

//                   <div className="mb-12 grid gap-7 border-b border-white/[0.08] pb-8 lg:grid-cols-[90px_1fr_auto] lg:items-end">

//                     <div className="flex items-center gap-3">

//                       <span className="font-serif text-3xl font-light text-[#d6b36a]">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>

//                       <span className="hidden h-px w-8 bg-white/20 sm:block" />

//                     </div>

//                     <div>

//                       <span className="text-[8px] tracking-[0.3em] text-white/30">
//                         EVENT STORY
//                         {" / "}
//                         {section.date || "FEATURED PROJECT"}
//                       </span>

//                       <h3 className="mt-3 font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
//                         {displayHeading}
//                       </h3>

//                       {section.desc && (

//                         <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
//                           {section.desc}
//                         </p>

//                       )}

//                     </div>

//                     <span className="hidden text-[8px] tracking-[0.3em] text-white/20 lg:block">
//                       YOSIEAL / FILM
//                     </span>

//                   </div>

//                   {isWedding && (
//                     <WeddingSection
//                       section={section}
//                       headings={headings}
//                       descriptions={descriptions}
//                       openGallery={openGallery}
//                     />
//                   )}

//                   {!isWedding && isBridal && (
//                     <BridalSection
//                       section={section}
//                       headings={headings}
//                       descriptions={descriptions}
//                       openGallery={openGallery}
//                     />
//                   )}

//                   {!isWedding &&
//                     !isBridal &&
//                     isBaby && (
//                       <BabySection
//                         section={section}
//                         headings={headings}
//                         descriptions={descriptions}
//                         openGallery={openGallery}
//                       />
//                     )}

//                   {!isWedding &&
//                     !isBridal &&
//                     !isBaby && (
//                       <DefaultSection
//                         section={section}
//                         openGallery={openGallery}
//                       />
//                     )}

//                 </article>

//               );
//             })}

//           </div>

//         )}

//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}

//       <section className="border-y border-white/[0.08] bg-[#0a0a0a]">

//         <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:items-center lg:px-12 lg:py-28">

//           <div>

//             <span className="text-[9px] tracking-[0.35em] text-[#d6b36a]">
//               YOUR STORY STARTS HERE
//             </span>

//             <h2 className="mt-5 max-w-3xl font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">

//               Let's create something

//               <span className="italic text-[#d6b36a]">
//                 {" "}unforgettable.
//               </span>

//             </h2>

//           </div>

//           <Link
//             to="/contact"
//             className="
//               group
//               inline-flex
//               w-fit
//               items-center
//               gap-6
//               border
//               border-[#d6b36a]/60
//               px-7
//               py-4
//               text-[9px]
//               tracking-[0.3em]
//               text-[#d6b36a]
//               transition
//               hover:bg-[#d6b36a]
//               hover:text-black
//             "
//           >
//             GET IN TOUCH

//             <span className="text-base transition group-hover:translate-x-2">
//               →
//             </span>

//           </Link>

//         </div>

//       </section>

//       {/* =====================================================
//           LIGHTBOX
//       ===================================================== */}

//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         slides={currentImages}
//       />

//       <Footer />

//     </main>
//   );
// }

// /* =========================================================
//    WEDDING
// ========================================================= */

// function WeddingSection({
//   section,
//   headings,
//   descriptions,
//   openGallery,
// }) {
//   const images = Array.isArray(section.images)
//     ? section.images
//     : [];

//   if (!images.length) return null;

//   return (

//     <div className="space-y-24">

//       {/* FIRST IMAGE */}

//       {images[0] && (

//         <div className="grid items-center gap-10 lg:grid-cols-[0.65fr_1.35fr]">

//           <div className="order-2 lg:order-1">

//             <span className="text-[9px] tracking-[0.3em] text-[#d6b36a]">
//               01 / THE BEGINNING
//             </span>

//             <h3 className="mt-4 font-serif text-3xl font-light sm:text-4xl lg:text-5xl">
//               {headings[0] || "The Story Begins"}
//             </h3>

//             <p className="mt-6 text-sm leading-7 text-white/40">
//               {descriptions[0] ||
//                 DEFAULT_DESCRIPTIONS[0]}
//             </p>

//             <button
//               type="button"
//               onClick={() => openGallery(images)}
//               className="
//                 mt-8
//                 border-b
//                 border-[#d6b36a]/50
//                 pb-2
//                 text-[9px]
//                 tracking-[0.25em]
//                 text-[#d6b36a]
//                 transition
//                 hover:border-[#d6b36a]
//                 hover:text-white
//               "
//             >
//               OPEN STORY →
//             </button>

//           </div>

//           <CinematicImage
//             src={images[0]}
//             alt={section.title}
//             onClick={() => openGallery(images)}
//             className="order-1 min-h-[400px] lg:order-2"
//           />

//         </div>

//       )}

//       {/* IMAGE GRID */}

//       {images.length > 1 && (

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

//           {images.slice(1, 5).map((img, i) => (

//             <div
//               key={`wedding-grid-${i}`}
//               className="group"
//             >

//               <CinematicImage
//                 src={img}
//                 alt={section.title}
//                 onClick={() => openGallery(images)}
//                 className="min-h-[360px]"
//               />

//               <div className="mt-4">

//                 <span className="text-[8px] tracking-[0.3em] text-[#d6b36a]">
//                   FRAME {String(i + 2).padStart(2, "0")}
//                 </span>

//                 <p className="mt-2 text-sm text-white/60">
//                   {headings[i + 1] ||
//                     DEFAULT_HEADINGS[i + 1]}
//                 </p>

//               </div>

//             </div>

//           ))}

//         </div>

//       )}

//       {/* FEATURED MEMORY */}

//       {images[5] && (

//         <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">

//           <CinematicImage
//             src={images[5]}
//             alt={section.title}
//             onClick={() => openGallery(images)}
//             className="min-h-[450px]"
//           />

//           <div>

//             <span className="text-[9px] tracking-[0.3em] text-[#d6b36a]">
//               06 / FEATURED MEMORY
//             </span>

//             <h3 className="mt-4 font-serif text-3xl font-light sm:text-4xl">
//               {headings[5] ||
//                 DEFAULT_HEADINGS[5]}
//             </h3>

//             <p className="mt-6 text-sm leading-7 text-white/40">
//               {descriptions[5] ||
//                 DEFAULT_DESCRIPTIONS[5]}
//             </p>

//           </div>

//         </div>

//       )}

//       {/* CHAPTERS */}

//       {images.length > 6 && (

//         <div className="space-y-20">

//           {images.slice(6, 10).map((img, i) => {

//             const imageIndex = i + 6;

//             return (

//               <div
//                 key={`chapter-${imageIndex}`}
//                 className={`
//                   grid
//                   items-center
//                   gap-10
//                   lg:grid-cols-3
//                   ${i % 2 === 1
//                     ? "lg:[&>div:first-child]:order-2"
//                     : ""}
//                 `}
//               >

//                 <div>

//                   <span className="text-[8px] tracking-[0.3em] text-[#d6b36a]">
//                     CHAPTER{" "}
//                     {String(imageIndex + 1).padStart(2, "0")}
//                   </span>

//                   <h3 className="mt-4 font-serif text-3xl font-light">
//                     {headings[imageIndex] ||
//                       DEFAULT_HEADINGS[imageIndex]}
//                   </h3>

//                   <p className="mt-5 text-sm leading-7 text-white/40">
//                     {descriptions[imageIndex] ||
//                       DEFAULT_DESCRIPTIONS[imageIndex]}
//                   </p>

//                 </div>

//                 <CinematicImage
//                   src={img}
//                   alt={section.title}
//                   onClick={() => openGallery(images)}
//                   className="min-h-[380px] lg:col-span-2"
//                 />

//               </div>

//             );
//           })}

//         </div>

//       )}

//       {/* FINAL CUT */}

//       {images.length > 10 && (

//         <div>

//           <div className="mb-8">

//             <span className="text-[8px] tracking-[0.3em] text-[#d6b36a]">
//               FINAL CUT
//             </span>

//             <h3 className="mt-3 font-serif text-3xl font-light">
//               Album Highlights
//             </h3>

//           </div>

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

//             {images.slice(10, 14).map((img, i) => {

//               const imageIndex = i + 10;

//               return (

//                 <button
//                   type="button"
//                   key={`final-${imageIndex}`}
//                   onClick={() => openGallery(images)}
//                   className="group text-left"
//                 >

//                   <CinematicImage
//                     src={img}
//                     alt={section.title}
//                     onClick={() => openGallery(images)}
//                     className="min-h-[350px]"
//                   />

//                   <div className="mt-3">

//                     <span className="text-[8px] tracking-[0.25em] text-[#d6b36a]">
//                       FRAME{" "}
//                       {String(imageIndex + 1).padStart(2, "0")}
//                     </span>

//                     <h4 className="mt-2 text-sm text-white/65">
//                       {headings[imageIndex] ||
//                         DEFAULT_HEADINGS[imageIndex] ||
//                         "Precious Memory"}
//                     </h4>

//                   </div>

//                 </button>

//               );
//             })}

//           </div>

//         </div>

//       )}

//       <GalleryButton title={section.title} />

//     </div>
//   );
// }

// /* =========================================================
//    CINEMATIC IMAGE
// ========================================================= */

// function CinematicImage({
//   src,
//   alt,
//   className = "",
//   onClick,
// }) {
//   if (!src) return null;

//   return (

//     <button
//       type="button"
//       onClick={onClick}
//       aria-label={`Open ${alt || "image"}`}
//       className={`
//         group
//         relative
//         flex
//         w-full
//         items-center
//         justify-center
//         overflow-hidden
//         bg-[#0b0b0b]
//         text-left
//         ${className}
//       `}
//     >

//       <ProtectedImage
//         src={src}
//         alt={alt}
//         className="
//           block
//           h-auto
//           w-auto
//           max-h-full
//           max-w-full
//           object-contain
//           object-center
//           transition
//           duration-700
//           ease-out
//           group-hover:scale-[1.015]
//         "
//         showLogoOnly={true}
//       />

//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-90" />

//       <div className="pointer-events-none absolute inset-3 border border-white/[0.12] transition duration-500 group-hover:border-[#d6b36a]/60 sm:inset-4" />

//       <span
//         className="
//           absolute
//           bottom-5
//           right-5
//           z-20
//           flex
//           h-10
//           w-10
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-white/25
//           bg-black/40
//           text-lg
//           backdrop-blur-md
//           transition
//           duration-300
//           group-hover:border-[#d6b36a]
//           group-hover:bg-[#d6b36a]
//           group-hover:text-black
//         "
//       >
//         +
//       </span>

//     </button>
//   );
// }

// /* =========================================================
//    BRIDAL
// ========================================================= */

// function BridalSection({
//   section,
//   headings,
//   descriptions,
//   openGallery,
// }) {
//   const images = Array.isArray(section.images)
//     ? section.images
//     : [];

//   if (!images.length) return null;

//   return (

//     <div className="space-y-14">

//       <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">

//         <div>

//           <span className="text-[8px] tracking-[0.3em] text-[#d6b36a]">
//             BRIDAL CELEBRATION
//           </span>

//           <h3 className="mt-4 font-serif text-3xl font-light sm:text-4xl">
//             A Celebration of Elegance
//           </h3>

//         </div>

//         <p className="max-w-2xl text-sm leading-7 text-white/40">
//           {section.desc ||
//             section.description ||
//             "A beautiful celebration filled with emotion, elegance and unforgettable moments."}
//         </p>

//       </div>

//       <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">

//         {images.map((img, i) => (

//           <button
//             type="button"
//             key={`bridal-${i}`}
//             onClick={() => openGallery(images)}
//             className="group mb-7 block w-full break-inside-avoid text-left"
//           >

//             <div className="relative overflow-hidden bg-[#0b0b0b]">

//               <ProtectedImage
//                 src={img}
//                 alt={section.title}
//                 className="
//                   block
//                   h-auto
//                   w-full
//                   object-contain
//                   object-center
//                   transition
//                   duration-700
//                   group-hover:scale-[1.015]
//                 "
//                 showLogoOnly={true}
//               />

//               <div className="pointer-events-none absolute inset-3 border border-white/[0.12]" />

//             </div>

//             <div className="mt-4">

//               <span className="text-[8px] tracking-[0.25em] text-[#d6b36a]">
//                 FRAME {String(i + 1).padStart(2, "0")}
//               </span>

//               <h4 className="mt-2 font-serif text-xl font-light">
//                 {headings[i] ||
//                   `Precious Moment ${i + 1}`}
//               </h4>

//               <p className="mt-2 text-xs leading-6 text-white/35">
//                 {descriptions[i] ||
//                   "A beautiful moment captured with emotion and elegance."}
//               </p>

//             </div>

//           </button>

//         ))}

//       </div>

//       <GalleryButton title={section.title} />

//     </div>
//   );
// }

// /* =========================================================
//    BABY
// ========================================================= */

// function BabySection({
//   section,
//   headings,
//   descriptions,
//   openGallery,
// }) {
//   const images = Array.isArray(section.images)
//     ? section.images
//     : [];

//   if (!images.length) return null;

//   return (

//     <div className="space-y-20">

//       <div className="max-w-3xl">

//         <span className="text-[8px] tracking-[0.3em] text-[#d6b36a]">
//           BABY SHOWER / BAPTISM
//         </span>

//         <p className="mt-5 text-sm leading-7 text-white/40">
//           {section.desc ||
//             section.description ||
//             "Celebrating the joy and warmth of this special journey."}
//         </p>

//       </div>

//       {images.map((img, i) => (

//         <article
//           key={`baby-${i}`}
//           className="grid items-center gap-10 lg:grid-cols-2"
//         >

//           <CinematicImage
//             src={img}
//             alt={section.title}
//             onClick={() => openGallery(images)}
//             className={`
//               min-h-[400px]
//               ${i % 2 === 1 ? "lg:order-2" : ""}
//             `}
//           />

//           <div
//             className={
//               i % 2 === 1
//                 ? "lg:order-1"
//                 : ""
//             }
//           >

//             <span className="text-[8px] tracking-[0.3em] text-[#d6b36a]">
//               MOMENT {String(i + 1).padStart(2, "0")}
//             </span>

//             <h3 className="mt-4 font-serif text-3xl font-light sm:text-4xl">
//               {headings[i] ||
//                 `Precious Moment ${i + 1}`}
//             </h3>

//             <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
//               {descriptions[i] ||
//                 "Celebrating the joy and warmth of this special journey."}
//             </p>

//           </div>

//         </article>

//       ))}

//       <GalleryButton title={section.title} />

//     </div>
//   );
// }

// /* =========================================================
//    DEFAULT PROJECT
// ========================================================= */

// function DefaultSection({
//   section,
//   openGallery,
// }) {
//   const images = Array.isArray(section.images)
//     ? section.images
//     : [];

//   return (

//     <div className="space-y-12">

//       <div className="max-w-2xl">

//         <span className="text-[8px] tracking-[0.3em] text-[#d6b36a]">
//           CURATED PROJECT
//         </span>

//         <p className="mt-5 text-sm leading-7 text-white/40">
//           {section.desc ||
//             section.description ||
//             "A curated visual story captured with cinematic detail."}
//         </p>

//       </div>

//       {images.length > 0 && (

//         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

//           {images.slice(0, 4).map((img, i) => (

//             <CinematicImage
//               key={`default-${i}`}
//               src={img}
//               alt={section.title}
//               onClick={() => openGallery(images)}
//               className="min-h-[350px]"
//             />

//           ))}

//         </div>

//       )}

//       <GalleryButton
//         title={section.title}
//         label="EXPLORE PROJECT"
//       />

//     </div>
//   );
// }

// /* =========================================================
//    GALLERY BUTTON
// ========================================================= */

// function GalleryButton({
//   title,
//   label = "VIEW FULL GALLERY",
// }) {
//   return (

//     <div className="pt-2">

//       <Link
//         to={`/gallery/${generateSlug(title)}`}
//         className="
//           group
//           inline-flex
//           items-center
//           gap-5
//           border-b
//           border-[#d6b36a]/50
//           pb-3
//           text-[9px]
//           tracking-[0.3em]
//           text-[#d6b36a]
//           transition
//           hover:border-[#d6b36a]
//           hover:text-white
//         "
//       >

//         <span>{label}</span>

//         <strong className="text-base transition duration-300 group-hover:translate-x-2">
//           →
//         </strong>
 
//       </Link>

//     </div>
//   );
// }

// export default Home;


// import React, { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";

// import Hero from "../components/Hero";
// import Footer from "../components/Footer";
// import ProtectedImage from "../components/ProtectedImage";

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// /* =========================================================
//    DEFAULT CONTENT
// ========================================================= */

// const DEFAULT_DESCRIPTIONS = [
//   "01. The Beginning of Forever — Our First Look",
//   "02. A Tender Moment Caught in Time",
//   "03. Walking Hand in Hand Towards Tomorrow",
//   "04. Joy and Laughter Shared with Loved Ones",
//   "05. The Grand Celebration and Vows",
//   "06. Unforgettable Emotions of the Day",
//   "07. Elegance in Every Single Detail",
//   "08. Dancing Under the Evening Lights",
//   "09. Sweet Whispers and Quiet Glances",
//   "10. Cherished Memories to Last a Lifetime",
//   "11. A Magical Evening Full of Grace",
//   "12. Smiles That Brighten the Whole World",
//   "13. Embracing the Warmth of Family",
//   "14. Looking Into Each Other's Eyes",
//   "15. The Perfect Ending to a Perfect Day",
// ];

// const DEFAULT_HEADINGS = [
//   "The Story Begins",
//   "Tender Highlight",
//   "Walking Together",
//   "Shared Laughter",
//   "Featured Memory",
//   "Pure Emotion",
//   "Elegant Detail",
//   "Evening Magic",
//   "Quiet Glance",
//   "Cherished Moment",
//   "Graceful Evening",
//   "Bright Smile",
//   "Family Warmth",
//   "Deep Connection",
//   "Grand Finale",
// ];

// /* =========================================================
//    HELPERS
// ========================================================= */

// const generateSlug = (titleText) => {
//   if (!titleText) return "";

//   return titleText
//     .toLowerCase()
//     .replace(/["']/g, "")
//     .replace(/&/g, "and")
//     .trim()
//     .replace(/[^\w\s-]/g, "")
//     .replace(/\s+/g, "-");
// };

// const fixImageUrl = (url) => {
//   if (!url) return "";

//   return url
//     .replace(
//       "http://localhost:5000",
//       "https://habesha-film-production-server.onrender.com"
//     )
//     .replace(
//       "http://localhost:4000",
//       "https://habesha-film-production-server.onrender.com"
//     );
// };

// /* =========================================================
//    IMAGE FRAME
// ========================================================= */

// function ImageFrame({
//   src,
//   alt = "",
//   className = "",
//   children,
// }) {
//   if (!src) return null;

//   return (
//     <div
//       className={`
//         relative flex h-full w-full items-center justify-center
//         overflow-hidden bg-[#0b0b0b]
//         ${className}
//       `}
//     >
//       <ProtectedImage
//         src={src}
//         alt={alt}
//         className="
//           block
//           h-auto
//           w-auto
//           max-h-full
//           max-w-full
//           object-contain
//           object-center
//         "
//         showLogoOnly={true}
//       />

//       <div className="pointer-events-none absolute inset-3 border border-white/[0.12] sm:inset-4" />

//       {children}
//     </div>
//   );
// }

// /* =========================================================
//    HOME
// ========================================================= */

// function Home() {
//   const [sections, setSections] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [open, setOpen] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);

//   const [featured, setFeatured] = useState(0);

//   /* =======================================================
//      LOAD PROJECTS
//   ======================================================= */

//   useEffect(() => {
//     let mounted = true;

//     const loadProjects = async () => {
//       try {
//         const response = await fetch(
//           "https://habesha-film-production-server.onrender.com/api/projects"
//         );

//         if (!response.ok) {
//           throw new Error("Failed to load projects");
//         }

//         const data = await response.json();

//         if (!Array.isArray(data)) {
//           throw new Error("Projects response is not an array");
//         }

//         const processedData = data.map((section) => {
//           let parsedDescriptions = [];
//           let parsedHeadings = [];

//           let mainDesc =
//             section.desc ||
//             section.description ||
//             "";

//           if (
//             typeof section.description === "string" &&
//             section.description.includes("||DESCS||")
//           ) {
//             const parts =
//               section.description.split("||DESCS||");

//             mainDesc = parts[0] || "";

//             try {
//               parsedDescriptions = parts[1]
//                 ? JSON.parse(parts[1])
//                 : [];
//             } catch {
//               parsedDescriptions = [];
//             }

//             try {
//               parsedHeadings = parts[2]
//                 ? JSON.parse(parts[2])
//                 : [];
//             } catch {
//               parsedHeadings = [];
//             }
//           }

//           const fixedImages = Array.isArray(section.images)
//             ? section.images
//                 .map(fixImageUrl)
//                 .filter(Boolean)
//             : [];

//           return {
//             ...section,
//             images: fixedImages,
//             desc: mainDesc,
//             descriptions: parsedDescriptions,
//             headings: parsedHeadings,
//           };
//         });

//         if (mounted) {
//           setSections(processedData);
//         }
//       } catch (error) {
//         console.error("Projects loading error:", error);

//         if (mounted) {
//           setSections([]);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     loadProjects();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   /* =======================================================
//      ALL IMAGES
//   ======================================================= */

//   const allImages = useMemo(() => {
//     return sections.flatMap((section) =>
//       Array.isArray(section.images)
//         ? section.images
//         : []
//     );
//   }, [sections]);

//   /* =======================================================
//      FEATURED IMAGE
//   ======================================================= */

//   useEffect(() => {
//     if (!allImages.length) {
//       setFeatured(0);
//       return;
//     }

//     setFeatured((current) =>
//       current >= allImages.length ? 0 : current
//     );
//   }, [allImages.length]);

//   const featuredImage =
//     allImages[featured] || allImages[0];

//   const nextFeatured = () => {
//     if (!allImages.length) return;

//     setFeatured(
//       (current) =>
//         (current + 1) % allImages.length
//     );
//   };

//   const previousFeatured = () => {
//     if (!allImages.length) return;

//     setFeatured(
//       (current) =>
//         (current - 1 + allImages.length) %
//         allImages.length
//     );
//   };

//   /* =======================================================
//      LIGHTBOX
//   ======================================================= */

//   const openGallery = (images) => {
//     if (!Array.isArray(images) || !images.length) {
//       return;
//     }

//     const slides = images
//       .filter(Boolean)
//       .map((src) => ({
//         src,
//       }));

//     if (!slides.length) return;

//     setCurrentImages(slides);
//     setOpen(true);
//   };

//   /* =======================================================
//      RENDER
//   ======================================================= */

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#070707] text-white">

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <Hero />

//       {/* =====================================================
//           CINEMATIC FEATURE
//       ===================================================== */}

//       {featuredImage && (
//         <section className="relative border-b border-white/[0.08] bg-[#080808]">

//           <div className="mx-auto w-full max-w-[1600px] px-3 py-4 sm:px-6 sm:py-5 lg:px-10">

//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 border border-white/[0.08]
//                 bg-[#0b0b0b]
//                 lg:grid
//                 lg:min-h-[720px]
//                 lg:grid-cols-[1fr_390px]
//               "
//             >

//               {/* IMAGE SIDE */}

//               <div
//                 className="
//                   relative
//                   order-1
//                   flex
//                   min-h-[360px]
//                   w-full
//                   items-center
//                   justify-center
//                   overflow-hidden
//                   bg-[#090909]
//                   sm:min-h-[500px]
//                   lg:min-h-[720px]
//                 "
//               >

//                 <ProtectedImage
//                   src={featuredImage}
//                   alt="Featured film production"
//                   className="
//                     block
//                     h-auto
//                     w-auto
//                     max-h-full
//                     max-w-full
//                     object-contain
//                     object-center
//                   "
//                   showLogoOnly={true}
//                 />

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/35" />

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

//                 <div className="pointer-events-none absolute inset-3 border border-white/[0.12] sm:inset-6 lg:inset-9" />

//                 <div className="absolute left-5 top-5 z-20 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
//                   <span className="font-serif text-4xl font-light text-white/20 sm:text-6xl lg:text-7xl">
//                     {String(featured + 1).padStart(2, "0")}
//                   </span>
//                 </div>

//               </div>

//               {/* MOBILE CONTROLS */}

//               <div
//                 className="
//                   order-2
//                   flex
//                   items-center
//                   justify-between
//                   border-t
//                   border-white/[0.08]
//                   bg-[#090909]
//                   px-5
//                   py-4
//                   lg:hidden
//                 "
//               >

//                 <span className="text-[8px] tracking-[0.3em] text-white/30">
//                   FRAME {String(featured + 1).padStart(2, "0")} /{" "}
//                   {String(allImages.length).padStart(2, "0")}
//                 </span>

//                 <div className="flex gap-2">

//                   <button
//                     type="button"
//                     onClick={previousFeatured}
//                     aria-label="Previous image"
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       border
//                       border-white/20
//                       text-lg
//                       text-white/70
//                       transition
//                       hover:border-[#d6b36a]
//                       hover:bg-[#d6b36a]
//                       hover:text-black
//                     "
//                   >
//                     ←
//                   </button>

//                   <button
//                     type="button"
//                     onClick={nextFeatured}
//                     aria-label="Next image"
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       border
//                       border-white/20
//                       text-lg
//                       text-white/70
//                       transition
//                       hover:border-[#d6b36a]
//                       hover:bg-[#d6b36a]
//                       hover:text-black
//                     "
//                   >
//                     →
//                   </button>

//                 </div>
//               </div>

//               {/* TEXT SIDE */}

//               <div
//                 className="
//                   order-3
//                   relative
//                   flex
//                   min-h-[420px]
//                   flex-col
//                   justify-between
//                   border-t
//                   border-white/[0.08]
//                   bg-[#0a0a0a]
//                   p-6
//                   sm:p-10
//                   lg:order-2
//                   lg:min-h-[720px]
//                   lg:border-l
//                   lg:border-t-0
//                   lg:p-12
//                 "
//               >

//                 <div>

//                   <div className="mb-10 flex items-center gap-3 sm:mb-12">

//                     <span className="h-px w-8 bg-[#d6b36a] sm:w-10" />

//                     <span className="text-[8px] tracking-[0.3em] text-[#d6b36a] sm:text-[9px]">
//                       YOSIEAL FILM PRODUCTION
//                     </span>

//                   </div>

//                   <p className="text-[8px] uppercase tracking-[0.3em] text-white/35 sm:text-[9px] sm:tracking-[0.35em]">
//                     Wedding • Events • Cinematic
//                   </p>

//                   <h1
//                     className="
//                       mt-5
//                       font-serif
//                       text-[42px]
//                       font-light
//                       leading-[0.95]
//                       sm:text-6xl
//                       lg:text-7xl
//                     "
//                   >
//                     Stories

//                     <span className="block italic text-[#d6b36a]">
//                       Worth
//                     </span>

//                     Remembering.
//                   </h1>

//                   <div className="mt-7 h-px w-16 bg-[#d6b36a]/60 sm:mt-8 sm:w-20" />

//                   <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
//                     We transform real emotions,
//                     beautiful celebrations and
//                     unforgettable moments into
//                     cinematic visual stories.
//                   </p>

//                   <button
//                     type="button"
//                     onClick={() => openGallery(allImages)}
//                     className="
//                       mt-8
//                       border
//                       border-white/20
//                       bg-black/20
//                       px-4
//                       py-3
//                       text-[8px]
//                       tracking-[0.25em]
//                       text-white/70
//                       backdrop-blur-md
//                       transition
//                       hover:border-[#d6b36a]
//                       hover:bg-[#d6b36a]
//                       hover:text-black
//                       lg:hidden
//                     "
//                   >
//                     VIEW GALLERY
//                     <span className="ml-2 text-base">
//                       ↗
//                     </span>
//                   </button>

//                 </div>

//                 {/* DESKTOP CONTROLS */}

//                 <div className="mt-12">

//                   <div className="mb-5 flex items-end justify-between">

//                     <div>

//                       <span className="text-[8px] tracking-[0.3em] text-white/30">
//                         CURRENT FRAME
//                       </span>

//                       <div className="mt-1 font-serif text-2xl text-[#d6b36a]">

//                         {String(featured + 1).padStart(2, "0")}

//                         <span className="mx-2 text-white/20">
//                           /
//                         </span>

//                         <span className="text-sm text-white/40">
//                           {String(allImages.length).padStart(2, "0")}
//                         </span>

//                       </div>

//                     </div>

//                     <div className="hidden gap-2 lg:flex">

//                       <button
//                         type="button"
//                         onClick={previousFeatured}
//                         aria-label="Previous image"
//                         className="
//                           flex
//                           h-11
//                           w-11
//                           items-center
//                           justify-center
//                           border
//                           border-white/20
//                           text-lg
//                           text-white/70
//                           transition
//                           hover:border-[#d6b36a]
//                           hover:bg-[#d6b36a]
//                           hover:text-black
//                         "
//                       >
//                         ←
//                       </button>

//                       <button
//                         type="button"
//                         onClick={nextFeatured}
//                         aria-label="Next image"
//                         className="
//                           flex
//                           h-11
//                           w-11
//                           items-center
//                           justify-center
//                           border
//                           border-white/20
//                           text-lg
//                           text-white/70
//                           transition
//                           hover:border-[#d6b36a]
//                           hover:bg-[#d6b36a]
//                           hover:text-black
//                         "
//                       >
//                         →
//                       </button>

//                     </div>

//                   </div>

//                   <div className="h-px w-full bg-white/10">

//                     <span
//                       className="block h-px bg-[#d6b36a] transition-all duration-500"
//                       style={{
//                         width: `${
//                           allImages.length
//                             ? ((featured + 1) /
//                                 allImages.length) *
//                               100
//                             : 0
//                         }%`,
//                       }}
//                     />

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>
//       )}

//       {/* =====================================================
//           INTRO
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//         <div className="grid gap-12 lg:grid-cols-[220px_1fr]">

//           <div className="flex items-start gap-3">

//             <span className="mt-2 h-px w-12 bg-[#d6b36a]" />

//             <div>

//               <p className="text-[9px] tracking-[0.35em] text-[#d6b36a]">
//                 OUR PHILOSOPHY
//               </p>

//               <p className="mt-3 text-[9px] leading-5 tracking-[0.15em] text-white/25">
//                 EMOTION
//                 <br />
//                 LIGHT
//                 <br />
//                 STORY
//               </p>

//             </div>

//           </div>

//           <div className="max-w-5xl">

//             <h2 className="font-serif text-4xl font-light leading-[1.05] sm:text-5xl lg:text-7xl">

//               We don't just

//               <span className="italic text-[#d6b36a]">
//                 {" "}capture
//               </span>

//               <br />

//               moments.

//             </h2>

//             <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
//               We preserve the feeling behind them.
//               Every wedding, celebration and special
//               occasion becomes a visual story crafted
//               with cinematic composition, natural
//               emotion and timeless detail.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           PROJECTS
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-[1400px] px-5 pb-28 sm:px-8 lg:px-12">

//         <div className="mb-20 flex flex-col justify-between gap-8 border-b border-white/[0.08] pb-8 sm:flex-row sm:items-end">

//           <div>

//             <span className="text-[9px] tracking-[0.35em] text-[#d6b36a]">
//               SELECTED WORK
//             </span>

//             <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
//               Our Stories
//             </h2>

//           </div>

//           <p className="max-w-xs text-xs leading-6 text-white/35">
//             A collection of moments,
//             celebrations and stories
//             captured by Yosieal.
//           </p>

//         </div>

//         {loading ? (

//           <div className="flex min-h-[350px] items-center justify-center">

//             <div className="flex items-center gap-4 text-[9px] tracking-[0.3em] text-white/40">

//               <span className="h-2 w-2 animate-pulse rounded-full bg-[#d6b36a]" />

//               PREPARING THE STORIES...

//             </div>

//           </div>

//         ) : sections.length === 0 ? (

//           <div className="flex min-h-[350px] items-center justify-center border border-white/[0.08]">

//             <span className="text-[9px] tracking-[0.3em] text-white/30">
//               NO STORIES AVAILABLE
//             </span>

//           </div>

//         ) : (

//           <div className="space-y-32">

//             {sections.map((section, index) => {

//               const titleLower =
//                 section.title
//                   ? section.title.toLowerCase()
//                   : "";

//               const isWedding =
//                 titleLower.includes("wedding");

//               const isBridal =
//                 titleLower.includes("bridal");

//               const isBaby =
//                 titleLower.includes("baby") ||
//                 titleLower.includes("baptism");

//               const headings =
//                 section.headings?.length
//                   ? section.headings
//                   : DEFAULT_HEADINGS;

//               const descriptions =
//                 section.descriptions?.length
//                   ? section.descriptions
//                   : DEFAULT_DESCRIPTIONS;

//               const displayHeading =
//                 section.names?.trim() ||
//                 section.title ||
//                 "Untitled Project";

//               return (

//                 <article
//                   key={section._id || `project-${index}`}
//                   className="relative"
//                 >

//                   <div className="mb-12 grid gap-7 border-b border-white/[0.08] pb-8 lg:grid-cols-[90px_1fr_auto] lg:items-end">

//                     <div className="flex items-center gap-3">

//                       <span className="font-serif text-3xl font-light text-[#d6b36a]">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>

//                       <span className="hidden h-px w-8 bg-white/20 sm:block" />

//                     </div>

//                     <div>

//                       <span className="text-[8px] tracking-[0.3em] text-white/30">
//                         EVENT STORY
//                         {" / "}
//                         {section.date || "FEATURED PROJECT"}
//                       </span>

//                       <h3 className="mt-3 font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
//                         {displayHeading}
//                       </h3>

//                       {section.desc && (

//                         <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
//                           {section.desc}
//                         </p>

//                       )}

//                     </div>

//                     <span className="hidden text-[8px] tracking-[0.3em] text-white/20 lg:block">
//                       YOSIEAL / FILM
//                     </span>

//                   </div>

//                   {isWedding && (
//                     <WeddingSection
//                       section={section}
//                       headings={headings}
//                       descriptions={descriptions}
//                       openGallery={openGallery}
//                     />
//                   )}

//                   {!isWedding && isBridal && (
//                     <BridalSection
//                       section={section}
//                       headings={headings}
//                       descriptions={descriptions}
//                       openGallery={openGallery}
//                     />
//                   )}

//                   {!isWedding &&
//                     !isBridal &&
//                     isBaby && (
//                       <BabySection
//                         section={section}
//                         headings={headings}
//                         descriptions={descriptions}
//                         openGallery={openGallery}
//                       />
//                     )}

//                   {!isWedding &&
//                     !isBridal &&
//                     !isBaby && (
//                       <DefaultSection
//                         section={section}
//                         openGallery={openGallery}
//                       />
//                     )}

//                 </article>

//               );
//             })}

//           </div>

//         )}

//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}

//       <section className="border-y border-white/[0.08] bg-[#0a0a0a]">

//         <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:items-center lg:px-12 lg:py-28">

//           <div>

//             <span className="text-[9px] tracking-[0.35em] text-[#d6b36a]">
//               YOUR STORY STARTS HERE
//             </span>

//             <h2 className="mt-5 max-w-3xl font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">

//               Let's create something

//               <span className="italic text-[#d6b36a]">
//                 {" "}unforgettable.
//               </span>

//             </h2>

//           </div>

//           <Link
//             to="/contact"
//             className="
//               group
//               inline-flex
//               w-fit
//               items-center
//               gap-6
//               border
//               border-[#d6b36a]/60
//               px-7
//               py-4
//               text-[9px]
//               tracking-[0.3em]
//               text-[#d6b36a]
//               transition
//               hover:bg-[#d6b36a]
//               hover:text-black
//             "
//           >
//             GET IN TOUCH

//             <span className="text-base transition group-hover:translate-x-2">
//               →
//             </span>

//           </Link>

//         </div>

//       </section>

//       {/* =====================================================
//           LIGHTBOX
//       ===================================================== */}

//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         slides={currentImages}
//       />

//       <Footer />

//     </main>
//   );
// }

// /* =========================================================
//    WEDDING
// ========================================================= */

// function WeddingSection({
//   section,
//   headings,
//   descriptions,
//   openGallery,
// }) {
//   const images = Array.isArray(section.images)
//     ? section.images
//     : [];

//   if (!images.length) return null;

//   return (

//     <div className="space-y-24">

//       {/* FIRST IMAGE */}

//       {images[0] && (

//         <div className="grid items-center gap-10 lg:grid-cols-[0.65fr_1.35fr]">

//           <div className="order-2 lg:order-1">

//             <span className="text-[9px] tracking-[0.3em] text-[#d6b36a]">
//               01 / THE BEGINNING
//             </span>

//             <h3 className="mt-4 font-serif text-3xl font-light sm:text-4xl lg:text-5xl">
//               {headings[0] || "The Story Begins"}
//             </h3>

//             <p className="mt-6 text-sm leading-7 text-white/40">
//               {descriptions[0] ||
//                 DEFAULT_DESCRIPTIONS[0]}
//             </p>

//             <button
//               type="button"
//               onClick={() => openGallery(images)}
//               className="
//                 mt-8
//                 border-b
//                 border-[#d6b36a]/50
//                 pb-2
//                 text-[9px]
//                 tracking-[0.25em]
//                 text-[#d6b36a]
//                 transition
//                 hover:border-[#d6b36a]
//                 hover:text-white
//               "
//             >
//               OPEN STORY →
//             </button>

//           </div>

//           <CinematicImage
//             src={images[0]}
//             alt={section.title}
//             onClick={() => openGallery(images)}
//             className="order-1 min-h-[400px] lg:order-2"
//           />

//         </div>

//       )}

//       {/* IMAGE GRID */}

//       {images.length > 1 && (

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

//           {images.slice(1, 5).map((img, i) => (

//             <div
//               key={`wedding-grid-${i}`}
//               className="group"
//             >

//               <CinematicImage
//                 src={img}
//                 alt={section.title}
//                 onClick={() => openGallery(images)}
//                 className="min-h-[360px]"
//               />

//               <div className="mt-4">

//                 <span className="text-[8px] tracking-[0.3em] text-[#d6b36a]">
//                   FRAME {String(i + 2).padStart(2, "0")}
//                 </span>

//                 <p className="mt-2 text-sm text-white/60">
//                   {headings[i + 1] ||
//                     DEFAULT_HEADINGS[i + 1]}
//                 </p>

//               </div>

//             </div>

//           ))}

//         </div>

//       )}

//       {/* FEATURED MEMORY */}

//       {images[5] && (

//         <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">

//           <CinematicImage
//             src={images[5]}
//             alt={section.title}
//             onClick={() => openGallery(images)}
//             className="min-h-[450px]"
//           />

//           <div>

//             <span className="text-[9px] tracking-[0.3em] text-[#d6b36a]">
//               06 / FEATURED MEMORY
//             </span>

//             <h3 className="mt-4 font-serif text-3xl font-light sm:text-4xl">
//               {headings[5] ||
//                 DEFAULT_HEADINGS[5]}
//             </h3>

//             <p className="mt-6 text-sm leading-7 text-white/40">
//               {descriptions[5] ||
//                 DEFAULT_DESCRIPTIONS[5]}
//             </p>

//           </div>

//         </div>

//       )}

//       {/* CHAPTERS */}

//       {images.length > 6 && (

//         <div className="space-y-20">

//           {images.slice(6, 10).map((img, i) => {

//             const imageIndex = i + 6;

//             return (

//               <div
//                 key={`chapter-${imageIndex}`}
//                 className={`
//                   grid
//                   items-center
//                   gap-10
//                   lg:grid-cols-3
//                   ${i % 2 === 1
//                     ? "lg:[&>div:first-child]:order-2"
//                     : ""}
//                 `}
//               >

//                 <div>

//                   <span className="text-[8px] tracking-[0.3em] text-[#d6b36a]">
//                     CHAPTER{" "}
//                     {String(imageIndex + 1).padStart(2, "0")}
//                   </span>

//                   <h3 className="mt-4 font-serif text-3xl font-light">
//                     {headings[imageIndex] ||
//                       DEFAULT_HEADINGS[imageIndex]}
//                   </h3>

//                   <p className="mt-5 text-sm leading-7 text-white/40">
//                     {descriptions[imageIndex] ||
//                       DEFAULT_DESCRIPTIONS[imageIndex]}
//                   </p>

//                 </div>

//                 <CinematicImage
//                   src={img}
//                   alt={section.title}
//                   onClick={() => openGallery(images)}
//                   className="min-h-[380px] lg:col-span-2"
//                 />

//               </div>

//             );
//           })}

//         </div>

//       )}

//       {/* FINAL CUT */}

//       {images.length > 10 && (

//         <div>

//           <div className="mb-8">

//             <span className="text-[8px] tracking-[0.3em] text-[#d6b36a]">
//               FINAL CUT
//             </span>

//             <h3 className="mt-3 font-serif text-3xl font-light">
//               Album Highlights
//             </h3>

//           </div>

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

//             {images.slice(10, 14).map((img, i) => {

//               const imageIndex = i + 10;

//               /*
//                 IMPORTANT:
//                 This used to be:

//                 <button>
//                   <CinematicImage />  // CinematicImage was also button
//                 </button>

//                 That creates:
//                 <button>
//                   <button>
//                   </button>
//                 </button>

//                 Now the outer element is a div.
//               */

//               return (

//                 <div
//                   key={`final-${imageIndex}`}
//                   className="group text-left"
//                 >

//                   <CinematicImage
//                     src={img}
//                     alt={section.title}
//                     onClick={() => openGallery(images)}
//                     className="min-h-[350px]"
//                   />

//                   <div className="mt-3">

//                     <span className="text-[8px] tracking-[0.25em] text-[#d6b36a]">
//                       FRAME{" "}
//                       {String(imageIndex + 1).padStart(2, "0")}
//                     </span>

//                     <h4 className="mt-2 text-sm text-white/65">
//                       {headings[imageIndex] ||
//                         DEFAULT_HEADINGS[imageIndex] ||
//                         "Precious Memory"}
//                     </h4>

//                   </div>

//                 </div>

//               );
//             })}

//           </div>

//         </div>

//       )}

//       <GalleryButton title={section.title} />

//     </div>
//   );
// }

// /* =========================================================
//    CINEMATIC IMAGE
// ========================================================= */

// /*
//   IMPORTANT FIX:

//   Before:
//       <button>
//         <ProtectedImage />
//       </button>

//   This component was being placed inside another <button>
//   in WeddingSection.

//   Therefore React produced:

//       <button>
//         <button>
//         </button>
//       </button>

//   which is invalid HTML.

//   Now CinematicImage is a DIV with keyboard accessibility.
// */

// function CinematicImage({
//   src,
//   alt,
//   className = "",
//   onClick,
// }) {
//   if (!src) return null;

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault();

//       if (onClick) {
//         onClick();
//       }
//     }
//   };

//   return (

//     <div
//       role="button"
//       tabIndex={0}
//       onClick={onClick}
//       onKeyDown={handleKeyDown}
//       aria-label={`Open ${alt || "image"}`}
//       className={`
//         group
//         relative
//         flex
//         w-full
//         cursor-pointer
//         items-center
//         justify-center
//         overflow-hidden
//         bg-[#0b0b0b]
//         text-left
//         outline-none
//         focus:ring-1
//         focus:ring-[#d6b36a]
//         ${className}
//       `}
//     >

//       <ProtectedImage
//         src={src}
//         alt={alt}
//         className="
//           block
//           h-auto
//           w-auto
//           max-h-full
//           max-w-full
//           object-contain
//           object-center
//           transition
//           duration-700
//           ease-out
//           group-hover:scale-[1.015]
//         "
//         showLogoOnly={true}
//       />

//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-90" />

//       <div className="pointer-events-none absolute inset-3 border border-white/[0.12] transition duration-500 group-hover:border-[#d6b36a]/60 sm:inset-4" />

//       <span
//         className="
//           pointer-events-none
//           absolute
//           bottom-5
//           right-5
//           z-20
//           flex
//           h-10
//           w-10
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-white/25
//           bg-black/40
//           text-lg
//           backdrop-blur-md
//           transition
//           duration-300
//           group-hover:border-[#d6b36a]
//           group-hover:bg-[#d6b36a]
//           group-hover:text-black
//         "
//       >
//         +
//       </span>

//     </div>
//   );
// }

// /* =========================================================
//    BRIDAL
// ========================================================= */

// function BridalSection({
//   section,
//   headings,
//   descriptions,
//   openGallery,
// }) {
//   const images = Array.isArray(section.images)
//     ? section.images
//     : [];

//   if (!images.length) return null;

//   return (

//     <div className="space-y-14">

//       <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">

//         <div>

//           <span className="text-[8px] tracking-[0.3em] text-[#d6b36a]">
//             BRIDAL CELEBRATION
//           </span>

//           <h3 className="mt-4 font-serif text-3xl font-light sm:text-4xl">
//             A Celebration of Elegance
//           </h3>

//         </div>

//         <p className="max-w-2xl text-sm leading-7 text-white/40">
//           {section.desc ||
//             section.description ||
//             "A beautiful celebration filled with emotion, elegance and unforgettable moments."}
//         </p>

//       </div>

//       <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">

//         {images.map((img, i) => (

//           <div
//             key={`bridal-${i}`}
//             className="group mb-7 block w-full break-inside-avoid text-left"
//           >

//             <CinematicImage
//               src={img}
//               alt={section.title}
//               onClick={() => openGallery(images)}
//               className="min-h-[300px]"
//             />

//             <div className="mt-4">

//               <span className="text-[8px] tracking-[0.25em] text-[#d6b36a]">
//                 FRAME {String(i + 1).padStart(2, "0")}
//               </span>

//               <h4 className="mt-2 font-serif text-xl font-light">
//                 {headings[i] ||
//                   `Precious Moment ${i + 1}`}
//               </h4>

//               <p className="mt-2 text-xs leading-6 text-white/35">
//                 {descriptions[i] ||
//                   "A beautiful moment captured with emotion and elegance."}
//               </p>

//             </div>

//           </div>

//         ))}

//       </div>

//       <GalleryButton title={section.title} />

//     </div>
//   );
// }

// /* =========================================================
//    BABY
// ========================================================= */

// function BabySection({
//   section,
//   headings,
//   descriptions,
//   openGallery,
// }) {
//   const images = Array.isArray(section.images)
//     ? section.images
//     : [];

//   if (!images.length) return null;

//   return (

//     <div className="space-y-20">

//       <div className="max-w-3xl">

//         <span className="text-[8px] tracking-[0.3em] text-[#d6b36a]">
//           BABY SHOWER / BAPTISM
//         </span>

//         <p className="mt-5 text-sm leading-7 text-white/40">
//           {section.desc ||
//             section.description ||
//             "Celebrating the joy and warmth of this special journey."}
//         </p>

//       </div>

//       {images.map((img, i) => (

//         <article
//           key={`baby-${i}`}
//           className="grid items-center gap-10 lg:grid-cols-2"
//         >

//           <CinematicImage
//             src={img}
//             alt={section.title}
//             onClick={() => openGallery(images)}
//             className={`
//               min-h-[400px]
//               ${i % 2 === 1 ? "lg:order-2" : ""}
//             `}
//           />

//           <div
//             className={
//               i % 2 === 1
//                 ? "lg:order-1"
//                 : ""
//             }
//           >

//             <span className="text-[8px] tracking-[0.3em] text-[#d6b36a]">
//               MOMENT {String(i + 1).padStart(2, "0")}
//             </span>

//             <h3 className="mt-4 font-serif text-3xl font-light sm:text-4xl">
//               {headings[i] ||
//                 `Precious Moment ${i + 1}`}
//             </h3>

//             <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
//               {descriptions[i] ||
//                 "Celebrating the joy and warmth of this special journey."}
//             </p>

//           </div>

//         </article>

//       ))}

//       <GalleryButton title={section.title} />

//     </div>
//   );
// }

// /* =========================================================
//    DEFAULT PROJECT
// ========================================================= */

// function DefaultSection({
//   section,
//   openGallery,
// }) {
//   const images = Array.isArray(section.images)
//     ? section.images
//     : [];

//   return (

//     <div className="space-y-12">

//       <div className="max-w-2xl">

//         <span className="text-[8px] tracking-[0.3em] text-[#d6b36a]">
//           CURATED PROJECT
//         </span>

//         <p className="mt-5 text-sm leading-7 text-white/40">
//           {section.desc ||
//             section.description ||
//             "A curated visual story captured with cinematic detail."}
//         </p>

//       </div>

//       {images.length > 0 && (

//         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

//           {images.slice(0, 4).map((img, i) => (

//             <CinematicImage
//               key={`default-${i}`}
//               src={img}
//               alt={section.title}
//               onClick={() => openGallery(images)}
//               className="min-h-[350px]"
//             />

//           ))}

//         </div>

//       )}

//       <GalleryButton
//         title={section.title}
//         label="EXPLORE PROJECT"
//       />

//     </div>
//   );
// }

// /* =========================================================
//    GALLERY BUTTON
// ========================================================= */

// function GalleryButton({
//   title,
//   label = "VIEW FULL GALLERY",
// }) {
//   return (

//     <div className="pt-2">

//       <Link
//         to={`/gallery/${generateSlug(title)}`}
//         className="
//           group
//           inline-flex
//           items-center
//           gap-5
//           border-b
//           border-[#d6b36a]/50
//           pb-3
//           text-[9px]
//           tracking-[0.3em]
//           text-[#d6b36a]
//           transition
//           hover:border-[#d6b36a]
//           hover:text-white
//         "
//       >

//         <span>{label}</span>

//         <strong className="text-base transition duration-300 group-hover:translate-x-2">
//           →
//         </strong>

//       </Link>

//     </div>
//   );
// }

// export default Home;

// import React, { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";

// import Hero from "../components/Hero";
// import Footer from "../components/Footer";
// import ProtectedImage from "../components/ProtectedImage";

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// /* =========================================================
//    DEFAULT CONTENT
// ========================================================= */

// const DEFAULT_DESCRIPTIONS = [
//   "01. The Beginning of Forever — Our First Look",
//   "02. A Tender Moment Caught in Time",
//   "03. Walking Hand in Hand Towards Tomorrow",
//   "04. Joy and Laughter Shared with Loved Ones",
//   "05. The Grand Celebration and Vows",
//   "06. Unforgettable Emotions of the Day",
//   "07. Elegance in Every Single Detail",
//   "08. Dancing Under the Evening Lights",
//   "09. Sweet Whispers and Quiet Glances",
//   "10. Cherished Memories to Last a Lifetime",
//   "11. A Magical Evening Full of Grace",
//   "12. Smiles That Brighten the Whole World",
//   "13. Embracing the Warmth of Family",
//   "14. Looking Into Each Other's Eyes",
//   "15. The Perfect Ending to a Perfect Day",
// ];

// const DEFAULT_HEADINGS = [
//   "The Story Begins",
//   "Tender Highlight",
//   "Walking Together",
//   "Shared Laughter",
//   "Featured Memory",
//   "Pure Emotion",
//   "Elegant Detail",
//   "Evening Magic",
//   "Quiet Glance",
//   "Cherished Moment",
//   "Graceful Evening",
//   "Bright Smile",
//   "Family Warmth",
//   "Deep Connection",
//   "Grand Finale",
// ];

// /* =========================================================
//    HELPERS
// ========================================================= */

// const generateSlug = (titleText) => {
//   if (!titleText) return "";

//   return titleText
//     .toLowerCase()
//     .replace(/["']/g, "")
//     .replace(/&/g, "and")
//     .trim()
//     .replace(/[^\w\s-]/g, "")
//     .replace(/\s+/g, "-");
// };

// const fixImageUrl = (url) => {
//   if (!url) return "";

//   return url
//     .replace(
//       "http://localhost:5000",
//       "https://habesha-film-production-server.onrender.com"
//     )
//     .replace(
//       "http://localhost:4000",
//       "https://habesha-film-production-server.onrender.com"
//     );
// };

// /* =========================================================
//    SMALL DESIGN COMPONENTS
// ========================================================= */

// function SectionLabel({ number, children }) {
//   return (
//     <div className="flex items-center gap-3">
//       {number && (
//         <span className="font-mono text-[9px] tracking-[0.2em] text-[#c9a45c]">
//           {number}
//         </span>
//       )}

//       <span className="h-px w-8 bg-[#c9a45c]/60" />

//       <span className="text-[8px] font-medium tracking-[0.32em] text-white/40">
//         {children}
//       </span>
//     </div>
//   );
// }

// function ArrowIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className="h-4 w-4"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//     >
//       <path d="M5 12h13" />
//       <path d="m13 6 6 6-6 6" />
//     </svg>
//   );
// }

// function PlayIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className="h-4 w-4"
//       fill="currentColor"
//     >
//       <path d="M8 5.5v13L19 12 8 5.5Z" />
//     </svg>
//   );
// }

// /* =========================================================
//    IMAGE FRAME
// ========================================================= */

// function ImageFrame({
//   src,
//   alt = "",
//   className = "",
//   children,
// }) {
//   if (!src) return null;

//   return (
//     <div
//       className={`
//         relative flex h-full w-full items-center justify-center
//         overflow-hidden bg-[#101010]
//         ${className}
//       `}
//     >
//       <ProtectedImage
//         src={src}
//         alt={alt}
//         className="
//           block
//           h-auto
//           w-auto
//           max-h-full
//           max-w-full
//           object-contain
//           object-center
//         "
//         showLogoOnly={true}
//       />

//       <div className="pointer-events-none absolute inset-3 border border-white/[0.10] sm:inset-5" />

//       {children}
//     </div>
//   );
// }

// /* =========================================================
//    HOME
// ========================================================= */

// function Home() {
//   const [sections, setSections] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [open, setOpen] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);

//   const [featured, setFeatured] = useState(0);

//   /* =======================================================
//      LOAD PROJECTS
//   ======================================================= */

//   useEffect(() => {
//     let mounted = true;

//     const loadProjects = async () => {
//       try {
//         const response = await fetch(
//           "https://habesha-film-production-server.onrender.com/api/projects"
//         );

//         if (!response.ok) {
//           throw new Error("Failed to load projects");
//         }

//         const data = await response.json();

//         if (!Array.isArray(data)) {
//           throw new Error("Projects response is not an array");
//         }

//         const processedData = data.map((section) => {
//           let parsedDescriptions = [];
//           let parsedHeadings = [];

//           let mainDesc =
//             section.desc ||
//             section.description ||
//             "";

//           if (
//             typeof section.description === "string" &&
//             section.description.includes("||DESCS||")
//           ) {
//             const parts =
//               section.description.split("||DESCS||");

//             mainDesc = parts[0] || "";

//             try {
//               parsedDescriptions = parts[1]
//                 ? JSON.parse(parts[1])
//                 : [];
//             } catch {
//               parsedDescriptions = [];
//             }

//             try {
//               parsedHeadings = parts[2]
//                 ? JSON.parse(parts[2])
//                 : [];
//             } catch {
//               parsedHeadings = [];
//             }
//           }

//           const fixedImages = Array.isArray(section.images)
//             ? section.images
//                 .map(fixImageUrl)
//                 .filter(Boolean)
//             : [];

//           return {
//             ...section,
//             images: fixedImages,
//             desc: mainDesc,
//             descriptions: parsedDescriptions,
//             headings: parsedHeadings,
//           };
//         });

//         if (mounted) {
//           setSections(processedData);
//         }
//       } catch (error) {
//         console.error("Projects loading error:", error);

//         if (mounted) {
//           setSections([]);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     loadProjects();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   /* =======================================================
//      ALL IMAGES
//   ======================================================= */

//   const allImages = useMemo(() => {
//     return sections.flatMap((section) =>
//       Array.isArray(section.images)
//         ? section.images
//         : []
//     );
//   }, [sections]);

//   /* =======================================================
//      FEATURED IMAGE
//   ======================================================= */

//   useEffect(() => {
//     if (!allImages.length) {
//       setFeatured(0);
//       return;
//     }

//     setFeatured((current) =>
//       current >= allImages.length ? 0 : current
//     );
//   }, [allImages.length]);

//   const featuredImage =
//     allImages[featured] || allImages[0];

//   const nextFeatured = () => {
//     if (!allImages.length) return;

//     setFeatured(
//       (current) =>
//         (current + 1) % allImages.length
//     );
//   };

//   const previousFeatured = () => {
//     if (!allImages.length) return;

//     setFeatured(
//       (current) =>
//         (current - 1 + allImages.length) %
//         allImages.length
//     );
//   };

//   /* =======================================================
//      LIGHTBOX
//   ======================================================= */

//   const openGallery = (images) => {
//     if (!Array.isArray(images) || !images.length) {
//       return;
//     }

//     const slides = images
//       .filter(Boolean)
//       .map((src) => ({
//         src,
//       }));

//     if (!slides.length) return;

//     setCurrentImages(slides);
//     setOpen(true);
//   };

//   /* =======================================================
//      RENDER
//   ======================================================= */

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#070707] text-white">

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <Hero />

//       {/* =====================================================
//           CINEMATIC FEATURE
//       ===================================================== */}

//       {featuredImage && (
//         <section className="relative bg-[#070707]">

//           {/* cinematic top line */}
//           <div className="h-px w-full bg-white/[0.07]" />

//           <div className="mx-auto max-w-[1800px] px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">

//             <div className="relative overflow-hidden bg-[#0d0d0d]">

//               {/* =================================================
//                   FEATURE IMAGE
//               ================================================= */}

//               <div
//                 className="
//                   relative
//                   flex
//                   min-h-[62vh]
//                   items-center
//                   justify-center
//                   overflow-hidden
//                   bg-[#111]
//                   sm:min-h-[70vh]
//                   lg:min-h-[78vh]
//                 "
//               >

//                 <ProtectedImage
//                   src={featuredImage}
//                   alt="Featured film production"
//                   className="
//                     block
//                     h-auto
//                     w-auto
//                     max-h-full
//                     max-w-full
//                     object-contain
//                     object-center
//                     transition
//                     duration-1000
//                   "
//                   showLogoOnly={true}
//                 />

//                 {/* cinematic overlays */}

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

//                 {/* frame */}

//                 <div className="pointer-events-none absolute inset-3 border border-white/[0.14] sm:inset-6 lg:inset-8" />

//                 {/* number */}

//                 <div className="absolute left-6 top-6 z-20 sm:left-10 sm:top-10 lg:left-14 lg:top-14">

//                   <span className="font-serif text-5xl font-light leading-none text-white/25 sm:text-7xl lg:text-8xl">
//                     {String(featured + 1).padStart(2, "0")}
//                   </span>

//                 </div>

//                 {/* top right */}

//                 <div className="absolute right-6 top-6 z-20 sm:right-10 sm:top-10">

//                   <div className="flex items-center gap-3">

//                     <span className="h-1.5 w-1.5 rounded-full bg-[#c9a45c]" />

//                     <span className="text-[7px] tracking-[0.35em] text-white/50 sm:text-[8px]">
//                       YOSIEAL FILM PRODUCTION
//                     </span>

//                   </div>

//                 </div>

//                 {/* bottom cinematic caption */}

//                 <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10 lg:bottom-14 lg:left-14 lg:right-14">

//                   <div>

//                     <p className="mb-2 text-[7px] tracking-[0.35em] text-[#c9a45c]">
//                       FRAME / {String(featured + 1).padStart(2, "0")}
//                     </p>

//                     <h2 className="max-w-xl font-serif text-3xl font-light leading-none sm:text-5xl lg:text-7xl">
//                       Stories
//                       <span className="italic text-[#c9a45c]">
//                         {" "}in motion.
//                       </span>
//                     </h2>

//                   </div>

//                   <button
//                     type="button"
//                     onClick={() => openGallery(allImages)}
//                     className="
//                       hidden
//                       h-14
//                       w-14
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-white/30
//                       bg-black/30
//                       text-white
//                       backdrop-blur-md
//                       transition
//                       hover:border-[#c9a45c]
//                       hover:bg-[#c9a45c]
//                       hover:text-black
//                       sm:flex
//                     "
//                     aria-label="Open gallery"
//                   >
//                     <PlayIcon />
//                   </button>

//                 </div>

//               </div>

//               {/* =================================================
//                   FEATURE INFO BAR
//               ================================================= */}

//               <div
//                 className="
//                   grid
//                   border-t
//                   border-white/[0.08]
//                   bg-[#0b0b0b]
//                   lg:grid-cols-[1fr_auto_1fr]
//                 "
//               >

//                 {/* left */}

//                 <div className="flex items-center justify-between px-5 py-5 sm:px-8">

//                   <div>

//                     <span className="text-[7px] tracking-[0.3em] text-white/30">
//                       SELECTED FRAME
//                     </span>

//                     <div className="mt-1 font-mono text-xs text-white/70">
//                       {String(featured + 1).padStart(2, "0")}
//                       <span className="mx-2 text-white/20">
//                         /
//                       </span>
//                       {String(allImages.length).padStart(2, "0")}
//                     </div>

//                   </div>

//                   {/* mobile arrows */}

//                   <div className="flex gap-2 lg:hidden">

//                     <button
//                       type="button"
//                       onClick={previousFeatured}
//                       className="
//                         flex
//                         h-10
//                         w-10
//                         items-center
//                         justify-center
//                         border
//                         border-white/15
//                         text-white/60
//                         transition
//                         hover:border-[#c9a45c]
//                         hover:bg-[#c9a45c]
//                         hover:text-black
//                       "
//                       aria-label="Previous image"
//                     >
//                       ←
//                     </button>

//                     <button
//                       type="button"
//                       onClick={nextFeatured}
//                       className="
//                         flex
//                         h-10
//                         w-10
//                         items-center
//                         justify-center
//                         border
//                         border-white/15
//                         text-white/60
//                         transition
//                         hover:border-[#c9a45c]
//                         hover:bg-[#c9a45c]
//                         hover:text-black
//                       "
//                       aria-label="Next image"
//                     >
//                       →
//                     </button>

//                   </div>

//                 </div>

//                 {/* center */}

//                 <div className="hidden items-center justify-center border-x border-white/[0.08] px-12 lg:flex">

//                   <span className="text-[8px] tracking-[0.35em] text-white/30">
//                     WEDDING · EVENTS · CINEMATIC STORIES
//                   </span>

//                 </div>

//                 {/* right */}

//                 <div className="hidden items-center justify-end gap-3 px-8 lg:flex">

//                   <button
//                     type="button"
//                     onClick={previousFeatured}
//                     className="
//                       flex
//                       h-10
//                       w-10
//                       items-center
//                       justify-center
//                       border
//                       border-white/15
//                       text-white/60
//                       transition
//                       hover:border-[#c9a45c]
//                       hover:bg-[#c9a45c]
//                       hover:text-black
//                     "
//                     aria-label="Previous image"
//                   >
//                     ←
//                   </button>

//                   <button
//                     type="button"
//                     onClick={nextFeatured}
//                     className="
//                       flex
//                       h-10
//                       w-10
//                       items-center
//                       justify-center
//                       border
//                       border-white/15
//                       text-white/60
//                       transition
//                       hover:border-[#c9a45c]
//                       hover:bg-[#c9a45c]
//                       hover:text-black
//                     "
//                     aria-label="Next image"
//                   >
//                     →
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => openGallery(allImages)}
//                     className="
//                       ml-4
//                       flex
//                       items-center
//                       gap-3
//                       border-b
//                       border-[#c9a45c]/50
//                       pb-1
//                       text-[8px]
//                       tracking-[0.25em]
//                       text-[#c9a45c]
//                       transition
//                       hover:border-[#c9a45c]
//                       hover:text-white
//                     "
//                   >
//                     VIEW GALLERY
//                     <ArrowIcon />
//                   </button>

//                 </div>

//               </div>

//               {/* progress */}

//               <div className="h-[2px] w-full bg-white/[0.05]">

//                 <span
//                   className="block h-full bg-[#c9a45c] transition-all duration-700"
//                   style={{
//                     width: `${
//                       allImages.length
//                         ? ((featured + 1) /
//                             allImages.length) *
//                           100
//                         : 0
//                     }%`,
//                   }}
//                 />

//               </div>

//             </div>

//           </div>

//         </section>
//       )}

//       {/* =====================================================
//           INTRO / MANIFESTO
//       ===================================================== */}

//       <section className="relative overflow-hidden border-t border-white/[0.07]">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">

//           <div className="grid gap-14 lg:grid-cols-[240px_1fr] lg:gap-20">

//             {/* label */}

//             <div>

//               <SectionLabel number="01">
//                 OUR APPROACH
//               </SectionLabel>

//               <div className="mt-8 hidden space-y-2 lg:block">

//                 <p className="text-[8px] tracking-[0.25em] text-white/20">
//                   EMOTION
//                 </p>

//                 <p className="text-[8px] tracking-[0.25em] text-white/20">
//                   LIGHT
//                 </p>

//                 <p className="text-[8px] tracking-[0.25em] text-white/20">
//                   MOVEMENT
//                 </p>

//                 <p className="text-[8px] tracking-[0.25em] text-white/20">
//                   STORY
//                 </p>

//               </div>

//             </div>

//             {/* text */}

//             <div className="max-w-6xl">

//               <h2 className="font-serif text-[42px] font-light leading-[0.98] sm:text-6xl lg:text-[88px]">

//                 We turn real life into

//                 <span className="italic text-[#c9a45c]">
//                   {" "}cinema.
//                 </span>

//               </h2>

//               <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_260px]">

//                 <p className="max-w-2xl text-sm leading-8 text-white/40 sm:text-base">

//                   Every celebration has a rhythm.
//                   Every glance has a meaning.
//                   Every frame becomes part of a
//                   story that deserves to be remembered.

//                   <br />
//                   <br />

//                   We create refined cinematic films
//                   and photography for weddings,
//                   celebrations and extraordinary
//                   moments.

//                 </p>

//                 <div className="border-l border-[#c9a45c]/30 pl-6">

//                   <span className="font-serif text-4xl text-[#c9a45c]">
//                     01
//                   </span>

//                   <p className="mt-3 text-[8px] leading-5 tracking-[0.2em] text-white/30">
//                     CREATING VISUAL STORIES
//                     WITH PURPOSE, EMOTION
//                     AND TIMELESS STYLE.
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           PROJECTS
//       ===================================================== */}

//       <section className="border-t border-white/[0.07] bg-[#090909]">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           {/* heading */}

//           <div className="mb-20 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-end">

//             <div>

//               <SectionLabel number="02">
//                 SELECTED WORK
//               </SectionLabel>

//               <h2 className="mt-6 font-serif text-5xl font-light sm:text-6xl lg:text-8xl">
//                 Our
//                 <span className="italic text-[#c9a45c]">
//                   {" "}Stories
//                 </span>
//               </h2>

//             </div>

//             <p className="max-w-sm text-sm leading-7 text-white/35 lg:pb-2">

//               A selection of weddings,
//               celebrations and cinematic
//               stories captured by Yosieal.

//             </p>

//           </div>

//           {/* loading */}

//           {loading ? (

//             <div className="flex min-h-[400px] items-center justify-center border border-white/[0.07]">

//               <div className="flex flex-col items-center">

//                 <div className="mb-5 h-px w-20 overflow-hidden bg-white/10">

//                   <div className="h-full w-1/2 animate-pulse bg-[#c9a45c]" />

//                 </div>

//                 <span className="text-[8px] tracking-[0.35em] text-white/30">
//                   PREPARING THE STORIES
//                 </span>

//               </div>

//             </div>

//           ) : sections.length === 0 ? (

//             <div className="flex min-h-[400px] items-center justify-center border border-white/[0.07]">

//               <span className="text-[8px] tracking-[0.35em] text-white/25">
//                 NO STORIES AVAILABLE
//               </span>

//             </div>

//           ) : (

//             <div className="space-y-36">

//               {sections.map((section, index) => {

//                 const titleLower =
//                   section.title
//                     ? section.title.toLowerCase()
//                     : "";

//                 const isWedding =
//                   titleLower.includes("wedding");

//                 const isBridal =
//                   titleLower.includes("bridal");

//                 const isBaby =
//                   titleLower.includes("baby") ||
//                   titleLower.includes("baptism");

//                 const headings =
//                   section.headings?.length
//                     ? section.headings
//                     : DEFAULT_HEADINGS;

//                 const descriptions =
//                   section.descriptions?.length
//                     ? section.descriptions
//                     : DEFAULT_DESCRIPTIONS;

//                 const displayHeading =
//                   section.names?.trim() ||
//                   section.title ||
//                   "Untitled Project";

//                 return (

//                   <article
//                     key={section._id || `project-${index}`}
//                     className="relative"
//                   >

//                     {/* project heading */}

//                     <div className="mb-12 grid gap-7 border-b border-white/[0.08] pb-8 lg:grid-cols-[100px_1fr_auto] lg:items-end">

//                       <div className="flex items-center gap-3">

//                         <span className="font-mono text-xs text-[#c9a45c]">
//                           {String(index + 1).padStart(2, "0")}
//                         </span>

//                         <span className="h-px w-8 bg-white/15" />

//                       </div>

//                       <div>

//                         <span className="text-[7px] tracking-[0.32em] text-white/25">
//                           EVENT STORY
//                           {" / "}
//                           {section.date ||
//                             "FEATURED PROJECT"}
//                         </span>

//                         <h3 className="mt-3 font-serif text-4xl font-light sm:text-5xl lg:text-7xl">
//                           {displayHeading}
//                         </h3>

//                         {section.desc && (

//                           <p className="mt-5 max-w-2xl text-sm leading-7 text-white/35">
//                             {section.desc}
//                           </p>

//                         )}

//                       </div>

//                       <span className="hidden text-[7px] tracking-[0.3em] text-white/20 lg:block">
//                         YOSIEAL / FILM
//                       </span>

//                     </div>

//                     {/* project content */}

//                     {isWedding && (
//                       <WeddingSection
//                         section={section}
//                         headings={headings}
//                         descriptions={descriptions}
//                         openGallery={openGallery}
//                       />
//                     )}

//                     {!isWedding && isBridal && (
//                       <BridalSection
//                         section={section}
//                         headings={headings}
//                         descriptions={descriptions}
//                         openGallery={openGallery}
//                       />
//                     )}

//                     {!isWedding &&
//                       !isBridal &&
//                       isBaby && (
//                         <BabySection
//                           section={section}
//                           headings={headings}
//                           descriptions={descriptions}
//                           openGallery={openGallery}
//                         />
//                       )}

//                     {!isWedding &&
//                       !isBridal &&
//                       !isBaby && (
//                         <DefaultSection
//                           section={section}
//                           openGallery={openGallery}
//                         />
//                       )}

//                   </article>

//                 );
//               })}

//             </div>

//           )}

//         </div>

//       </section>

//       {/* =====================================================
//           SERVICES / STATEMENT
//       ===================================================== */}

//       <section className="border-t border-white/[0.07] bg-[#070707]">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid gap-12 lg:grid-cols-3">

//             <div>

//               <SectionLabel number="03">
//                 THE YOSIEAL EXPERIENCE
//               </SectionLabel>

//             </div>

//             <div className="border-t border-white/[0.08] pt-7">

//               <span className="font-mono text-[9px] text-[#c9a45c]">
//                 01
//               </span>

//               <h3 className="mt-4 font-serif text-3xl font-light">
//                 Cinematic
//                 <br />
//                 Composition
//               </h3>

//               <p className="mt-5 text-sm leading-7 text-white/35">
//                 Carefully composed frames,
//                 natural movement and visual
//                 storytelling designed to feel
//                 timeless.
//               </p>

//             </div>

//             <div className="border-t border-white/[0.08] pt-7">

//               <span className="font-mono text-[9px] text-[#c9a45c]">
//                 02
//               </span>

//               <h3 className="mt-4 font-serif text-3xl font-light">
//                 Authentic
//                 <br />
//                 Emotion
//               </h3>

//               <p className="mt-5 text-sm leading-7 text-white/35">
//                 We don't force moments.
//                 We observe, anticipate and
//                 preserve them exactly as they happen.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}

//       <section className="relative overflow-hidden border-y border-white/[0.08] bg-[#0b0b0b]">

//         <div className="pointer-events-none absolute inset-0">

//           <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a45c]/[0.025] blur-3xl" />

//         </div>

//         <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">

//           <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

//             <div>

//               <SectionLabel number="04">
//                 YOUR STORY STARTS HERE
//               </SectionLabel>

//               <h2 className="mt-7 max-w-5xl font-serif text-5xl font-light leading-[0.95] sm:text-6xl lg:text-8xl">

//                 Let's create something

//                 <span className="italic text-[#c9a45c]">
//                   {" "}unforgettable.
//                 </span>

//               </h2>

//               <p className="mt-8 max-w-xl text-sm leading-7 text-white/35">
//                 Your celebration deserves more
//                 than ordinary coverage. Let's turn
//                 your moments into a story that
//                 will live forever.
//               </p>

//             </div>

//             <Link
//               to="/contact"
//               className="
//                 group
//                 inline-flex
//                 w-fit
//                 items-center
//                 gap-8
//                 border
//                 border-[#c9a45c]/60
//                 px-7
//                 py-5
//                 text-[8px]
//                 tracking-[0.32em]
//                 text-[#c9a45c]
//                 transition
//                 duration-300
//                 hover:bg-[#c9a45c]
//                 hover:text-black
//                 sm:px-9
//               "
//             >

//               GET IN TOUCH

//               <span className="transition duration-300 group-hover:translate-x-2">
//                 <ArrowIcon />
//               </span>

//             </Link>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           LIGHTBOX
//       ===================================================== */}

//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         slides={currentImages}
//       />

//       <Footer />

//     </main>
//   );
// }

// /* =========================================================
//    WEDDING
// ========================================================= */

// function WeddingSection({
//   section,
//   headings,
//   descriptions,
//   openGallery,
// }) {
//   const images = Array.isArray(section.images)
//     ? section.images
//     : [];

//   if (!images.length) return null;

//   return (

//     <div className="space-y-28">

//       {/* =====================================================
//           FIRST IMAGE
//       ===================================================== */}

//       {images[0] && (

//         <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

//           <div className="order-2 lg:order-1">

//             <SectionLabel number="01">
//               THE BEGINNING
//             </SectionLabel>

//             <h3 className="mt-5 font-serif text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">

//               {headings[0] || "The Story Begins"}

//             </h3>

//             <p className="mt-6 max-w-md text-sm leading-7 text-white/35">

//               {descriptions[0] ||
//                 DEFAULT_DESCRIPTIONS[0]}

//             </p>

//             <button
//               type="button"
//               onClick={() => openGallery(images)}
//               className="
//                 mt-8
//                 inline-flex
//                 items-center
//                 gap-3
//                 border-b
//                 border-[#c9a45c]/50
//                 pb-2
//                 text-[8px]
//                 tracking-[0.28em]
//                 text-[#c9a45c]
//                 transition
//                 hover:border-[#c9a45c]
//                 hover:text-white
//               "
//             >
//               OPEN STORY
//               <ArrowIcon />
//             </button>

//           </div>

//           <CinematicImage
//             src={images[0]}
//             alt={section.title}
//             onClick={() => openGallery(images)}
//             className="order-1 min-h-[420px] lg:order-2 lg:min-h-[650px]"
//           />

//         </div>

//       )}

//       {/* =====================================================
//           IMAGE GRID
//       ===================================================== */}

//       {images.length > 1 && (

//         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

//           {images.slice(1, 5).map((img, i) => (

//             <div
//               key={`wedding-grid-${i}`}
//               className="group"
//             >

//               <CinematicImage
//                 src={img}
//                 alt={section.title}
//                 onClick={() => openGallery(images)}
//                 className="min-h-[330px] sm:min-h-[380px]"
//               />

//               <div className="mt-4">

//                 <span className="font-mono text-[8px] tracking-[0.25em] text-[#c9a45c]">
//                   FRAME {String(i + 2).padStart(2, "0")}
//                 </span>

//                 <p className="mt-2 font-serif text-lg font-light text-white/70">
//                   {headings[i + 1] ||
//                     DEFAULT_HEADINGS[i + 1]}
//                 </p>

//               </div>

//             </div>

//           ))}

//         </div>

//       )}

//       {/* =====================================================
//           FEATURED MEMORY
//       ===================================================== */}

//       {images[5] && (

//         <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">

//           <CinematicImage
//             src={images[5]}
//             alt={section.title}
//             onClick={() => openGallery(images)}
//             className="min-h-[450px] lg:min-h-[600px]"
//           />

//           <div>

//             <SectionLabel number="06">
//               FEATURED MEMORY
//             </SectionLabel>

//             <h3 className="mt-5 font-serif text-3xl font-light sm:text-4xl">

//               {headings[5] ||
//                 DEFAULT_HEADINGS[5]}

//             </h3>

//             <p className="mt-6 text-sm leading-7 text-white/35">

//               {descriptions[5] ||
//                 DEFAULT_DESCRIPTIONS[5]}

//             </p>

//           </div>

//         </div>

//       )}

//       {/* =====================================================
//           CHAPTERS
//       ===================================================== */}

//       {images.length > 6 && (

//         <div className="space-y-24">

//           {images.slice(6, 10).map((img, i) => {

//             const imageIndex = i + 6;

//             return (

//               <div
//                 key={`chapter-${imageIndex}`}
//                 className={`
//                   grid
//                   items-center
//                   gap-10
//                   lg:grid-cols-3
//                   lg:gap-14
//                   ${
//                     i % 2 === 1
//                       ? "lg:[&>div:first-child]:order-2"
//                       : ""
//                   }
//                 `}
//               >

//                 <div>

//                   <SectionLabel
//                     number={String(
//                       imageIndex + 1
//                     ).padStart(2, "0")}
//                   >
//                     CHAPTER
//                   </SectionLabel>

//                   <h3 className="mt-5 font-serif text-3xl font-light">

//                     {headings[imageIndex] ||
//                       DEFAULT_HEADINGS[imageIndex]}

//                   </h3>

//                   <p className="mt-5 text-sm leading-7 text-white/35">

//                     {descriptions[imageIndex] ||
//                       DEFAULT_DESCRIPTIONS[imageIndex]}

//                   </p>

//                 </div>

//                 <CinematicImage
//                   src={img}
//                   alt={section.title}
//                   onClick={() => openGallery(images)}
//                   className="min-h-[380px] lg:col-span-2 lg:min-h-[500px]"
//                 />

//               </div>

//             );
//           })}

//         </div>

//       )}

//       {/* =====================================================
//           FINAL CUT
//       ===================================================== */}

//       {images.length > 10 && (

//         <div>

//           <div className="mb-8">

//             <SectionLabel number="15">
//               FINAL CUT
//             </SectionLabel>

//             <h3 className="mt-4 font-serif text-3xl font-light">
//               Album Highlights
//             </h3>

//           </div>

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

//             {images.slice(10, 14).map((img, i) => {

//               const imageIndex = i + 10;

//               return (

//                 <div
//                   key={`final-${imageIndex}`}
//                   className="group text-left"
//                 >

//                   <CinematicImage
//                     src={img}
//                     alt={section.title}
//                     onClick={() => openGallery(images)}
//                     className="min-h-[330px]"
//                   />

//                   <div className="mt-4">

//                     <span className="font-mono text-[8px] tracking-[0.25em] text-[#c9a45c]">
//                       FRAME{" "}
//                       {String(imageIndex + 1).padStart(2, "0")}
//                     </span>

//                     <h4 className="mt-2 font-serif text-lg font-light text-white/65">
//                       {headings[imageIndex] ||
//                         DEFAULT_HEADINGS[imageIndex] ||
//                         "Precious Memory"}
//                     </h4>

//                   </div>

//                 </div>

//               );
//             })}

//           </div>

//         </div>

//       )}

//       <GalleryButton title={section.title} />

//     </div>
//   );
// }

// /* =========================================================
//    CINEMATIC IMAGE
// ========================================================= */

// function CinematicImage({
//   src,
//   alt,
//   className = "",
//   onClick,
// }) {
//   if (!src) return null;

//   const handleKeyDown = (event) => {

//     if (
//       event.key === "Enter" ||
//       event.key === " "
//     ) {

//       event.preventDefault();

//       if (onClick) {
//         onClick();
//       }

//     }
//   };

//   return (

//     <div
//       role="button"
//       tabIndex={0}
//       onClick={onClick}
//       onKeyDown={handleKeyDown}
//       aria-label={`Open ${alt || "image"}`}
//       className={`
//         group
//         relative
//         flex
//         w-full
//         cursor-pointer
//         items-center
//         justify-center
//         overflow-hidden
//         bg-[#101010]
//         text-left
//         outline-none
//         focus:ring-1
//         focus:ring-[#c9a45c]
//         ${className}
//       `}
//     >

//       <ProtectedImage
//         src={src}
//         alt={alt}
//         className="
//           block
//           h-auto
//           w-auto
//           max-h-full
//           max-w-full
//           object-contain
//           object-center
//           transition
//           duration-1000
//           ease-out
//           group-hover:scale-[1.025]
//         "
//         showLogoOnly={true}
//       />

//       {/* cinematic overlay */}

//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

//       {/* frame */}

//       <div className="pointer-events-none absolute inset-3 border border-white/[0.10] transition duration-500 group-hover:border-[#c9a45c]/60 sm:inset-4" />

//       {/* number */}

//       <span
//         className="
//           pointer-events-none
//           absolute
//           bottom-5
//           left-5
//           z-20
//           font-mono
//           text-[8px]
//           tracking-[0.2em]
//           text-white/30
//           transition
//           group-hover:text-[#c9a45c]
//         "
//       >
//         VIEW
//       </span>

//       {/* plus */}

//       <span
//         className="
//           pointer-events-none
//           absolute
//           bottom-5
//           right-5
//           z-20
//           flex
//           h-10
//           w-10
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-white/20
//           bg-black/40
//           text-lg
//           font-light
//           text-white/70
//           backdrop-blur-md
//           transition
//           duration-300
//           group-hover:border-[#c9a45c]
//           group-hover:bg-[#c9a45c]
//           group-hover:text-black
//         "
//       >
//         +
//       </span>

//     </div>
//   );
// }

// /* =========================================================
//    BRIDAL
// ========================================================= */

// function BridalSection({
//   section,
//   headings,
//   descriptions,
//   openGallery,
// }) {
//   const images = Array.isArray(section.images)
//     ? section.images
//     : [];

//   if (!images.length) return null;

//   return (

//     <div className="space-y-16">

//       <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">

//         <div>

//           <SectionLabel number="01">
//             BRIDAL CELEBRATION
//           </SectionLabel>

//           <h3 className="mt-5 font-serif text-3xl font-light sm:text-4xl lg:text-5xl">
//             A Celebration
//             <br />
//             of Elegance
//           </h3>

//         </div>

//         <p className="max-w-2xl text-sm leading-8 text-white/35">

//           {section.desc ||
//             section.description ||
//             "A beautiful celebration filled with emotion, elegance and unforgettable moments."}

//         </p>

//       </div>

//       <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">

//         {images.map((img, i) => (

//           <div
//             key={`bridal-${i}`}
//             className="group mb-8 block w-full break-inside-avoid text-left"
//           >

//             <CinematicImage
//               src={img}
//               alt={section.title}
//               onClick={() => openGallery(images)}
//               className="min-h-[320px]"
//             />

//             <div className="mt-4">

//               <span className="font-mono text-[8px] tracking-[0.25em] text-[#c9a45c]">
//                 FRAME {String(i + 1).padStart(2, "0")}
//               </span>

//               <h4 className="mt-2 font-serif text-xl font-light">
//                 {headings[i] ||
//                   `Precious Moment ${i + 1}`}
//               </h4>

//               <p className="mt-2 text-xs leading-6 text-white/30">
//                 {descriptions[i] ||
//                   "A beautiful moment captured with emotion and elegance."}
//               </p>

//             </div>

//           </div>

//         ))}

//       </div>

//       <GalleryButton title={section.title} />

//     </div>
//   );
// }

// /* =========================================================
//    BABY
// ========================================================= */

// function BabySection({
//   section,
//   headings,
//   descriptions,
//   openGallery,
// }) {
//   const images = Array.isArray(section.images)
//     ? section.images
//     : [];

//   if (!images.length) return null;

//   return (

//     <div className="space-y-24">

//       <div className="max-w-3xl">

//         <SectionLabel number="01">
//           BABY SHOWER / BAPTISM
//         </SectionLabel>

//         <p className="mt-6 text-sm leading-8 text-white/35">

//           {section.desc ||
//             section.description ||
//             "Celebrating the joy and warmth of this special journey."}

//         </p>

//       </div>

//       {images.map((img, i) => (

//         <article
//           key={`baby-${i}`}
//           className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
//         >

//           <CinematicImage
//             src={img}
//             alt={section.title}
//             onClick={() => openGallery(images)}
//             className={`
//               min-h-[400px]
//               lg:min-h-[520px]
//               ${i % 2 === 1 ? "lg:order-2" : ""}
//             `}
//           />

//           <div
//             className={
//               i % 2 === 1
//                 ? "lg:order-1"
//                 : ""
//             }
//           >

//             <SectionLabel
//               number={String(i + 1).padStart(2, "0")}
//             >
//               MOMENT
//             </SectionLabel>

//             <h3 className="mt-5 font-serif text-3xl font-light sm:text-4xl">

//               {headings[i] ||
//                 `Precious Moment ${i + 1}`}

//             </h3>

//             <p className="mt-6 max-w-md text-sm leading-8 text-white/35">

//               {descriptions[i] ||
//                 "Celebrating the joy and warmth of this special journey."}

//             </p>

//           </div>

//         </article>

//       ))}

//       <GalleryButton title={section.title} />

//     </div>
//   );
// }

// /* =========================================================
//    DEFAULT PROJECT
// ========================================================= */

// function DefaultSection({
//   section,
//   openGallery,
// }) {
//   const images = Array.isArray(section.images)
//     ? section.images
//     : [];

//   return (

//     <div className="space-y-12">

//       <div className="max-w-2xl">

//         <SectionLabel number="01">
//           CURATED PROJECT
//         </SectionLabel>

//         <p className="mt-6 text-sm leading-8 text-white/35">

//           {section.desc ||
//             section.description ||
//             "A curated visual story captured with cinematic detail."}

//         </p>

//       </div>

//       {images.length > 0 && (

//         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

//           {images.slice(0, 4).map((img, i) => (

//             <CinematicImage
//               key={`default-${i}`}
//               src={img}
//               alt={section.title}
//               onClick={() => openGallery(images)}
//               className="min-h-[350px]"
//             />

//           ))}

//         </div>

//       )}

//       <GalleryButton
//         title={section.title}
//         label="EXPLORE PROJECT"
//       />

//     </div>
//   );
// }

// /* =========================================================
//    GALLERY BUTTON
// ========================================================= */

// function GalleryButton({
//   title,
//   label = "VIEW FULL GALLERY",
// }) {
//   return (

//     <div className="pt-4">

//       <Link
//         to={`/gallery/${generateSlug(title)}`}
//         className="
//           group
//           inline-flex
//           items-center
//           gap-5
//           border-b
//           border-[#c9a45c]/50
//           pb-3
//           text-[8px]
//           tracking-[0.3em]
//           text-[#c9a45c]
//           transition
//           hover:border-[#c9a45c]
//           hover:text-white
//         "
//       >

//         <span>{label}</span>

//         <strong className="transition duration-300 group-hover:translate-x-2">
//           <ArrowIcon />
//         </strong>

//       </Link>

//     </div>
//   );
// }

// export default Home;

// import React, { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";

// import Hero from "../components/Hero";
// import Footer from "../components/Footer";
// import ProtectedImage from "../components/ProtectedImage";

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// /* =========================================================
//    DEFAULT CONTENT
// ========================================================= */

// const DEFAULT_DESCRIPTIONS = [
//   "01. The Beginning of Forever — Our First Look",
//   "02. A Tender Moment Caught in Time",
//   "03. Walking Hand in Hand Towards Tomorrow",
//   "04. Joy and Laughter Shared with Loved Ones",
//   "05. The Grand Celebration and Vows",
//   "06. Unforgettable Emotions of the Day",
//   "07. Elegance in Every Single Detail",
//   "08. Dancing Under the Evening Lights",
//   "09. Sweet Whispers and Quiet Glances",
//   "10. Cherished Memories to Last a Lifetime",
//   "11. A Magical Evening Full of Grace",
//   "12. Smiles That Brighten the Whole World",
//   "13. Embracing the Warmth of Family",
//   "14. Looking Into Each Other's Eyes",
//   "15. The Perfect Ending to a Perfect Day",
// ];

// const DEFAULT_HEADINGS = [
//   "The Story Begins",
//   "Tender Highlight",
//   "Walking Together",
//   "Shared Laughter",
//   "Featured Memory",
//   "Pure Emotion",
//   "Elegant Detail",
//   "Evening Magic",
//   "Quiet Glance",
//   "Cherished Moment",
//   "Graceful Evening",
//   "Bright Smile",
//   "Family Warmth",
//   "Deep Connection",
//   "Grand Finale",
// ];

// /* =========================================================
//    HELPERS
// ========================================================= */

// const generateSlug = (titleText) => {
//   if (!titleText) return "";

//   return titleText
//     .toLowerCase()
//     .replace(/["']/g, "")
//     .replace(/&/g, "and")
//     .trim()
//     .replace(/[^\w\s-]/g, "")
//     .replace(/\s+/g, "-");
// };

// const fixImageUrl = (url) => {
//   if (!url) return "";

//   return url
//     .replace(
//       "http://localhost:5000",
//       "https://habesha-film-production-server.onrender.com"
//     )
//     .replace(
//       "http://localhost:4000",
//       "https://habesha-film-production-server.onrender.com"
//     );
// };

// /* =========================================================
//    SMALL ICONS
// ========================================================= */

// function ArrowIcon({ className = "w-5 h-5" }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.4"
//       className={className}
//     >
//       <path d="M5 12h13" />
//       <path d="m13 6 6 6-6 6" />
//     </svg>
//   );
// }

// function PlusIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.2"
//       className="h-5 w-5"
//     >
//       <path d="M12 5v14" />
//       <path d="M5 12h14" />
//     </svg>
//   );
// }

// function PlayIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-5 w-5"
//     >
//       <path d="M8 5v14l11-7L8 5Z" />
//     </svg>
//   );
// }

// /* =========================================================
//    HOME
// ========================================================= */

// function Home() {
//   const [sections, setSections] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [open, setOpen] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);

//   const [featured, setFeatured] = useState(0);

//   /* =======================================================
//      LOAD PROJECTS
//   ======================================================= */

//   useEffect(() => {
//     let mounted = true;

//     const loadProjects = async () => {
//       try {
//         const response = await fetch(
//           "https://habesha-film-production-server.onrender.com/api/projects"
//         );

//         if (!response.ok) {
//           throw new Error("Failed to load projects");
//         }

//         const data = await response.json();

//         if (!Array.isArray(data)) {
//           throw new Error("Projects response is not an array");
//         }

//         const processedData = data.map((section) => {
//           let parsedDescriptions = [];
//           let parsedHeadings = [];

//           let mainDesc =
//             section.desc ||
//             section.description ||
//             "";

//           if (
//             typeof section.description === "string" &&
//             section.description.includes("||DESCS||")
//           ) {
//             const parts =
//               section.description.split("||DESCS||");

//             mainDesc = parts[0] || "";

//             try {
//               parsedDescriptions = parts[1]
//                 ? JSON.parse(parts[1])
//                 : [];
//             } catch {
//               parsedDescriptions = [];
//             }

//             try {
//               parsedHeadings = parts[2]
//                 ? JSON.parse(parts[2])
//                 : [];
//             } catch {
//               parsedHeadings = [];
//             }
//           }

//           const fixedImages = Array.isArray(section.images)
//             ? section.images
//                 .map(fixImageUrl)
//                 .filter(Boolean)
//             : [];

//           return {
//             ...section,
//             images: fixedImages,
//             desc: mainDesc,
//             descriptions: parsedDescriptions,
//             headings: parsedHeadings,
//           };
//         });

//         if (mounted) {
//           setSections(processedData);
//         }
//       } catch (error) {
//         console.error("Projects loading error:", error);

//         if (mounted) {
//           setSections([]);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     loadProjects();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   /* =======================================================
//      ALL IMAGES
//   ======================================================= */

//   const allImages = useMemo(() => {
//     return sections.flatMap((section) =>
//       Array.isArray(section.images)
//         ? section.images
//         : []
//     );
//   }, [sections]);

//   /* =======================================================
//      FEATURED
//   ======================================================= */

//   useEffect(() => {
//     if (!allImages.length) {
//       setFeatured(0);
//       return;
//     }

//     setFeatured((current) =>
//       current >= allImages.length ? 0 : current
//     );
//   }, [allImages.length]);

//   const featuredImage =
//     allImages[featured] || allImages[0];

//   const nextFeatured = () => {
//     if (!allImages.length) return;

//     setFeatured(
//       (current) =>
//         (current + 1) % allImages.length
//     );
//   };

//   const previousFeatured = () => {
//     if (!allImages.length) return;

//     setFeatured(
//       (current) =>
//         (current - 1 + allImages.length) %
//         allImages.length
//     );
//   };

//   /* =======================================================
//      LIGHTBOX
//   ======================================================= */

//   const openGallery = (images) => {
//     if (!Array.isArray(images) || !images.length) {
//       return;
//     }

//     const slides = images
//       .filter(Boolean)
//       .map((src) => ({
//         src,
//       }));

//     if (!slides.length) return;

//     setCurrentImages(slides);
//     setOpen(true);
//   };

//   /* =======================================================
//      PROJECT CATEGORY
//   ======================================================= */

//   const getCategory = (section) => {
//     const title = (
//       section.title ||
//       section.names ||
//       ""
//     ).toLowerCase();

//     if (title.includes("wedding")) return "WEDDING";
//     if (title.includes("bridal")) return "BRIDAL";
//     if (
//       title.includes("baby") ||
//       title.includes("baptism")
//     ) {
//       return "BABY";
//     }

//     return "PROJECT";
//   };

//   /* =======================================================
//      RENDER
//   ======================================================= */

//   return (
//     <main className="min-h-screen bg-[#f4f1eb] text-[#171717]">

//       {/* ===================================================
//           HERO
//       =================================================== */}

//       <Hero />

//       {/* ===================================================
//           INTRO
//       =================================================== */}

//       <section className="bg-[#f4f1eb] px-5 py-24 sm:px-8 lg:px-16 lg:py-36">
//         <div className="mx-auto max-w-[1450px]">

//           <div className="grid gap-14 lg:grid-cols-[0.8fr_1.8fr]">

//             <div>
//               <span className="font-mono text-[10px] tracking-[0.25em] text-[#8c6b35]">
//                 01 / YOSIEAL
//               </span>

//               <div className="mt-10 max-w-[230px]">
//                 <p className="text-[11px] leading-6 tracking-[0.08em] text-black/45">
//                   WEDDINGS
//                 </p>

//                 <p className="text-[11px] leading-6 tracking-[0.08em] text-black/45">
//                   CELEBRATIONS
//                 </p>

//                 <p className="text-[11px] leading-6 tracking-[0.08em] text-black/45">
//                   FILMS
//                 </p>

//                 <p className="text-[11px] leading-6 tracking-[0.08em] text-black/45">
//                   PHOTOGRAPHY
//                 </p>
//               </div>
//             </div>

//             <div>
//               <h1 className="max-w-6xl font-serif text-[46px] font-light leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-[100px]">
//                 Moments become
//                 <span className="block italic text-[#9a763d]">
//                   memories.
//                 </span>
//               </h1>

//               <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_300px]">

//                 <p className="max-w-2xl text-sm leading-8 text-black/50 sm:text-base">
//                   Yosieal creates visual stories
//                   around real people, real emotions
//                   and meaningful celebrations.
//                   Every image is made to feel personal,
//                   honest and timeless.
//                 </p>

//                 <div className="border-l border-black/15 pl-6">
//                   <span className="font-serif text-4xl text-[#9a763d]">
//                     2026
//                   </span>

//                   <p className="mt-4 text-[9px] leading-5 tracking-[0.2em] text-black/40">
//                     VISUAL STORIES CREATED
//                     FOR PEOPLE WHO WANT
//                     THEIR MOMENTS REMEMBERED.
//                   </p>
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ===================================================
//           FEATURED IMAGE
//       =================================================== */}

//       {featuredImage && (
//         <section className="bg-[#171717] text-white">

//           <div className="mx-auto max-w-[1700px]">

//             <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

//               {/* IMAGE */}

//               <div className="relative min-h-[600px] overflow-hidden bg-[#111] sm:min-h-[720px] lg:min-h-[850px]">

//                 <ProtectedImage
//                   src={featuredImage}
//                   alt="Featured Yosieal project"
//                   className="
//                     block
//                     h-full
//                     w-full
//                     object-contain
//                     object-center
//                     transition
//                     duration-1000
//                   "
//                   showLogoOnly={true}
//                 />

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

//                 <div className="absolute left-6 top-6 sm:left-10 sm:top-10">
//                   <span className="font-mono text-[10px] tracking-[0.3em] text-white/45">
//                     FEATURED FRAME
//                   </span>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => openGallery(allImages)}
//                   className="
//                     absolute
//                     bottom-6
//                     right-6
//                     flex
//                     h-14
//                     w-14
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#f4f1eb]
//                     text-black
//                     transition
//                     hover:scale-110
//                     sm:bottom-10
//                     sm:right-10
//                   "
//                   aria-label="Open gallery"
//                 >
//                   <PlayIcon />
//                 </button>

//               </div>

//               {/* FEATURE INFO */}

//               <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16 xl:p-20">

//                 <div className="flex items-center justify-between">
//                   <span className="font-mono text-[10px] tracking-[0.25em] text-white/35">
//                     01
//                   </span>

//                   <span className="text-[9px] tracking-[0.25em] text-[#c9a45c]">
//                     YOSIEAL
//                   </span>
//                 </div>

//                 <div className="my-20">

//                   <p className="text-[10px] tracking-[0.3em] text-white/35">
//                     SELECTED IMAGE
//                   </p>

//                   <h2 className="mt-7 font-serif text-5xl font-light leading-[0.95] sm:text-6xl xl:text-8xl">
//                     A story
//                     <span className="block italic text-[#c9a45c]">
//                       worth keeping.
//                     </span>
//                   </h2>

//                   <p className="mt-8 max-w-md text-sm leading-8 text-white/40">
//                     A single frame can hold an entire
//                     feeling. Explore the complete
//                     collection and discover every
//                     chapter.
//                   </p>

//                 </div>

//                 <div>

//                   <div className="mb-7 h-px w-full bg-white/10">
//                     <div
//                       className="h-full bg-[#c9a45c] transition-all duration-500"
//                       style={{
//                         width: allImages.length
//                           ? `${((featured + 1) / allImages.length) * 100}%`
//                           : "0%",
//                       }}
//                     />
//                   </div>

//                   <div className="flex items-center justify-between">

//                     <span className="font-mono text-[10px] text-white/35">
//                       {String(featured + 1).padStart(2, "0")}
//                       {" / "}
//                       {String(allImages.length).padStart(2, "0")}
//                     </span>

//                     <div className="flex gap-2">

//                       <button
//                         type="button"
//                         onClick={previousFeatured}
//                         className="
//                           flex
//                           h-11
//                           w-11
//                           items-center
//                           justify-center
//                           border
//                           border-white/15
//                           transition
//                           hover:border-[#c9a45c]
//                           hover:text-[#c9a45c]
//                         "
//                         aria-label="Previous image"
//                       >
//                         ←
//                       </button>

//                       <button
//                         type="button"
//                         onClick={nextFeatured}
//                         className="
//                           flex
//                           h-11
//                           w-11
//                           items-center
//                           justify-center
//                           border
//                           border-white/15
//                           transition
//                           hover:border-[#c9a45c]
//                           hover:text-[#c9a45c]
//                         "
//                         aria-label="Next image"
//                       >
//                         →
//                       </button>

//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>
//       )}

//       {/* ===================================================
//           PROJECTS
//       =================================================== */}

//       <section className="bg-[#e9e5dd] px-5 py-24 sm:px-8 lg:px-16 lg:py-36">

//         <div className="mx-auto max-w-[1450px]">

//           {/* PROJECT HEADER */}

//           <div className="mb-20 grid gap-8 border-b border-black/15 pb-10 lg:grid-cols-[1fr_360px] lg:items-end">

//             <div>

//               <span className="font-mono text-[10px] tracking-[0.25em] text-[#8c6b35]">
//                 02 / COLLECTION
//               </span>

//               <h2 className="mt-6 font-serif text-6xl font-light leading-none tracking-[-0.03em] sm:text-7xl lg:text-[110px]">
//                 Recent
//                 <span className="italic text-[#9a763d]">
//                   {" "}stories.
//                 </span>
//               </h2>

//             </div>

//             <p className="max-w-sm text-sm leading-7 text-black/45">
//               Weddings, celebrations and personal
//               stories captured through photography
//               and film.
//             </p>

//           </div>

//           {/* LOADING */}

//           {loading ? (

//             <div className="flex min-h-[350px] items-center justify-center">
//               <span className="font-mono text-[10px] tracking-[0.25em] text-black/35">
//                 LOADING STORIES...
//               </span>
//             </div>

//           ) : sections.length === 0 ? (

//             <div className="flex min-h-[350px] items-center justify-center">
//               <span className="font-mono text-[10px] tracking-[0.25em] text-black/35">
//                 NO STORIES AVAILABLE
//               </span>
//             </div>

//           ) : (

//             <div className="space-y-32">

//               {sections.map((section, index) => {

//                 const images = Array.isArray(section.images)
//                   ? section.images
//                   : [];

//                 const headings =
//                   section.headings?.length
//                     ? section.headings
//                     : DEFAULT_HEADINGS;

//                 const descriptions =
//                   section.descriptions?.length
//                     ? section.descriptions
//                     : DEFAULT_DESCRIPTIONS;

//                 const displayHeading =
//                   section.names?.trim() ||
//                   section.title ||
//                   "Untitled Project";

//                 const category = getCategory(section);

//                 return (

//                   <article
//                     key={section._id || `project-${index}`}
//                   >

//                     {/* PROJECT TOP */}

//                     <div className="mb-12 grid gap-7 lg:grid-cols-[80px_1fr_auto] lg:items-end">

//                       <span className="font-mono text-sm text-[#9a763d]">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>

//                       <div>

//                         <span className="text-[9px] tracking-[0.3em] text-black/35">
//                           {category}
//                           {" / "}
//                           {section.date || "RECENT"}
//                         </span>

//                         <h3 className="mt-4 font-serif text-5xl font-light leading-none sm:text-6xl lg:text-8xl">
//                           {displayHeading}
//                         </h3>

//                         {section.desc && (
//                           <p className="mt-6 max-w-2xl text-sm leading-7 text-black/45">
//                             {section.desc}
//                           </p>
//                         )}

//                       </div>

//                       <span className="font-mono text-[9px] tracking-[0.2em] text-black/30">
//                         {String(images.length).padStart(2, "0")} FRAMES
//                       </span>

//                     </div>

//                     {/* VISUAL PROJECT */}

//                     <div className="grid gap-5 lg:grid-cols-12">

//                       {/* LARGE IMAGE */}

//                       {images[0] && (
//                         <div
//                           className="group relative cursor-pointer overflow-hidden bg-[#d7d2c8] lg:col-span-7"
//                           onClick={() => openGallery(images)}
//                         >

//                           <div className="aspect-[4/5] lg:aspect-[5/6]">

//                             <ProtectedImage
//                               src={images[0]}
//                               alt={displayHeading}
//                               className="
//                                 h-full
//                                 w-full
//                                 object-contain
//                                 transition
//                                 duration-1000
//                                 group-hover:scale-[1.02]
//                               "
//                               showLogoOnly={true}
//                             />

//                           </div>

//                           <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">

//                             <span className="font-mono text-[9px] tracking-[0.2em] text-white drop-shadow-lg">
//                               FRAME 01
//                             </span>

//                             <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition group-hover:bg-[#c9a45c]">
//                               <PlusIcon />
//                             </span>

//                           </div>

//                         </div>
//                       )}

//                       {/* SIDE IMAGES */}

//                       <div className="grid gap-5 lg:col-span-5">

//                         {images.slice(1, 3).map((img, imageIndex) => (

//                           <div
//                             key={`${section._id || index}-${imageIndex}`}
//                             className="group relative cursor-pointer overflow-hidden bg-[#d7d2c8]"
//                             onClick={() => openGallery(images)}
//                           >

//                             <div className="aspect-[16/10] lg:aspect-[16/11]">

//                               <ProtectedImage
//                                 src={img}
//                                 alt={displayHeading}
//                                 className="
//                                   h-full
//                                   w-full
//                                   object-contain
//                                   transition
//                                   duration-1000
//                                   group-hover:scale-[1.02]
//                                 "
//                                 showLogoOnly={true}
//                               />

//                             </div>

//                             <div className="absolute bottom-4 left-4 right-4 flex justify-between">

//                               <span className="font-mono text-[8px] tracking-[0.2em] text-white drop-shadow">
//                                 FRAME{" "}
//                                 {String(imageIndex + 2).padStart(2, "0")}
//                               </span>

//                               <span className="text-white opacity-0 transition group-hover:opacity-100">
//                                 <PlusIcon />
//                               </span>

//                             </div>

//                           </div>

//                         ))}

//                       </div>

//                     </div>

//                     {/* PROJECT DESCRIPTION */}

//                     {images.length > 3 && (

//                       <div className="mt-10 grid gap-8 border-t border-black/15 pt-8 lg:grid-cols-[1fr_1fr_180px]">

//                         <div>
//                           <span className="font-mono text-[9px] tracking-[0.25em] text-[#9a763d]">
//                             THE STORY
//                           </span>

//                           <h4 className="mt-4 font-serif text-3xl font-light">
//                             {headings[3] || "The Story"}
//                           </h4>
//                         </div>

//                         <p className="max-w-md text-sm leading-7 text-black/45">
//                           {descriptions[3] ||
//                             "A moment preserved with care, character and emotion."}
//                         </p>

//                         <Link
//                           to={`/gallery/${generateSlug(
//                             displayHeading
//                           )}`}
//                           className="
//                             flex
//                             h-fit
//                             items-center
//                             justify-between
//                             gap-4
//                             border-b
//                             border-black/20
//                             pb-3
//                             text-[9px]
//                             tracking-[0.25em]
//                             transition
//                             hover:border-[#9a763d]
//                             hover:text-[#9a763d]
//                           "
//                         >
//                           VIEW STORY
//                           <ArrowIcon className="h-4 w-4" />
//                         </Link>

//                       </div>

//                     )}

//                   </article>

//                 );
//               })}

//             </div>

//           )}

//         </div>

//       </section>

//       {/* ===================================================
//           IMAGE WALL
//       =================================================== */}

//       {allImages.length > 5 && (

//         <section className="bg-[#171717] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-36">

//           <div className="mx-auto max-w-[1450px]">

//             <div className="mb-14 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

//               <div>

//                 <span className="font-mono text-[10px] tracking-[0.25em] text-[#c9a45c]">
//                   03 / VISUAL ARCHIVE
//                 </span>

//                 <h2 className="mt-5 font-serif text-5xl font-light sm:text-7xl">
//                   The archive
//                 </h2>

//               </div>

//               <button
//                 type="button"
//                 onClick={() => openGallery(allImages)}
//                 className="
//                   inline-flex
//                   items-center
//                   gap-4
//                   border-b
//                   border-white/25
//                   pb-2
//                   text-[9px]
//                   tracking-[0.25em]
//                   transition
//                   hover:border-[#c9a45c]
//                   hover:text-[#c9a45c]
//                 "
//               >
//                 OPEN ALL
//                 <ArrowIcon className="h-4 w-4" />
//               </button>

//             </div>

//             <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

//               {allImages.slice(0, 12).map((img, index) => (

//                 <button
//                   type="button"
//                   key={`archive-${index}`}
//                   onClick={() => openGallery(allImages)}
//                   className={`
//                     group
//                     relative
//                     overflow-hidden
//                     bg-[#101010]
//                     text-left
//                     ${
//                       index === 0
//                         ? "col-span-2 row-span-2"
//                         : ""
//                     }
//                   `}
//                 >

//                   <div
//                     className={`
//                       ${
//                         index === 0
//                           ? "aspect-square"
//                           : "aspect-[4/5]"
//                       }
//                     `}
//                   >

//                     <ProtectedImage
//                       src={img}
//                       alt={`Archive ${index + 1}`}
//                       className="
//                         h-full
//                         w-full
//                         object-contain
//                         transition
//                         duration-700
//                         group-hover:scale-[1.03]
//                       "
//                       showLogoOnly={true}
//                     />

//                   </div>

//                   <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />

//                   <span className="absolute bottom-3 left-3 font-mono text-[8px] tracking-[0.2em] text-white/60">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                 </button>

//               ))}

//             </div>

//           </div>

//         </section>

//       )}

//       {/* ===================================================
//           STATEMENT
//       =================================================== */}

//       <section className="bg-[#f4f1eb] px-5 py-28 sm:px-8 lg:px-16 lg:py-40">

//         <div className="mx-auto max-w-[1450px]">

//           <div className="grid gap-14 lg:grid-cols-[240px_1fr]">

//             <div>
//               <span className="font-mono text-[10px] tracking-[0.25em] text-[#8c6b35]">
//                 04 / PHILOSOPHY
//               </span>
//             </div>

//             <div>

//               <h2 className="max-w-6xl font-serif text-5xl font-light leading-[0.95] sm:text-6xl lg:text-[90px]">
//                 Beautiful images are
//                 <span className="italic text-[#9a763d]">
//                   {" "}only the beginning.
//                 </span>
//               </h2>

//               <div className="mt-12 grid gap-10 border-t border-black/15 pt-10 sm:grid-cols-3">

//                 <div>
//                   <span className="font-mono text-[10px] text-[#9a763d]">
//                     01
//                   </span>

//                   <h3 className="mt-4 font-serif text-2xl">
//                     Observe
//                   </h3>

//                   <p className="mt-4 text-sm leading-7 text-black/45">
//                     We look for the moments that
//                     happen naturally.
//                   </p>
//                 </div>

//                 <div>
//                   <span className="font-mono text-[10px] text-[#9a763d]">
//                     02
//                   </span>

//                   <h3 className="mt-4 font-serif text-2xl">
//                     Create
//                   </h3>

//                   <p className="mt-4 text-sm leading-7 text-black/45">
//                     We shape light, movement and
//                     composition into a visual story.
//                   </p>
//                 </div>

//                 <div>
//                   <span className="font-mono text-[10px] text-[#9a763d]">
//                     03
//                   </span>

//                   <h3 className="mt-4 font-serif text-2xl">
//                     Preserve
//                   </h3>

//                   <p className="mt-4 text-sm leading-7 text-black/45">
//                     We deliver memories designed
//                     to remain meaningful for years.
//                   </p>
//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ===================================================
//           CTA
//       =================================================== */}

//       <section className="bg-[#c9a45c] px-5 py-24 sm:px-8 lg:px-16 lg:py-32">

//         <div className="mx-auto max-w-[1450px]">

//           <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

//             <div>

//               <span className="font-mono text-[10px] tracking-[0.25em] text-black/50">
//                 05 / CONTACT
//               </span>

//               <h2 className="mt-7 max-w-5xl font-serif text-5xl font-light leading-[0.92] tracking-[-0.03em] sm:text-7xl lg:text-[100px]">
//                 Your moment.
//                 <span className="block italic">
//                   Your story.
//                 </span>
//               </h2>

//             </div>

//             <Link
//               to="/contact"
//               className="
//                 group
//                 flex
//                 w-fit
//                 items-center
//                 gap-8
//                 border
//                 border-black/40
//                 px-8
//                 py-5
//                 text-[9px]
//                 tracking-[0.28em]
//                 text-black
//                 transition
//                 hover:bg-black
//                 hover:text-white
//               "
//             >
//               START A CONVERSATION

//               <span className="transition group-hover:translate-x-2">
//                 <ArrowIcon />
//               </span>

//             </Link>

//           </div>

//         </div>

//       </section>

//       {/* ===================================================
//           LIGHTBOX
//       =================================================== */}

//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         slides={currentImages}
//       />

//       {/* ===================================================
//           FOOTER
//       =================================================== */}

//       <Footer />

//     </main>
//   );
// }

// export default Home;

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
      "https://habesha-film-production-server.onrender.com"
    )
    .replace(
      "http://localhost:4000",
      "https://habesha-film-production-server.onrender.com"
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
          "https://habesha-film-production-server.onrender.com/api/projects"
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
                        to={`/gallery/${generateSlug(
                          title
                        )}`}
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