"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Catálogo", href: "#catalogo" },
  { name: "Novedades", href: "#catalogo?cat=novedades" },
  { name: "Tecnología", href: "#catalogo?cat=tecnologia" },
  { name: "Accesorios", href: "#catalogo?cat=accesorios" },
  { name: "Ofertas", href: "#catalogo?cat=ofertas" },
];

export default function Navbar({ cartCount = 0, onOpenCart }: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Inicio");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/90 transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zona Izquierda: Hamburguesa + Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white md:hidden"
            aria-label="Abrir navegación"
          >
            <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-amber-500 transition-transform group-hover:scale-110">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </span>
            <span className="font-serif text-xl font-bold tracking-widest text-neutral-900 dark:text-white">
              EVVAG
            </span>
          </Link>
        </div>

        {/* Zona Central: Enlaces Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`text-sm font-medium transition-colors hover:text-black dark:hover:text-white ${
                activeLink === link.name
                  ? "text-black font-semibold border-b-2 border-black dark:text-white dark:border-white pb-0.5"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Zona Derecha: Acciones */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Toggle Búsqueda */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            aria-label="Buscar productos"
          >
            <svg className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Bolsa de Compras con Badge */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative p-2 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            aria-label="Abrir bolsa de compras"
          >
            <svg className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] font-bold text-white dark:bg-white dark:text-black">
                {cartCount}
              </span>
            )}
          </button>

          {/* Botón CTA */}
          <Link
            href="#catalogo"
            className="hidden sm:inline-block rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition"
          >
            Ver Catálogo
          </Link>
        </div>
      </div>

      {/* Buscador Desplegable */}
      {isSearchOpen && (
        <div className="border-t border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900 transition-all">
          <div className="mx-auto flex max-w-3xl items-center gap-3">
            <svg className="h-5 w-5 text-neutral-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              autoFocus
              placeholder="Buscar por producto, accesorio, tecnología..."
              className="w-full bg-transparent text-sm text-neutral-900 placeholder-neutral-400 outline-none dark:text-white"
            />
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="text-neutral-400 hover:text-neutral-700 dark:hover:text-white"
              aria-label="Cerrar búsqueda"
            >
              <svg className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Menú Móvil Desplegable */}
      {isMobileMenuOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-sm py-1.5 ${
                  activeLink === link.name
                    ? "font-semibold text-black dark:text-white"
                    : "text-neutral-600 dark:text-neutral-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#catalogo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 block w-full rounded-md bg-neutral-900 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white dark:bg-white dark:text-black"
            >
              Ver Catálogo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}