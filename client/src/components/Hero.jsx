
// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import Welcome from "../assets/images/biruk pic.png";

// function Hero() {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">

//       {/* Background Video */}
//       <div className="absolute inset-0">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           src={Welcome}
//           className="h-full w-full object-cover brightness-110 contrast-105 saturate-105"
//         />

//         <div className="absolute inset-0 bg-black/20" />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
//       </div>

//       {/* Navbar */}
//       <div className="absolute inset-x-0 top-0 z-50">
//         <Navbar />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 flex min-h-screen items-center px-6 pt-24 sm:px-10 md:px-16 lg:px-24">

//         <div className="max-w-3xl">

//           {/* Eyebrow */}
//           <div className="mb-5 flex items-center gap-3">
//             <span className="h-px w-12 bg-[#d8ae55]" />
//             <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#f0ca75] sm:text-xs">
//               Film Production Studio
//             </span>
//           </div>

//           {/* Main Title */}
//           <h1 className="font-serif text-6xl font-bold uppercase leading-[0.85] tracking-[-0.04em] text-white drop-shadow-2xl sm:text-8xl md:text-[110px] lg:text-[135px]">
//             YOSIEAL
//           </h1>

//           {/* Gold line */}
//           <div className="my-6 h-px w-24 bg-[#d8ae55]" />

//           {/* Subtitle */}
//           <h2 className="max-w-2xl text-xl font-light uppercase tracking-[0.18em] text-white sm:text-2xl md:text-3xl">
//             Film Production
//           </h2>

//           {/* Description */}
//           <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
//             Cinematic films, commercials and visual stories crafted
//             with creativity, precision and a distinctive artistic vision.
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 flex flex-wrap gap-4">
//             <Link
//               to="/client-selection"
//               className="group inline-flex items-center gap-3 bg-[#d8ae55] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.22em] text-black transition duration-300 hover:bg-[#f0ca75] hover:shadow-[0_0_30px_rgba(216,174,85,0.35)] sm:px-7"
//             >
//               Start Your Story
//               <span className="transition-transform duration-300 group-hover:translate-x-1">
//                 →
//               </span>
//             </Link>

//             <Link
//               to="/about"
//               className="inline-flex items-center border border-white/40 bg-black/10 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm transition duration-300 hover:border-[#d8ae55] hover:text-[#f0ca75] sm:px-7"
//             >
//               Discover Yosieal
//             </Link>
//           </div>

//           {/* Studio Details */}
//           <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[9px] uppercase tracking-[0.25em] text-white/55 sm:text-[10px]">
//             <span>Film</span>
//             <span className="h-1 w-1 rounded-full bg-[#d8ae55]" />
//             <span>Commercials</span>
//             <span className="h-1 w-1 rounded-full bg-[#d8ae55]" />
//             <span>Visual Stories</span>
//           </div>

//         </div>
//       </div>

//       {/* Scroll */}
//       <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
//         <span className="text-[8px] uppercase tracking-[0.35em] text-white/50">
//           Scroll
//         </span>
//         <span className="h-8 w-px bg-gradient-to-b from-[#d8ae55] to-transparent" />
//       </div>

//     </section>
//   );
// }

// export default Hero;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// import Logo from "../assets/images/birukLogo-Ai.png";
// import HeroImage from "../assets/images/Edit-birukLogo.png";

// function Hero() {
//   const [introFinished, setIntroFinished] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIntroFinished(true);
//     }, 4200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">

//       {/* =====================================================
//           CINEMATIC LOGO INTRO
//       ===================================================== */}

//       <div
//         className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-all duration-[1200ms] ${
//           introFinished
//             ? "pointer-events-none opacity-0"
//             : "opacity-100"
//         }`}
//       >

//         {/* Gold ambient light */}
//         <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff9d1c]/10 blur-[120px] animate-pulse" />

//         {/* Cinematic horizontal light */}
//         <div className="logo-light absolute left-[-40%] top-1/2 h-[2px] w-[180%] bg-gradient-to-r from-transparent via-[#ffae2b] to-transparent opacity-0" />

//         {/* Logo */}
//         <div className="logo-reveal relative flex flex-col items-center">

//           <div className="relative">

//             <img
//               src={Logo}
//               alt="Biruk Pictures"
//               className="h-auto w-[280px] object-contain drop-shadow-[0_0_35px_rgba(255,157,28,0.22)] sm:w-[380px] md:w-[500px]"
//             />

//             {/* Light reflection over logo */}
//             <div className="logo-shine pointer-events-none absolute inset-0" />

//           </div>

//           {/* Intro line */}
//           <div className="mt-8 flex items-center gap-4 opacity-0 animate-intro-text">

//             <span className="h-px w-10 bg-[#ff9d1c]" />

//             <span className="text-[8px] uppercase tracking-[0.5em] text-white/60 sm:text-[9px]">
//               Photography • Film • Production
//             </span>

//             <span className="h-px w-10 bg-[#ff9d1c]" />

//           </div>

//         </div>

//       </div>


//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section
//         className={`relative min-h-screen w-full transition-all duration-[1800ms] ${
//           introFinished
//             ? "scale-100 opacity-100"
//             : "scale-[1.04] opacity-0"
//         }`}
//       >

//         {/* ================= BACKGROUND ================= */}

//         <div className="absolute inset-0">

//           <img
//             src={HeroImage}
//             alt="Biruk Pictures"
//             className="h-full w-full object-cover object-center"
//           />

//           {/* Dark cinematic overlay */}
//           <div className="absolute inset-0 bg-black/35" />

//           {/* Left shadow */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

//           {/* Bottom shadow */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

//           {/* Warm cinematic glow */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,157,28,0.10),transparent_35%)]" />

//         </div>


//         {/* ================= NAVBAR ================= */}

//         <div className="absolute inset-x-0 top-0 z-50">
//           <Navbar />
//         </div>


//         {/* =================================================
//             HERO CONTENT
//         ================================================= */}

//         <div className="relative z-10 flex min-h-screen items-center px-6 pt-24 sm:px-10 md:px-16 lg:px-24">

//           <div className="w-full max-w-6xl">

//             {/* Small brand label */}

//             <div className="mb-6 flex items-center gap-4">

//               <span className="h-px w-14 bg-[#ff9d1c]" />

//               <span className="text-[9px] font-medium uppercase tracking-[0.42em] text-[#ffbd63] sm:text-[10px]">
//                 Photography • Film • Production
//               </span>

//             </div>


//             {/* Main heading */}

//             <h1 className="max-w-4xl font-serif text-5xl font-medium uppercase leading-[0.88] tracking-[-0.04em] text-white drop-shadow-2xl sm:text-7xl md:text-8xl lg:text-[115px]">

//               Your Story.

//               <span className="block text-[#ff9d1c]">
//                 Our Vision.
//               </span>

//             </h1>


//             {/* Gold line */}

//             <div className="my-7 flex items-center gap-3">

//               <span className="h-[2px] w-20 bg-[#ff9d1c]" />

//               <span className="h-1.5 w-1.5 rounded-full bg-[#ff9d1c]" />

//               <span className="h-px w-12 bg-white/30" />

//             </div>


//             {/* Subtitle */}

//             <h2 className="max-w-2xl text-lg font-light uppercase tracking-[0.18em] text-white/90 sm:text-xl md:text-2xl">

//               We capture moments

//               <span className="text-[#ffb94f]">
//                 {" "}that last forever.
//               </span>

//             </h2>


//             {/* Description */}

//             <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">

//               Professional photography, cinematic films and visual
//               stories crafted with creativity, passion and precision.

//             </p>


//             {/* ================= BUTTONS ================= */}

//             <div className="mt-9 flex flex-wrap gap-4">

//               <Link
//                 to="/gallery"
//                 className="group inline-flex items-center gap-4 bg-[#ff9d1c] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:bg-[#ffbd63] hover:shadow-[0_0_40px_rgba(255,157,28,0.35)]"
//               >
//                 View Our Work

//                 <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
//                   →
//                 </span>
//               </Link>


//               <Link
//                 to="/client-selection"
//                 className="inline-flex items-center border border-white/35 bg-black/10 px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md transition-all duration-300 hover:border-[#ff9d1c] hover:text-[#ffbd63]"
//               >
//                 Start a Project
//               </Link>

//             </div>


//             {/* ================= SERVICES ================= */}

//             <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[8px] uppercase tracking-[0.3em] text-white/45 sm:text-[9px]">

//               <span>Weddings</span>

//               <span className="h-1 w-1 rounded-full bg-[#ff9d1c]" />

//               <span>Events</span>

//               <span className="h-1 w-1 rounded-full bg-[#ff9d1c]" />

//               <span>Portraits</span>

//               <span className="h-1 w-1 rounded-full bg-[#ff9d1c]" />

//               <span>Commercial</span>

//             </div>

//           </div>

//         </div>


//         {/* =================================================
//             BOTTOM INFORMATION
//         ================================================= */}

//         <div className="absolute bottom-7 left-6 right-6 z-20 border-t border-white/10 pt-4 sm:left-10 sm:right-10 md:left-16 md:right-16 lg:left-24 lg:right-24">

//           <div className="flex items-center justify-between">

//             <div className="flex items-center gap-3">

//               <span className="h-1.5 w-1.5 rounded-full bg-[#ff9d1c] animate-pulse" />

//               <span className="text-[8px] uppercase tracking-[0.35em] text-white/40 sm:text-[9px]">
//                 Biruk Pictures
//               </span>

//             </div>


//             <div className="flex items-center gap-3">

//               <span className="text-[8px] uppercase tracking-[0.35em] text-white/30">
//                 Scroll to explore
//               </span>

//               <span className="h-7 w-px bg-gradient-to-b from-[#ff9d1c] to-transparent" />

//             </div>

//           </div>

//         </div>


//         {/* ================= SIDE TEXT ================= */}

//         <div className="absolute bottom-32 right-7 z-20 hidden lg:block">

//           <span className="text-[8px] uppercase tracking-[0.5em] text-white/30 [writing-mode:vertical-rl]">
//             Create • Capture • Remember
//           </span>

//         </div>

//       </section>


//       {/* =====================================================
//           ANIMATION STYLES
//       ===================================================== */}

//       <style>{`

//         @keyframes logoReveal {

//           0% {
//             opacity: 0;
//             transform: scale(0.82);
//             filter: blur(12px);
//           }

//           45% {
//             opacity: 1;
//             transform: scale(1.03);
//             filter: blur(0);
//           }

//           70% {
//             opacity: 1;
//             transform: scale(1);
//             filter: blur(0);
//           }

//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }

//         }


//         @keyframes logoLight {

//           0% {
//             left: -50%;
//             opacity: 0;
//           }

//           25% {
//             opacity: 0.9;
//           }

//           55% {
//             opacity: 0.6;
//           }

//           100% {
//             left: 100%;
//             opacity: 0;
//           }

//         }


//         @keyframes logoShine {

//           0% {
//             transform: translateX(-130%) skewX(-20deg);
//             opacity: 0;
//           }

//           30% {
//             opacity: 0;
//           }

//           45% {
//             opacity: 0.8;
//           }

//           65% {
//             opacity: 0;
//           }

//           100% {
//             transform: translateX(130%) skewX(-20deg);
//             opacity: 0;
//           }

//         }


//         @keyframes introText {

//           0% {
//             opacity: 0;
//             transform: translateY(10px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }

//         }


//         .logo-reveal {
//           animation: logoReveal 2.4s cubic-bezier(.22,.61,.36,1) forwards;
//         }


//         .logo-light {
//           animation: logoLight 2.2s ease-in-out 0.5s forwards;
//         }


//         .logo-shine {
//           position: absolute;
//           top: 0;
//           bottom: 0;
//           left: 0;
//           width: 25%;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(255,255,255,0.7),
//             transparent
//           );
//           filter: blur(8px);
//           transform: translateX(-130%) skewX(-20deg);
//           animation: logoShine 2.5s ease-in-out 0.7s forwards;
//         }


//         .animate-intro-text {
//           animation: introText 1s ease-out 1.7s forwards;
//         }

//       `}</style>

//     </main>
//   );
// }

// export default Hero;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// import Logo from "../assets/images/birukLogo-Ai.png";
// import HeroImage from "../assets/images/Edit-birukLogo.png";

// function Hero() {
//   const [introFinished, setIntroFinished] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIntroFinished(true);
//     }, 3500);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <main className="relative min-h-screen w-full overflow-hidden bg-[#080808] text-white">

//       {/* =====================================================
//           CINEMATIC INTRO
//       ===================================================== */}

//       <div
//         className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#050505] transition-all duration-[1400ms] ${
//           introFinished
//             ? "pointer-events-none opacity-0"
//             : "opacity-100"
//         }`}
//       >

//         {/* Ambient glow */}
//         <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f59e0b]/10 blur-[130px]" />

//         {/* Horizontal light */}
//         <div className="intro-light absolute left-[-50%] top-1/2 h-px w-[200%] bg-gradient-to-r from-transparent via-[#f6b94c] to-transparent" />

//         {/* Logo */}
//         <div className="intro-logo relative flex flex-col items-center">

//           <img
//             src={Logo}
//             alt="Biruk Pictures"
//             className="w-[230px] object-contain drop-shadow-[0_0_45px_rgba(245,158,11,0.25)] sm:w-[320px] md:w-[400px]"
//           />

//           <div className="intro-caption mt-8 flex items-center gap-4">

//             <span className="h-px w-12 bg-[#d99a28]" />

//             <span className="text-[8px] uppercase tracking-[0.5em] text-white/50 sm:text-[9px]">
//               Visual Storytelling Studio
//             </span>

//             <span className="h-px w-12 bg-[#d99a28]" />

//           </div>

//         </div>
//       </div>


//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section
//         className={`relative min-h-screen w-full overflow-hidden transition-all duration-[1800ms] ${
//           introFinished
//             ? "scale-100 opacity-100"
//             : "scale-[1.03] opacity-0"
//         }`}
//       >

//         {/* =================================================
//             BACKGROUND IMAGE
//         ================================================= */}

//         <div className="absolute inset-0">

//           <img
//             src={HeroImage}
//             alt="Biruk Pictures"
//             className="h-full w-full object-cover object-center"
//           />

//           {/* Main dark overlay */}
//           <div className="absolute inset-0 bg-black/45" />

//           {/* Strong left gradient */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/75 to-black/10" />

//           {/* Bottom gradient */}
//           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />

//           {/* Gold atmosphere */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(245,158,11,0.12),transparent_30%)]" />

//         </div>


//         {/* =================================================
//             DECORATIVE FRAME
//         ================================================= */}

//         <div className="pointer-events-none absolute inset-5 z-20 border border-white/[0.06] sm:inset-7 md:inset-10" />


//         {/* =================================================
//             NAVBAR
//         ================================================= */}

//         <div className="absolute inset-x-0 top-0 z-50">
//           <Navbar />
//         </div>


//         {/* =================================================
//             LEFT CONTENT
//         ================================================= */}

//         <div className="relative z-30 flex min-h-screen items-center px-8 pt-28 sm:px-12 md:px-20 lg:px-28">

//           <div className="max-w-4xl">

//             {/* Eyebrow */}

//             <div className="hero-item mb-7 flex items-center gap-4">

//               <span className="h-px w-16 bg-[#e7aa3c]" />

//               <span className="text-[9px] font-medium uppercase tracking-[0.45em] text-[#e7aa3c] sm:text-[10px]">
//                 Biruk Pictures
//               </span>

//             </div>


//             {/* Main heading */}

//             <h1 className="hero-title font-serif text-[54px] font-medium uppercase leading-[0.86] tracking-[-0.045em] text-white sm:text-[76px] md:text-[95px] lg:text-[118px]">

//               We Create

//               <span className="block pl-5 text-[#e8a92e] sm:pl-8">
//                 Memories.
//               </span>

//             </h1>


//             {/* Gold divider */}

//             <div className="my-8 flex items-center gap-3">

//               <span className="h-[2px] w-24 bg-[#e7aa3c]" />

//               <span className="h-1.5 w-1.5 rounded-full bg-[#e7aa3c]" />

//               <span className="h-px w-16 bg-white/20" />

//             </div>


//             {/* Subtitle */}

//             <h2 className="max-w-2xl text-base font-light uppercase leading-relaxed tracking-[0.16em] text-white/85 sm:text-lg md:text-xl">

//               Photography

//               <span className="mx-2 text-[#e7aa3c]">•</span>

//               Cinematic Films

//               <span className="mx-2 text-[#e7aa3c]">•</span>

//               Production

//             </h2>


//             {/* Description */}

//             <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">

//               We transform real moments into timeless visual stories.
//               From weddings and events to portraits and commercial films,
//               every frame is created with purpose.

//             </p>


//             {/* =================================================
//                 BUTTONS
//             ================================================= */}

//             <div className="mt-9 flex flex-wrap items-center gap-4">

//               <Link
//                 to="/gallery"
//                 className="group relative inline-flex items-center gap-5 overflow-hidden bg-[#e7aa3c] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-black transition-all duration-500 hover:bg-[#f2bd55] hover:shadow-[0_0_45px_rgba(231,170,60,0.3)]"
//               >

//                 <span className="relative z-10">
//                   Explore Our Work
//                 </span>

//                 <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-2">
//                   →
//                 </span>

//                 <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />

//               </Link>


//               <Link
//                 to="/client-selection"
//                 className="group inline-flex items-center gap-3 border border-white/25 bg-white/[0.03] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-md transition-all duration-300 hover:border-[#e7aa3c] hover:text-[#e7aa3c]"
//               >

//                 Start a Project

//                 <span className="transition-transform duration-300 group-hover:translate-x-1">
//                   ↗
//                 </span>

//               </Link>

//             </div>


//             {/* =================================================
//                 STATS
//             ================================================= */}

//             <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-6 sm:gap-12">

//               <div>
//                 <div className="font-serif text-2xl text-[#e7aa3c]">
//                   10+
//                 </div>

//                 <div className="mt-1 text-[7px] uppercase tracking-[0.3em] text-white/40">
//                   Years Experience
//                 </div>
//               </div>


//               <div className="h-8 w-px bg-white/10" />


//               <div>
//                 <div className="font-serif text-2xl text-[#e7aa3c]">
//                   500+
//                 </div>

//                 <div className="mt-1 text-[7px] uppercase tracking-[0.3em] text-white/40">
//                   Projects
//                 </div>
//               </div>


//               <div className="h-8 w-px bg-white/10" />


//               <div>
//                 <div className="font-serif text-2xl text-[#e7aa3c]">
//                   100%
//                 </div>

//                 <div className="mt-1 text-[7px] uppercase tracking-[0.3em] text-white/40">
//                   Passion
//                 </div>
//               </div>

//             </div>

//           </div>
//         </div>


//         {/* =================================================
//             RIGHT SIDE LABEL
//         ================================================= */}

//         <div className="absolute bottom-32 right-8 z-30 hidden lg:block">

//           <div className="flex items-center gap-4">

//             <span className="text-[8px] uppercase tracking-[0.5em] text-white/30 [writing-mode:vertical-rl]">
//               Create • Capture • Remember
//             </span>

//             <div className="h-24 w-px bg-gradient-to-b from-transparent via-[#e7aa3c] to-transparent" />

//           </div>

//         </div>


//         {/* =================================================
//             BOTTOM BAR
//         ================================================= */}

//         <div className="absolute bottom-7 left-8 right-8 z-30 sm:left-12 sm:right-12 md:left-20 md:right-20 lg:left-28 lg:right-28">

//           <div className="flex items-center justify-between border-t border-white/10 pt-4">

//             {/* Left */}

//             <div className="flex items-center gap-3">

//               <span className="relative flex h-2 w-2">

//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e7aa3c] opacity-50" />

//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e7aa3c]" />

//               </span>

//               <span className="text-[7px] uppercase tracking-[0.4em] text-white/35 sm:text-[8px]">
//                 Biruk Pictures Studio
//               </span>

//             </div>


//             {/* Right */}

//             <div className="flex items-center gap-4">

//               <span className="hidden text-[7px] uppercase tracking-[0.4em] text-white/25 sm:block">
//                 Scroll to explore
//               </span>

//               <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">

//                 <span className="h-1.5 w-px animate-bounce bg-[#e7aa3c]" />

//               </div>

//             </div>

//           </div>

//         </div>


//         {/* =================================================
//             CORNER DECORATION
//         ================================================= */}

//         <div className="absolute right-10 top-32 z-20 hidden h-16 w-16 border-r border-t border-[#e7aa3c]/30 lg:block" />

//         <div className="absolute bottom-28 left-10 z-20 hidden h-16 w-16 border-b border-l border-[#e7aa3c]/30 lg:block" />

//       </section>


//       {/* =====================================================
//           ANIMATIONS
//       ===================================================== */}

//       <style>{`

//         /* =========================
//            INTRO LOGO
//         ========================= */

//         @keyframes introLogo {

//           0% {
//             opacity: 0;
//             transform: scale(0.75);
//             filter: blur(15px);
//           }

//           45% {
//             opacity: 1;
//             transform: scale(1.05);
//             filter: blur(0);
//           }

//           70% {
//             transform: scale(1);
//           }

//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }

//         }


//         @keyframes introLight {

//           0% {
//             left: -60%;
//             opacity: 0;
//           }

//           20% {
//             opacity: 0.8;
//           }

//           50% {
//             opacity: 0.5;
//           }

//           100% {
//             left: 110%;
//             opacity: 0;
//           }

//         }


//         @keyframes introCaption {

//           0% {
//             opacity: 0;
//             transform: translateY(15px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }

//         }


//         .intro-logo {
//           animation:
//             introLogo 2.2s
//             cubic-bezier(.22,.61,.36,1)
//             forwards;
//         }


//         .intro-light {
//           animation:
//             introLight 2.2s
//             ease-in-out
//             0.3s
//             forwards;
//         }


//         .intro-caption {
//           opacity: 0;
//           animation:
//             introCaption 1s
//             ease-out
//             1.5s
//             forwards;
//         }


//         /* =========================
//            HERO ANIMATIONS
//         ========================= */

//         @keyframes heroFade {

//           0% {
//             opacity: 0;
//             transform: translateY(30px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }

//         }


//         @keyframes heroTitle {

//           0% {
//             opacity: 0;
//             transform: translateY(50px);
//             filter: blur(8px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//             filter: blur(0);
//           }

//         }


//         .hero-item {
//           animation:
//             heroFade 1s
//             ease-out
//             3.3s
//             both;
//         }


//         .hero-title {
//           animation:
//             heroTitle 1.4s
//             cubic-bezier(.22,.61,.36,1)
//             3.4s
//             both;
//         }


//       `}</style>

//     </main>
//   );
// }

// export default Hero;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// import Logo from "../assets/images/birukLogo-Ai.png";
// import HeroImage from "../assets/images/Edit-birukLogo.png";

// function Hero() {
//   const [introFinished, setIntroFinished] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIntroFinished(true);
//     }, 3200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">

//       {/* =====================================================
//           LUXURY LOGO INTRO
//       ===================================================== */}

//       <div
//         className={`fixed inset-0 z-[999] flex items-center justify-center bg-black transition-all duration-[1500ms] ${
//           introFinished
//             ? "pointer-events-none opacity-0"
//             : "opacity-100"
//         }`}
//       >

//         {/* Soft cinematic glow */}

//         <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c58b35]/10 blur-[140px]" />


//         {/* Moving light */}

//         <div className="intro-beam absolute left-[-40%] top-1/2 h-px w-[180%] bg-gradient-to-r from-transparent via-[#e5b45b] to-transparent" />


//         {/* Logo container */}

//         <div className="intro-brand relative flex flex-col items-center">

//           {/* Monogram */}

//           <div className="relative mb-7 flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">

//             <div className="absolute inset-0 rotate-45 border border-[#d9a441]/40" />

//             <div className="absolute inset-2 rotate-45 border border-white/10" />

//             <span className="font-serif text-5xl font-light tracking-[-0.08em] text-[#e3b35a]">
//               BP
//             </span>

//           </div>


//           {/* Brand name */}

//           <h1 className="font-serif text-2xl font-medium uppercase tracking-[0.32em] text-white sm:text-3xl">

//             BIRUK

//             <span className="ml-3 text-[#d9a441]">
//               PICTURES
//             </span>

//           </h1>


//           {/* Elegant line */}

//           <div className="intro-line mt-6 flex items-center gap-4">

//             <span className="h-px w-12 bg-[#d9a441]" />

//             <span className="text-[7px] uppercase tracking-[0.5em] text-white/40">
//               Visual Storytelling
//             </span>

//             <span className="h-px w-12 bg-[#d9a441]" />

//           </div>

//         </div>

//       </div>


//       {/* =====================================================
//           HERO SECTION
//       ===================================================== */}

//       <section
//         className={`relative min-h-screen w-full transition-all duration-[1800ms] ${
//           introFinished
//             ? "scale-100 opacity-100"
//             : "scale-[1.05] opacity-0"
//         }`}
//       >

//         {/* =================================================
//             IMAGE
//         ================================================= */}

//         <div className="absolute inset-0">

//           <img
//             src={HeroImage}
//             alt="Biruk Pictures"
//             className="h-full w-full object-cover object-center"
//           />

//           {/* Cinematic darkness */}

//           <div className="absolute inset-0 bg-black/30" />


//           {/* Left luxury gradient */}

//           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />


//           {/* Bottom fade */}

//           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />


//           {/* Gold atmosphere */}

//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(210,157,60,0.14),transparent_32%)]" />

//         </div>


//         {/* =================================================
//             NAVBAR
//         ================================================= */}

//         <div className="absolute inset-x-0 top-0 z-50">
//           <Navbar />
//         </div>


//         {/* =================================================
//             MAIN CONTENT
//         ================================================= */}

//         <div className="relative z-30 flex min-h-screen items-center px-7 pt-24 sm:px-12 md:px-20 lg:px-28">

//           <div className="w-full max-w-7xl">


//             {/* Small top label */}

//             <div className="hero-fade mb-8 flex items-center gap-4">

//               <span className="h-px w-20 bg-[#d9a441]" />

//               <span className="text-[8px] uppercase tracking-[0.55em] text-[#d9a441] sm:text-[9px]">
//                 BIRUK PICTURES
//               </span>

//             </div>


//             {/* =================================================
//                 MAIN TITLE
//             ================================================= */}

//             <h2 className="hero-title max-w-5xl font-serif text-[56px] font-light leading-[0.82] tracking-[-0.055em] sm:text-[78px] md:text-[100px] lg:text-[132px]">

//               Moments

//               <span className="block pl-8 text-white/80 sm:pl-14">

//                 Become

//               </span>

//               <span className="block text-[#d9a441]">

//                 Stories.

//               </span>

//             </h2>


//             {/* =================================================
//                 DESCRIPTION AREA
//             ================================================= */}

//             <div className="mt-9 flex flex-col gap-7 md:flex-row md:items-center md:gap-12">


//               {/* Gold vertical line */}

//               <div className="hidden h-14 w-px bg-[#d9a441] md:block" />


//               <p className="max-w-lg text-sm font-light leading-7 tracking-wide text-white/55 sm:text-base">

//                 We capture authentic moments and transform them
//                 into timeless photographs and cinematic films
//                 that remain long after the moment has passed.

//               </p>

//             </div>


//             {/* =================================================
//                 BUTTONS
//             ================================================= */}

//             <div className="mt-10 flex flex-wrap gap-4">

//               <Link
//                 to="/gallery"
//                 className="group relative inline-flex items-center gap-5 overflow-hidden border border-[#d9a441] bg-[#d9a441] px-8 py-4 text-[8px] font-bold uppercase tracking-[0.35em] text-black transition-all duration-500 hover:bg-[#edc36f] hover:shadow-[0_0_50px_rgba(217,164,65,0.25)]"
//               >

//                 <span>
//                   Discover Our Work
//                 </span>

//                 <span className="text-base transition-transform duration-300 group-hover:translate-x-2">
//                   →
//                 </span>

//               </Link>


//               <Link
//                 to="/client-selection"
//                 className="group inline-flex items-center gap-4 border border-white/25 bg-black/20 px-8 py-4 text-[8px] font-medium uppercase tracking-[0.35em] text-white backdrop-blur-sm transition-all duration-500 hover:border-[#d9a441] hover:text-[#d9a441]"
//               >

//                 Work With Us

//                 <span className="transition-transform duration-300 group-hover:translate-x-1">
//                   ↗
//                 </span>

//               </Link>

//             </div>


//             {/* =================================================
//                 SERVICES
//             ================================================= */}

//             <div className="mt-12 flex flex-wrap items-center gap-5">

//               <span className="text-[7px] uppercase tracking-[0.4em] text-white/35 sm:text-[8px]">
//                 Weddings
//               </span>

//               <span className="h-1 w-1 rounded-full bg-[#d9a441]" />

//               <span className="text-[7px] uppercase tracking-[0.4em] text-white/35 sm:text-[8px]">
//                 Events
//               </span>

//               <span className="h-1 w-1 rounded-full bg-[#d9a441]" />

//               <span className="text-[7px] uppercase tracking-[0.4em] text-white/35 sm:text-[8px]">
//                 Portraits
//               </span>

//               <span className="h-1 w-1 rounded-full bg-[#d9a441]" />

//               <span className="text-[7px] uppercase tracking-[0.4em] text-white/35 sm:text-[8px]">
//                 Films
//               </span>

//             </div>

//           </div>

//         </div>


//         {/* =================================================
//             RIGHT SIDE BRAND
//         ================================================= */}

//         <div className="absolute right-10 top-1/2 z-30 hidden -translate-y-1/2 lg:block">

//           <div className="flex flex-col items-center gap-5">

//             <div className="h-16 w-px bg-gradient-to-b from-transparent via-[#d9a441] to-transparent" />

//             <span className="text-[7px] uppercase tracking-[0.6em] text-white/30 [writing-mode:vertical-rl]">
//               Photography • Film • Production
//             </span>

//             <div className="h-16 w-px bg-gradient-to-b from-[#d9a441] via-white/20 to-transparent" />

//           </div>

//         </div>


//         {/* =================================================
//             BOTTOM BRAND BAR
//         ================================================= */}

//         <div className="absolute bottom-7 left-7 right-7 z-40 sm:left-12 sm:right-12 md:left-20 md:right-20 lg:left-28 lg:right-28">

//           <div className="flex items-center justify-between border-t border-white/10 pt-4">


//             {/* Brand */}

//             <div className="flex items-center gap-3">

//               <div className="flex h-6 w-6 items-center justify-center border border-[#d9a441]/50">

//                 <span className="font-serif text-[9px] text-[#d9a441]">
//                   BP
//                 </span>

//               </div>

//               <span className="text-[7px] uppercase tracking-[0.45em] text-white/30 sm:text-[8px]">
//                 Biruk Pictures
//               </span>

//             </div>


//             {/* Scroll */}

//             <div className="flex items-center gap-4">

//               <span className="hidden text-[7px] uppercase tracking-[0.45em] text-white/25 sm:block">
//                 Explore
//               </span>

//               <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">

//                 <span className="h-1.5 w-px animate-bounce bg-[#d9a441]" />

//               </div>

//             </div>

//           </div>

//         </div>


//         {/* =================================================
//             DECORATIVE CORNERS
//         ================================================= */}

//         <div className="absolute left-8 top-28 hidden h-14 w-14 border-l border-t border-[#d9a441]/25 lg:block" />

//         <div className="absolute bottom-24 right-8 hidden h-14 w-14 border-b border-r border-[#d9a441]/25 lg:block" />

//       </section>


//       {/* =====================================================
//           ANIMATIONS
//       ===================================================== */}

//       <style>{`

//         @keyframes introBrand {

//           0% {
//             opacity: 0;
//             transform: scale(0.85);
//             filter: blur(12px);
//           }

//           45% {
//             opacity: 1;
//             transform: scale(1.04);
//             filter: blur(0);
//           }

//           70% {
//             transform: scale(1);
//           }

//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }

//         }


//         @keyframes introBeam {

//           0% {
//             left: -60%;
//             opacity: 0;
//           }

//           20% {
//             opacity: 0.9;
//           }

//           50% {
//             opacity: 0.45;
//           }

//           100% {
//             left: 110%;
//             opacity: 0;
//           }

//         }


//         @keyframes introLine {

//           0% {
//             opacity: 0;
//             transform: translateY(10px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }

//         }


//         @keyframes titleReveal {

//           0% {
//             opacity: 0;
//             transform: translateY(55px);
//             filter: blur(10px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//             filter: blur(0);
//           }

//         }


//         @keyframes fadeUp {

//           0% {
//             opacity: 0;
//             transform: translateY(25px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }

//         }


//         .intro-brand {
//           animation:
//             introBrand 2.1s
//             cubic-bezier(.22,.61,.36,1)
//             forwards;
//         }


//         .intro-beam {
//           animation:
//             introBeam 2.1s
//             ease-in-out
//             0.2s
//             forwards;
//         }


//         .intro-line {
//           opacity: 0;
//           animation:
//             introLine 1s
//             ease-out
//             1.3s
//             forwards;
//         }


//         .hero-title {
//           animation:
//             titleReveal 1.5s
//             cubic-bezier(.22,.61,.36,1)
//             3.1s
//             both;
//         }


//         .hero-fade {
//           animation:
//             fadeUp 1s
//             ease-out
//             3.15s
//             both;
//         }

//       `}</style>

//     </main>
//   );
// }

// export default Hero;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// import Logo from "../assets/images/birukLogo-Ai.png";
// import HeroImage from "../assets/images/Edit-birukLogo.png";

// function Hero() {
//   const [introFinished, setIntroFinished] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIntroFinished(true);
//     }, 3200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">

//       {/* =====================================================
//           INTRO
//       ===================================================== */}

//       <div
//         className={`fixed inset-0 z-[999] flex items-center justify-center bg-black transition-all duration-[1400ms] ${
//           introFinished
//             ? "pointer-events-none opacity-0"
//             : "opacity-100"
//         }`}
//       >

//         <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9953e]/10 blur-[120px]" />

//         <div className="intro-beam absolute left-[-50%] top-1/2 h-px w-[200%] bg-gradient-to-r from-transparent via-[#e0ae55] to-transparent" />

//         <div className="intro-brand flex flex-col items-center">

//           {/* Small BP mark */}

//           <div className="relative mb-5 flex h-20 w-20 items-center justify-center">

//             <div className="absolute inset-0 rotate-45 border border-[#d4a24a]/40" />

//             <span className="font-serif text-4xl font-light tracking-[-0.08em] text-[#d9a64e]">
//               BP
//             </span>

//           </div>

//           <h1 className="font-serif text-xl font-medium uppercase tracking-[0.28em] sm:text-2xl">
//             BIRUK
//             <span className="ml-2 text-[#d9a64e]">
//               PICTURES
//             </span>
//           </h1>

//           <div className="intro-line mt-5 flex items-center gap-3">

//             <span className="h-px w-8 bg-[#d9a64e]" />

//             <span className="text-[6px] uppercase tracking-[0.45em] text-white/40">
//               Visual Storytelling
//             </span>

//             <span className="h-px w-8 bg-[#d9a64e]" />

//           </div>

//         </div>

//       </div>


//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section
//         className={`relative min-h-screen w-full transition-all duration-[1800ms] ${
//           introFinished
//             ? "scale-100 opacity-100"
//             : "scale-[1.03] opacity-0"
//         }`}
//       >

//         {/* =================================================
//             BACKGROUND
//         ================================================= */}

//         <div className="absolute inset-0">

//           <img
//             src={HeroImage}
//             alt="Biruk Pictures"
//             className="h-full w-full object-cover object-center"
//           />

//           {/* Soft dark overlay */}

//           <div className="absolute inset-0 bg-black/20" />

//           {/* Left shadow — lighter than before */}

//           <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

//           {/* Bottom shadow */}

//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

//           {/* Very subtle gold atmosphere */}

//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(210,160,70,0.08),transparent_30%)]" />

//         </div>


//         {/* =================================================
//             NAVBAR
//         ================================================= */}

//         <div className="absolute inset-x-0 top-0 z-50">
//           <Navbar />
//         </div>


//         {/* =================================================
//             CONTENT
//         ================================================= */}

//         <div className="relative z-30 flex min-h-screen items-end px-7 pb-28 pt-32 sm:px-12 sm:pb-32 md:px-20 lg:px-28">

//           <div className="max-w-2xl">


//             {/* Small brand */}

//             <div className="hero-fade mb-5 flex items-center gap-3">

//               <span className="h-px w-10 bg-[#d9a64e]" />

//               <span className="text-[7px] uppercase tracking-[0.45em] text-[#d9a64e] sm:text-[8px]">
//                 BIRUK PICTURES
//               </span>

//             </div>


//             {/* =================================================
//                 SMALLER HEADING
//             ================================================= */}

//             <h1 className="hero-title font-serif text-[42px] font-light leading-[0.9] tracking-[-0.035em] sm:text-[52px] md:text-[62px] lg:text-[72px]">

//               Moments

//               <span className="text-white/85">
//                 {" "}Become
//               </span>

//               <span className="block text-[#d9a64e]">
//                 Stories.
//               </span>

//             </h1>


//             {/* Gold line */}

//             <div className="my-5 flex items-center gap-2">

//               <span className="h-px w-12 bg-[#d9a64e]" />

//               <span className="h-1 w-1 rounded-full bg-[#d9a64e]" />

//               <span className="h-px w-8 bg-white/20" />

//             </div>


//             {/* Short description */}

//             <p className="max-w-md text-xs leading-6 text-white/55 sm:text-sm">

//               Photography, cinematic films and visual stories
//               created with passion and precision.

//             </p>


//             {/* =================================================
//                 BUTTONS
//             ================================================= */}

//             <div className="mt-6 flex flex-wrap gap-3">

//               <Link
//                 to="/gallery"
//                 className="group inline-flex items-center gap-3 bg-[#d9a64e] px-5 py-3 text-[7px] font-bold uppercase tracking-[0.28em] text-black transition-all duration-300 hover:bg-[#edc36f] hover:shadow-[0_0_30px_rgba(217,166,78,0.25)]"
//               >

//                 Explore Work

//                 <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
//                   →
//                 </span>

//               </Link>


//               <Link
//                 to="/client-selection"
//                 className="inline-flex items-center gap-3 border border-white/25 bg-black/10 px-5 py-3 text-[7px] font-medium uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#d9a64e] hover:text-[#d9a64e]"
//               >

//                 Start a Project

//                 <span>
//                   ↗
//                 </span>

//               </Link>

//             </div>


//             {/* =================================================
//                 SERVICES
//             ================================================= */}

//             <div className="mt-6 flex flex-wrap items-center gap-3 text-[6px] uppercase tracking-[0.35em] text-white/35 sm:text-[7px]">

//               <span>Weddings</span>

//               <span className="h-0.5 w-0.5 rounded-full bg-[#d9a64e]" />

//               <span>Events</span>

//               <span className="h-0.5 w-0.5 rounded-full bg-[#d9a64e]" />

//               <span>Portraits</span>

//               <span className="h-0.5 w-0.5 rounded-full bg-[#d9a64e]" />

//               <span>Films</span>

//             </div>

//           </div>

//         </div>


//         {/* =================================================
//             RIGHT SIDE VERTICAL TEXT
//         ================================================= */}

//         <div className="absolute right-7 top-1/2 z-30 hidden -translate-y-1/2 lg:block">

//           <div className="flex flex-col items-center gap-4">

//             <span className="text-[6px] uppercase tracking-[0.5em] text-white/25 [writing-mode:vertical-rl]">
//               Photography • Film • Production
//             </span>

//             <div className="h-14 w-px bg-gradient-to-b from-[#d9a64e] to-transparent" />

//           </div>

//         </div>


//         {/* =================================================
//             BOTTOM BAR
//         ================================================= */}

//         <div className="absolute bottom-6 left-7 right-7 z-40 sm:left-12 sm:right-12 md:left-20 md:right-20 lg:left-28 lg:right-28">

//           <div className="flex items-center justify-between border-t border-white/10 pt-3">


//             {/* Brand */}

//             <div className="flex items-center gap-2">

//               <span className="flex h-5 w-5 items-center justify-center border border-[#d9a64e]/40">

//                 <span className="font-serif text-[7px] text-[#d9a64e]">
//                   BP
//                 </span>

//               </span>

//               <span className="text-[6px] uppercase tracking-[0.4em] text-white/25">
//                 Biruk Pictures
//               </span>

//             </div>


//             {/* Scroll */}

//             <div className="flex items-center gap-3">

//               <span className="hidden text-[6px] uppercase tracking-[0.4em] text-white/20 sm:block">
//                 Scroll
//               </span>

//               <div className="flex h-6 w-4 items-start justify-center rounded-full border border-white/20 p-1">

//                 <span className="h-1 w-px animate-bounce bg-[#d9a64e]" />

//               </div>

//             </div>

//           </div>

//         </div>


//         {/* =================================================
//             CORNERS
//         ================================================= */}

//         <div className="absolute left-7 top-28 hidden h-10 w-10 border-l border-t border-[#d9a64e]/20 lg:block" />

//         <div className="absolute bottom-20 right-7 hidden h-10 w-10 border-b border-r border-[#d9a64e]/20 lg:block" />

//       </section>


//       {/* =====================================================
//           ANIMATIONS
//       ===================================================== */}

//       <style>{`

//         @keyframes introBrand {

//           0% {
//             opacity: 0;
//             transform: scale(0.85);
//             filter: blur(10px);
//           }

//           50% {
//             opacity: 1;
//             transform: scale(1.03);
//             filter: blur(0);
//           }

//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }

//         }


//         @keyframes introBeam {

//           0% {
//             left: -60%;
//             opacity: 0;
//           }

//           25% {
//             opacity: 0.8;
//           }

//           55% {
//             opacity: 0.4;
//           }

//           100% {
//             left: 110%;
//             opacity: 0;
//           }

//         }


//         @keyframes introLine {

//           0% {
//             opacity: 0;
//             transform: translateY(8px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }

//         }


//         @keyframes titleReveal {

//           0% {
//             opacity: 0;
//             transform: translateY(30px);
//             filter: blur(5px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//             filter: blur(0);
//           }

//         }


//         @keyframes fadeUp {

//           0% {
//             opacity: 0;
//             transform: translateY(15px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }

//         }


//         .intro-brand {
//           animation:
//             introBrand 2s
//             cubic-bezier(.22,.61,.36,1)
//             forwards;
//         }


//         .intro-beam {
//           animation:
//             introBeam 2s
//             ease-in-out
//             0.2s
//             forwards;
//         }


//         .intro-line {
//           opacity: 0;
//           animation:
//             introLine 0.8s
//             ease-out
//             1.2s
//             forwards;
//         }


//         .hero-title {
//           animation:
//             titleReveal 1.2s
//             cubic-bezier(.22,.61,.36,1)
//             3.05s
//             both;
//         }


//         .hero-fade {
//           animation:
//             fadeUp 0.9s
//             ease-out
//             3s
//             both;
//         }

//       `}</style>

//     </main>
//   );
// }

// export default Hero


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// import HeroImage from "../assets/images/Edit-birukLogo.png";

// function Hero() {
//   const [introFinished, setIntroFinished] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIntroFinished(true);
//     }, 3200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">

//       {/* ========================= INTRO ========================= */}

//       <div
//         className={`fixed inset-0 z-[999] flex items-center justify-center bg-black transition-all duration-[1400ms] ${
//           introFinished ? "pointer-events-none opacity-0" : "opacity-100"
//         }`}
//       >

//         <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9953e]/10 blur-[100px] sm:h-[350px] sm:w-[350px]" />

//         <div className="intro-beam absolute left-[-50%] top-1/2 h-px w-[200%] bg-gradient-to-r from-transparent via-[#e0ae55] to-transparent" />

//         <div className="intro-brand flex flex-col items-center px-5">

//           {/* BP MARK */}

//           <div className="relative mb-4 flex h-16 w-16 items-center justify-center sm:mb-5 sm:h-20 sm:w-20">
//             <div className="absolute inset-0 rotate-45 border border-[#d4a24a]/40" />

//             <span className="font-serif text-3xl font-light tracking-[-0.08em] text-[#d9a64e] sm:text-4xl">
//               BP
//             </span>
//           </div>

//           {/* BRAND */}

//           <h1 className="whitespace-nowrap font-serif text-lg font-medium uppercase tracking-[0.20em] sm:text-2xl sm:tracking-[0.28em]">
//             BIRUK
//             <span className="ml-1.5 text-[#d9a64e] sm:ml-2">
//               PICTURES
//             </span>
//           </h1>

//           {/* INTRO LINE */}

//           <div className="intro-line mt-4 flex items-center gap-2 sm:mt-5 sm:gap-3">
//             <span className="h-px w-6 bg-[#d9a64e] sm:w-8" />

//             <span className="text-[5px] uppercase tracking-[0.35em] text-white/40 sm:text-[6px] sm:tracking-[0.45em]">
//               Visual Storytelling
//             </span>

//             <span className="h-px w-6 bg-[#d9a64e] sm:w-8" />
//           </div>

//         </div>
//       </div>


//       {/* ========================= HERO ========================= */}

//       <section
//         className={`relative min-h-screen w-full transition-all duration-[1800ms] ${
//           introFinished
//             ? "scale-100 opacity-100"
//             : "scale-[1.03] opacity-0"
//         }`}
//       >

//         {/* ========================= BACKGROUND ========================= */}

//         <div className="absolute inset-0">

//           <img
//             src={HeroImage}
//             alt="Biruk Pictures"
//             className="h-full w-full object-cover object-[58%_center] sm:object-center"
//           />

//           <div className="absolute inset-0 bg-black/20" />

//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent sm:from-black/65 sm:via-black/25" />

//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(210,160,70,0.08),transparent_30%)]" />

//         </div>


//         {/* ========================= NAVBAR ========================= */}

//         <div className="absolute inset-x-0 top-0 z-50">
//           <Navbar />
//         </div>


//         {/* ========================= CONTENT ========================= */}

//         <div className="relative z-30 flex min-h-screen items-end px-6 pb-28 pt-32 sm:px-12 sm:pb-32 md:px-20 lg:px-28">

//           <div className="w-full max-w-2xl">

//             {/* SMALL BRAND */}

//             <div className="hero-fade mb-4 flex items-center gap-3 sm:mb-5">

//               <span className="h-px w-8 bg-[#d9a64e] sm:w-10" />

//               <span className="text-[6px] uppercase tracking-[0.35em] text-[#d9a64e] sm:text-[8px] sm:tracking-[0.45em]">
//                 BIRUK PICTURES
//               </span>

//             </div>


//             {/* ========================= HEADING ========================= */}

//             <h1 className="hero-title font-serif text-[38px] font-light leading-[0.92] tracking-[-0.035em] sm:text-[52px] md:text-[62px] lg:text-[72px]">

//               Moments

//               <span className="text-white/85">
//                 {" "}Become
//               </span>

//               <span className="block text-[#d9a64e]">
//                 Stories.
//               </span>

//             </h1>


//             {/* GOLD LINE */}

//             <div className="my-4 flex items-center gap-2 sm:my-5">

//               <span className="h-px w-10 bg-[#d9a64e] sm:w-12" />

//               <span className="h-1 w-1 rounded-full bg-[#d9a64e]" />

//               <span className="h-px w-6 bg-white/20 sm:w-8" />

//             </div>


//             {/* DESCRIPTION */}

//             <p className="max-w-[290px] text-[11px] leading-5 text-white/55 sm:max-w-md sm:text-sm sm:leading-6">
//               Photography, cinematic films and visual stories
//               created with passion and precision.
//             </p>


//             {/* ========================= BUTTONS ========================= */}

//             <div className="mt-6 flex w-full flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">

//               <Link
//                 to="/gallery"
//                 className="group inline-flex w-full items-center justify-center gap-3 bg-[#d9a64e] px-5 py-3.5 text-[8px] font-bold uppercase tracking-[0.24em] text-black transition-all duration-300 hover:bg-[#edc36f] hover:shadow-[0_0_30px_rgba(217,166,78,0.25)] sm:w-auto sm:py-3 sm:text-[7px]"
//               >
//                 Explore Work

//                 <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
//                   →
//                 </span>
//               </Link>


//               <Link
//                 to="/client-selection"
//                 className="inline-flex w-full items-center justify-center gap-3 border border-white/25 bg-black/10 px-5 py-3.5 text-[8px] font-medium uppercase tracking-[0.24em] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#d9a64e] hover:text-[#d9a64e] sm:w-auto sm:py-3 sm:text-[7px]"
//               >
//                 Start a Project

//                 <span>↗</span>
//               </Link>

//             </div>


//             {/* ========================= SERVICES ========================= */}

//             <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[6px] uppercase tracking-[0.25em] text-white/35 sm:mt-6 sm:gap-3 sm:text-[7px] sm:tracking-[0.35em]">

//               <span>Weddings</span>

//               <span className="h-0.5 w-0.5 rounded-full bg-[#d9a64e]" />

//               <span>Events</span>

//               <span className="h-0.5 w-0.5 rounded-full bg-[#d9a64e]" />

//               <span>Portraits</span>

//               <span className="h-0.5 w-0.5 rounded-full bg-[#d9a64e]" />

//               <span>Films</span>

//             </div>

//           </div>
//         </div>


//         {/* ========================= RIGHT SIDE ========================= */}

//         <div className="absolute right-7 top-1/2 z-30 hidden -translate-y-1/2 lg:block">

//           <div className="flex flex-col items-center gap-4">

//             <span className="[writing-mode:vertical-rl] text-[6px] uppercase tracking-[0.5em] text-white/25">
//               Photography • Film • Production
//             </span>

//             <div className="h-14 w-px bg-gradient-to-b from-[#d9a64e] to-transparent" />

//           </div>

//         </div>


//         {/* ========================= BOTTOM BAR ========================= */}

//         <div className="absolute bottom-5 left-6 right-6 z-40 sm:bottom-6 sm:left-12 sm:right-12 md:left-20 md:right-20 lg:left-28 lg:right-28">

//           <div className="flex items-center justify-between border-t border-white/10 pt-3">

//             {/* BRAND */}

//             <div className="flex items-center gap-2">

//               <span className="flex h-5 w-5 items-center justify-center border border-[#d9a64e]/40">

//                 <span className="font-serif text-[7px] text-[#d9a64e]">
//                   BP
//                 </span>

//               </span>

//               <span className="text-[5px] uppercase tracking-[0.3em] text-white/25 sm:text-[6px] sm:tracking-[0.4em]">
//                 Biruk Pictures
//               </span>

//             </div>


//             {/* SCROLL */}

//             <div className="flex items-center gap-2">

//               <span className="hidden text-[6px] uppercase tracking-[0.4em] text-white/20 sm:block">
//                 Scroll
//               </span>

//               <div className="flex h-6 w-4 items-start justify-center rounded-full border border-white/20 p-1">

//                 <span className="h-1 w-px animate-bounce bg-[#d9a64e]" />

//               </div>

//             </div>

//           </div>
//         </div>


//         {/* ========================= CORNERS ========================= */}

//         <div className="absolute left-6 top-28 hidden h-8 w-8 border-l border-t border-[#d9a64e]/20 lg:block" />

//         <div className="absolute bottom-20 right-7 hidden h-10 w-10 border-b border-r border-[#d9a64e]/20 lg:block" />

//       </section>


//       {/* ========================= ANIMATIONS ========================= */}

//       <style>{`

//         @keyframes introBrand {
//           0% {
//             opacity: 0;
//             transform: scale(0.85);
//             filter: blur(10px);
//           }

//           50% {
//             opacity: 1;
//             transform: scale(1.03);
//             filter: blur(0);
//           }

//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes introBeam {
//           0% {
//             left: -60%;
//             opacity: 0;
//           }

//           25% {
//             opacity: 0.8;
//           }

//           55% {
//             opacity: 0.4;
//           }

//           100% {
//             left: 110%;
//             opacity: 0;
//           }
//         }

//         @keyframes introLine {
//           0% {
//             opacity: 0;
//             transform: translateY(8px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes titleReveal {
//           0% {
//             opacity: 0;
//             transform: translateY(30px);
//             filter: blur(5px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//             filter: blur(0);
//           }
//         }

//         @keyframes fadeUp {
//           0% {
//             opacity: 0;
//             transform: translateY(15px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .intro-brand {
//           animation:
//             introBrand 2s
//             cubic-bezier(.22,.61,.36,1)
//             forwards;
//         }

//         .intro-beam {
//           animation:
//             introBeam 2s
//             ease-in-out
//             0.2s
//             forwards;
//         }

//         .intro-line {
//           opacity: 0;
//           animation:
//             introLine 0.8s
//             ease-out
//             1.2s
//             forwards;
//         }

//         .hero-title {
//           animation:
//             titleReveal 1.2s
//             cubic-bezier(.22,.61,.36,1)
//             3.05s
//             both;
//         }

//         .hero-fade {
//           animation:
//             fadeUp 0.9s
//             ease-out
//             3s
//             both;
//         }

//       `}</style>

//     </main>
//   );
// }

// export default Hero;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import HeroImage from "../assets/images/Edit-birukLogo.png";

function Hero() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white">

      {/* ========================= INTRO ========================= */}

      <div
        className={`fixed inset-0 z-[999] flex items-center justify-center bg-black transition-all duration-[1400ms] ${
          introFinished ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9953e]/10 blur-[90px] sm:h-[350px] sm:w-[350px]" />

        <div className="intro-beam absolute left-[-50%] top-1/2 h-px w-[200%] bg-gradient-to-r from-transparent via-[#e0ae55] to-transparent" />

        <div className="intro-brand flex flex-col items-center px-4">

          <div className="relative mb-4 flex h-16 w-16 items-center justify-center sm:mb-5 sm:h-20 sm:w-20">
            <div className="absolute inset-0 rotate-45 border border-[#d4a24a]/40" />

            <span className="font-serif text-3xl font-light tracking-[-0.08em] text-[#d9a64e] sm:text-4xl">
              BP
            </span>
          </div>

          <h1 className="whitespace-nowrap font-serif text-base font-medium uppercase tracking-[0.16em] sm:text-2xl sm:tracking-[0.28em]">
            BIRUK
            <span className="ml-1.5 text-[#d9a64e] sm:ml-2">
              PICTURES
            </span>
          </h1>

          <div className="intro-line mt-4 flex items-center gap-2 sm:mt-5 sm:gap-3">
            <span className="h-px w-5 bg-[#d9a64e] sm:w-8" />

            <span className="text-[5px] uppercase tracking-[0.3em] text-white/40 sm:text-[6px] sm:tracking-[0.45em]">
              Visual Storytelling
            </span>

            <span className="h-px w-5 bg-[#d9a64e] sm:w-8" />
          </div>

        </div>
      </div>


      {/* ========================= HERO ========================= */}

      <section
        className={`relative min-h-[100svh] w-full transition-all duration-[1800ms] ${
          introFinished
            ? "scale-100 opacity-100"
            : "scale-[1.03] opacity-0"
        }`}
      >

        {/* ========================= BACKGROUND ========================= */}

        <div className="absolute inset-0">

          <img
            src={HeroImage}
            alt="Biruk Pictures"
            className="
              h-full
              w-full
              object-cover
              object-[62%_center]
              sm:object-center
            "
          />

          <div className="absolute inset-0 bg-black/20" />

          {/* Mobile image readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent sm:from-black/65 sm:via-black/25" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 sm:from-black/70" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(210,160,70,0.08),transparent_30%)]" />

        </div>


        {/* ========================= NAVBAR ========================= */}

        <div className="absolute inset-x-0 top-0 z-50">
          <Navbar />
        </div>


        {/* ========================= CONTENT ========================= */}

        <div
          className="
            relative
            z-30
            flex
            min-h-[100svh]
            items-end

            px-5
            pb-24
            pt-28

            sm:px-12
            sm:pb-28
            sm:pt-32

            md:px-20
            md:pb-32

            lg:px-28
          "
        >

          <div className="w-full max-w-2xl">

            {/* SMALL BRAND */}

            <div className="hero-fade mb-3 flex items-center gap-2.5 sm:mb-5 sm:gap-3">

              <span className="h-px w-7 bg-[#d9a64e] sm:w-10" />

              <span className="text-[6px] uppercase tracking-[0.28em] text-[#d9a64e] sm:text-[8px] sm:tracking-[0.45em]">
                BIRUK PICTURES
              </span>

            </div>


            {/* ========================= TITLE ========================= */}

            <h1
              className="
                hero-title
                font-serif
                font-light
                leading-[0.9]
                tracking-[-0.04em]

                text-[38px]

                xs:text-[42px]
                sm:text-[52px]
                md:text-[62px]
                lg:text-[72px]
              "
            >

              Moments

              <span className="text-white/85">
                {" "}Become
              </span>

              <span className="block text-[#d9a64e]">
                Stories.
              </span>

            </h1>


            {/* GOLD LINE */}

            <div className="my-3.5 flex items-center gap-2 sm:my-5">

              <span className="h-px w-9 bg-[#d9a64e] sm:w-12" />

              <span className="h-1 w-1 rounded-full bg-[#d9a64e]" />

              <span className="h-px w-6 bg-white/20 sm:w-8" />

            </div>


            {/* DESCRIPTION */}

            <p
              className="
                max-w-[280px]
                text-[10px]
                leading-[1.7]
                text-white/60

                sm:max-w-md
                sm:text-sm
                sm:leading-6
              "
            >
              Photography, cinematic films and visual stories
              created with passion and precision.
            </p>


            {/* ========================= BUTTONS ========================= */}

            <div
              className="
                mt-5
                flex
                w-full
                flex-col
                gap-2

                sm:mt-6
                sm:flex-row
                sm:flex-wrap
                sm:gap-3
              "
            >

              <Link
                to="/gallery"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3

                  bg-[#d9a64e]

                  px-5
                  py-3

                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-black

                  transition-all
                  duration-300

                  hover:bg-[#edc36f]
                  hover:shadow-[0_0_30px_rgba(217,166,78,0.25)]

                  sm:w-auto
                  sm:px-5
                  sm:py-3
                "
              >
                Explore Work

                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>


              <Link
                // to="/client-selection"
                 to="/Contact"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3

                  border
                  border-white/25
                  bg-black/10

                  px-5
                  py-3

                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white

                  backdrop-blur-sm

                  transition-all
                  duration-300

                  hover:border-[#d9a64e]
                  hover:text-[#d9a64e]

                  sm:w-auto
                "
              >
                Start a Project

                <span>↗</span>
              </Link>

            </div>


            {/* ========================= SERVICES ========================= */}

            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                gap-x-2
                gap-y-1.5

                text-[5.5px]
                uppercase
                tracking-[0.22em]
                text-white/40

                sm:mt-6
                sm:gap-3
                sm:text-[7px]
                sm:tracking-[0.35em]
              "
            >

              <span>Weddings</span>

              <span className="h-0.5 w-0.5 rounded-full bg-[#d9a64e]" />

              <span>Events</span>

              <span className="h-0.5 w-0.5 rounded-full bg-[#d9a64e]" />

              <span>Portraits</span>

              <span className="h-0.5 w-0.5 rounded-full bg-[#d9a64e]" />

              <span>Films</span>

            </div>

          </div>
        </div>


        {/* ========================= RIGHT SIDE ========================= */}

        <div className="absolute right-7 top-1/2 z-30 hidden -translate-y-1/2 lg:block">

          <div className="flex flex-col items-center gap-4">

            <span className="[writing-mode:vertical-rl] text-[6px] uppercase tracking-[0.5em] text-white/25">
              Photography • Film • Production
            </span>

            <div className="h-14 w-px bg-gradient-to-b from-[#d9a64e] to-transparent" />

          </div>

        </div>


        {/* ========================= BOTTOM BAR ========================= */}

        <div
          className="
            absolute
            bottom-4
            left-5
            right-5
            z-40

            sm:bottom-6
            sm:left-12
            sm:right-12

            md:left-20
            md:right-20

            lg:left-28
            lg:right-28
          "
        >

          <div className="flex items-center justify-between border-t border-white/10 pt-2.5 sm:pt-3">

            {/* BRAND */}

            <div className="flex items-center gap-2">

              <span className="flex h-5 w-5 items-center justify-center border border-[#d9a64e]/40">

                <span className="font-serif text-[7px] text-[#d9a64e]">
                  BP
                </span>

              </span>

              <span className="text-[5px] uppercase tracking-[0.25em] text-white/25 sm:text-[6px] sm:tracking-[0.4em]">
                Biruk Pictures
              </span>

            </div>


            {/* SCROLL */}

            <div className="flex items-center gap-2">

              <span className="hidden text-[6px] uppercase tracking-[0.4em] text-white/20 sm:block">
                Scroll
              </span>

              <div className="flex h-6 w-4 items-start justify-center rounded-full border border-white/20 p-1">

                <span className="h-1 w-px animate-bounce bg-[#d9a64e]" />

              </div>

            </div>

          </div>
        </div>


        {/* ========================= CORNERS ========================= */}

        <div className="absolute left-5 top-28 hidden h-8 w-8 border-l border-t border-[#d9a64e]/20 lg:block" />

        <div className="absolute bottom-20 right-7 hidden h-10 w-10 border-b border-r border-[#d9a64e]/20 lg:block" />

      </section>


      {/* ========================= ANIMATIONS ========================= */}

      <style>{`

        @keyframes introBrand {
          0% {
            opacity: 0;
            transform: scale(0.85);
            filter: blur(10px);
          }

          50% {
            opacity: 1;
            transform: scale(1.03);
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes introBeam {
          0% {
            left: -60%;
            opacity: 0;
          }

          25% {
            opacity: 0.8;
          }

          55% {
            opacity: 0.4;
          }

          100% {
            left: 110%;
            opacity: 0;
          }
        }

        @keyframes introLine {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleReveal {
          0% {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(5px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .intro-brand {
          animation:
            introBrand 2s
            cubic-bezier(.22,.61,.36,1)
            forwards;
        }

        .intro-beam {
          animation:
            introBeam 2s
            ease-in-out
            0.2s
            forwards;
        }

        .intro-line {
          opacity: 0;
          animation:
            introLine 0.8s
            ease-out
            1.2s
            forwards;
        }

        .hero-title {
          animation:
            titleReveal 1.2s
            cubic-bezier(.22,.61,.36,1)
            3.05s
            both;
        }

        .hero-fade {
          animation:
            fadeUp 0.9s
            ease-out
            3s
            both;
        }

      `}</style>

    </main>
  );
}

export default Hero;