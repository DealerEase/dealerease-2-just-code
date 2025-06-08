import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-black px-6 py-4">
  <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
    {/* Logo & Brand Name */}
    <div className="flex items-center gap-3">
      <img src="/logo.svg" alt="DealerEase Logo" className="h-10 w-10 object-contain" />
      <span className="text-2xl font-semibold text-white">DealerEase</span>
    </div>

    {/* Navigation */}
    <nav className="flex items-center space-x-6 text-lg text-gray-300">
      <Link href="/"><span className="hover:text-white">Home</span></Link>
      <Link href="/features"><span className="hover:text-white">Features</span></Link>
      <Link href="#"><span className="hover:text-white">About</span></Link>
      <Link href="#"><span className="hover:text-white">Contact</span></Link>
    </nav>
  </div>
</header>
  );
}
