"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0d0e1a]/95 backdrop-blur-lg border-b border-[#1e1f35]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-extrabold text-2xl tracking-tighter flex items-center">
          <span className="text-white">KS</span>
          <span className="text-[#7c3aed]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">About</Link>
          <Link href="#experience" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">Experience</Link>
          <Link href="#services" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">Services</Link>
          <Link href="#projects" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">Projects</Link>
          <Link href="#contact" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">Contact</Link>
          <a
            href="/resume.pdf"
            download="Kavindu_Sasmitha_Resume.pdf"
            className="px-5 py-2.5 bg-[#7c3aed] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#8b5cf6] active:scale-95 transition-all shadow-lg shadow-[#7c3aed]/30"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0e1a] border-t border-[#1e1f35] px-6 py-6 flex flex-col gap-5 text-base">
          <Link href="#about" onClick={closeMenu} className="text-gray-400 hover:text-[#8b5cf6] transition-colors py-1">About</Link>
          <Link href="#experience" onClick={closeMenu} className="text-gray-400 hover:text-[#8b5cf6] transition-colors py-1">Experience</Link>
          <Link href="#services" onClick={closeMenu} className="text-gray-400 hover:text-[#8b5cf6] transition-colors py-1">Services</Link>
          <Link href="#projects" onClick={closeMenu} className="text-gray-400 hover:text-[#8b5cf6] transition-colors py-1">Projects</Link>
          <Link href="#contact" onClick={closeMenu} className="text-gray-400 hover:text-[#8b5cf6] transition-colors py-1">Contact</Link>
          <a
            href="/resume.pdf"
            download="Kavindu_Sasmitha_Resume.pdf"
            onClick={closeMenu}
            className="mt-2 px-5 py-3 bg-[#7c3aed] text-white font-bold text-center rounded-full hover:bg-[#8b5cf6] transition-all"
          >
            Download Resume ↗
          </a>
        </div>
      )}
    </nav>
  );
}