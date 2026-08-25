

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