import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="DealerEase Logo" className="h-10 w-10 object-contain" />
          <span className="text-2xl font-semibold text-white">DealerEase</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-lg text-gray-300">
          <Link href="/"><span className="hover:text-white cursor-pointer">Home</span></Link>
          <Link href="/features"><span className="hover:text-white cursor-pointer">Features</span></Link>
          <Link href="#"><span className="hover:text-white cursor-pointer">About</span></Link>
          <Link href="#"><span className="hover:text-white cursor-pointer">Contact</span></Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-gray-300 text-lg px-4">
          <Link href="/"><span className="block hover:text-white">Home</span></Link>
          <Link href="/features"><span className="block hover:text-white">Features</span></Link>
          <Link href="#"><span className="block hover:text-white">About</span></Link>
          <Link href="#"><span className="block hover:text-white">Contact</span></Link>
        </div>
      )}
    </header>
  );
}
