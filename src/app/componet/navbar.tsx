"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

    return (
        <header className="bg-orange-500 text-white">
            <div className="container mx-auto flex justify-between items-center px-4 py-4">
                {/* Website Title */}
                <h1 className="text-2xl font-bold">Creative Home</h1>

                {/* Hamburger Menu Button */}
                <button
                    className="text-2xl md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Navigation */}
            <nav
                className={`${menuOpen ? "block" : "hidden"
                    } absolute top-10 left-0 w-full bg-orange-500 md:static md:w-auto md:block`}
            >
                <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
                    <li className="py-2 md:py-0">
                        <Link href="/" className="hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li className="py-2 md:py-0">
                        <Link href="/about" className="hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li className="py-2 md:py-0">
                        <Link href="/services" className="hover:text-gray-300">
                            Services
                        </Link>
                    </li>
                    <li className="py-2 md:py-0">
                        <Link href="/contact" className="hover:text-gray-300">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
