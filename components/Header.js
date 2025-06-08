import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items justify-between">
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

