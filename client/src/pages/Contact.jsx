

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
                      href="tel:+251931310645"
                      className="block font-serif text-xl font-light text-[#2b261f] transition hover:text-[#a47b3d]"
                    >
                      +251931310645
                    </a>

                    <a
                      href="tel:+251903624834"
                      className="block text-sm text-[#81776a] transition hover:text-[#a47b3d]"
                    >
                      +251 903624834
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
                    href="Bekibereket137@gmail.com"
                    className="mt-2 block break-all font-serif text-lg font-light text-[#2b261f] transition hover:text-[#a47b3d]"
                  >
                   Bekibereket137@gmail.com
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