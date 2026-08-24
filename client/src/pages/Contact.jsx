
// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   /* =========================================================
//      SEND MESSAGE TO GMAIL
//   ========================================================= */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setSubmitting(true);
//     setSubmitted(false);
//     setError("");

//     try {
//       const response = await fetch(
//         "https://formsubmit.co/ajax/petroshambirr@gmail.com",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//           body: JSON.stringify({
//             name: formData.name,
//             email: formData.email,
//             message: formData.message,

//             _subject: `New YOSIEAL Contact Message from ${formData.name}`,

//             _template: "table",

//             _captcha: "false",
//           }),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok || data.success !== "true") {
//         throw new Error("Message could not be sent");
//       }

//       setSubmitted(true);

//       setFormData({
//         name: "",
//         email: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error("Contact form error:", err);

//       setError(
//         "We could not send your message right now. Please try again or contact us directly."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative flex min-h-[78vh] w-full items-end overflow-hidden">

//         {/* HERO IMAGE */}

//         <div className="absolute inset-0">

//           <img
//             src="https://images.unsplash.com/photo-1519741497674-611481863552?q=90&w=2200&auto=format&fit=crop"
//             alt="YOSIEAL Wedding Film Production"
//             className="h-full w-full object-cover object-center"
//           />

//           {/* CINEMATIC OVERLAY */}

//           <div className="absolute inset-0 bg-black/40" />

//           <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-black/10" />

//           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-black/50" />

//         </div>

//         {/* NAVBAR */}

//         <div className="absolute left-0 top-0 z-50 w-full">
//           <Navbar />
//         </div>

//         {/* HERO CONTENT */}

//         <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">

//           <div className="max-w-4xl">

//             <div className="mb-6 flex items-center gap-4">

//               <span className="h-px w-12 bg-[#d6b36a] sm:w-16" />

//               <span className="text-[9px] font-medium tracking-[0.4em] text-[#d6b36a] sm:text-[10px]">
//                 YOSIEAL FILM PRODUCTION
//               </span>

//             </div>

//             <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">

//               Let&apos;s Create

//               <br />

//               <span className="italic text-[#e2c58b]">
//                 Something
//               </span>

//               <br />

//               Unforgettable.

//             </h1>

//             <div className="mt-8 max-w-xl border-l border-[#d6b36a]/60 pl-5">

//               <p className="text-sm font-light leading-7 text-white/65 sm:text-base">
//                 From weddings and traditional celebrations to
//                 documentaries, events and cinematic productions,
//                 YOSIEAL turns meaningful moments into timeless
//                 visual stories.
//               </p>

//             </div>

//           </div>

//           {/* SIDE LABEL */}

//           <div className="absolute bottom-16 right-6 hidden lg:block lg:right-12">

//             <div className="flex flex-col items-center gap-4">

//               <span className="h-20 w-px bg-gradient-to-b from-transparent via-[#d6b36a] to-transparent" />

//               <span className="rotate-90 text-[8px] tracking-[0.4em] text-white/40">
//                 GET IN TOUCH
//               </span>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           CONTACT INTRO
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

//         <div className="grid gap-10 lg:grid-cols-[220px_1fr]">

//           {/* LABEL */}

//           <div className="flex items-start gap-3 lg:flex-col">

//             <span className="mt-2 h-px w-12 bg-[#d6b36a] lg:w-16" />

//             <span className="text-[9px] tracking-[0.35em] text-[#d6b36a]">
//               CONTACT
//             </span>

//           </div>

//           {/* TEXT */}

//           <div className="max-w-4xl">

//             <p className="mb-4 text-[10px] tracking-[0.3em] text-white/35">
//               YOSIEAL / STUDIO
//             </p>

//             <h2 className="font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">

//               Your story deserves

//               <span className="italic text-[#d6b36a]">
//                 {" "}to be remembered.
//               </span>

//             </h2>

//             <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
//               Whether you are planning a wedding, traditional
//               ceremony, family celebration, event or cinematic
//               production, we would love to hear about your vision.
//               Tell us what you are creating and let&apos;s bring it
//               to life together.
//             </p>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           CONTACT AREA
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-7xl px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">

//         <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">


//           {/* =================================================
//               LEFT — CONTACT DETAILS
//           ================================================= */}

//           <div className="space-y-4">

//             {/* LOCATION */}

//             <div className="group border border-white/10 bg-[#0b0b0b] p-6 transition duration-500 hover:border-[#d6b36a]/50">

//               <div className="flex items-start gap-5">

//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#d6b36a]/30 bg-[#d6b36a]/5 text-[#d6b36a]">

//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     className="h-5 w-5"
//                   >
//                     <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
//                     <circle cx="12" cy="10" r="2.5" />
//                   </svg>

//                 </div>

//                 <div className="min-w-0">

//                   <span className="text-[9px] tracking-[0.3em] text-[#d6b36a]">
//                     STUDIO LOCATION
//                   </span>

//                   <h3 className="mt-2 font-serif text-xl font-light">
//                     Addis Ababa
//                   </h3>

//                   <p className="mt-1 text-sm text-white/45">
//                     Lebu Mebraten, Ethiopia
//                   </p>

//                   <a
//                     href="https://www.google.com/maps/search/?api=1&query=Addis+Ababa+Lebu+Mebraten"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="mt-4 inline-flex items-center gap-3 text-[9px] tracking-[0.25em] text-[#d6b36a] transition hover:text-white"
//                   >
//                     OPEN IN GOOGLE MAPS

//                     <span className="text-sm">
//                       →
//                     </span>

//                   </a>

//                 </div>

//               </div>

//             </div>


//             {/* PHONE */}

//             <div className="group border border-white/10 bg-[#0b0b0b] p-6 transition duration-500 hover:border-[#d6b36a]/50">

//               <div className="flex items-start gap-5">

//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#d6b36a]/30 bg-[#d6b36a]/5 text-[#d6b36a]">

//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     className="h-5 w-5"
//                   >
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
//                   </svg>

//                 </div>

//                 <div>

//                   <span className="text-[9px] tracking-[0.3em] text-[#d6b36a]">
//                     PHONE
//                   </span>

//                   <div className="mt-2 space-y-1">

//                     <a
//                       href="tel:+251976130175"
//                       className="block font-serif text-xl font-light text-white transition hover:text-[#d6b36a]"
//                     >
//                       +251 976 130 175
//                     </a>

//                     <a
//                       href="tel:+251942746150"
//                       className="block text-sm text-white/45 transition hover:text-[#d6b36a]"
//                     >
//                       +251 942 746 150
//                     </a>

//                   </div>

//                   <p className="mt-3 text-xs text-white/30">
//                     Available for bookings and enquiries
//                   </p>

//                 </div>

//               </div>

//             </div>


//             {/* EMAIL */}

//             <div className="group border border-white/10 bg-[#0b0b0b] p-6 transition duration-500 hover:border-[#d6b36a]/50">

//               <div className="flex items-start gap-5">

//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#d6b36a]/30 bg-[#d6b36a]/5 text-[#d6b36a]">

//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     className="h-5 w-5"
//                   >
//                     <rect x="3" y="5" width="18" height="14" rx="1" />
//                     <path d="m3 7 9 6 9-6" />
//                   </svg>

//                 </div>

//                 <div className="min-w-0">

//                   <span className="text-[9px] tracking-[0.3em] text-[#d6b36a]">
//                     EMAIL
//                   </span>

//                   <a
//                     href="mailto:petroshambirr@gmail.com"
//                     className="mt-2 block break-all font-serif text-lg font-light text-white transition hover:text-[#d6b36a]"
//                   >
//                     petroshambirr@gmail.com
//                   </a>

//                   <p className="mt-2 text-xs text-white/30">
//                     Send us your project details anytime
//                   </p>

//                 </div>

//               </div>

//             </div>


//             {/* HOURS */}

//             <div className="group border border-white/10 bg-[#0b0b0b] p-6 transition duration-500 hover:border-[#d6b36a]/50">

//               <div className="flex items-start gap-5">

//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#d6b36a]/30 bg-[#d6b36a]/5 text-[#d6b36a]">

//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     className="h-5 w-5"
//                   >
//                     <circle cx="12" cy="12" r="9" />
//                     <path d="M12 7v5l3 2" />
//                   </svg>

//                 </div>

//                 <div>

//                   <span className="text-[9px] tracking-[0.3em] text-[#d6b36a]">
//                     STUDIO HOURS
//                   </span>

//                   <h3 className="mt-2 font-serif text-xl font-light">
//                     Monday — Friday
//                   </h3>

//                   <p className="mt-1 text-sm text-white/45">
//                     8:00 AM — 6:00 PM
//                   </p>

//                   <p className="mt-1 text-sm text-white/45">
//                     Saturday: 9:00 AM — 8:00 PM
//                   </p>

//                   <p className="mt-2 text-xs text-white/25">
//                     Sunday — Closed
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>


//           {/* =================================================
//               RIGHT — MESSAGE FORM
//           ================================================= */}

//           <div className="relative overflow-hidden border border-white/10 bg-[#0b0b0b]">

//             {/* GOLD LINE */}

//             <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#d6b36a] via-[#d6b36a]/20 to-transparent" />

//             <div className="p-7 sm:p-10 lg:p-12">

//               <div className="mb-10">

//                 <span className="text-[9px] tracking-[0.35em] text-[#d6b36a]">
//                   START A CONVERSATION
//                 </span>

//                 <h3 className="mt-3 font-serif text-3xl font-light sm:text-4xl">
//                   Tell us about your story.
//                 </h3>

//                 <p className="mt-4 max-w-lg text-sm leading-6 text-white/40">
//                   Share a few details about your event or production.
//                   Our team will get back to you as soon as possible.
//                 </p>

//               </div>


//               {/* SUCCESS */}

//               {submitted ? (

//                 <div className="border border-[#d6b36a]/30 bg-[#d6b36a]/5 p-8 text-center">

//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d6b36a] text-xl text-[#d6b36a]">
//                     ✓
//                   </div>

//                   <h4 className="mt-5 font-serif text-2xl font-light">
//                     Message Received
//                   </h4>

//                   <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/40">
//                     Thank you for contacting YOSIEAL.
//                     Your message has been sent successfully.
//                   </p>

//                   <button
//                     type="button"
//                     onClick={() => setSubmitted(false)}
//                     className="mt-7 border-b border-[#d6b36a] pb-2 text-[9px] tracking-[0.3em] text-[#d6b36a] transition hover:text-white"
//                   >
//                     SEND ANOTHER MESSAGE
//                   </button>

//                 </div>

//               ) : (

//                 <form
//                   onSubmit={handleSubmit}
//                   className="space-y-6"
//                 >

//                   {/* ERROR */}

//                   {error && (
//                     <div className="border border-red-400/30 bg-red-400/5 px-5 py-4 text-sm text-red-300">
//                       {error}
//                     </div>
//                   )}


//                   {/* NAME + EMAIL */}

//                   <div className="grid gap-6 sm:grid-cols-2">

//                     <div>

//                       <label className="mb-2 block text-[9px] tracking-[0.25em] text-white/40">
//                         YOUR NAME
//                       </label>

//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your full name"
//                         required
//                         className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d6b36a]"
//                       />

//                     </div>


//                     <div>

//                       <label className="mb-2 block text-[9px] tracking-[0.25em] text-white/40">
//                         EMAIL ADDRESS
//                       </label>

//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="you@example.com"
//                         required
//                         className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d6b36a]"
//                       />

//                     </div>

//                   </div>


//                   {/* MESSAGE */}

//                   <div>

//                     <label className="mb-2 block text-[9px] tracking-[0.25em] text-white/40">
//                       YOUR MESSAGE
//                     </label>

//                     <textarea
//                       name="message"
//                       rows="6"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Tell us about your wedding, event or film production..."
//                       required
//                       className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-white/20 focus:border-[#d6b36a]"
//                     />

//                   </div>


//                   {/* SUBMIT */}

//                   <div className="flex flex-col items-start justify-between gap-6 pt-3 sm:flex-row sm:items-center">

//                     <p className="max-w-xs text-[9px] leading-5 tracking-wider text-white/25">
//                       YOSIEAL FILM PRODUCTION
//                       <br />
//                       Addis Ababa, Ethiopia
//                     </p>

//                     <button
//                       type="submit"
//                       disabled={submitting}
//                       className="group inline-flex items-center gap-5 border border-[#d6b36a] px-7 py-4 text-[9px] tracking-[0.3em] text-[#d6b36a] transition duration-300 hover:bg-[#d6b36a] hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
//                     >

//                       {submitting
//                         ? "SENDING..."
//                         : "SEND MESSAGE"}

//                       <span className="text-base transition duration-300 group-hover:translate-x-2">
//                         →
//                       </span>

//                     </button>

//                   </div>

//                 </form>

//               )}

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           MAP
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">

//         <div className="mb-8 flex items-end justify-between gap-6">

//           <div>

//             <span className="text-[9px] tracking-[0.35em] text-[#d6b36a]">
//               FIND OUR STUDIO
//             </span>

//             <h2 className="mt-3 font-serif text-3xl font-light sm:text-4xl">
//               Visit YOSIEAL
//             </h2>

//           </div>

//           <a
//             href="https://www.google.com/maps/search/?api=1&query=Addis+Ababa+Lebu+Mebraten"
//             target="_blank"
//             rel="noreferrer"
//             className="hidden items-center gap-3 border-b border-[#d6b36a]/50 pb-2 text-[9px] tracking-[0.25em] text-[#d6b36a] transition hover:border-[#d6b36a] hover:text-white sm:flex"
//           >
//             GET DIRECTIONS

//             <span className="text-sm">
//               →
//             </span>

//           </a>

//         </div>


//         <div className="relative h-[360px] overflow-hidden border border-white/10 bg-[#0b0b0b] sm:h-[450px]">

//           <iframe
//             title="YOSIEAL Film Production Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.751765275537!2d38.7420!3d8.9806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOGKwNTgnMjQuMiJOIDM4wrA0NCczMS4yIkU!5e0!3m2!1sen!2set!4v1650000000000!5m2!1sen!2set"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />

//           <div className="pointer-events-none absolute bottom-5 left-5 border border-white/10 bg-black/80 px-5 py-4 backdrop-blur-md">

//             <span className="block text-[8px] tracking-[0.3em] text-[#d6b36a]">
//               YOSIEAL STUDIO
//             </span>

//             <span className="mt-1 block text-xs text-white/70">
//               Addis Ababa · Lebu Mebraten
//             </span>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="border-y border-white/10 bg-[#090909]">

//         <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 sm:px-8 md:flex-row md:items-center lg:px-12">

//           <div>

//             <span className="text-[9px] tracking-[0.35em] text-[#d6b36a]">
//               YOSIEAL FILM PRODUCTION
//             </span>

//             <h2 className="mt-3 font-serif text-3xl font-light sm:text-4xl">
//               Ready to tell your story?
//             </h2>

//           </div>

//           <a
//             href="tel:+251976130175"
//             className="group inline-flex items-center gap-5 border border-[#d6b36a] px-7 py-4 text-[9px] tracking-[0.3em] text-[#d6b36a] transition hover:bg-[#d6b36a] hover:text-black"
//           >
//             CALL YOSIEAL

//             <span className="text-base transition group-hover:translate-x-2">
//               →
//             </span>

//           </a>

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
//    BIRUK PICTURE — CONTACT PAGE
//    Editorial / Cinematic / International Studio Design
//    ========================================================= */

// const images = {
//   hero:
//     "https://images.unsplash.com/photo-1519741497674-611481863552?q=90&w=2200&auto=format&fit=crop",

//   detail:
//     "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=90&w=1600&auto=format&fit=crop",

//   studio:
//     "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=90&w=1600&auto=format&fit=crop",
// };


// /* =========================================================
//    SECTION LABEL
//    ========================================================= */

// function SectionLabel({ number, children }) {
//   return (
//     <div className="flex items-center gap-3">
//       <span className="font-serif text-sm text-[#d6b36a]">
//         {number}
//       </span>

//       <span className="h-px w-10 bg-[#d6b36a]/50" />

//       <span className="text-[9px] font-medium tracking-[0.35em] text-[#d6b36a]">
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
//     message: "",
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");


//   /* =======================================================
//      FORM CHANGE
//      ======================================================= */

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };


//   /* =======================================================
//      SEND MESSAGE
//      ======================================================= */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setSubmitting(true);
//     setSubmitted(false);
//     setError("");

//     try {
//       const response = await fetch(
//         "https://formsubmit.co/ajax/petroshambirr@gmail.com",
//         {
//           method: "POST",

//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },

//           body: JSON.stringify({
//             name: formData.name,
//             email: formData.email,
//             message: formData.message,

//             _subject: `New Biruk Picture Contact Message from ${formData.name}`,

//             _template: "table",

//             _captcha: "false",
//           }),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok || data.success !== "true") {
//         throw new Error("Message could not be sent");
//       }

//       setSubmitted(true);

//       setFormData({
//         name: "",
//         email: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error("Contact form error:", err);

//       setError(
//         "We could not send your message right now. Please try again or contact us directly."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };


//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#f4f1ea] text-[#111]">

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#111]">

//         {/* HERO IMAGE */}

//         <div className="absolute inset-0">

//           <img
//             src={images.hero}
//             alt="Biruk Picture"
//             className="h-full w-full object-cover object-center"
//           />

//           <div className="absolute inset-0 bg-black/25" />

//           <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />

//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

//         </div>


//         {/* NAVBAR */}

//         <div className="absolute left-0 top-0 z-50 w-full">
//           <Navbar />
//         </div>


//         {/* HERO CONTENT */}

//         <div className="relative z-20 mx-auto flex min-h-[88vh] w-full max-w-[1500px] items-end px-6 pb-14 sm:px-10 lg:px-16 lg:pb-20">

//           <div className="grid w-full items-end gap-12 lg:grid-cols-[1fr_320px]">

//             {/* LEFT */}

//             <div className="max-w-5xl">

//               <SectionLabel number="01">
//                 BIRUK PICTURE
//               </SectionLabel>


//               <h1 className="mt-6 max-w-4xl font-serif text-5xl font-light leading-[0.92] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[105px]">

//                 Let&apos;s create

//                 <br />

//                 <span className="italic text-[#e2c58b]">
//                   something
//                 </span>

//                 <br />

//                 unforgettable.

//               </h1>


//               <div className="mt-8 max-w-xl border-l border-[#d6b36a]/70 pl-5">

//                 <p className="text-sm font-light leading-7 text-white/70 sm:text-base">
//                   Cinematic photography and film production for
//                   weddings, celebrations, culture, people and
//                   stories worth remembering.
//                 </p>

//               </div>

//             </div>


//             {/* RIGHT */}

//             <div className="hidden border-l border-white/20 pl-7 lg:block">

//               <span className="text-[9px] tracking-[0.35em] text-[#d6b36a]">
//                 CONTACT / STUDIO
//               </span>

//               <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-white">
//                 Your story
//                 <br />
//                 <span className="italic text-[#e2c58b]">
//                   starts here.
//                 </span>
//               </h2>

//               <p className="mt-5 text-xs leading-6 text-white/45">
//                 Tell us about your wedding, event, project or
//                 creative production.
//               </p>

//               <div className="mt-8 h-px w-16 bg-[#d6b36a]" />

//             </div>

//           </div>

//         </div>


//         {/* HERO LABEL */}

//         <div className="absolute bottom-7 right-6 z-30 text-[9px] tracking-[0.3em] text-white/45 sm:right-10 lg:right-16">
//           BIRUK PICTURE / CONTACT
//         </div>

//       </section>


//       {/* =====================================================
//           INTRO
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

//         <div className="grid gap-12 lg:grid-cols-[220px_1fr]">

//           <div>
//             <SectionLabel number="02">
//               GET IN TOUCH
//             </SectionLabel>
//           </div>


//           <div className="max-w-5xl">

//             <p className="mb-5 text-[9px] tracking-[0.35em] text-black/40">
//               BIRUK PICTURE / STUDIO
//             </p>

//             <h2 className="font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-7xl">

//               Every story begins

//               <br />

//               <span className="italic text-[#b88a32]">
//                 with a conversation.
//               </span>

//             </h2>


//             <div className="mt-10 grid gap-8 md:grid-cols-2">

//               <p className="text-sm leading-8 text-black/60 sm:text-base">
//                 Whether you are planning a wedding, traditional
//                 celebration, event, documentary or creative
//                 production, we would love to hear from you.
//               </p>

//               <p className="text-sm leading-8 text-black/45 sm:text-base">
//                 Tell us what you are planning, what you imagine,
//                 and what matters most. We will help turn that
//                 vision into something worth remembering.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           CONTACT DETAILS + FORM
//       ===================================================== */}

//       <section className="border-y border-black/10 bg-[#ebe7de]">

//         <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[0.85fr_1.15fr]">


//           {/* =================================================
//               LEFT
//           ================================================= */}

//           <div className="border-r border-black/10 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

//             <SectionLabel number="03">
//               CONTACT DETAILS
//             </SectionLabel>


//             <h2 className="mt-6 max-w-md font-serif text-4xl font-light leading-tight sm:text-5xl">

//               Let&apos;s talk about

//               <span className="italic text-[#b88a32]">
//                 {" "}your project.
//               </span>

//             </h2>


//             <p className="mt-7 max-w-md text-sm leading-7 text-black/50">
//               Reach out directly or use the contact form.
//               We are available for bookings, enquiries and
//               creative collaborations.
//             </p>


//             {/* LOCATION */}

//             <div className="mt-12 border-t border-black/10 pt-6">

//               <span className="text-[9px] tracking-[0.3em] text-[#a37a2b]">
//                 STUDIO LOCATION
//               </span>

//               <h3 className="mt-3 font-serif text-2xl font-light">
//                 Addis Ababa
//               </h3>

//               <p className="mt-1 text-sm text-black/45">
//                 Lebu Mebraten, Ethiopia
//               </p>

//               <a
//                 href="https://www.google.com/maps/search/?api=1&query=Addis+Ababa+Lebu+Mebraten"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="mt-4 inline-flex items-center gap-3 text-[9px] tracking-[0.25em] text-[#a37a2b] transition hover:text-black"
//               >
//                 OPEN IN GOOGLE MAPS
//                 <span className="text-sm">→</span>
//               </a>

//             </div>


//             {/* PHONE */}

//             <div className="mt-8 border-t border-black/10 pt-6">

//               <span className="text-[9px] tracking-[0.3em] text-[#a37a2b]">
//                 PHONE
//               </span>

//               <div className="mt-3 space-y-1">

//                 <a
//                   href="tel:+251976130175"
//                   className="block font-serif text-2xl font-light transition hover:text-[#a37a2b]"
//                 >
//                   +251 976 130 175
//                 </a>

//                 <a
//                   href="tel:+251942746150"
//                   className="block text-sm text-black/45 transition hover:text-[#a37a2b]"
//                 >
//                   +251 942 746 150
//                 </a>

//               </div>

//               <p className="mt-3 text-xs text-black/35">
//                 Available for bookings and enquiries
//               </p>

//             </div>


//             {/* EMAIL */}

//             <div className="mt-8 border-t border-black/10 pt-6">

//               <span className="text-[9px] tracking-[0.3em] text-[#a37a2b]">
//                 EMAIL
//               </span>

//               <a
//                 href="mailto:petroshambirr@gmail.com"
//                 className="mt-3 block break-all font-serif text-xl font-light transition hover:text-[#a37a2b]"
//               >
//                 petroshambirr@gmail.com
//               </a>

//               <p className="mt-2 text-xs text-black/35">
//                 Send your project details anytime
//               </p>

//             </div>


//             {/* HOURS */}

//             <div className="mt-8 border-t border-black/10 pt-6">

//               <span className="text-[9px] tracking-[0.3em] text-[#a37a2b]">
//                 STUDIO HOURS
//               </span>

//               <h3 className="mt-3 font-serif text-xl font-light">
//                 Monday — Friday
//               </h3>

//               <p className="mt-1 text-sm text-black/45">
//                 8:00 AM — 6:00 PM
//               </p>

//               <p className="mt-1 text-sm text-black/45">
//                 Saturday: 9:00 AM — 8:00 PM
//               </p>

//               <p className="mt-2 text-xs text-black/30">
//                 Sunday — Closed
//               </p>

//             </div>

//           </div>


//           {/* =================================================
//               RIGHT — FORM
//           ================================================= */}

//           <div className="bg-[#f4f1ea] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

//             <span className="text-[9px] tracking-[0.35em] text-[#a37a2b]">
//               04 / START A CONVERSATION
//             </span>

//             <h3 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
//               Tell us about
//               <br />
//               <span className="italic text-[#b88a32]">
//                 your story.
//               </span>
//             </h3>

//             <p className="mt-5 max-w-lg text-sm leading-7 text-black/45">
//               Share a few details about your event or production.
//               Our team will get back to you as soon as possible.
//             </p>


//             {/* SUCCESS */}

//             {submitted ? (

//               <div className="mt-12 border border-[#b88a32]/30 bg-[#b88a32]/5 p-10 text-center">

//                 <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#b88a32] text-xl text-[#a37a2b]">
//                   ✓
//                 </div>

//                 <h4 className="mt-5 font-serif text-2xl font-light">
//                   Message Received
//                 </h4>

//                 <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-black/45">
//                   Thank you for contacting Biruk Picture.
//                   Your message has been sent successfully.
//                 </p>

//                 <button
//                   type="button"
//                   onClick={() => setSubmitted(false)}
//                   className="mt-7 border-b border-[#b88a32] pb-2 text-[9px] tracking-[0.3em] text-[#a37a2b] transition hover:text-black"
//                 >
//                   SEND ANOTHER MESSAGE
//                 </button>

//               </div>

//             ) : (

//               <form
//                 onSubmit={handleSubmit}
//                 className="mt-12 space-y-9"
//               >

//                 {/* ERROR */}

//                 {error && (
//                   <div className="border border-red-500/30 bg-red-500/5 px-5 py-4 text-sm text-red-700">
//                     {error}
//                   </div>
//                 )}


//                 {/* NAME + EMAIL */}

//                 <div className="grid gap-8 sm:grid-cols-2">

//                   <div>

//                     <label className="mb-2 block text-[9px] tracking-[0.25em] text-black/40">
//                       YOUR NAME
//                     </label>

//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your full name"
//                       required
//                       className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-sm text-black outline-none transition placeholder:text-black/25 focus:border-[#a37a2b]"
//                     />

//                   </div>


//                   <div>

//                     <label className="mb-2 block text-[9px] tracking-[0.25em] text-black/40">
//                       EMAIL ADDRESS
//                     </label>

//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="you@example.com"
//                       required
//                       className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-sm text-black outline-none transition placeholder:text-black/25 focus:border-[#a37a2b]"
//                     />

//                   </div>

//                 </div>


//                 {/* MESSAGE */}

//                 <div>

//                   <label className="mb-2 block text-[9px] tracking-[0.25em] text-black/40">
//                     YOUR MESSAGE
//                   </label>

//                   <textarea
//                     name="message"
//                     rows="7"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Tell us about your wedding, event or film production..."
//                     required
//                     className="w-full resize-none border-b border-black/20 bg-transparent px-0 py-4 text-sm leading-7 text-black outline-none transition placeholder:text-black/25 focus:border-[#a37a2b]"
//                   />

//                 </div>


//                 {/* BUTTON */}

//                 <div className="flex flex-col items-start justify-between gap-6 pt-3 sm:flex-row sm:items-center">

//                   <p className="max-w-xs text-[9px] leading-5 tracking-[0.15em] text-black/30">
//                     BIRUK PICTURE
//                     <br />
//                     Addis Ababa, Ethiopia
//                   </p>


//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     className="group inline-flex items-center gap-5 border border-[#a37a2b] px-8 py-4 text-[9px] tracking-[0.3em] text-[#8e6926] transition duration-300 hover:bg-[#a37a2b] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
//                   >

//                     {submitting
//                       ? "SENDING..."
//                       : "SEND MESSAGE"}

//                     <span className="text-base transition duration-300 group-hover:translate-x-2">
//                       →
//                     </span>

//                   </button>

//                 </div>

//               </form>

//             )}

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           VISUAL / STUDIO
//       ===================================================== */}

//       <section className="bg-[#111] py-24 sm:py-32">

//         <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

//           <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

//             <div>

//               <SectionLabel number="05">
//                 OUR STUDIO
//               </SectionLabel>

//               <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">

//                 Real people.

//                 <br />

//                 <span className="italic text-[#e2c58b]">
//                   Real stories.
//                 </span>

//               </h2>

//               <p className="mt-7 max-w-lg text-sm leading-8 text-white/45">
//                 We believe the most powerful images come from
//                 real moments, real emotions and real connections.
//                 That is what we bring into every production.
//               </p>

//               <div className="mt-10 flex items-center gap-5">

//                 <span className="h-px w-16 bg-[#d6b36a]" />

//                 <span className="text-[9px] tracking-[0.35em] text-[#d6b36a]">
//                   BIRUK PICTURE
//                 </span>

//               </div>

//             </div>


//             <div className="relative">

//               <img
//                 src={images.detail}
//                 alt="Biruk Picture studio"
//                 className="h-auto w-full object-cover"
//               />

//               <div className="absolute inset-4 border border-white/15" />

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           MAP
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

//         <div className="mb-10 flex items-end justify-between gap-6">

//           <div>

//             <SectionLabel number="06">
//               FIND US
//             </SectionLabel>

//             <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
//               Visit our studio.
//             </h2>

//           </div>


//           <a
//             href="https://www.google.com/maps/search/?api=1&query=Addis+Ababa+Lebu+Mebraten"
//             target="_blank"
//             rel="noreferrer"
//             className="hidden items-center gap-3 border-b border-[#b88a32]/50 pb-2 text-[9px] tracking-[0.25em] text-[#a37a2b] transition hover:border-[#a37a2b] hover:text-black sm:flex"
//           >
//             GET DIRECTIONS
//             <span className="text-sm">→</span>
//           </a>

//         </div>


//         <div className="relative h-[360px] overflow-hidden border border-black/10 bg-[#ddd] sm:h-[480px]">

//           <iframe
//             title="Biruk Picture Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.751765275537!2d38.7420!3d8.9806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOGKwNTgnMjQuMiJOIDM4wrA0NCczMS4yIkU!5e0!3m2!1sen!2set!4v1650000000000!5m2!1sen!2set"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />

//           <div className="pointer-events-none absolute bottom-5 left-5 border border-white/20 bg-black/75 px-5 py-4 backdrop-blur-md">

//             <span className="block text-[8px] tracking-[0.3em] text-[#d6b36a]">
//               BIRUK PICTURE
//             </span>

//             <span className="mt-1 block text-xs text-white/70">
//               Addis Ababa · Lebu Mebraten
//             </span>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="border-y border-black/10 bg-[#ebe7de]">

//         <div className="mx-auto flex max-w-[1450px] flex-col items-start justify-between gap-8 px-6 py-20 sm:px-10 md:flex-row md:items-center lg:px-16">

//           <div>

//             <span className="text-[9px] tracking-[0.35em] text-[#a37a2b]">
//               BIRUK PICTURE
//             </span>

//             <h2 className="mt-4 max-w-2xl font-serif text-4xl font-light sm:text-5xl">
//               Ready to tell
//               <span className="italic text-[#b88a32]">
//                 {" "}your story?
//               </span>
//             </h2>

//           </div>


//           <a
//             href="tel:+251976130175"
//             className="group inline-flex items-center gap-5 border border-[#a37a2b] px-8 py-4 text-[9px] tracking-[0.3em] text-[#8e6926] transition hover:bg-[#a37a2b] hover:text-white"
//           >
//             CALL BIRUK PICTURE

//             <span className="text-base transition group-hover:translate-x-2">
//               →
//             </span>

//           </a>

//         </div>

//       </section>


//       <Footer />

//     </main>
//   );
// }

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/petroshambirr@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Biruk Picture Contact Message from ${formData.name}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || data.success !== "true") {
        throw new Error("Message could not be sent");
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact form error:", err);

      setError(
        "We could not send your message right now. Please try again or contact us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f1e8] text-[#211d18]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[78vh] w-full overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=90&w=2200&auto=format&fit=crop"
            alt="Biruk Picture wedding photography"
            className="h-full w-full object-cover object-center"
          />

          {/* WARM OVERLAY */}

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#201912]/80 via-[#201912]/30 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#f6f1e8] via-transparent to-black/30" />

        </div>

        {/* NAVBAR */}

        <div className="absolute left-0 top-0 z-50 w-full">
          <Navbar />
        </div>

        {/* HERO CONTENT */}

        <div className="relative z-20 mx-auto flex min-h-[78vh] w-full max-w-[1500px] items-end px-6 pb-16 sm:px-10 lg:px-16 lg:pb-20">

          <div className="grid w-full items-end gap-12 lg:grid-cols-[1fr_300px]">

            <div className="max-w-4xl">

              <div className="mb-6 flex items-center gap-4">

                <span className="h-px w-12 bg-[#c49a55] sm:w-16" />

                <span className="text-[9px] font-medium tracking-[0.4em] text-[#c49a55] sm:text-[10px]">
                  BIRUK PICTURE
                </span>

              </div>

              <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">

                Let&apos;s create

                <br />

                <span className="italic text-[#e4c98e]">
                  something
                </span>

                <br />

                unforgettable.

              </h1>

              <div className="mt-8 max-w-xl border-l border-[#d8b56b]/70 pl-5">

                <p className="text-sm font-light leading-7 text-white/75 sm:text-base">
                  Tell us about your wedding, celebration, event or
                  photography project. We would love to hear your story
                  and create something meaningful together.
                </p>

              </div>

            </div>

            <div className="hidden border-l border-white/30 pl-7 lg:block">

              <p className="text-[9px] tracking-[0.35em] text-[#e0bd77]">
                GET IN TOUCH
              </p>

              <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-white">
                Your story
                <br />
                <span className="italic text-[#e0c27e]">
                  matters.
                </span>
              </h2>

              <p className="mt-5 text-xs leading-6 text-white/60">
                Photography, weddings, traditional celebrations,
                family stories and special events.
              </p>

              <div className="mt-7 h-px w-14 bg-[#d8b56b]" />

            </div>

          </div>

        </div>

        <div className="absolute bottom-6 right-6 z-30 text-[8px] tracking-[0.35em] text-white/50 sm:right-10 lg:right-16">
          BIRUK / CONTACT
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="mx-auto w-full max-w-[1500px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">

          <div>

            <div className="flex items-center gap-3 lg:flex-col lg:items-start">

              <span className="h-px w-12 bg-[#c49a55] lg:w-16" />

              <span className="text-[9px] tracking-[0.35em] text-[#a47b3d]">
                CONTACT
              </span>

            </div>

          </div>

          <div className="max-w-5xl">

            <p className="mb-4 text-[10px] tracking-[0.3em] text-[#9b8d7b]">
              BIRUK PICTURE / STUDIO
            </p>

            <h2 className="font-serif text-4xl font-light leading-tight text-[#28231d] sm:text-5xl lg:text-7xl">

              Let&apos;s talk about

              <br />

              <span className="italic text-[#b18445]">
                your story.
              </span>

            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#756b60] sm:text-base">
              Whether you are planning a wedding, traditional ceremony,
              family celebration or a special event, tell us what you
              have in mind. We are here to turn your moments into
              beautiful memories.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT + FORM
      ===================================================== */}

      <section className="mx-auto w-full max-w-[1500px] px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">

        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">


          {/* =================================================
              CONTACT DETAILS
          ================================================= */}

          <div className="space-y-4">


            {/* ADDRESS */}

            <div className="group border border-[#ded5c8] bg-[#eee7dc] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#c49a55] hover:shadow-[0_18px_50px_rgba(80,60,30,0.08)]">

              <div className="flex items-start gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c49a55]/40 bg-[#f7f2e9] text-[#a47b3d]">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>

                </div>

                <div>

                  <span className="text-[9px] tracking-[0.3em] text-[#a47b3d]">
                    STUDIO LOCATION
                  </span>

                  <h3 className="mt-2 font-serif text-xl font-light text-[#2b261f]">
                    Addis Ababa
                  </h3>

                  <p className="mt-1 text-sm text-[#81776a]">
                    Lebu Mebraten, Ethiopia
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Addis+Ababa+Lebu+Mebraten"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-3 text-[9px] tracking-[0.25em] text-[#a47b3d] transition hover:text-[#6f5128]"
                  >
                    OPEN IN GOOGLE MAPS
                    <span className="text-sm">→</span>
                  </a>

                </div>

              </div>

            </div>


            {/* PHONE */}

            <div className="group border border-[#ded5c8] bg-[#eee7dc] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#c49a55] hover:shadow-[0_18px_50px_rgba(80,60,30,0.08)]">

              <div className="flex items-start gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c49a55]/40 bg-[#f7f2e9] text-[#a47b3d]">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                  </svg>

                </div>

                <div>

                  <span className="text-[9px] tracking-[0.3em] text-[#a47b3d]">
                    PHONE
                  </span>

                  <div className="mt-2 space-y-1">

                    <a
                      href="tel:+251976130175"
                      className="block font-serif text-xl font-light text-[#2b261f] transition hover:text-[#a47b3d]"
                    >
                      +251 976 130 175
                    </a>

                    <a
                      href="tel:+251942746150"
                      className="block text-sm text-[#81776a] transition hover:text-[#a47b3d]"
                    >
                      +251 942 746 150
                    </a>

                  </div>

                  <p className="mt-3 text-xs text-[#9a9084]">
                    Available for bookings and enquiries
                  </p>

                </div>

              </div>

            </div>


            {/* EMAIL */}

            <div className="group border border-[#ded5c8] bg-[#e8dfd2] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#c49a55] hover:shadow-[0_18px_50px_rgba(80,60,30,0.08)]">

              <div className="flex items-start gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c49a55]/40 bg-[#f7f2e9] text-[#a47b3d]">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="1" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>

                </div>

                <div className="min-w-0">

                  <span className="text-[9px] tracking-[0.3em] text-[#a47b3d]">
                    EMAIL
                  </span>

                  <a
                    href="mailto:petroshambirr@gmail.com"
                    className="mt-2 block break-all font-serif text-lg font-light text-[#2b261f] transition hover:text-[#a47b3d]"
                  >
                    petroshambirr@gmail.com
                  </a>

                  <p className="mt-2 text-xs text-[#9a9084]">
                    Send us your project details anytime
                  </p>

                </div>

              </div>

            </div>


            {/* HOURS */}

            <div className="group border border-[#ded5c8] bg-[#eee7dc] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#c49a55] hover:shadow-[0_18px_50px_rgba(80,60,30,0.08)]">

              <div className="flex items-start gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c49a55]/40 bg-[#f7f2e9] text-[#a47b3d]">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>

                </div>

                <div>

                  <span className="text-[9px] tracking-[0.3em] text-[#a47b3d]">
                    STUDIO HOURS
                  </span>

                  <h3 className="mt-2 font-serif text-xl font-light text-[#2b261f]">
                    Monday — Friday
                  </h3>

                  <p className="mt-1 text-sm text-[#81776a]">
                    8:00 AM — 6:00 PM
                  </p>

                  <p className="mt-1 text-sm text-[#81776a]">
                    Saturday: 9:00 AM — 8:00 PM
                  </p>

                  <p className="mt-2 text-xs text-[#9a9084]">
                    Sunday — Closed
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              MESSAGE FORM
          ================================================= */}

          <div className="relative overflow-hidden border border-[#dcd2c4] bg-[#eee7dc] shadow-[0_25px_70px_rgba(80,60,30,0.07)]">

            {/* DECORATIVE GOLD LINE */}

            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#b88a45] via-[#d8b56b] to-transparent" />

            <div className="p-7 sm:p-10 lg:p-12">

              <div className="mb-10">

                <span className="text-[9px] tracking-[0.35em] text-[#a47b3d]">
                  START A CONVERSATION
                </span>

                <h3 className="mt-3 font-serif text-3xl font-light text-[#2b261f] sm:text-4xl">
                  Tell us about your story.
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-[#81776a]">
                  Share a few details about your event or production.
                  We will get back to you as soon as possible.
                </p>

              </div>


              {/* SUCCESS */}

              {submitted ? (

                <div className="border border-[#c49a55]/40 bg-[#f7f2e9] p-8 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c49a55] text-xl text-[#a47b3d]">
                    ✓
                  </div>

                  <h4 className="mt-5 font-serif text-2xl font-light text-[#2b261f]">
                    Message Received
                  </h4>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#81776a]">
                    Thank you for contacting Biruk Picture.
                    Your message has been sent successfully.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 border-b border-[#c49a55] pb-2 text-[9px] tracking-[0.3em] text-[#a47b3d] transition hover:text-[#6f5128]"
                  >
                    SEND ANOTHER MESSAGE
                  </button>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >

                  {/* ERROR */}

                  {error && (
                    <div className="border border-red-300/50 bg-red-50 px-5 py-4 text-sm text-red-700">
                      {error}
                    </div>
                  )}


                  {/* NAME + EMAIL */}

                  <div className="grid gap-7 sm:grid-cols-2">

                    <div>

                      <label className="mb-2 block text-[9px] tracking-[0.25em] text-[#8c8174]">
                        YOUR NAME
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full border-b border-[#cfc4b5] bg-transparent px-0 py-3 text-sm text-[#2b261f] outline-none transition placeholder:text-[#aaa093] focus:border-[#a47b3d]"
                      />

                    </div>


                    <div>

                      <label className="mb-2 block text-[9px] tracking-[0.25em] text-[#8c8174]">
                        EMAIL ADDRESS
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="w-full border-b border-[#cfc4b5] bg-transparent px-0 py-3 text-sm text-[#2b261f] outline-none transition placeholder:text-[#aaa093] focus:border-[#a47b3d]"
                      />

                    </div>

                  </div>


                  {/* MESSAGE */}

                  <div>

                    <label className="mb-2 block text-[9px] tracking-[0.25em] text-[#8c8174]">
                      YOUR MESSAGE
                    </label>

                    <textarea
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your wedding, event or photography project..."
                      required
                      className="w-full resize-none border border-[#cfc4b5] bg-[#f7f2e9] px-4 py-4 text-sm leading-7 text-[#2b261f] outline-none transition placeholder:text-[#aaa093] focus:border-[#a47b3d]"
                    />

                  </div>


                  {/* SUBMIT */}

                  <div className="flex flex-col items-start justify-between gap-6 pt-3 sm:flex-row sm:items-center">

                    <p className="max-w-xs text-[9px] leading-5 tracking-wider text-[#9a9084]">
                      BIRUK PICTURE
                      <br />
                      Addis Ababa, Ethiopia
                    </p>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group inline-flex items-center gap-5 border border-[#a47b3d] bg-[#a47b3d] px-7 py-4 text-[9px] tracking-[0.3em] text-white transition duration-300 hover:bg-[#80602f] disabled:cursor-not-allowed disabled:opacity-50"
                    >

                      {submitting ? "SENDING..." : "SEND MESSAGE"}

                      <span className="text-base transition duration-300 group-hover:translate-x-2">
                        →
                      </span>

                    </button>

                  </div>

                </form>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAP
      ===================================================== */}

      <section className="mx-auto w-full max-w-[1500px] px-6 pb-24 sm:px-10 lg:px-16">

        <div className="mb-8 flex items-end justify-between gap-6">

          <div>

            <span className="text-[9px] tracking-[0.35em] text-[#a47b3d]">
              FIND OUR STUDIO
            </span>

            <h2 className="mt-3 font-serif text-3xl font-light text-[#2b261f] sm:text-4xl">
              Visit Biruk Picture
            </h2>

          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Addis+Ababa+Lebu+Mebraten"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-3 border-b border-[#c49a55]/50 pb-2 text-[9px] tracking-[0.25em] text-[#a47b3d] transition hover:border-[#a47b3d] hover:text-[#6f5128] sm:flex"
          >
            GET DIRECTIONS
            <span className="text-sm">→</span>
          </a>

        </div>


        <div className="relative h-[360px] overflow-hidden border border-[#dcd2c4] bg-[#eee7dc] shadow-[0_20px_60px_rgba(80,60,30,0.06)] sm:h-[450px]">

          <iframe
            title="Biruk Picture Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.751765275537!2d38.7420!3d8.9806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOGKwNTgnMjQuMiJOIDM4wrA0NCczMS4yIkU!5e0!3m2!1sen!2set!4v1650000000000!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="pointer-events-none absolute bottom-5 left-5 border border-white/20 bg-[#2c261f]/90 px-5 py-4 backdrop-blur-md">

            <span className="block text-[8px] tracking-[0.3em] text-[#e0bd77]">
              BIRUK PICTURE
            </span>

            <span className="mt-1 block text-xs text-white/75">
              Addis Ababa · Lebu Mebraten
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="border-y border-[#ded5c8] bg-[#e9e1d6]">

        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-8 px-6 py-16 sm:px-10 md:flex-row md:items-center lg:px-16">

          <div>

            <span className="text-[9px] tracking-[0.35em] text-[#a47b3d]">
              BIRUK PICTURE
            </span>

            <h2 className="mt-3 font-serif text-3xl font-light text-[#2b261f] sm:text-4xl">
              Ready to tell your story?
            </h2>

          </div>

          <a
            href="tel:+251976130175"
            className="group inline-flex items-center gap-5 border border-[#a47b3d] bg-[#a47b3d] px-7 py-4 text-[9px] tracking-[0.3em] text-white transition hover:bg-[#80602f]"
          >
            CALL BIRUK PICTURE

            <span className="text-base transition group-hover:translate-x-2">
              →
            </span>

          </a>

        </div>

      </section>


      <Footer />

    </main>
  );
}