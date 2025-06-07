import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full max-w-6xl mx-auto flex justify-between items-center mb-10">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="DealerEase Logo" className="h-10 w-auto" />
        <span className="text-2xl font-semibold text-white">DealerEase</span>
      </div>
      <nav className="space-x-6 text-lg text-gray-300">
        <Link href="/"><span className="hover:text-white cursor-pointer">Home</span></Link>
        <Link href="/features"><span className="hover:text-white cursor-pointer">Features</span></Link>
        <Link href="#"><span className="hover:text-white cursor-pointer">About</span></Link>
        <Link href="#"><span className="hover:text-white cursor-pointer">Contact</span></Link>
      </nav>
    </header>
  );
}
