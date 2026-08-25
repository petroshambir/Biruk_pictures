


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import welcomeLogo from "../assets/images/birukLogo-Ai.png";

function Welcome() {
  const navigate = useNavigate();

  const [isExiting, setIsExiting] = useState(false);

  // =========================================
  // ENTER WEBSITE
  // =========================================
  const handleEnter = () => {
    if (isExiting) return;

    sessionStorage.setItem("hasSeenWelcome", "true");

    setIsExiting(true);

    setTimeout(() => {
      navigate("/home");
    }, 1100);
  };

  // =========================================
  // AUTO ENTER
  // =========================================
  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("hasSeenWelcome");

    if (alreadySeen) {
      navigate("/home");
      return;
    }

    const autoEnterTimer = setTimeout(() => {
      handleEnter();
    }, 12000);

    return () => clearTimeout(autoEnterTimer);
  }, [navigate]);

  return (
    <div
      className={`
        fixed inset-0 z-[100]
        flex items-center justify-center
        overflow-hidden
        bg-black
        text-white
        transition-all duration-[1100ms]
        ease-[cubic-bezier(.22,.61,.36,1)]
        ${
          isExiting
            ? "scale-[1.04] opacity-0"
            : "scale-100 opacity-100"
        }
      `}
    >

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="absolute inset-0 bg-black" />

      {/* Main golden glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#ff9d1c]/10
          blur-[100px]
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[130px]
          lg:h-[520px]
          lg:w-[520px]
          lg:blur-[150px]
        "
      />

      {/* Secondary glow */}

      <div
        className="
          absolute
          left-[20%]
          top-[25%]
          h-[100px]
          w-[100px]
          rounded-full
          bg-[#d9a64e]/5
          blur-[60px]
          sm:h-[160px]
          sm:w-[160px]
          sm:blur-[90px]
        "
      />

      {/* =========================================
          PARTICLES
      ========================================= */}

      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />
      <div className="particle particle-4" />
      <div className="particle particle-5" />
      <div className="particle particle-6" />
      <div className="particle particle-7" />
      <div className="particle particle-8" />

      {/* =========================================
          CINEMATIC LIGHT
      ========================================= */}

      <div className="cinematic-light" />

      {/* =========================================
          CENTER CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-[100vw]
          flex-col
          items-center
          justify-center
          px-5
          text-center
          sm:px-8
        "
      >

        {/* =====================================
            LOGO
        ===================================== */}

        <div className="logo-wrapper">

          <img
            src={welcomeLogo}
            alt="Biruk Pictures"
            className="logo-image"
          />

          {/* Logo shine */}

          <div className="logo-shine" />

        </div>


        {/* =====================================
            BRAND LINE
        ===================================== */}

        <div className="brand-line">

          <span className="line line-left" />

          <span className="brand-text">
            PHOTOGRAPHY • FILM • PRODUCTION
          </span>

          <span className="line line-right" />

        </div>


        {/* =====================================
            ENTER WEBSITE
        ===================================== */}

        <button
          onClick={handleEnter}
          disabled={isExiting}
          className="enter-button group"
        >

          <span className="enter-text">
            ENTER WEBSITE
          </span>

          <span className="arrow">
            →
          </span>

        </button>

      </div>


      {/* =========================================
          BOTTOM TEXT
      ========================================= */}

      <div
        className="
          absolute
          bottom-5
          left-0
          right-0
          z-10
          px-5
          text-center
          sm:bottom-7
          sm:px-8
        "
      >

        <p className="bottom-text">
          CAPTURING MOMENTS • CREATING MEMORIES
        </p>

      </div>


      {/* =========================================
          CORNER DETAILS
      ========================================= */}

      <div
        className="
          absolute
          left-4
          top-4
          h-8
          w-8
          border-l
          border-t
          border-[#ff9d1c]/20
          sm:left-7
          sm:top-7
          sm:h-12
          sm:w-12
        "
      />

      <div
        className="
          absolute
          bottom-4
          right-4
          h-8
          w-8
          border-b
          border-r
          border-[#ff9d1c]/20
          sm:bottom-7
          sm:right-7
          sm:h-12
          sm:w-12
        "
      />


      {/* =========================================
          ANIMATIONS
      ========================================= */}

      <style>{`

        /* =========================================
           LOGO REVEAL
        ========================================= */

        @keyframes logoReveal {

          0% {
            opacity: 0;
            transform: scale(0.82);
            filter: blur(12px);
          }

          18% {
            opacity: 1;
            transform: scale(1.025);
            filter: blur(0);
          }

          38% {
            transform: scale(1);
          }

          58% {
            transform: scale(1.012);
          }

          72% {
            transform: scale(1);
          }

          100% {
            opacity: 0.92;
            transform: scale(0.995);
          }

        }


        .logo-wrapper {

          position: relative;

          animation:
            logoReveal
            8s
            cubic-bezier(.22,.61,.36,1)
            infinite;

        }


        /* =========================================
           LOGO IMAGE
        ========================================= */

        .logo-image {

          display: block;

          width: min(82vw, 650px);

          max-width: 650px;

          height: auto;

          object-fit: contain;

          filter:
            drop-shadow(
              0 0 22px
              rgba(255,157,28,0.18)
            )
            drop-shadow(
              0 0 65px
              rgba(255,157,28,0.10)
            );

        }


        /* =========================================
           CINEMATIC LIGHT
        ========================================= */

        @keyframes lightSweep {

          0% {

            transform:
              translateX(-160%)
              skewX(-20deg);

            opacity: 0;

          }

          12% {

            opacity: 0;

          }

          25% {

            opacity: 0.35;

          }

          38% {

            opacity: 0.6;

          }

          50% {

            opacity: 0.2;

          }

          62% {

            opacity: 0;

          }

          100% {

            transform:
              translateX(160%)
              skewX(-20deg);

            opacity: 0;

          }

        }


        .cinematic-light {

          position: absolute;

          top: -10%;

          left: -30%;

          width: 20%;

          height: 120%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,174,43,0.12),
              rgba(255,255,255,0.35),
              rgba(255,174,43,0.12),
              transparent
            );

          filter: blur(22px);

          transform: skewX(-20deg);

          animation:
            lightSweep
            8s
            cubic-bezier(.22,.61,.36,1)
            infinite;

          pointer-events: none;

        }


        /* =========================================
           LOGO SHINE
        ========================================= */

        @keyframes logoShine {

          0% {

            transform:
              translateX(-200%)
              skewX(-20deg);

            opacity: 0;

          }

          28% {

            opacity: 0;

          }

          40% {

            opacity: 0.35;

          }

          48% {

            opacity: 0.55;

          }

          58% {

            opacity: 0;

          }

          100% {

            transform:
              translateX(200%)
              skewX(-20deg);

            opacity: 0;

          }

        }


        .logo-shine {

          position: absolute;

          top: 0;
          bottom: 0;
          left: 0;

          width: 18%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.55),
              transparent
            );

          filter: blur(10px);

          transform:
            translateX(-200%)
            skewX(-20deg);

          animation:
            logoShine
            8s
            ease-in-out
            infinite;

          pointer-events: none;

        }


        /* =========================================
           BRAND LINE
        ========================================= */

        @keyframes brandReveal {

          0% {

            opacity: 0;

            transform:
              translateY(10px);

          }

          20% {

            opacity: 0.7;

            transform:
              translateY(0);

          }

          45% {

            opacity: 1;

          }

          70% {

            opacity: 0.65;

          }

          100% {

            opacity: 0.45;

          }

        }


        .brand-line {

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          margin-top: 18px;

          color:
            rgba(255,255,255,0.55);

          font-size: 7px;

          line-height: 1;

          letter-spacing: 0.30em;

          text-transform: uppercase;

          animation:
            brandReveal
            2s
            ease-out
            1.1s
            both;

        }


        .brand-text {

          white-space: nowrap;

        }


        .line {

          display: block;

          width: 28px;

          height: 1px;

          flex-shrink: 0;

        }


        .line-left {

          background:
            linear-gradient(
              90deg,
              transparent,
              #ff9d1c
            );

        }


        .line-right {

          background:
            linear-gradient(
              90deg,
              #ff9d1c,
              transparent
            );

        }


        /* =========================================
           ENTER BUTTON
        ========================================= */

        @keyframes buttonReveal {

          0% {

            opacity: 0;

            transform:
              translateY(20px)
              scale(0.96);

          }

          60% {

            opacity: 1;

            transform:
              translateY(-2px)
              scale(1.01);

          }

          100% {

            opacity: 1;

            transform:
              translateY(0)
              scale(1);

          }

        }


        .enter-button {

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 14px;

          margin-top: 28px;

          min-width: 190px;

          padding:
            13px 20px;

          border:
            1px solid
            rgba(255,157,28,0.65);

          background:
            rgba(0,0,0,0.48);

          color:
            rgba(255,255,255,0.92);

          font-size: 8px;

          font-weight: 600;

          letter-spacing: 0.25em;

          text-transform: uppercase;

          backdrop-filter: blur(12px);

          opacity: 0;

          animation:
            buttonReveal
            1.2s
            cubic-bezier(.22,.61,.36,1)
            1.6s
            forwards;

          transition:
            background 0.4s ease,
            color 0.4s ease,
            box-shadow 0.4s ease,
            border-color 0.4s ease,
            transform 0.3s ease;

        }


        .enter-button:hover {

          background:
            #ff9d1c;

          border-color:
            #ff9d1c;

          color:
            #000;

          box-shadow:
            0 0 35px
            rgba(255,157,28,0.3);

          transform:
            translateY(-2px);

        }


        .arrow {

          font-size: 16px;

          line-height: 1;

          transition:
            transform 0.35s ease;

        }


        .enter-button:hover .arrow {

          transform:
            translateX(6px);

        }


        /* =========================================
           PARTICLES
        ========================================= */

        .particle {

          position: absolute;

          width: 2px;

          height: 2px;

          border-radius: 50%;

          background:
            #ff9d1c;

          box-shadow:
            0 0 10px
            rgba(255,157,28,0.8);

          opacity: 0;

          animation:
            particleFloat
            6s
            ease-in-out
            infinite;

        }


        .particle-1 {
          left: 14%;
          top: 32%;
          animation-delay: 0.4s;
        }


        .particle-2 {
          left: 78%;
          top: 24%;
          animation-delay: 1.2s;
        }


        .particle-3 {
          left: 84%;
          top: 66%;
          animation-delay: 2.1s;
        }


        .particle-4 {
          left: 20%;
          top: 72%;
          animation-delay: 3s;
        }


        .particle-5 {
          left: 56%;
          top: 13%;
          animation-delay: 1.6s;
        }


        .particle-6 {
          left: 42%;
          top: 82%;
          animation-delay: 3.8s;
        }


        .particle-7 {
          left: 66%;
          top: 78%;
          animation-delay: 4.4s;
        }


        .particle-8 {
          left: 32%;
          top: 20%;
          animation-delay: 2.8s;
        }


        @keyframes particleFloat {

          0% {

            opacity: 0;

            transform:
              translateY(15px)
              translateX(0)
              scale(0.4);

          }

          25% {

            opacity: 0.55;

          }

          55% {

            opacity: 0.25;

            transform:
              translateY(-15px)
              translateX(5px)
              scale(0.8);

          }

          100% {

            opacity: 0;

            transform:
              translateY(-40px)
              translateX(-5px)
              scale(1);

          }

        }


        /* =========================================
           BOTTOM TEXT
        ========================================= */

        .bottom-text {

          color:
            rgba(255,255,255,0.24);

          font-size: 6px;

          line-height: 1.5;

          letter-spacing: 0.38em;

          text-transform: uppercase;

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 640px) {

          .logo-image {

            width: 88vw;

            max-width: 430px;

          }


          .brand-line {

            width: 100%;

            gap: 7px;

            margin-top: 15px;

            font-size: 6px;

            letter-spacing: 0.18em;

          }


          .brand-text {

            white-space: nowrap;

          }


          .line {

            width: 18px;

          }


          .enter-button {

            min-width: 175px;

            margin-top: 24px;

            padding:
              12px 18px;

            font-size: 7px;

            letter-spacing: 0.22em;

          }


          .arrow {

            font-size: 15px;

          }


          .bottom-text {

            font-size: 5px;

            letter-spacing: 0.25em;

          }


          .particle {

            width: 2px;

            height: 2px;

          }

        }


        /* =========================================
           VERY SMALL PHONES
        ========================================= */

        @media (max-width: 380px) {

          .logo-image {

            width: 84vw;

          }


          .brand-line {

            gap: 5px;

            font-size: 5px;

            letter-spacing: 0.14em;

          }


          .line {

            width: 14px;

          }


          .enter-button {

            min-width: 165px;

            margin-top: 21px;

            padding:
              11px 16px;

            font-size: 6px;

          }


          .bottom-text {

            font-size: 4px;

            letter-spacing: 0.20em;

          }

        }


        /* =========================================
           LANDSCAPE MOBILE
        ========================================= */

        @media (max-height: 500px) and (orientation: landscape) {

          .logo-image {

            width: 45vw;

            max-width: 330px;

          }


          .brand-line {

            margin-top: 8px;

            font-size: 5px;

          }


          .enter-button {

            margin-top: 12px;

            padding:
              9px 16px;

          }


          .bottom-text {

            display: none;

          }

        }

      `}</style>

    </div>
  );
}

export default Welcome;