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
    <nav className="flex-1 px-3 space-y-1">
      {navLinks.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors duration-200 ${
              active
                ? "bg-forest/10 text-deep-forest"
                : "text-sage hover:bg-light-sage/40 hover:text-deep-forest"
            }`}
          >
            <link.icon
              className={`w-5 h-5 flex-shrink-0 ${
                active ? "text-forest" : "text-sage"
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
    <div className="px-4 py-5 border-t border-light-sage">
      <p className="px-2 text-[10px] font-medium uppercase tracking-[0.2em] text-sage">
        Ready to work with us?
      </p>
      <Link
        href="/contact"
        className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-action-green px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-action-green-dark"
      >
        Book a Demo
        <ArrowRightIcon className="w-4 h-4" />
      </Link>
      <p className="mt-4 px-2 text-xs text-sage">{site.location}</p>
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
      <header className="lg:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-light-sage">
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

      <aside className="hidden lg:flex w-[340px] flex-col bg-white border-r border-light-sage">
        <div className="px-6 pt-8 pb-7">
          <Logo />
        </div>
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
              className="fixed inset-y-0 left-0 z-50 w-[340px] flex flex-col bg-white border-r border-light-sage lg:hidden"
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center justify-between px-6 pt-8 pb-7">
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
              <SidebarNav pathname={pathname} onNavigate={() => setOpen(false)} />
              <SidebarFooter />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
