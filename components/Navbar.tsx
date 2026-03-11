"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import { isLowPerformanceDevice } from "@/lib/mobileOptimizations";
// import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconBriefcase,
  IconMessageCircle,
  IconUser,
  IconArticle,
} from "@tabler/icons-react";
import { isLowPerformanceDevice } from "@/lib/mobileOptimizations";
import { FloatingDock } from "./ui/floating-dock";

// Navigation configuration
const NAVIGATION_CONFIG = {
  home: {
    mobile: [
      { name: "Home", link: "#", icon: <IconHome className="h-5 w-5" /> },
      { name: "About", link: "#about", icon: <IconUser className="h-5 w-5" /> },

      {
        name: "Projects",
        link: "#projects",
        icon: <IconBriefcase className="h-5 w-5" />,
      },

      {
        name: "Contact",
        link: "#contact",
        icon: <IconMessageCircle className="h-5 w-5" />,
      },

      {
        name: "Blog",
        link: "/blog",
        icon: <IconArticle className="h-5 w-5 text-purple-500" />,
      },

      {
        name: "GitHub",
        link: "https://github.com/PeterEmad1",
        icon: <IconBrandGithub className="h-5 w-5" />,
      },

      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/peter-emad-7375582b7/",
        icon: <IconBrandLinkedin className="h-5 w-5" />,
      },
    ],
    desktop: [
      {
        id: 1,
        title: "Home",
        icon: (
          <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        id: 2,
        title: "About",
        icon: (
          <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#about",
      },
      {
        id: 3,
        title: "Projects",
        icon: (
          <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#projects",
      },
      {
        id: 4,
        title: "Contact",
        icon: (
          <IconMessageCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#contact",
      },
      {
        id: 5,
        title: "Blog",
        icon: <IconArticle className="h-full w-full text-purple-500" />,
        href: "/blog",
      },
      {
        id: 6,
        title: "LinkedIn",
        icon: (
          <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.linkedin.com/in/peter-emad-7375582b7/",
      },
      {
        id: 7,
        title: "GitHub",
        icon: (
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://github.com/PeterEmad1",
      },
    ],
  },
  blog: {
    mobile: [
      { name: "Home", link: "/", icon: <IconHome className="h-4 w-4" /> },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/peter-emad-7375582b7/",
        icon: <IconBrandLinkedin className="h-4 w-4" />,
      },
      {
        name: "GitHub",
        link: "https://github.com/PeterEmad1",
        icon: <IconBrandGithub className="h-4 w-4" />,
      },
    ],
    desktop: [
      {
        id: 1,
        title: "Home",
        icon: (
          <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/",
      },
      {
        id: 2,
        title: "LinkedIn",
        icon: (
          <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.linkedin.com/in/peter-emad-7375582b7/",
      },
      {
        id: 3,
        title: "GitHub",
        icon: (
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://github.com/PeterEmad1",
      },
    ],
  },
};

// Mobile Navigation Component
const MobileNav = ({ navItems }: { navItems: any[] }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (navItem: any, e: React.MouseEvent) => {
    if (navItem.link.startsWith("http")) {
      e.preventDefault();
      window.open(navItem.link, "_blank");
    }
    setOpen(false);
  };

  return (
    <>
      {/* Hamburger button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed right-5 top-1/2 -translate-y-1/2 z-9999 p-3 rounded-full bg-black/70 backdrop-blur-md border border-white/10"
        >
          ☰
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-9999 flex flex-col items-center gap-4 p-3 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="text-white text-xl mb-2"
            >
              ✕
            </button>

            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={idx}
                href={navItem.link}
                onClick={(e) => handleClick(navItem, e)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-700 text-white transition"
              >
                {navItem.icon}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Desktop Dock Component
const DesktopDock = ({ navItems }: { navItems: any[] }) => {
  const handleClick = (href: string, e: React.MouseEvent) => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        const dockHeight = 120;
        const elementPosition = element.offsetTop - dockHeight - 20;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
    } else if (href.startsWith("http")) {
      e.preventDefault();
      window.open(href, "_blank");
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-5000">
      <FloatingDock
        items={navItems.map((link) => ({
          ...link,
          href: link.href,
          onClick: (e: React.MouseEvent) => handleClick(link.href, e),
        }))}
      />
    </div>
  );
};

// Main Navigation Component
export const Navigation = ({
  variant = "home",
  className,
}: {
  variant?: "home" | "blog";
  className?: string;
}) => {
  const [isClient, setIsClient] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkIsMobile = () => window.innerWidth < 768;
    setIsMobileDevice(checkIsMobile());

    const handleResize = () => {
      setIsMobileDevice(checkIsMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isClient) {
    return null;
  }

  const config = NAVIGATION_CONFIG[variant];

  if (isMobileDevice) {
    return <MobileNav navItems={config.mobile} />;
  }

  return <DesktopDock navItems={config.desktop} />;
};

// Export for backward compatibility
export const HomePageNavigation = () => <Navigation variant="home" />;
export const BlogResponsiveNavigation = () => <Navigation variant="blog" />;
