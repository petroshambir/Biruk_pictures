// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// /* =========================================================
//    YOSIEAL - ABOUT PAGE
//    Editorial / Cultural / Film Production Design
//    ========================================================= */

// const images = {
//   hero:
//     "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=85&w=2200&auto=format&fit=crop",

//   wedding:
//     "https://images.unsplash.com/photo-1519741497674-611481863552?q=85&w=1400&auto=format&fit=crop",

//   traditional:
//     "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=85&w=1400&auto=format&fit=crop",

//   family:
//     "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=85&w=1400&auto=format&fit=crop",

//   culture:
//     "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?q=85&w=1400&auto=format&fit=crop",

//   celebration:
//     "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=85&w=1400&auto=format&fit=crop",

//   camera:
//     "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=85&w=1400&auto=format&fit=crop",

//   production:
//     "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=85&w=1400&auto=format&fit=crop",

//   portrait:
//     "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=85&w=1200&auto=format&fit=crop",

//   ceremony:
//     "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=85&w=1400&auto=format&fit=crop",

//   event:
//     "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=85&w=1400&auto=format&fit=crop",

//   behind:
//     "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=85&w=1400&auto=format&fit=crop",

//   editing:
//     "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=85&w=1400&auto=format&fit=crop",

//   couple:
//     "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=85&w=1400&auto=format&fit=crop",

//   celebration2:
//     "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=85&w=1400&auto=format&fit=crop",
// };

// /* =========================================================
//    IMAGE COMPONENT
//    NO CROPPING
//    ========================================================= */

// function EditorialImage({ src, alt = "", className = "" }) {
//   return (
//     <div className={`group relative overflow-hidden bg-[#0b0b0b] ${className}`}>
//       <img
//         src={src}
//         alt={alt}
//         loading="lazy"
//         className="block h-auto max-h-full w-full object-contain object-center transition duration-700 ease-out group-hover:scale-[1.015]"
//       />

//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

//       <div className="pointer-events-none absolute inset-3 border border-white/10 transition duration-500 group-hover:border-[#d8b56b]/60" />
//     </div>
//   );
// }

// /* =========================================================
//    SECTION LABEL
//    ========================================================= */

// function SectionLabel({ number, children }) {
//   return (
//     <div className="flex items-center gap-3">
//       <span className="font-serif text-sm text-[#d8b56b]">{number}</span>
//       <span className="h-px w-10 bg-[#d8b56b]/50" />
//       <span className="text-[9px] font-medium tracking-[0.35em] text-[#d8b56b]">
//         {children}
//       </span>
//     </div>
//   );
// }

// /* =========================================================
//    ABOUT PAGE
//    ========================================================= */

// export default function About() {
//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      
//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#080808]">
        
//         {/* NAVBAR */}
//         <div className="absolute left-0 top-0 z-50 w-full">
//           <Navbar />
//         </div>

//         {/* HERO IMAGE */}
//         <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
//           <img
//             src={images.hero}
//             alt="YOSIEAL Film Production"
//             className="h-full w-full object-cover object-center"
//           />
//         </div>

//         {/* HERO OVERLAY */}
//         <div className="absolute inset-0 bg-black/45" />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/20" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40" />

//         {/* HERO CONTENT */}
//         <div className="relative z-20 mx-auto flex min-h-[92vh] w-full max-w-[1500px] items-end px-6 pb-16 sm:px-10 lg:px-16 lg:pb-20">
          
//           <div className="grid w-full items-end gap-10 lg:grid-cols-[1fr_330px]">
            
//             {/* LEFT */}
//             <div className="max-w-4xl">
              
//               <SectionLabel number="01">YOSIEAL FILM PRODUCTION</SectionLabel>

//               <h1 className="mt-6 font-serif text-5xl font-light leading-[0.92] tracking-tight sm:text-7xl md:text-8xl lg:text-[110px]">
//                 We preserve
//                 <br />
//                 <span className="italic text-[#e0bf7b]">moments.</span>
//               </h1>

//               <div className="mt-8 max-w-xl border-l border-[#d8b56b]/60 pl-5">
//                 <p className="text-sm font-light leading-7 text-white/70 sm:text-base">
//                   YOSIEAL is a film production studio dedicated to
//                   transforming real people, meaningful celebrations and
//                   cultural stories into timeless cinematic memories.
//                 </p>
//               </div>

//             </div>

//             {/* RIGHT */}
//             <div className="hidden border-l border-white/15 pl-7 lg:block">
              
//               <p className="text-[9px] tracking-[0.35em] text-[#d8b56b]">
//                 OUR IDENTITY
//               </p>

//               <h2 className="mt-4 font-serif text-3xl font-light leading-tight">
//                 Stories rooted
//                 <br />
//                 in <span className="italic">culture.</span>
//               </h2>

//               <p className="mt-5 text-xs leading-6 text-white/45">
//                 Wedding films, traditional ceremonies, family stories,
//                 events, documentaries and cinematic productions.
//               </p>

//               <div className="mt-8 h-px w-16 bg-[#d8b56b]" />

//             </div>

//           </div>
//         </div>

//         {/* HERO NUMBER */}
//         <div className="absolute bottom-7 right-6 z-30 text-[9px] tracking-[0.3em] text-white/40 sm:right-10 lg:right-16">
//           YOSIEAL / ABOUT
//         </div>

//       </section>

//       {/* =====================================================
//           INTRO
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        
//         <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          
//           <div>
//             <SectionLabel number="02">WHO WE ARE</SectionLabel>
//           </div>

//           <div className="max-w-5xl">
            
//             <h2 className="font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-7xl">
//               A visual studio
//               <br />
//               <span className="italic text-[#d8b56b]">
//                 built around people.
//               </span>
//             </h2>

//             <div className="mt-10 grid gap-8 md:grid-cols-2">
              
//               <p className="text-sm leading-8 text-white/55 sm:text-base">
//                 ዮሲኤል ንሓበሻ ሕብረተሰብ፣ ባህሊ፣ ልምዲን ኣገደስቲ
//                 ፍጻመታትን ብሲኒማቲክ ኣገባብ ንምስናድ ዝሰርሕ
//                 ፊልም ፕሮዳክሽን ስቱድዮ እዩ።
//               </p>

//               <p className="text-sm leading-8 text-white/45 sm:text-base">
//                 From intimate wedding moments to traditional ceremonies,
//                 family celebrations, cultural stories and professional
//                 productions, we create films that remain meaningful long
//                 after the event is over.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           CULTURE STATEMENT
//       ===================================================== */}

//       <section className="relative overflow-hidden border-y border-white/10 bg-[#0a0a0a]">
        
//         <div className="mx-auto grid max-w-[1500px] items-center lg:grid-cols-[0.9fr_1.1fr]">
          
//           <div className="order-2 px-6 py-20 sm:px-10 lg:order-1 lg:px-16 lg:py-28">
            
//             <SectionLabel number="03">OUR CULTURE</SectionLabel>

//             <h2 className="mt-7 max-w-2xl font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
//               Our culture is
//               <br />
//               <span className="italic text-[#d8b56b]">
//                 part of the story.
//               </span>
//             </h2>

//             <p className="mt-7 max-w-xl text-sm leading-8 text-white/50 sm:text-base">
//               Every traditional dress, every family gathering, every
//               celebration and every smile carries a story. We do not simply
//               record these moments — we preserve the feeling, identity and
//               beauty behind them.
//             </p>

//             <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-7 sm:grid-cols-4">
//               <div>
//                 <strong className="font-serif text-2xl text-[#d8b56b]">01</strong>
//                 <p className="mt-2 text-[9px] tracking-[0.2em] text-white/40">TRADITION</p>
//               </div>
//               <div>
//                 <strong className="font-serif text-2xl text-[#d8b56b]">02</strong>
//                 <p className="mt-2 text-[9px] tracking-[0.2em] text-white/40">FAMILY</p>
//               </div>
//               <div>
//                 <strong className="font-serif text-2xl text-[#d8b56b]">03</strong>
//                 <p className="mt-2 text-[9px] tracking-[0.2em] text-white/40">EMOTION</p>
//               </div>
//               <div>
//                 <strong className="font-serif text-2xl text-[#d8b56b]">04</strong>
//                 <p className="mt-2 text-[9px] tracking-[0.2em] text-white/40">LEGACY</p>
//               </div>
//             </div>

//           </div>

//           <div className="order-1 min-h-[500px] lg:order-2 lg:min-h-[720px]">
//             <EditorialImage
//               src={images.traditional}
//               alt="Traditional cultural celebration"
//               className="h-full w-full"
//             />
//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           WEDDING EDITORIAL
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        
//         <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          
//           <div>
//             <SectionLabel number="04">WEDDINGS</SectionLabel>
//             <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
//               Love,
//               <span className="italic text-[#d8b56b]"> beautifully filmed.</span>
//             </h2>
//           </div>

//           <p className="max-w-md text-sm leading-7 text-white/45">
//             From preparation to celebration, we capture the details,
//             emotions and people that make every wedding unique.
//           </p>

//         </div>

//         <div className="grid items-start gap-6 lg:grid-cols-12">
          
//           <div className="lg:col-span-7 lg:pt-14">
//             <EditorialImage
//               src={images.wedding}
//               alt="Wedding celebration"
//               className="w-full"
//             />
//           </div>

//           <div className="lg:col-span-5">
//             <EditorialImage
//               src={images.couple}
//               alt="Wedding couple"
//               className="w-full"
//             />

//             <div className="mt-6 border-l border-[#d8b56b]/50 pl-5">
//               <span className="text-[9px] tracking-[0.3em] text-[#d8b56b]">
//                 WEDDING STORY
//               </span>
//               <h3 className="mt-3 font-serif text-2xl font-light">
//                 Two lives.
//                 <br />
//                 One beautiful chapter.
//               </h3>
//             </div>
//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           TRADITIONAL + FAMILY
//       ===================================================== */}

//       <section className="bg-[#090909] py-24 sm:py-32">
        
//         <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          
//           <div className="grid gap-16 lg:grid-cols-12">
            
//             <div className="lg:col-span-4">
              
//               <SectionLabel number="05">TRADITIONAL CEREMONIES</SectionLabel>

//               <h2 className="mt-6 font-serif text-4xl font-light leading-tight sm:text-5xl">
//                 Where
//                 <br />
//                 <span className="italic text-[#d8b56b]">tradition</span>
//                 <br />
//                 becomes cinema.
//               </h2>

//               <p className="mt-7 text-sm leading-7 text-white/45">
//                 Traditional ceremonies are more than events. They carry
//                 generations of identity, family and heritage. Our films
//                 preserve these details with respect and cinematic quality.
//               </p>

//             </div>

//             <div className="lg:col-span-8">
              
//               <div className="grid gap-6 sm:grid-cols-2">
                
//                 <EditorialImage
//                   src={images.ceremony}
//                   alt="Traditional ceremony"
//                   className="sm:mt-16"
//                 />

//                 <EditorialImage
//                   src={images.family}
//                   alt="Family celebration"
//                 />

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           CULTURE MASONRY
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        
//         <div className="mb-14">
//           <SectionLabel number="06">CULTURE & COMMUNITY</SectionLabel>
//           <h2 className="mt-5 max-w-3xl font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
//             The beauty of
//             <span className="italic text-[#d8b56b]"> our people.</span>
//           </h2>
//         </div>

//         <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          
//           <div className="mb-6 break-inside-avoid">
//             <EditorialImage
//               src={images.culture}
//               alt="Ethiopian culture"
//               className="w-full"
//             />
//             <p className="mt-4 text-[9px] tracking-[0.3em] text-[#d8b56b]">
//               CULTURE / 01
//             </p>
//           </div>

//           <div className="mb-6 break-inside-avoid lg:mt-20">
//             <EditorialImage
//               src={images.celebration}
//               alt="Cultural celebration"
//               className="w-full"
//             />
//             <p className="mt-4 text-[9px] tracking-[0.3em] text-[#d8b56b]">
//               CELEBRATION / 02
//             </p>
//           </div>

//           <div className="mb-6 break-inside-avoid">
//             <EditorialImage
//               src={images.celebration2}
//               alt="Community event"
//               className="w-full"
//             />
//             <p className="mt-4 text-[9px] tracking-[0.3em] text-[#d8b56b]">
//               COMMUNITY / 03
//             </p>
//           </div>

//           <div className="mb-6 break-inside-avoid">
//             <EditorialImage
//               src={images.portrait}
//               alt="Portrait"
//               className="w-full"
//             />
//             <p className="mt-4 text-[9px] tracking-[0.3em] text-[#d8b56b]">
//               PEOPLE / 04
//             </p>
//           </div>

//           <div className="mb-6 break-inside-avoid lg:mt-16">
//             <EditorialImage
//               src={images.event}
//               alt="Cultural event"
//               className="w-full"
//             />
//             <p className="mt-4 text-[9px] tracking-[0.3em] text-[#d8b56b]">
//               EVENTS / 05
//             </p>
//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           EVENTS
//       ===================================================== */}

//       <section className="border-y border-white/10 bg-[#070707]">
        
//         <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[1.15fr_0.85fr]">
          
//           <div className="relative min-h-[600px]">
//             <EditorialImage
//               src={images.event}
//               alt="YOSIEAL event production"
//               className="absolute inset-0 h-full w-full"
//             />
//           </div>

//           <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16">
            
//             <div>
//               <SectionLabel number="07">EVENTS</SectionLabel>

//               <h2 className="mt-6 font-serif text-4xl font-light leading-tight sm:text-5xl">
//                 Every gathering
//                 <br />
//                 deserves a
//                 <br />
//                 <span className="italic text-[#d8b56b]">story.</span>
//               </h2>

//               <p className="mt-7 text-sm leading-8 text-white/45">
//                 Corporate events, cultural celebrations, private occasions
//                 and community gatherings — we create visual stories that
//                 capture the atmosphere and energy of the entire experience.
//               </p>

//               <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 text-[9px] tracking-[0.25em] text-white/50">
//                 <span>EVENT FILM</span>
//                 <span>PHOTOGRAPHY</span>
//                 <span>HIGHLIGHTS</span>
//                 <span>DOCUMENTATION</span>
//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           FILM PRODUCTION
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        
//         <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          
//           <div>
            
//             <SectionLabel number="08">FILM PRODUCTION</SectionLabel>

//             <h2 className="mt-6 font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
//               Behind every
//               <br />
//               <span className="italic text-[#d8b56b]">frame.</span>
//             </h2>

//             <p className="mt-7 max-w-lg text-sm leading-8 text-white/45">
//               Professional cameras, controlled lighting, creative direction,
//               sound and post-production come together to create a complete
//               cinematic experience.
//             </p>

//             <div className="mt-10 grid grid-cols-2 gap-5">
              
//               <div className="border-t border-white/10 pt-4">
//                 <span className="text-[9px] tracking-[0.25em] text-[#d8b56b]">
//                   01
//                 </span>
//                 <p className="mt-2 text-sm text-white/60">
//                   Cinematography
//                 </p>
//               </div>

//               <div className="border-t border-white/10 pt-4">
//                 <span className="text-[9px] tracking-[0.25em] text-[#d8b56b]">
//                   02
//                 </span>
//                 <p className="mt-2 text-sm text-white/60">
//                   Creative Direction
//                 </p>
//               </div>

//               <div className="border-t border-white/10 pt-4">
//                 <span className="text-[9px] tracking-[0.25em] text-[#d8b56b]">
//                   03
//                 </span>
//                 <p className="mt-2 text-sm text-white/60">
//                   Editing
//                 </p>
//               </div>

//               <div className="border-t border-white/10 pt-4">
//                 <span className="text-[9px] tracking-[0.25em] text-[#d8b56b]">
//                   04
//                 </span>
//                 <p className="mt-2 text-sm text-white/60">
//                   Color Grading
//                 </p>
//               </div>

//             </div>

//           </div>

//           <div className="grid gap-6 sm:grid-cols-2">
            
//             <EditorialImage
//               src={images.camera}
//               alt="Professional cinematography"
//               className="sm:mt-16"
//             />

//             <EditorialImage
//               src={images.production}
//               alt="Film production"
//             />

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           BEHIND THE SCENES
//       ===================================================== */}

//       <section className="bg-[#0a0a0a] py-24 sm:py-32">
        
//         <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          
//           <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            
//             <div>
//               <SectionLabel number="09">BEHIND THE SCENES</SectionLabel>

//               <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl">
//                 What happens
//                 <span className="italic text-[#d8b56b]"> behind.</span>
//               </h2>
//             </div>

//             <p className="max-w-md text-sm leading-7 text-white/40">
//               The final film is only one part of the process. The real story
//               begins long before the camera starts rolling.
//             </p>

//           </div>

//           <div className="grid gap-6 lg:grid-cols-12">
            
//             <div className="lg:col-span-5">
//               <EditorialImage
//                 src={images.behind}
//                 alt="Behind the scenes"
//               />
//             </div>

//             <div className="lg:col-span-4 lg:pt-24">
//               <EditorialImage
//                 src={images.editing}
//                 alt="Film editing"
//               />
//             </div>

//             <div className="flex items-end lg:col-span-3">
//               <div className="border-l border-[#d8b56b]/50 py-2 pl-6">
//                 <p className="font-serif text-2xl font-light leading-relaxed">
//                   “The magic is
//                   <br />
//                   in the details.”
//                 </p>
//               </div>
//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           WHAT WE CREATE
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        
//         <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          
//           <div>
//             <SectionLabel number="10">WHAT WE CREATE</SectionLabel>
//           </div>

//           <div>
            
//             <div className="grid border-t border-white/10 md:grid-cols-2">
              
//               {[
//                 ["01", "Wedding Films", "Timeless stories of love and celebration."],
//                 ["02", "Traditional Ceremonies", "Heritage, rituals and cultural identity."],
//                 ["03", "Family Stories", "The people and memories that matter most."],
//                 ["04", "Events", "Energy, atmosphere and unforgettable moments."],
//                 ["05", "Documentary", "Real stories told with honesty and cinematic depth."],
//                 ["06", "Commercial Production", "Professional visual content for brands and organizations."],
//               ].map(([number, title, description]) => (
//                 <div
//                   key={number}
//                   className="group border-b border-white/10 py-8 transition hover:px-4"
//                 >
//                   <div className="flex items-start gap-6">
//                     <span className="text-[9px] tracking-[0.25em] text-[#d8b56b]">
//                       {number}
//                     </span>
//                     <div>
//                       <h3 className="font-serif text-2xl font-light">
//                         {title}
//                       </h3>
//                       <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
//                         {description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           FINAL STATEMENT
//       ===================================================== */}

//       <section className="relative overflow-hidden border-t border-white/10">
        
//         <div className="absolute inset-0">
//           <EditorialImage
//             src={images.family}
//             alt="Family and community"
//             className="h-full w-full"
//           />
//         </div>

//         <div className="absolute inset-0 bg-black/70" />

//         <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1500px] items-center px-6 py-24 sm:px-10 lg:px-16">
          
//           <div className="max-w-4xl">
            
//             <SectionLabel number="11">OUR PROMISE</SectionLabel>

//             <h2 className="mt-7 font-serif text-5xl font-light leading-[0.95] sm:text-6xl lg:text-8xl">
//               Your story
//               <br />
//               deserves to
//               <br />
//               <span className="italic text-[#e0bf7b]">
//                 live forever.
//               </span>
//             </h2>

//             <p className="mt-8 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
//               YOSIEAL exists to turn real moments into meaningful films —
//               preserving the people, culture, emotion and memories that make
//               every story worth remembering.
//             </p>

//             <div className="mt-10 flex items-center gap-5">
//               <span className="h-px w-16 bg-[#d8b56b]" />
//               <span className="text-[9px] tracking-[0.35em] text-[#d8b56b]">
//                 YOSIEAL FILM PRODUCTION
//               </span>
//             </div>

//           </div>

//         </div>

//       </section>

//       <Footer />

//     </main>
//   );
// }

// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// /* =========================================================
//    BIRUK PICTURE - CONTACT PAGE
//    International / Editorial / Photography & Film Design
//    ========================================================= */

// const images = {
//   hero:
//     "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=85&w=2200&auto=format&fit=crop",

//   studio:
//     "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=85&w=1600&auto=format&fit=crop",

//   wedding:
//     "https://images.unsplash.com/photo-1519741497674-611481863552?q=85&w=1600&auto=format&fit=crop",
// };

// /* =========================================================
//    SMALL SECTION LABEL
//    ========================================================= */

// function SectionLabel({ number, children }) {
//   return (
//     <div className="flex items-center gap-3">
//       <span className="font-serif text-sm text-[#b99555]">
//         {number}
//       </span>

//       <span className="h-px w-10 bg-[#b99555]/50" />

//       <span className="text-[9px] font-medium tracking-[0.35em] text-[#9b7b45]">
//         {children}
//       </span>
//     </div>
//   );
// }

// /* =========================================================
//    CONTACT PAGE
//    ========================================================= */

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Contact Form:", formData);

//     alert("Thank you. Your message has been received.");

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       service: "",
//       message: "",
//     });
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#f4f1eb] text-[#171717]">

//       {/* =====================================================
//           NAVBAR
//       ===================================================== */}

//       <div className="relative z-50 w-full">
//         <Navbar />
//       </div>


//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative min-h-[72vh] overflow-hidden bg-[#171717]">

//         <div className="absolute inset-0">

//           <img
//             src={images.hero}
//             alt="Biruk Picture"
//             className="h-full w-full object-cover object-center"
//           />

//         </div>

//         {/* IMAGE OVERLAY */}

//         <div className="absolute inset-0 bg-black/35" />

//         <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />


//         {/* HERO CONTENT */}

//         <div className="relative z-10 mx-auto flex min-h-[72vh] w-full max-w-[1500px] items-end px-6 pb-16 sm:px-10 lg:px-16 lg:pb-20">

//           <div className="max-w-4xl">

//             <SectionLabel number="01">
//               BIRUK PICTURE / CONTACT
//             </SectionLabel>

//             <h1 className="mt-6 font-serif text-5xl font-light leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[105px]">

//               Let&apos;s create
//               <br />

//               <span className="italic text-[#d5b777]">
//                 something memorable.
//               </span>

//             </h1>

//             <p className="mt-8 max-w-xl border-l border-[#d5b777]/60 pl-5 text-sm leading-7 text-white/70 sm:text-base">
//               Whether it&apos;s a wedding, celebration, cultural story,
//               event or professional production, we would love to hear
//               about your vision.
//             </p>

//           </div>

//         </div>


//         {/* HERO BRAND */}

//         <div className="absolute bottom-7 right-6 z-20 text-[9px] tracking-[0.3em] text-white/50 sm:right-10 lg:right-16">
//           BIRUK PICTURE / CONTACT
//         </div>

//       </section>


//       {/* =====================================================
//           INTRO
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

//         <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

//           <div>
//             <SectionLabel number="02">
//               START A CONVERSATION
//             </SectionLabel>
//           </div>


//           <div className="max-w-5xl">

//             <h2 className="font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-7xl">

//               Your story starts
//               <br />

//               <span className="italic text-[#a98245]">
//                 with a conversation.
//               </span>

//             </h2>

//             <p className="mt-8 max-w-3xl text-sm leading-8 text-black/55 sm:text-base">
//               Tell us what you are planning, what you are looking for,
//               and what matters most to you. Our team will get back to
//               you and discuss how we can bring your vision to life.
//             </p>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           CONTACT INFORMATION + FORM
//       ===================================================== */}

//       <section className="border-y border-black/10 bg-[#ebe7df]">

//         <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[0.75fr_1.25fr]">


//           {/* =================================================
//               LEFT INFORMATION
//           ================================================= */}

//           <div className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

//             <SectionLabel number="03">
//               GET IN TOUCH
//             </SectionLabel>


//             <h2 className="mt-7 font-serif text-4xl font-light leading-tight sm:text-5xl">

//               We&apos;d love to
//               <br />

//               <span className="italic text-[#a98245]">
//                 hear from you.
//               </span>

//             </h2>


//             <p className="mt-7 max-w-md text-sm leading-7 text-black/50">
//               Have a project in mind? Contact Biruk Picture and let&apos;s
//               talk about your next visual story.
//             </p>


//             {/* CONTACT DETAILS */}

//             <div className="mt-12 space-y-8">


//               {/* EMAIL */}

//               <div className="border-t border-black/10 pt-5">

//                 <span className="text-[9px] tracking-[0.3em] text-[#9b7b45]">
//                   EMAIL
//                 </span>

//                 <a
//                   href="mailto:info@birukpicture.com"
//                   className="mt-2 block font-serif text-xl transition hover:text-[#a98245]"
//                 >
//                   info@birukpicture.com
//                 </a>

//               </div>


//               {/* PHONE */}

//               <div className="border-t border-black/10 pt-5">

//                 <span className="text-[9px] tracking-[0.3em] text-[#9b7b45]">
//                   PHONE
//                 </span>

//                 <a
//                   href="tel:+000000000000"
//                   className="mt-2 block font-serif text-xl transition hover:text-[#a98245]"
//                 >
//                   +00 000 000 000
//                 </a>

//               </div>


//               {/* LOCATION */}

//               <div className="border-t border-black/10 pt-5">

//                 <span className="text-[9px] tracking-[0.3em] text-[#9b7b45]">
//                   LOCATION
//                 </span>

//                 <p className="mt-2 font-serif text-xl">
//                   Switzerland · Europe
//                 </p>

//               </div>


//               {/* SOCIAL */}

//               <div className="border-t border-black/10 pt-5">

//                 <span className="text-[9px] tracking-[0.3em] text-[#9b7b45]">
//                   SOCIAL
//                 </span>

//                 <div className="mt-4 flex flex-wrap gap-6">

//                   <a
//                     href="#"
//                     className="text-xs tracking-[0.15em] transition hover:text-[#a98245]"
//                   >
//                     INSTAGRAM
//                   </a>

//                   <a
//                     href="#"
//                     className="text-xs tracking-[0.15em] transition hover:text-[#a98245]"
//                   >
//                     FACEBOOK
//                   </a>

//                   <a
//                     href="#"
//                     className="text-xs tracking-[0.15em] transition hover:text-[#a98245]"
//                   >
//                     YOUTUBE
//                   </a>

//                 </div>

//               </div>

//             </div>

//           </div>


//           {/* =================================================
//               CONTACT FORM
//           ================================================= */}

//           <div className="border-t border-black/10 bg-[#f8f6f1] px-6 py-20 sm:px-10 lg:border-l lg:border-t-0 lg:px-16 lg:py-28">

//             <SectionLabel number="04">
//               PROJECT DETAILS
//             </SectionLabel>


//             <h2 className="mt-6 font-serif text-3xl font-light sm:text-4xl">
//               Tell us about your project.
//             </h2>


//             <form
//               onSubmit={handleSubmit}
//               className="mt-10"
//             >


//               {/* NAME + EMAIL */}

//               <div className="grid gap-8 md:grid-cols-2">


//                 <div className="border-b border-black/20">

//                   <label className="text-[9px] tracking-[0.25em] text-black/45">
//                     YOUR NAME
//                   </label>

//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your name"
//                     required
//                     className="mt-3 w-full bg-transparent pb-4 text-sm outline-none placeholder:text-black/25"
//                   />

//                 </div>


//                 <div className="border-b border-black/20">

//                   <label className="text-[9px] tracking-[0.25em] text-black/45">
//                     EMAIL ADDRESS
//                   </label>

//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="you@example.com"
//                     required
//                     className="mt-3 w-full bg-transparent pb-4 text-sm outline-none placeholder:text-black/25"
//                   />

//                 </div>

//               </div>


//               {/* PHONE + SERVICE */}

//               <div className="mt-10 grid gap-8 md:grid-cols-2">


//                 <div className="border-b border-black/20">

//                   <label className="text-[9px] tracking-[0.25em] text-black/45">
//                     PHONE NUMBER
//                   </label>

//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="+00 000 000 000"
//                     className="mt-3 w-full bg-transparent pb-4 text-sm outline-none placeholder:text-black/25"
//                   />

//                 </div>


//                 <div className="border-b border-black/20">

//                   <label className="text-[9px] tracking-[0.25em] text-black/45">
//                     SERVICE
//                   </label>

//                   <select
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     required
//                     className="mt-3 w-full bg-transparent pb-4 text-sm outline-none"
//                   >

//                     <option value="">
//                       Select a service
//                     </option>

//                     <option value="Wedding">
//                       Wedding Photography / Film
//                     </option>

//                     <option value="Traditional">
//                       Traditional Ceremony
//                     </option>

//                     <option value="Event">
//                       Event Production
//                     </option>

//                     <option value="Family">
//                       Family Photography
//                     </option>

//                     <option value="Commercial">
//                       Commercial Production
//                     </option>

//                     <option value="Documentary">
//                       Documentary
//                     </option>

//                   </select>

//                 </div>

//               </div>


//               {/* MESSAGE */}

//               <div className="mt-10 border-b border-black/20">

//                 <label className="text-[9px] tracking-[0.25em] text-black/45">
//                   YOUR MESSAGE
//                 </label>

//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell us about your event, date, location and what you have in mind..."
//                   rows="6"
//                   required
//                   className="mt-3 w-full resize-none bg-transparent pb-4 text-sm leading-7 outline-none placeholder:text-black/25"
//                 />

//               </div>


//               {/* SUBMIT */}

//               <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

//                 <p className="max-w-sm text-[10px] leading-5 text-black/40">
//                   We usually respond as soon as possible after receiving
//                   your inquiry.
//                 </p>


//                 <button
//                   type="submit"
//                   className="group flex items-center justify-center gap-5 bg-[#171717] px-8 py-4 text-[10px] tracking-[0.25em] text-white transition duration-300 hover:bg-[#a98245]"
//                 >

//                   SEND INQUIRY

//                   <span className="transition-transform duration-300 group-hover:translate-x-1">
//                     →
//                   </span>

//                 </button>

//               </div>

//             </form>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           VISUAL BREAK
//       ===================================================== */}

//       <section className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

//         <div className="grid gap-6 lg:grid-cols-12">


//           <div className="lg:col-span-7">

//             <div className="group relative overflow-hidden bg-[#111]">

//               <img
//                 src={images.studio}
//                 alt="Biruk Picture studio"
//                 className="block h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//               <div className="absolute bottom-7 left-7">

//                 <span className="text-[9px] tracking-[0.3em] text-[#d5b777]">
//                   BIRUK PICTURE
//                 </span>

//                 <h3 className="mt-2 font-serif text-3xl font-light text-white">
//                   Behind the frame.
//                 </h3>

//               </div>

//             </div>

//           </div>


//           <div className="flex items-end lg:col-span-5">

//             <div className="border-l border-[#a98245]/50 py-2 pl-7">

//               <p className="font-serif text-3xl font-light leading-relaxed sm:text-4xl">

//                 Every project
//                 <br />

//                 begins with
//                 <br />

//                 <span className="italic text-[#a98245]">
//                   an idea.
//                 </span>

//               </p>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           CTA
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#171717]">

//         <div className="absolute inset-0">

//           <img
//             src={images.wedding}
//             alt="Wedding photography"
//             className="h-full w-full object-cover"
//           />

//         </div>

//         <div className="absolute inset-0 bg-black/65" />

//         <div className="relative z-10 mx-auto flex min-h-[500px] max-w-[1500px] items-center px-6 py-24 sm:px-10 lg:px-16">

//           <div className="max-w-4xl">

//             <SectionLabel number="05">
//               BIRUK PICTURE
//             </SectionLabel>

//             <h2 className="mt-7 font-serif text-5xl font-light leading-[0.95] text-white sm:text-6xl lg:text-8xl">

//               Have a story
//               <br />

//               worth
//               <br />

//               <span className="italic text-[#d5b777]">
//                 remembering?
//               </span>

//             </h2>

//             <div className="mt-10 flex items-center gap-5">

//               <span className="h-px w-16 bg-[#d5b777]" />

//               <span className="text-[9px] tracking-[0.35em] text-[#d5b777]">
//                 LET&apos;S CREATE TOGETHER
//               </span>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           FOOTER
//       ===================================================== */}

//       <Footer />

//     </main>
//   );
// }

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =========================================================
   BIRUK PICTURE - ABOUT PAGE
   International / Editorial / Photography & Film
   ========================================================= */

const images = {
  hero:
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=85&w=2200&auto=format&fit=crop",

  wedding:
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=85&w=1600&auto=format&fit=crop",

  traditional:
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=85&w=1600&auto=format&fit=crop",

  family:
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=85&w=1600&auto=format&fit=crop",

  culture:
    "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?q=85&w=1600&auto=format&fit=crop",

  celebration:
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=85&w=1600&auto=format&fit=crop",

  camera:
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=85&w=1600&auto=format&fit=crop",

  production:
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=85&w=1600&auto=format&fit=crop",

  portrait:
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=85&w=1400&auto=format&fit=crop",

  ceremony:
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=85&w=1600&auto=format&fit=crop",

  event:
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=85&w=1600&auto=format&fit=crop",

  behind:
    "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=85&w=1600&auto=format&fit=crop",

  editing:
    "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=85&w=1600&auto=format&fit=crop",

  couple:
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=85&w=1600&auto=format&fit=crop",

  celebration2:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=85&w=1600&auto=format&fit=crop",
};


/* =========================================================
   IMAGE COMPONENT
   ========================================================= */

function EditorialImage({
  src,
  alt = "",
  className = "",
  contain = false,
}) {
  return (
    <div
      className={`group relative overflow-hidden bg-[#ded9d0] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`block h-full w-full transition duration-700 ease-out group-hover:scale-[1.025] ${
          contain
            ? "object-contain object-center"
            : "object-cover object-center"
        }`}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-90" />

      <div className="pointer-events-none absolute inset-4 border border-white/20 transition duration-500 group-hover:border-[#b99555]/70" />
    </div>
  );
}


/* =========================================================
   SECTION LABEL
   ========================================================= */

function SectionLabel({ number, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-serif text-sm text-[#a98245]">
        {number}
      </span>

      <span className="h-px w-10 bg-[#b99555]/50" />

      <span className="text-[9px] font-medium tracking-[0.35em] text-[#9b7b45]">
        {children}
      </span>
    </div>
  );
}


/* =========================================================
   ABOUT PAGE
   ========================================================= */

export default function About() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f4f1eb] text-[#171717]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <div className="relative z-50 w-full">
        <Navbar />
      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[82vh] overflow-hidden bg-[#171717]">

        <div className="absolute inset-0">

          <img
            src={images.hero}
            alt="Biruk Picture photography and film"
            className="h-full w-full object-cover object-center"
          />

        </div>

        {/* IMAGE OVERLAY */}

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15" />


        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[82vh] w-full max-w-[1500px] items-end px-6 pb-16 sm:px-10 lg:px-16 lg:pb-20">

          <div className="max-w-5xl">

            <SectionLabel number="01">
              BIRUK PICTURE / ABOUT
            </SectionLabel>


            <h1 className="mt-6 font-serif text-5xl font-light leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[110px]">

              We capture
              <br />

              <span className="italic text-[#d5b777]">
                what matters.
              </span>

            </h1>


            <p className="mt-8 max-w-xl border-l border-[#d5b777]/60 pl-5 text-sm leading-7 text-white/70 sm:text-base">
              Biruk Picture is a photography and film studio creating
              meaningful visual stories through people, culture,
              celebrations and unforgettable moments.
            </p>

          </div>

        </div>


        {/* HERO BRAND */}

        <div className="absolute bottom-7 right-6 z-20 text-[9px] tracking-[0.3em] text-white/50 sm:right-10 lg:right-16">
          BIRUK PICTURE / ABOUT
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

          <div>
            <SectionLabel number="02">
              WHO WE ARE
            </SectionLabel>
          </div>


          <div className="max-w-5xl">

            <h2 className="font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-7xl">

              A visual studio
              <br />

              <span className="italic text-[#a98245]">
                built around people.
              </span>

            </h2>


            <div className="mt-10 grid gap-8 md:grid-cols-2">

              <p className="text-sm leading-8 text-black/55 sm:text-base">
                Biruk Picture is a creative photography and film studio
                dedicated to capturing real people, meaningful
                celebrations, culture and unforgettable moments with
                a refined visual style.
              </p>


              <p className="text-sm leading-8 text-black/45 sm:text-base">
                From intimate weddings and traditional ceremonies to
                family stories, events, documentaries and professional
                productions, we create images and films designed to
                remain meaningful for years to come.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR APPROACH
      ===================================================== */}

      <section className="border-y border-black/10 bg-[#ebe7df]">

        <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[1fr_1fr]">

          {/* IMAGE */}

          <div className="min-h-[520px] lg:min-h-[720px]">

            <EditorialImage
              src={images.traditional}
              alt="Traditional celebration"
              className="h-full w-full"
            />

          </div>


          {/* TEXT */}

          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

            <div className="max-w-xl">

              <SectionLabel number="03">
                OUR APPROACH
              </SectionLabel>


              <h2 className="mt-7 font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">

                Beautiful images
                <br />

                <span className="italic text-[#a98245]">
                  with meaning.
                </span>

              </h2>


              <p className="mt-7 text-sm leading-8 text-black/50 sm:text-base">
                We believe great photography is not only about how an
                image looks. It is about how it feels. Our approach
                combines thoughtful composition, natural emotion,
                cinematic storytelling and attention to detail.
              </p>


              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-black/10 pt-7 sm:grid-cols-4">

                {[
                  ["01", "VISION"],
                  ["02", "PEOPLE"],
                  ["03", "DETAIL"],
                  ["04", "STORY"],
                ].map(([number, title]) => (
                  <div key={number}>

                    <span className="font-serif text-2xl text-[#a98245]">
                      {number}
                    </span>

                    <p className="mt-2 text-[9px] tracking-[0.2em] text-black/40">
                      {title}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WEDDINGS
      ===================================================== */}

      <section className="mx-auto w-full max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>

            <SectionLabel number="04">
              WEDDINGS
            </SectionLabel>

            <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl lg:text-6xl">

              Love,
              <span className="italic text-[#a98245]">
                {" "}beautifully captured.
              </span>

            </h2>

          </div>


          <p className="max-w-md text-sm leading-7 text-black/45">
            From quiet preparation to the final celebration, we focus
            on the details, emotions and people that make every wedding
            completely unique.
          </p>

        </div>


        <div className="grid items-start gap-6 lg:grid-cols-12">

          <div className="lg:col-span-7 lg:pt-14">

            <EditorialImage
              src={images.wedding}
              alt="Wedding photography"
              className="aspect-[4/3] w-full"
            />

          </div>


          <div className="lg:col-span-5">

            <EditorialImage
              src={images.couple}
              alt="Wedding couple"
              className="aspect-[3/4] w-full"
            />


            <div className="mt-6 border-l border-[#a98245]/50 pl-5">

              <span className="text-[9px] tracking-[0.3em] text-[#9b7b45]">
                WEDDING STORIES
              </span>

              <h3 className="mt-3 font-serif text-2xl font-light">
                Two lives.
                <br />
                One beautiful chapter.
              </h3>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CULTURE
      ===================================================== */}

      <section className="bg-[#171717] py-24 text-white sm:py-32">

        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

          <div className="grid gap-14 lg:grid-cols-12">

            <div className="lg:col-span-4">

              <SectionLabel number="05">
                CULTURE & HERITAGE
              </SectionLabel>


              <h2 className="mt-6 font-serif text-4xl font-light leading-tight sm:text-5xl">

                Where
                <br />

                <span className="italic text-[#d5b777]">
                  culture
                </span>

                <br />

                becomes visual.
              </h2>


              <p className="mt-7 max-w-md text-sm leading-8 text-white/50">
                Every tradition carries history. Every celebration
                carries emotion. We document cultural moments with
                respect, creativity and a strong sense of visual
                storytelling.
              </p>


              <div className="mt-10 space-y-5">

                {[
                  ["01", "TRADITION"],
                  ["02", "IDENTITY"],
                  ["03", "FAMILY"],
                  ["04", "LEGACY"],
                ].map(([number, title]) => (
                  <div
                    key={number}
                    className="flex items-center gap-5 border-t border-white/10 pt-4"
                  >

                    <span className="text-[9px] tracking-[0.25em] text-[#d5b777]">
                      {number}
                    </span>

                    <span className="text-xs tracking-[0.2em] text-white/55">
                      {title}
                    </span>

                  </div>
                ))}

              </div>

            </div>


            <div className="lg:col-span-8">

              <div className="grid gap-6 sm:grid-cols-2">

                <EditorialImage
                  src={images.ceremony}
                  alt="Traditional ceremony"
                  className="aspect-[3/4] sm:mt-16"
                />

                <EditorialImage
                  src={images.family}
                  alt="Family celebration"
                  className="aspect-[3/4]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PEOPLE & COMMUNITY
      ===================================================== */}

      <section className="mx-auto w-full max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        <div className="mb-14">

          <SectionLabel number="06">
            PEOPLE & COMMUNITY
          </SectionLabel>

          <h2 className="mt-5 max-w-3xl font-serif text-4xl font-light sm:text-5xl lg:text-6xl">

            The beauty of
            <span className="italic text-[#a98245]">
              {" "}real moments.
            </span>

          </h2>

        </div>


        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">

          <div className="mb-6 break-inside-avoid">

            <EditorialImage
              src={images.culture}
              alt="Culture and people"
              className="w-full"
            />

            <p className="mt-4 text-[9px] tracking-[0.3em] text-[#9b7b45]">
              CULTURE / 01
            </p>

          </div>


          <div className="mb-6 break-inside-avoid lg:mt-20">

            <EditorialImage
              src={images.celebration}
              alt="Celebration"
              className="w-full"
            />

            <p className="mt-4 text-[9px] tracking-[0.3em] text-[#9b7b45]">
              CELEBRATION / 02
            </p>

          </div>


          <div className="mb-6 break-inside-avoid">

            <EditorialImage
              src={images.portrait}
              alt="Portrait photography"
              className="w-full"
            />

            <p className="mt-4 text-[9px] tracking-[0.3em] text-[#9b7b45]">
              PEOPLE / 03
            </p>

          </div>


          <div className="mb-6 break-inside-avoid">

            <EditorialImage
              src={images.celebration2}
              alt="Community celebration"
              className="w-full"
            />

            <p className="mt-4 text-[9px] tracking-[0.3em] text-[#9b7b45]">
              COMMUNITY / 04
            </p>

          </div>


          <div className="mb-6 break-inside-avoid lg:mt-16">

            <EditorialImage
              src={images.event}
              alt="Event photography"
              className="w-full"
            />

            <p className="mt-4 text-[9px] tracking-[0.3em] text-[#9b7b45]">
              EVENTS / 05
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

      <section className="border-y border-black/10 bg-[#ebe7df]">

        <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[220px_1fr]">

            <div>

              <SectionLabel number="07">
                WHAT WE DO
              </SectionLabel>

            </div>


            <div>

              <h2 className="max-w-4xl font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">

                From a single moment
                <br />

                to a complete
                <span className="italic text-[#a98245]">
                  {" "}visual story.
                </span>

              </h2>


              <div className="mt-14 grid border-t border-black/10 md:grid-cols-2">

                {[
                  [
                    "01",
                    "Wedding Photography & Film",
                    "Emotional, elegant and timeless documentation of your wedding day.",
                  ],
                  [
                    "02",
                    "Traditional Ceremonies",
                    "Respectful visual storytelling around culture, rituals and heritage.",
                  ],
                  [
                    "03",
                    "Family Photography",
                    "Authentic portraits and memories created around the people you love.",
                  ],
                  [
                    "04",
                    "Events",
                    "Photography and film that capture the atmosphere and energy of your event.",
                  ],
                  [
                    "05",
                    "Documentary",
                    "Real stories presented with honesty, depth and cinematic quality.",
                  ],
                  [
                    "06",
                    "Commercial Production",
                    "Professional visual content for businesses, organizations and brands.",
                  ],
                ].map(([number, title, description]) => (

                  <div
                    key={number}
                    className="group border-b border-black/10 py-8 transition duration-300 hover:px-4"
                  >

                    <div className="flex items-start gap-6">

                      <span className="text-[9px] tracking-[0.25em] text-[#9b7b45]">
                        {number}
                      </span>


                      <div>

                        <h3 className="font-serif text-2xl font-light">
                          {title}
                        </h3>

                        <p className="mt-3 max-w-md text-sm leading-6 text-black/45">
                          {description}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FILM & PRODUCTION
      ===================================================== */}

      <section className="mx-auto w-full max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <SectionLabel number="08">
              FILM & PRODUCTION
            </SectionLabel>


            <h2 className="mt-6 font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">

              Behind every
              <br />

              <span className="italic text-[#a98245]">
                frame.
              </span>

            </h2>


            <p className="mt-7 max-w-lg text-sm leading-8 text-black/45">
              From camera work and creative direction to editing and
              colour grading, every part of the production is carefully
              considered to create a finished story with character.
            </p>


            <div className="mt-10 grid grid-cols-2 gap-5">

              {[
                ["01", "CINEMATOGRAPHY"],
                ["02", "CREATIVE DIRECTION"],
                ["03", "EDITING"],
                ["04", "COLOUR GRADING"],
              ].map(([number, title]) => (

                <div
                  key={number}
                  className="border-t border-black/10 pt-4"
                >

                  <span className="text-[9px] tracking-[0.25em] text-[#9b7b45]">
                    {number}
                  </span>

                  <p className="mt-2 text-sm text-black/60">
                    {title}
                  </p>

                </div>

              ))}

            </div>

          </div>


          <div className="grid gap-6 sm:grid-cols-2">

            <EditorialImage
              src={images.camera}
              alt="Professional camera"
              className="aspect-[3/4] sm:mt-16"
            />

            <EditorialImage
              src={images.production}
              alt="Film production"
              className="aspect-[3/4]"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          BEHIND THE SCENES
      ===================================================== */}

      <section className="bg-[#171717] py-24 text-white sm:py-32">

        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <SectionLabel number="09">
                BEHIND THE SCENES
              </SectionLabel>

              <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl">

                What happens
                <span className="italic text-[#d5b777]">
                  {" "}behind.
                </span>

              </h2>

            </div>


            <p className="max-w-md text-sm leading-7 text-white/40">
              The final image is only one part of the process. Every
              project begins with planning, creativity and attention
              to the smallest details.
            </p>

          </div>


          <div className="grid gap-6 lg:grid-cols-12">

            <div className="lg:col-span-5">

              <EditorialImage
                src={images.behind}
                alt="Behind the scenes"
                className="aspect-[4/5]"
              />

            </div>


            <div className="lg:col-span-4 lg:pt-24">

              <EditorialImage
                src={images.editing}
                alt="Photo and video editing"
                className="aspect-[4/5]"
              />

            </div>


            <div className="flex items-end lg:col-span-3">

              <div className="border-l border-[#d5b777]/50 py-2 pl-6">

                <p className="font-serif text-2xl font-light leading-relaxed sm:text-3xl">

                  The magic
                  <br />

                  is in the
                  <br />

                  <span className="italic text-[#d5b777]">
                    details.
                  </span>

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR VALUES
      ===================================================== */}

      <section className="mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

          <div>

            <SectionLabel number="10">
              OUR VALUES
            </SectionLabel>

          </div>


          <div>

            <div className="grid gap-0 border-t border-black/10 md:grid-cols-2">

              {[
                [
                  "01",
                  "AUTHENTICITY",
                  "We believe the most powerful images come from real emotion and genuine moments.",
                ],
                [
                  "02",
                  "CRAFT",
                  "Every frame is shaped with intention, from composition to final colour.",
                ],
                [
                  "03",
                  "RESPECT",
                  "We approach every person, family and cultural story with care and understanding.",
                ],
                [
                  "04",
                  "LEGACY",
                  "Our work is created to remain valuable long after the moment has passed.",
                ],
              ].map(([number, title, description]) => (

                <div
                  key={number}
                  className="border-b border-black/10 py-9 md:pr-10"
                >

                  <div className="flex items-start gap-6">

                    <span className="text-[9px] tracking-[0.25em] text-[#9b7b45]">
                      {number}
                    </span>

                    <div>

                      <h3 className="font-serif text-2xl font-light">
                        {title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-7 text-black/45">
                        {description}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#171717]">

        <div className="absolute inset-0">

          <img
            src={images.family}
            alt="Family photography"
            className="h-full w-full object-cover object-center"
          />

        </div>


        <div className="absolute inset-0 bg-black/65" />


        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1500px] items-center px-6 py-24 sm:px-10 lg:px-16">

          <div className="max-w-4xl">

            <SectionLabel number="11">
              OUR PROMISE
            </SectionLabel>


            <h2 className="mt-7 font-serif text-5xl font-light leading-[0.95] text-white sm:text-6xl lg:text-8xl">

              Your story
              <br />

              deserves to
              <br />

              <span className="italic text-[#d5b777]">
                be remembered.
              </span>

            </h2>


            <p className="mt-8 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Biruk Picture exists to turn real moments into meaningful
              photographs and films — preserving people, emotion,
              culture and memories for generations to come.
            </p>


            <div className="mt-10 flex items-center gap-5">

              <span className="h-px w-16 bg-[#d5b777]" />

              <span className="text-[9px] tracking-[0.35em] text-[#d5b777]">
                BIRUK PICTURE
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
}