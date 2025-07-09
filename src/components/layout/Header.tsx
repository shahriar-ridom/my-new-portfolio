"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "p-4 z-50 w-full",
        isScrolled ? "fixed top-0" : "absolute top-0"
      )}
    >
      <div
        className={cn(
          "container mx-auto rounded-2xl transition-all duration-300",
          isScrolled
            ? "bg-background/80 shadow-xl backdrop-blur-md"
            : "bg-transparent shadow-none"
        )}
      >
        <div className="flex h-20 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="text-2xl font-bold font-headline text-foreground"
          >
            SR.
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Button asChild>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Hire Me
              </a>
            </Button>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="ghost"
              size="icon"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col items-center gap-4 px-4 pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  Hire Me
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
