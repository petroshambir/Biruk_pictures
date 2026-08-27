
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
                to="/gallery/weddings"
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