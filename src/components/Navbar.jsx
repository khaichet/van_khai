import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Chương trình Ninja AI", href: "/ninjaai" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const navigate = useNavigate();
  const location = useLocation();

  // Xử lý background navbar khi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Tự động highlight section đang xem
      const sections = navItems
        .filter((item) => item.href.startsWith("#"))
        .map((item) => document.querySelector(item.href));

      for (let section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section.id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Xử lý click nav item
  const handleNavClick = (e, href) => {
    e.preventDefault();

    // Nếu là trang NinjaAI → điều hướng sang /ninjaai
    if (href === "/ninjaai") {
      navigate("/ninjaai");
      setIsMenuOpen(false);
      return;
    }

    // Nếu đang ở trang Home
    if (location.pathname === "/") {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Nếu đang ở trang khác → chuyển sang Home, sau đó scroll
      navigate("/");
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }

    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          <span className="text-glow text-foreground">Khuai.</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "transition-colors duration-300",
                location.pathname === "/ninjaai" && item.href === "/ninjaai"
                  ? "text-primary font-semibold"
                  : location.pathname === "/" &&
                    item.href.startsWith("#") &&
                    activeSection === item.href
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme + Mobile menu button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "transition-colors duration-300 text-center",
                  location.pathname === "/ninjaai" && item.href === "/ninjaai"
                    ? "text-primary font-semibold"
                    : location.pathname === "/" &&
                      item.href.startsWith("#") &&
                      activeSection === item.href
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
