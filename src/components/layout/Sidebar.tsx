"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  Cog6ToothIcon,
  CpuChipIcon,
  FolderIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { site } from "@/data/smartFactory";

const navLinks = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Manufacturing", href: "/manufacturing", icon: Cog6ToothIcon },
  { label: "Smart Factory", href: "/smart-factory", icon: CpuChipIcon },
  { label: "Projects", href: "/projects", icon: FolderIcon },
  { label: "About", href: "/about", icon: BuildingOffice2Icon },
  { label: "Contact", href: "/contact", icon: EnvelopeIcon },
];

function Logo() {
  return (
    <Link href="/" className="block">
      <span className="text-2xl font-semibold tracking-tight text-deep-forest">
        AK<span className="text-forest">.</span>
      </span>
      <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.28em] text-sage">
        Precision Components
      </span>
    </Link>
  );
}

function SidebarNav({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="flex-1 px-5 pt-6 space-y-1">
      {navLinks.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-3 h-12 w-full rounded-full text-sm font-medium transition-colors duration-200 ${
              active
                ? "bg-[#F0F2F5] text-[#315C4A] border border-white/40 shadow-btn font-semibold"
                : "text-nav-text hover:bg-light-sage/40 hover:text-[#17251F]"
            }`}
          >
            <link.icon
              className={`w-5 h-5 flex-shrink-0 ${
                active ? "text-[#315C4A]" : "text-nav-icon"
              }`}
            />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

function SidebarFooter() {
  return (
    <div className="px-5 py-6">
      <p className="px-2 text-[10px] font-medium uppercase tracking-[0.2em] text-nav-text">
        Ready to work with us?
      </p>
      <Link
        href="/contact"
        className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#F0F2F5] border border-white/40 shadow-btn px-5 py-[15px] text-sm font-medium text-[#315C4A] transition-colors duration-200 hover:bg-white"
      >
        Book a Demo
        <ArrowRightIcon className="w-4 h-4" />
      </Link>
      <p className="mt-4 px-2 text-xs text-nav-icon">{site.location}</p>
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="lg:hidden sticky top-0 z-50 bg-viewport-bg/95 backdrop-blur-md border-b border-light-sage">
        <div className="flex items-center justify-between h-16 px-5">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="p-2 -mr-2 rounded-lg text-deep-forest hover:bg-light-sage/40"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </header>

      <aside className="hidden lg:flex w-[340px] flex-col bg-viewport-bg">
        <div className="px-5 pt-8 pb-6">
          <Logo />
        </div>
        <div className="mx-5 border-t border-light-sage" />
        <SidebarNav pathname={pathname} />
        <SidebarFooter />
      </aside>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-deep-forest/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-[340px] flex flex-col bg-viewport-bg lg:hidden"
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center justify-between px-5 pt-8 pb-6">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="p-2 -mr-2 rounded-lg text-deep-forest hover:bg-light-sage/40"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="mx-5 border-t border-light-sage" />
              <SidebarNav pathname={pathname} onNavigate={() => setOpen(false)} />
              <SidebarFooter />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
