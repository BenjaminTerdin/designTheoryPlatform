'use client'
import Link from "next/link";
import CurrentYear from "@/components/currentYear";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F3EFE6] px-6 py-16 text-[#292820] md:px-12 md:py-24 mt-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

        <div className="max-w-sm">
          <Link href="/" className="text-2xl font-normal font-serif tracking-tight">
            Design Theory<span className="text-[#9A7955]">.</span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-[#706B60]">
            Learn the principles behind great design and create with
            clarity, purpose, and confidence.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-normal font-serif uppercase tracking-widest">
            Nav
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-[#706B60]">
            <li>
              <button
                type="button"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="transition-colors hover:text-[#292820]"
              >
                Home
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="transition-colors hover:text-[#292820]"
              >
                About
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() =>
                  document.getElementById("learn")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="transition-colors hover:text-[#292820]"
              >
                Learn
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-normal font-serif uppercase tracking-widest">
            Info
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-[#706B60]">
            <li>
              <Link href="/contact" className="transition-colors hover:text-[#292820]">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="transition-colors hover:text-[#292820]">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-[#292820]">
                Terms of use
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-[#D8D0C2] pt-6">
        <p className="text-xs text-[#706B60]">
          © {<CurrentYear/>} Design Theory. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
