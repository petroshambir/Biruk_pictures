
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/images/biruk pic.png';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [workOpen, setWorkOpen] = useState(false);
//   const [galleryLinks, setGalleryLinks] = useState([]);

//   useEffect(() => {
//     fetch('https://habesha-film-production-server.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => {
//         setGalleryLinks(data);
//       })
//       .catch(err => console.log("Error fetching navbar categories:", err));
//   }, []);

//   const generateSlug = (titleText) => {
//     if (!titleText) return '';
//     return titleText
//       .toLowerCase()
//       .replace(/["']/g, '')
//       .replace(/&/g, 'and')
//       .trim()
//       .replace(/[^\w\s-]/g, '')
//       .replace(/\s+/g, '-');
//   };

//   return (
 

// // <nav className="absolute top-0 left-0 z-50 w-full px-5 sm:px-8 lg:px-12 py-5 text-white">

// //   {/* =========================
// //       NAVBAR MAIN
// //   ========================== */}
// //   <div className="relative flex w-full items-center">

// //     {/* =========================
// //         LOGO
// //         Mobile: Right
// //         Desktop: Left + slightly right
// //     ========================== */}
// //     <Link
// //       to="/home"
// //       className="
// //         order-2
// //         md:order-1
// //         flex-shrink-0
// //         md:ml-10
// //         lg:ml-16
// //       "
// //     >
// //       <img
// //         src={logo}
// //         alt="Yosieal Logo"
// //         className="
// //           w-14 h-14
// //           md:w-20 md:h-20
// //           rounded-full
// //           object-cover
// //         "
// //       />
// //     </Link>


// //     {/* =========================
// //         BURGER - MOBILE
// //     ========================== */}
// //     <button
// //       type="button"
// //       className="
// //         order-1
// //         md:hidden
// //         ml-1
// //         text-2xl
// //         leading-none
// //         transition-opacity
// //         hover:opacity-70
// //       "
// //       onClick={() => setIsOpen(!isOpen)}
// //       aria-label="Toggle navigation menu"
// //     >
// //       {isOpen ? "✕" : "☰"}
// //     </button>


// //     {/* =========================
// //         NAVIGATION
// //     ========================== */}
// //     <div
// //       className={`
// //         order-3

// //         absolute
// //         top-full
// //         left-0
// //         w-full
// //         mt-5

// //         px-5
// //         py-5

// //         bg-black/95
// //         backdrop-blur-md

// //         flex
// //         flex-col

// //         text-xs
// //         font-semibold
// //         uppercase
// //         tracking-[0.18em]

// //         ${isOpen ? "flex" : "hidden"}

// //         md:static
// //         md:mt-0

// //         md:ml-auto
// //         md:mr-8
// //         lg:mr-16

// //         md:w-auto
// //         md:px-0
// //         md:py-0

// //         md:bg-transparent
// //         md:backdrop-blur-none

// //         md:flex-row
// //         md:items-center
// //         md:justify-center

// //         md:gap-7
// //         lg:gap-9

// //         md:flex
// //       `}
// //     >

// //       {/* HOME */}
// //       <Link
// //         to="/home"
// //         onClick={() => setIsOpen(false)}
// //         className="
// //           group
// //           relative
// //           py-4
// //           text-center
// //           whitespace-nowrap

// //           text-[#e7ddc7]

// //           transition-colors
// //           duration-300

// //           hover:text-white

// //           md:py-2
// //         "
// //       >
// //         Home

// //         <span
// //           className="
// //             absolute
// //             left-1/2
// //             bottom-0

// //             h-[1px]
// //             w-0

// //             -translate-x-1/2

// //             bg-[#bfb8ad]

// //             transition-all
// //             duration-300

// //             group-hover:w-8
// //           "
// //         />
// //       </Link>


// //       {/* ABOUT */}
// //       <Link
// //         to="/about"
// //         onClick={() => setIsOpen(false)}
// //         className="
// //           group
// //           relative
// //           py-4
// //           text-center
// //           whitespace-nowrap

// //           text-[#e7ddc7]

// //           transition-colors
// //           duration-300

// //           hover:text-white

// //           md:py-2
// //         "
// //       >
// //         About

// //         <span
// //           className="
// //             absolute
// //             left-1/2
// //             bottom-0

// //             h-[1px]
// //             w-0

// //             -translate-x-1/2

// //             bg-[#d8ae55]

// //             transition-all
// //             duration-300

// //             group-hover:w-8
// //           "
// //         />
// //       </Link>

// // {/* ========================= GALLERY ========================= */}
// // <div className="relative py-4 md:py-2" onMouseEnter={() => setWorkOpen(true)} onMouseLeave={() => setWorkOpen(false)}>
// //   {/* Gallery Button */}
// //   <button type="button" onClick={() => setWorkOpen(!workOpen)} className="group relative flex w-full items-center justify-center gap-1.5 whitespace-nowrap text-[#f5feff] transition-all duration-300 hover:text-white">
// //     <span>Gallery</span>

// //     {/* Arrow */}
// //     <span className={`text-[9px] transition-transform duration-300 ${workOpen ? "rotate-180" : "rotate-0"}`}>
// //       ▾
// //     </span>

// //     {/* Gold underline */}
// //     <span className="absolute left-1/2 bottom-[-9px] h-[1px] w-0 -translate-x-1/2 bg-[#d8ae55] shadow-[0_0_8px_rgba(216,174,85,0.45)] transition-all duration-300 group-hover:w-10" />
// //   </button>

// //   {/* ========================= GALLERY DROPDOWN ========================= */}
// //   {workOpen && (
// //     <div className="absolute top-[calc(100%+0.8rem)] right-0 z-50 w-60 overflow-hidden rounded-xl border border-[#d8ae55]/20 bg-[#241610]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.55)] animate-fadeIn">

// //       {/* Dropdown Header */}
// //       <div className="px-5 pt-4 pb-3 border-b border-white/10">
// //         <div className="flex items-center gap-2">
// //           <span className="h-1.5 w-1.5 rounded-full bg-[#d8ae55] shadow-[0_0_8px_rgba(216,174,85,0.8)]" />

// //           <span className="text-[9px] uppercase tracking-[0.3em] text-[#d8ae55] font-semibold">
// //             Our Gallery
// //           </span>
// //         </div>

// //         <p className="mt-1.5 text-[8px] uppercase tracking-[0.18em] text-white/40">
// //           Explore our visual stories
// //         </p>
// //       </div>

// //       {/* Gallery Items */}
// //       <div className="px-2 py-2">
// //         {galleryLinks.length > 0 ? (
// //           galleryLinks.map((item, index) => {
// //             const rawTitle = item.title ? item.title.replace(/"/g, "") : "";
// //             const slug = generateSlug(item.title);

// //             return (
// //               <Link
// //                 key={item._id || index}
// //                 to={`/gallery/${slug}`}
// //                 onClick={() => {
// //                   setWorkOpen(false);
// //                   setIsOpen(false);
// //                 }}
// //                 className="group relative flex items-center justify-between rounded-lg px-3 py-3 text-[#f3eee8] transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
// //               >
// //                 {/* Left side */}
// //                 <div className="flex items-center gap-3">
// //                   {/* Number */}
// //                   <span className="w-5 text-[8px] tracking-widest text-[#d8ae55]/50 transition-colors duration-300 group-hover:text-[#d8ae55]">
// //                     {String(index + 1).padStart(2, "0")}
// //                   </span>

// //                   {/* Title */}
// //                   <span className="text-[11px] uppercase tracking-[0.12em] transition-all duration-300 group-hover:translate-x-1">
// //                     {rawTitle}
// //                   </span>
// //                 </div>

// //                 {/* Arrow */}
// //                 <span className="text-[11px] text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#d8ae55]">
// //                   →
// //                 </span>

// //                 {/* Gold hover line */}
// //                 <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 rounded-full bg-[#d8ae55] transition-all duration-300 group-hover:h-7" />
// //               </Link>
// //             );
// //           })
// //         ) : (
// //           <div className="px-3 py-5 text-center text-[9px] uppercase tracking-[0.2em] text-white/40">
// //             Loading...
// //           </div>
// //         )}
// //       </div>

// //       {/* Bottom Gold Accent */}
// //       <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d8ae55]/50 to-transparent" />
// //     </div>
// //   )}
// // </div>


// //       {/* PRICE */}
// //       <Link
// //         to="/price"
// //         onClick={() => setIsOpen(false)}
// //         className="
// //           group
// //           relative
// //           py-4
// //           text-center
// //           whitespace-nowrap

// //           text-[#e7ddc7]

// //           transition-colors
// //           duration-300

// //           hover:text-white

// //           md:py-2
// //         "
// //       >
// //         Price

// //         <span
// //           className="
// //             absolute
// //             left-1/2
// //             bottom-0

// //             h-[1px]
// //             w-0

// //             -translate-x-1/2

// //             bg-[#d8ae55]

// //             transition-all
// //             duration-300

// //             group-hover:w-8
// //           "
// //         />
// //       </Link>


// //       {/* CONTACT */}
// //       <Link
// //         to="/contact"
// //         onClick={() => setIsOpen(false)}
// //         className="
// //           group
// //           relative
// //           py-4
// //           text-center
// //           whitespace-nowrap

// //           text-[#e7ddc7]

// //           transition-colors
// //           duration-300

// //           hover:text-white

// //           md:py-2
// //         "
// //       >
// //         Contact

// //         <span
// //           className="
// //             absolute
// //             left-1/2
// //             bottom-0

// //             h-[1px]
// //             w-0

// //             -translate-x-1/2

// //             bg-[#d8ae55]

// //             transition-all
// //             duration-300

// //             group-hover:w-8
// //           "
// //         />
// //       </Link>


// //       {/* CLIENT SELECTION */}
// //       <Link
// //         to="/client-selection"
// //         onClick={() => setIsOpen(false)}
// //         className="
// //           group
// //           relative
// //           py-4
// //           text-center
// //           whitespace-nowrap

// //           font-bold
// //           text-[#f5feff]

// //           transition-colors
// //           duration-300

// //           hover:text-white

// //           md:py-2
// //         "
// //       >
// //         Client Selection

// //         <span
// //           className="
// //             absolute
// //             left-1/2
// //             bottom-0

// //             h-[1px]
// //             w-0

// //             -translate-x-1/2

// //             bg-[#d8ae55]

// //             transition-all
// //             duration-300

// //             group-hover:w-full
// //           "
// //         />
// //       </Link>

// //     </div>

// //   </div>

// // </nav>
// <nav className="absolute top-0 left-0 z-50 w-full px-5 sm:px-8 lg:px-12 py-5 text-white">

//   {/* =========================
//       NAVBAR MAIN
//   ========================== */}
//   <div className="relative flex w-full items-center justify-between">

//     {/* =========================
//         BURGER - MOBILE ONLY
//         LEFT SIDE
//     ========================== */}
//     <button
//       type="button"
//       className="
//         order-1
//         md:hidden
//         flex
//         h-10
//         w-10
//         items-center
//         justify-center
//         rounded-full
//         text-2xl
//         leading-none
//         text-white
//         transition-opacity
//         duration-300
//         hover:opacity-70
//       "
//       onClick={() => setIsOpen(!isOpen)}
//       aria-label="Toggle navigation menu"
//       aria-expanded={isOpen}
//     >
//       {isOpen ? "✕" : "☰"}
//     </button>


//     {/* =========================
//         LOGO
//         MOBILE: RIGHT SIDE
//         DESKTOP: LEFT SIDE
//     ========================== */}
//     <Link
//       to="/home"
//       className="
//         order-2
//         md:order-1
//         flex-shrink-0
//         md:ml-10
//         lg:ml-16
//       "
//     >
//       <img
//         src={logo}
//         alt="Yosieal Logo"
//         className="
//           w-14
//           h-14
//           md:w-20
//           md:h-20
//           rounded-full
//           object-cover
//         "
//       />
//     </Link>


//     {/* =========================
//         NAVIGATION
//     ========================== */}
//     <div
//       className={`
//         order-3

//         absolute
//         top-full
//         left-0
//         w-full
//         mt-5

//         px-5
//         py-5

//         bg-black/95
//         backdrop-blur-md

//         flex
//         flex-col

//         text-xs
//         font-semibold
//         uppercase
//         tracking-[0.18em]

//         ${isOpen ? "flex" : "hidden"}

//         md:static
//         md:mt-0

//         md:ml-auto
//         md:mr-8
//         lg:mr-16

//         md:w-auto
//         md:px-0
//         md:py-0

//         md:bg-transparent
//         md:backdrop-blur-none

//         md:flex-row
//         md:items-center
//         md:justify-center

//         md:gap-7
//         lg:gap-9

//         md:flex
//       `}
//     >

//       {/* =========================
//           HOME
//       ========================== */}
//       <Link
//         to="/home"
//         onClick={() => setIsOpen(false)}
//         className="
//           group
//           relative
//           py-4
//           text-center
//           whitespace-nowrap
//           text-[#e7ddc7]
//           transition-colors
//           duration-300
//           hover:text-white
//           md:py-2
//         "
//       >
//         Home

//         <span
//           className="
//             absolute
//             left-1/2
//             bottom-0
//             h-[1px]
//             w-0
//             -translate-x-1/2
//             bg-[#bfb8ad]
//             transition-all
//             duration-300
//             group-hover:w-8
//           "
//         />
//       </Link>


//       {/* =========================
//           ABOUT
//       ========================== */}
//       <Link
//         to="/about"
//         onClick={() => setIsOpen(false)}
//         className="
//           group
//           relative
//           py-4
//           text-center
//           whitespace-nowrap
//           text-[#e7ddc7]
//           transition-colors
//           duration-300
//           hover:text-white
//           md:py-2
//         "
//       >
//         About

//         <span
//           className="
//             absolute
//             left-1/2
//             bottom-0
//             h-[1px]
//             w-0
//             -translate-x-1/2
//             bg-[#d8ae55]
//             transition-all
//             duration-300
//             group-hover:w-8
//           "
//         />
//       </Link>


//       {/* =========================
//           GALLERY
//       ========================== */}
//       <div
//         className="relative py-4 md:py-2"
//         onMouseEnter={() => setWorkOpen(true)}
//         onMouseLeave={() => setWorkOpen(false)}
//       >

//         {/* Gallery Button */}
//         <button
//           type="button"
//           onClick={() => setWorkOpen(!workOpen)}
//           className="
//             group
//             relative
//             flex
//             w-full
//             items-center
//             justify-center
//             gap-1.5
//             whitespace-nowrap
//             text-[#f5feff]
//             transition-all
//             duration-300
//             hover:text-white
//           "
//         >
//           <span>Gallery</span>

//           {/* Arrow */}
//           <span
//             className={`
//               text-[9px]
//               transition-transform
//               duration-300
//               ${workOpen ? "rotate-180" : "rotate-0"}
//             `}
//           >
//             ▾
//           </span>

//           {/* Gold underline */}
//           <span
//             className="
//               absolute
//               left-1/2
//               bottom-[-9px]
//               h-[1px]
//               w-0
//               -translate-x-1/2
//               bg-[#d8ae55]
//               shadow-[0_0_8px_rgba(216,174,85,0.45)]
//               transition-all
//               duration-300
//               group-hover:w-10
//             "
//           />
//         </button>


//         {/* =========================
//             GALLERY DROPDOWN
//         ========================== */}
//         {workOpen && (
//           <div
//             className="
//               absolute
//               top-[calc(100%+0.8rem)]
//               right-0
//               z-50
//               w-60
//               overflow-hidden
//               rounded-xl
//               border
//               border-[#d8ae55]/20
//               bg-[#241610]/95
//               backdrop-blur-xl
//               shadow-[0_20px_60px_rgba(0,0,0,0.55)]
//               animate-fadeIn
//             "
//           >

//             {/* Dropdown Header */}
//             <div className="border-b border-white/10 px-5 pb-3 pt-4">

//               <div className="flex items-center gap-2">

//                 <span
//                   className="
//                     h-1.5
//                     w-1.5
//                     rounded-full
//                     bg-[#d8ae55]
//                     shadow-[0_0_8px_rgba(216,174,85,0.8)]
//                   "
//                 />

//                 <span
//                   className="
//                     text-[9px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.3em]
//                     text-[#d8ae55]
//                   "
//                 >
//                   Our Gallery
//                 </span>

//               </div>

//               <p
//                 className="
//                   mt-1.5
//                   text-[8px]
//                   uppercase
//                   tracking-[0.18em]
//                   text-white/40
//                 "
//               >
//                 Explore our visual stories
//               </p>

//             </div>


//             {/* Gallery Items */}
//             <div className="px-2 py-2">

//               {galleryLinks.length > 0 ? (

//                 galleryLinks.map((item, index) => {

//                   const rawTitle = item.title
//                     ? item.title.replace(/"/g, "")
//                     : "";

//                   const slug = generateSlug(item.title);

//                   return (
//                     <Link
//                       key={item._id || index}
//                       to={`/gallery/${slug}`}
//                       onClick={() => {
//                         setWorkOpen(false);
//                         setIsOpen(false);
//                       }}
//                       className="
//                         group
//                         relative
//                         flex
//                         items-center
//                         justify-between
//                         rounded-lg
//                         px-3
//                         py-3
//                         text-[#f3eee8]
//                         transition-all
//                         duration-300
//                         hover:bg-white/[0.06]
//                         hover:text-white
//                       "
//                     >

//                       {/* Left side */}
//                       <div className="flex items-center gap-3">

//                         {/* Number */}
//                         <span
//                           className="
//                             w-5
//                             text-[8px]
//                             tracking-widest
//                             text-[#d8ae55]/50
//                             transition-colors
//                             duration-300
//                             group-hover:text-[#d8ae55]
//                           "
//                         >
//                           {String(index + 1).padStart(2, "0")}
//                         </span>

//                         {/* Title */}
//                         <span
//                           className="
//                             text-[11px]
//                             uppercase
//                             tracking-[0.12em]
//                             transition-all
//                             duration-300
//                             group-hover:translate-x-1
//                           "
//                         >
//                           {rawTitle}
//                         </span>

//                       </div>


//                       {/* Arrow */}
//                       <span
//                         className="
//                           text-[11px]
//                           text-white/20
//                           transition-all
//                           duration-300
//                           group-hover:translate-x-1
//                           group-hover:text-[#d8ae55]
//                         "
//                       >
//                         →
//                       </span>


//                       {/* Gold hover line */}
//                       <span
//                         className="
//                           absolute
//                           left-0
//                           top-1/2
//                           h-0
//                           w-[2px]
//                           -translate-y-1/2
//                           rounded-full
//                           bg-[#d8ae55]
//                           transition-all
//                           duration-300
//                           group-hover:h-7
//                         "
//                       />

//                     </Link>
//                   );

//                 })

//               ) : (

//                 <div
//                   className="
//                     px-3
//                     py-5
//                     text-center
//                     text-[9px]
//                     uppercase
//                     tracking-[0.2em]
//                     text-white/40
//                   "
//                 >
//                   Loading...
//                 </div>

//               )}

//             </div>


//             {/* Bottom Gold Accent */}
//             <div
//               className="
//                 h-[1px]
//                 w-full
//                 bg-gradient-to-r
//                 from-transparent
//                 via-[#d8ae55]/50
//                 to-transparent
//               "
//             />

//           </div>
//         )}

//       </div>


//       {/* =========================
//           PRICE
//       ========================== */}
//       <Link
//         to="/price"
//         onClick={() => setIsOpen(false)}
//         className="
//           group
//           relative
//           py-4
//           text-center
//           whitespace-nowrap
//           text-[#e7ddc7]
//           transition-colors
//           duration-300
//           hover:text-white
//           md:py-2
//         "
//       >
//         Price

//         <span
//           className="
//             absolute
//             left-1/2
//             bottom-0
//             h-[1px]
//             w-0
//             -translate-x-1/2
//             bg-[#d8ae55]
//             transition-all
//             duration-300
//             group-hover:w-8
//           "
//         />
//       </Link>


//       {/* =========================
//           CONTACT
//       ========================== */}
//       <Link
//         to="/contact"
//         onClick={() => setIsOpen(false)}
//         className="
//           group
//           relative
//           py-4
//           text-center
//           whitespace-nowrap
//           text-[#e7ddc7]
//           transition-colors
//           duration-300
//           hover:text-white
//           md:py-2
//         "
//       >
//         Contact

//         <span
//           className="
//             absolute
//             left-1/2
//             bottom-0
//             h-[1px]
//             w-0
//             -translate-x-1/2
//             bg-[#d8ae55]
//             transition-all
//             duration-300
//             group-hover:w-8
//           "
//         />
//       </Link>


//       {/* =========================
//           CLIENT SELECTION
//       ========================== */}
//       <Link
//         to="/client-selection"
//         onClick={() => setIsOpen(false)}
//         className="
//           group
//           relative
//           py-4
//           text-center
//           whitespace-nowrap
//           font-bold
//           text-[#f5feff]
//           transition-colors
//           duration-300
//           hover:text-white
//           md:py-2
//         "
//       >
//         Client Selection

//         <span
//           className="
//             absolute
//             left-1/2
//             bottom-0
//             h-[1px]
//             w-0
//             -translate-x-1/2
//             bg-[#d8ae55]
//             transition-all
//             duration-300
//             group-hover:w-full
//           "
//         />
//       </Link>

//     </div>

//   </div>

// </nav>
//   );
// }

// export default Navbar;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/images/biruk pic.png";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [workOpen, setWorkOpen] = useState(false);
//   const [galleryLinks, setGalleryLinks] = useState([]);
//   const [scrolled, setScrolled] = useState(false);

//   /* =====================================================
//      FETCH GALLERY CATEGORIES
//   ===================================================== */

//   useEffect(() => {
//     fetch("https://habesha-film-production-server.onrender.com/api/projects")
//       .then((res) => res.json())
//       .then((data) => {
//         setGalleryLinks(data);
//       })
//       .catch((err) =>
//         console.log("Error fetching navbar categories:", err)
//       );
//   }, []);


//   /* =====================================================
//      SCROLL EFFECT
//   ===================================================== */

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);


//   /* =====================================================
//      SLUG
//   ===================================================== */

//   const generateSlug = (titleText) => {
//     if (!titleText) return "";

//     return titleText
//       .toLowerCase()
//       .replace(/["']/g, "")
//       .replace(/&/g, "and")
//       .trim()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/\s+/g, "-");
//   };


//   /* =====================================================
//      CLOSE MOBILE MENU
//   ===================================================== */

//   const closeMenu = () => {
//     setIsOpen(false);
//     setWorkOpen(false);
//   };


//   return (
//     <nav
//       className={`
//         fixed
//         left-0
//         top-0
//         z-[100]
//         w-full
//         px-5
//         py-4
//         sm:px-8
//         md:px-12
//         lg:px-16
//         transition-all
//         duration-500

//         ${
//           scrolled
//             ? "border-b border-white/[0.08] bg-black/75 backdrop-blur-xl"
//             : "bg-transparent"
//         }
//       `}
//     >

//       {/* =====================================================
//           MAIN NAVIGATION
//       ===================================================== */}

//       <div className="mx-auto flex max-w-[1500px] items-center justify-between">


//         {/* =================================================
//             LOGO
//         ================================================= */}

//         <Link
//           to="/home"
//           onClick={closeMenu}
//           className="group relative flex items-center"
//         >

//           <img
//             src={logo}
//             alt="Biruk Pictures"
//             className="
//               h-10
//               w-10
//               rounded-full
//               object-cover
//               ring-1
//               ring-white/10
//               transition-all
//               duration-500
//               group-hover:ring-[#d9a64e]/60
//               sm:h-11
//               sm:w-11
//               md:h-12
//               md:w-12
//             "
//           />

//           {/* Small brand name */}

//           <div className="ml-3 hidden sm:block">

//             <div className="font-serif text-[13px] font-medium uppercase tracking-[0.22em] text-white">
//               Biruk
//               <span className="ml-1 text-[#d9a64e]">
//                 Pictures
//               </span>
//             </div>

//             <div className="mt-0.5 text-[6px] uppercase tracking-[0.35em] text-white/35">
//               Photography • Film
//             </div>

//           </div>

//         </Link>


//         {/* =================================================
//             DESKTOP NAVIGATION
//         ================================================= */}

//         <div className="hidden items-center gap-7 md:flex lg:gap-9">


//           {/* HOME */}

//           <NavLink
//             to="/home"
//             label="Home"
//           />


//           {/* ABOUT */}

//           <NavLink
//             to="/about"
//             label="About"
//           />


//           {/* =================================================
//               GALLERY
//           ================================================= */}

//           <div
//             className="relative"
//             onMouseEnter={() => setWorkOpen(true)}
//             onMouseLeave={() => setWorkOpen(false)}
//           >

//             <button
//               type="button"
//               onClick={() => setWorkOpen(!workOpen)}
//               className="
//                 group
//                 flex
//                 items-center
//                 gap-2
//                 py-3
//                 text-[8px]
//                 font-medium
//                 uppercase
//                 tracking-[0.28em]
//                 text-white/75
//                 transition-all
//                 duration-300
//                 hover:text-white
//               "
//             >

//               Gallery

//               <span
//                 className={`
//                   text-[8px]
//                   text-[#d9a64e]
//                   transition-transform
//                   duration-300
//                   ${workOpen ? "rotate-180" : ""}
//                 `}
//               >
//                 ↓
//               </span>

//             </button>


//             {/* Gallery underline */}

//             <span
//               className={`
//                 absolute
//                 bottom-0
//                 left-1/2
//                 h-px
//                 -translate-x-1/2
//                 bg-[#d9a64e]
//                 transition-all
//                 duration-300
//                 ${workOpen ? "w-7" : "w-0"}
//               `}
//             />


//             {/* =================================================
//                 DROPDOWN
//             ================================================= */}

//             {workOpen && (

//               <div
//                 className="
//                   absolute
//                   right-[-35px]
//                   top-[calc(100%+12px)]
//                   w-64
//                   overflow-hidden
//                   border
//                   border-white/10
//                   bg-[#0d0d0d]/95
//                   shadow-[0_25px_80px_rgba(0,0,0,0.65)]
//                   backdrop-blur-2xl
//                   animate-navbar-dropdown
//                 "
//               >

//                 {/* Header */}

//                 <div className="border-b border-white/[0.07] px-5 py-4">

//                   <div className="flex items-center gap-2">

//                     <span className="h-1 w-1 rounded-full bg-[#d9a64e]" />

//                     <span className="text-[7px] font-medium uppercase tracking-[0.4em] text-[#d9a64e]">
//                       Our Work
//                     </span>

//                   </div>

//                   <p className="mt-2 text-[7px] uppercase tracking-[0.18em] text-white/30">
//                     Explore our visual stories
//                   </p>

//                 </div>


//                 {/* Items */}

//                 <div className="p-2">

//                   {galleryLinks.length > 0 ? (

//                     galleryLinks.map((item, index) => {

//                       const rawTitle = item.title
//                         ? item.title.replace(/"/g, "")
//                         : "";

//                       const slug = generateSlug(item.title);

//                       return (
//                         <Link
//                           key={item._id || index}
//                           to={`/gallery/${slug}`}
//                           onClick={closeMenu}
//                           className="
//                             group
//                             relative
//                             flex
//                             items-center
//                             justify-between
//                             px-3
//                             py-3
//                             transition-all
//                             duration-300
//                             hover:bg-white/[0.045]
//                           "
//                         >

//                           <div className="flex items-center gap-3">

//                             <span className="w-4 text-[7px] tracking-widest text-white/20 transition-colors group-hover:text-[#d9a64e]">
//                               {String(index + 1).padStart(2, "0")}
//                             </span>

//                             <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/65 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
//                               {rawTitle}
//                             </span>

//                           </div>

//                           <span className="text-[10px] text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#d9a64e]">
//                             →
//                           </span>

//                           <span className="absolute left-0 top-1/2 h-0 w-px -translate-y-1/2 bg-[#d9a64e] transition-all duration-300 group-hover:h-6" />

//                         </Link>
//                       );

//                     })

//                   ) : (

//                     <div className="px-3 py-5 text-center text-[7px] uppercase tracking-[0.25em] text-white/30">
//                       Loading...
//                     </div>

//                   )}

//                 </div>

//                 {/* Bottom accent */}

//                 <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d9a64e]/50 to-transparent" />

//               </div>

//             )}

//           </div>


//           {/* PRICE */}

//           <NavLink
//             to="/price"
//             label="Price"
//           />


//           {/* CONTACT */}

//           <NavLink
//             to="/contact"
//             label="Contact"
//           />


//           {/* =================================================
//               CLIENT SELECTION CTA
//           ================================================= */}

//           <Link
//             to="/client-selection"
//             className="
//               group
//               relative
//               ml-1
//               flex
//               items-center
//               gap-3
//               border
//               border-[#d9a64e]/60
//               px-5
//               py-2.5
//               text-[7px]
//               font-semibold
//               uppercase
//               tracking-[0.28em]
//               text-[#e5c477]
//               transition-all
//               duration-300
//               hover:bg-[#d9a64e]
//               hover:text-black
//               hover:shadow-[0_0_25px_rgba(217,166,78,0.18)]
//             "
//           >

//             Client Selection

//             <span className="text-[10px] transition-transform duration-300 group-hover:translate-x-1">
//               →
//             </span>

//           </Link>

//         </div>


//         {/* =================================================
//             MOBILE MENU BUTTON
//         ================================================= */}

//         <button
//           type="button"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle navigation menu"
//           aria-expanded={isOpen}
//           className="
//             flex
//             h-10
//             w-10
//             items-center
//             justify-center
//             border
//             border-white/15
//             bg-white/[0.03]
//             text-white
//             backdrop-blur-md
//             transition-all
//             duration-300
//             hover:border-[#d9a64e]/50
//             md:hidden
//           "
//         >

//           {isOpen ? (

//             <span className="text-lg font-light">
//               ×
//             </span>

//           ) : (

//             <div className="flex flex-col gap-1">

//               <span className="h-px w-4 bg-white" />
//               <span className="h-px w-3 bg-[#d9a64e]" />
//               <span className="h-px w-4 bg-white" />

//             </div>

//           )}

//         </button>

//       </div>


//       {/* =====================================================
//           MOBILE NAVIGATION
//       ===================================================== */}

//       <div
//         className={`
//           overflow-hidden
//           transition-all
//           duration-500
//           md:hidden
//           ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
//         `}
//       >

//         <div className="mt-4 border-t border-white/[0.08] bg-black/90 px-2 py-5 backdrop-blur-2xl">

//           <div className="flex flex-col">


//             <MobileNavLink
//               to="/home"
//               label="Home"
//               onClick={closeMenu}
//             />


//             <MobileNavLink
//               to="/about"
//               label="About"
//               onClick={closeMenu}
//             />


//             {/* Mobile Gallery */}

//             <button
//               type="button"
//               onClick={() => setWorkOpen(!workOpen)}
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 border-b
//                 border-white/[0.06]
//                 px-4
//                 py-4
//                 text-left
//                 text-[9px]
//                 font-medium
//                 uppercase
//                 tracking-[0.25em]
//                 text-white/70
//               "
//             >

//               <span>
//                 Gallery
//               </span>

//               <span
//                 className={`text-[#d9a64e] transition-transform ${
//                   workOpen ? "rotate-180" : ""
//                 }`}
//               >
//                 ↓
//               </span>

//             </button>


//             {workOpen && (

//               <div className="border-b border-white/[0.06] bg-white/[0.025] px-3 py-2">

//                 {galleryLinks.map((item, index) => {

//                   const slug = generateSlug(item.title);

//                   const rawTitle = item.title
//                     ? item.title.replace(/"/g, "")
//                     : "";

//                   return (
//                     <Link
//                       key={item._id || index}
//                       to={`/gallery/${slug}`}
//                       onClick={closeMenu}
//                       className="
//                         flex
//                         items-center
//                         gap-3
//                         px-4
//                         py-3
//                         text-[8px]
//                         uppercase
//                         tracking-[0.2em]
//                         text-white/50
//                         transition-colors
//                         hover:text-[#d9a64e]
//                       "
//                     >

//                       <span className="text-[7px] text-[#d9a64e]/50">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>

//                       {rawTitle}

//                     </Link>
//                   );

//                 })}

//               </div>

//             )}


//             <MobileNavLink
//               to="/price"
//               label="Price"
//               onClick={closeMenu}
//             />


//             <MobileNavLink
//               to="/contact"
//               label="Contact"
//               onClick={closeMenu}
//             />


//             {/* Mobile CTA */}

//             <Link
//               to="/client-selection"
//               onClick={closeMenu}
//               className="
//                 mx-4
//                 mt-5
//                 flex
//                 items-center
//                 justify-center
//                 gap-3
//                 bg-[#d9a64e]
//                 px-5
//                 py-4
//                 text-[8px]
//                 font-bold
//                 uppercase
//                 tracking-[0.28em]
//                 text-black
//                 transition-all
//                 duration-300
//                 hover:bg-[#edc36f]
//               "
//             >

//               Client Selection

//               <span>
//                 →
//               </span>

//             </Link>

//           </div>

//         </div>

//       </div>


//       {/* =====================================================
//           ANIMATION
//       ===================================================== */}

//       <style>{`

//         @keyframes navbarDropdown {

//           0% {
//             opacity: 0;
//             transform: translateY(-8px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }

//         }

//         .animate-navbar-dropdown {
//           animation:
//             navbarDropdown
//             0.25s
//             ease-out
//             forwards;
//         }

//       `}</style>

//     </nav>
//   );
// }


// /* =========================================================
//    DESKTOP NAV LINK
// ========================================================= */

// function NavLink({ to, label }) {
//   return (
//     <Link
//       to={to}
//       className="
//         group
//         relative
//         py-3
//         text-[8px]
//         font-medium
//         uppercase
//         tracking-[0.28em]
//         text-white/70
//         transition-all
//         duration-300
//         hover:text-white
//       "
//     >

//       {label}

//       <span
//         className="
//           absolute
//           bottom-0
//           left-1/2
//           h-px
//           w-0
//           -translate-x-1/2
//           bg-[#d9a64e]
//           transition-all
//           duration-300
//           group-hover:w-6
//         "
//       />

//     </Link>
//   );
// }


// /* =========================================================
//    MOBILE NAV LINK
// ========================================================= */

// function MobileNavLink({ to, label, onClick }) {
//   return (
//     <Link
//       to={to}
//       onClick={onClick}
//       className="
//         flex
//         items-center
//         justify-between
//         border-b
//         border-white/[0.06]
//         px-4
//         py-4
//         text-[9px]
//         font-medium
//         uppercase
//         tracking-[0.25em]
//         text-white/70
//         transition-all
//         duration-300
//         hover:text-[#d9a64e]
//       "
//     >

//       {label}

//       <span className="text-[#d9a64e]/50">
//         →
//       </span>

//     </Link>
//   );
// }


// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/biruk pic.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [galleryLinks, setGalleryLinks] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  /* =====================================================
     FETCH GALLERY CATEGORIES
  ===================================================== */

  useEffect(() => {
    fetch("https://habesha-film-production-server.onrender.com/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setGalleryLinks(data);
      })
      .catch((err) =>
        console.log("Error fetching navbar categories:", err)
      );
  }, []);

  /* =====================================================
     SCROLL EFFECT
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =====================================================
     SLUG
  ===================================================== */

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

  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMenu = () => {
    setIsOpen(false);
    setWorkOpen(false);
  };

  return (
    <nav
      className={`
        fixed
        left-0
        top-0
        z-[100]
        w-full
        px-5
        py-4
        sm:px-8
        md:px-12
        lg:px-16
        transition-all
        duration-500

        ${
          scrolled
            ? "border-b border-white/[0.08] bg-black/75 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      {/* =====================================================
          MAIN NAVIGATION
      ===================================================== */}

      <div className="mx-auto flex max-w-[1500px] items-center justify-between">

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/home"
          onClick={closeMenu}
          className="group relative flex items-center"
        >
          <img
            src={logo}
            alt="Biruk Pictures"
            className="
              h-10
              w-10
              rounded-full
              object-cover
              ring-1
              ring-white/10
              transition-all
              duration-500
              group-hover:ring-[#d9a64e]/60
              sm:h-11
              sm:w-11
              md:h-12
              md:w-12
            "
          />

          {/* BRAND NAME */}

          <div className="ml-3 hidden sm:block">

            <div className="font-serif text-[13px] font-medium uppercase tracking-[0.22em] text-white">
              Biruk
              <span className="ml-1 text-[#d9a64e]">
                Pictures
              </span>
            </div>

            <div className="mt-0.5 text-[6px] uppercase tracking-[0.35em] text-white/35">
              Photography • Film
            </div>

          </div>
        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div className="hidden items-center gap-7 md:flex lg:gap-9">

          {/* HOME */}

          <NavLink
            to="/home"
            label="Home"
          />


          {/* ABOUT */}

          <NavLink
            // to="/about"
             to="#"
            label="About"
          />


          {/* =================================================
              GALLERY
          ================================================= */}

          <div
            className="relative"
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <button
              type="button"
              onClick={() => setWorkOpen(!workOpen)}
              className="
                group
                flex
                items-center
                gap-2
                py-3
                text-[10px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-white/75
                transition-all
                duration-300
                hover:text-white
              "
            >
              Gallery

              <span
                className={`
                  text-[9px]
                  text-[#d9a64e]
                  transition-transform
                  duration-300
                  ${workOpen ? "rotate-180" : ""}
                `}
              >
                ↓
              </span>
            </button>


            {/* GALLERY UNDERLINE */}

            <span
              className={`
                absolute
                bottom-0
                left-1/2
                h-px
                -translate-x-1/2
                bg-[#d9a64e]
                transition-all
                duration-300
                ${workOpen ? "w-7" : "w-0"}
              `}
            />


            {/* =================================================
                DROPDOWN
            ================================================= */}

            {workOpen && (
              <div
                className="
                  absolute
                  right-[-35px]
                  top-[calc(100%+12px)]
                  w-64
                  overflow-hidden
                  border
                  border-white/10
                  bg-[#0d0d0d]/95
                  shadow-[0_25px_80px_rgba(0,0,0,0.65)]
                  backdrop-blur-2xl
                  animate-navbar-dropdown
                "
              >

                {/* HEADER */}

                <div className="border-b border-white/[0.07] px-5 py-4">

                  <div className="flex items-center gap-2">

                    <span className="h-1 w-1 rounded-full bg-[#d9a64e]" />

                    <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#d9a64e]">
                      Our Work
                    </span>

                  </div>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Explore our visual stories
                  </p>

                </div>


                {/* ITEMS */}

                <div className="p-2">

                  {galleryLinks.length > 0 ? (

                    galleryLinks.map((item, index) => {

                      const rawTitle = item.title
                        ? item.title.replace(/"/g, "")
                        : "";

                      const slug = generateSlug(item.title);

                      return (
                        <Link
                          key={item._id || index}
                          to={`/gallery/${slug}`}
                          onClick={closeMenu}
                          className="
                            group
                            relative
                            flex
                            items-center
                            justify-between
                            px-3
                            py-3
                            transition-all
                            duration-300
                            hover:bg-white/[0.045]
                          "
                        >

                          <div className="flex items-center gap-3">

                            <span className="w-4 text-[8px] tracking-widest text-white/20 transition-colors group-hover:text-[#d9a64e]">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/65 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                              {rawTitle}
                            </span>

                          </div>

                          <span className="text-[10px] text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#d9a64e]">
                            →
                          </span>

                          <span className="absolute left-0 top-1/2 h-0 w-px -translate-y-1/2 bg-[#d9a64e] transition-all duration-300 group-hover:h-6" />

                        </Link>
                      );

                    })

                  ) : (

                    <div className="px-3 py-5 text-center text-[8px] uppercase tracking-[0.25em] text-white/30">
                      Loading...
                    </div>

                  )}

                </div>

                {/* BOTTOM ACCENT */}

                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d9a64e]/50 to-transparent" />

              </div>
            )}

          </div>


          {/* PRICE */}

          <NavLink
            // to="/price"
              to="/#"
            label="Price"
          />


          {/* CONTACT */}

          <NavLink
            to="/contact"
            label="Contact"
          />


          {/* =================================================
              CLIENT SELECTION
          ================================================= */}

          <Link
            // to="/client-selection"
               to="/#"
            className="
              group
              relative
              ml-1
              flex
              items-center
              gap-3
              border
              border-[#d9a64e]/60
              px-5
              py-2.5
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#e5c477]
              transition-all
              duration-300
              hover:bg-[#d9a64e]
              hover:text-black
              hover:shadow-[0_0_25px_rgba(217,166,78,0.18)]
            "
          >
            Client Selection

            <span className="text-[10px] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-white/15
            bg-white/[0.03]
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#d9a64e]/50
            md:hidden
          "
        >

          {isOpen ? (

            <span className="text-lg font-light">
              ×
            </span>

          ) : (

            <div className="flex flex-col gap-1">

              <span className="h-px w-4 bg-white" />
              <span className="h-px w-3 bg-[#d9a64e]" />
              <span className="h-px w-4 bg-white" />

            </div>

          )}

        </button>

      </div>


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          md:hidden
          ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >

        <div className="mt-4 border-t border-white/[0.08] bg-black/90 px-2 py-5 backdrop-blur-2xl">

          <div className="flex flex-col">

            <MobileNavLink
              to="/home"
              label="Home"
              onClick={closeMenu}
            />

            <MobileNavLink
            //   to="/about"
              to="/#"
              label="About"
              onClick={closeMenu}
            />


            {/* MOBILE GALLERY */}

            <button
              type="button"
              onClick={() => setWorkOpen(!workOpen)}
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/[0.06]
                px-4
                py-4
                text-left
                text-[11px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-white/70
              "
            >

              <span>
                Gallery
              </span>

              <span
                className={`text-[#d9a64e] transition-transform ${
                  workOpen ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>

            </button>


            {workOpen && (

              <div className="border-b border-white/[0.06] bg-white/[0.025] px-3 py-2">

                {galleryLinks.map((item, index) => {

                  const slug = generateSlug(item.title);

                  const rawTitle = item.title
                    ? item.title.replace(/"/g, "")
                    : "";

                  return (
                    <Link
                      key={item._id || index}
                      to={`/gallery/${slug}`}
                      onClick={closeMenu}
                      className="
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-white/50
                        transition-colors
                        hover:text-[#d9a64e]
                      "
                    >

                      <span className="text-[8px] text-[#d9a64e]/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {rawTitle}

                    </Link>
                  );

                })}

              </div>

            )}


            <MobileNavLink
            //   to="/price"
              to="/#"
              label="Price"
              onClick={closeMenu}
            />

            <MobileNavLink
              to="/contact"
              label="Contact"
              onClick={closeMenu}
            />


            {/* MOBILE CTA */}

            <Link
            //   to="/client-selection"
             to="/#"
              onClick={closeMenu}
              className="
                mx-4
                mt-5
                flex
                items-center
                justify-center
                gap-3
                bg-[#d9a64e]
                px-5
                py-4
                text-[10px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-black
                transition-all
                duration-300
                hover:bg-[#edc36f]
              "
            >

              Client Selection

              <span>
                →
              </span>

            </Link>

          </div>

        </div>

      </div>


      {/* =====================================================
          ANIMATION
      ===================================================== */}

      <style>{`

        @keyframes navbarDropdown {

          0% {
            opacity: 0;
            transform: translateY(-8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }

        }

        .animate-navbar-dropdown {
          animation:
            navbarDropdown
            0.25s
            ease-out
            forwards;
        }

      `}</style>

    </nav>
  );
}


/* =========================================================
   DESKTOP NAV LINK
========================================================= */

function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className="
        group
        relative
        py-3
        text-[10px]
        font-medium
        uppercase
        tracking-[0.28em]
        text-white/70
        transition-all
        duration-300
        hover:text-white
      "
    >

      {label}

      <span
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-0
          -translate-x-1/2
          bg-[#d9a64e]
          transition-all
          duration-300
          group-hover:w-6
        "
      />

    </Link>
  );
}


/* =========================================================
   MOBILE NAV LINK
========================================================= */

function MobileNavLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        flex
        items-center
        justify-between
        border-b
        border-white/[0.06]
        px-4
        py-4
        text-[11px]
        font-medium
        uppercase
        tracking-[0.25em]
        text-white/70
        transition-all
        duration-300
        hover:text-[#d9a64e]
      "
    >

      {label}

      <span className="text-[#d9a64e]/50">
        →
      </span>

    </Link>
  );
}


export default Navbar;