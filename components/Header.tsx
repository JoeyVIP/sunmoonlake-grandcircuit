'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: '賽事資訊', href: '/race' },
    { name: '賽道介紹', href: '/circuit' },
    { name: '車隊車手', href: '/teams' },
    { name: '購票', href: '/tickets' },
    { name: '交通住宿', href: '/travel' },
    { name: '新聞', href: '/news' },
    { name: 'Fan Zone', href: '/fanzone' },
    { name: '關於', href: '/about' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-lake/30">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-racing text-2xl lg:text-3xl font-heading">SML</div>
            <div className="hidden sm:block text-sm lg:text-base font-bold">
              <div className="text-white">2028 日月潭環潭大賽車</div>
              <div className="text-text-muted text-xs">Sun Moon Lake Grand Circuit</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-text-muted hover:text-white hover:bg-lake/30 rounded-md transition-all"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/tickets"
              className="ml-4 px-6 py-2 bg-racing hover:bg-racing/80 text-white rounded-md font-bold transition-all"
            >
              立即購票
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-text-muted hover:text-white hover:bg-lake/30"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-lake/30">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-text-muted hover:text-white hover:bg-lake/30 rounded-md transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/tickets"
              className="block mt-4 px-6 py-3 bg-racing hover:bg-racing/80 text-white rounded-md font-bold text-center transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              立即購票
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
