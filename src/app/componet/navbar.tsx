"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-orange-400 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            <Link href="/">MyWebsite</Link>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white text-lg hover:text-yellow-400">
              Home
            </Link>
            <a href="/about" className="text-white text-lg hover:text-yellow-400">
              About
            </a>
            <Link href="/services" className="text-white text-lg hover:text-yellow-400">
              Services
            </Link>
            <Link href="/contact" className="text-white text-lg hover:text-yellow-400">
              Contact
            </Link>
          </div>

          {/* Mobile Navbar Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white text-2xl">
              {isMobileMenuOpen ? '×' : '≡'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block text-white text-lg hover:text-yellow-400">
              Home
            </Link>
            <Link href="/about" className="block text-white text-lg hover:text-yellow-400">
              About
            </Link>
            <Link href="/services" className="block text-white text-lg hover:text-yellow-400">
              Services
            </Link>
            <Link href="/contact" className="block text-white text-lg hover:text-yellow-400">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
