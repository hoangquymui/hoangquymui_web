import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "@/hooks/useDarkMode";
import { 
  Briefcase, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  User, 
  LayoutGrid, 
  Sparkles, 
  Mail,
  ChevronRight
} from "lucide-react";

export function Navbar() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "About", to: "/#about", path: "/", icon: User },
    { name: "Apps", to: "/project", path: "/project", icon: LayoutGrid },
    { name: "AI Lab", to: "/ai", path: "/ai", icon: Sparkles },
    { name: "Portfolio", to: "/portfolio", path: "/portfolio", icon: Briefcase },
    { name: "Contact", to: "/#contact", path: "#contact", icon: Mail },
  ];

  const isActive = (itemPath: string) => {
    if (itemPath === "/") return location.pathname === "/" && !location.hash;
    if (itemPath.startsWith("#")) return location.hash === itemPath;
    return location.pathname.startsWith(itemPath);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 dark:bg-gray-950/95 border-gray-800 shadow-lg shadow-black/20"
            : "bg-gray-900/80 dark:bg-gray-950/80 border-gray-800/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3 text-lg sm:text-xl font-bold text-white group">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[2px] shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-xs font-black tracking-wider text-cyan-300">
                    HQ
                  </div>
                </div>
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-colors">
                  Hoàng Quý Mùi
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navLinks.map((item) => {
                const active = isActive(item.path);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? "text-blue-400 bg-blue-500/10 shadow-inner"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/60"
                    }`}
                  >
                    <Icon className="w-4 h-4 opacity-75" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {/* Portfolio Pill CTA Button */}
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all duration-300 hover:scale-105 bg-blue-500/20 border border-blue-400/40 hover:bg-blue-500/30 hover:border-blue-400/60 text-gray-200 hover:text-white text-sm font-medium shadow-sm shadow-blue-500/10"
              >
                <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                <span>My Portfolio</span>
              </Link>

              {/* Light/Dark Toggle */}
              <button
                type="button"
                onClick={toggleDarkMode}
                aria-label="Toggle theme"
                className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full border bg-gray-800/70 border-gray-700 text-gray-200 hover:bg-gray-700 hover:text-white transition-all duration-300 cursor-pointer"
              >
                {isDark ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span className="text-xs">Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-blue-300" />
                    <span className="text-xs">Dark</span>
                  </>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleDarkMode}
                aria-label="Toggle theme"
                className="p-2 rounded-lg border border-gray-700/60 bg-gray-800/70 text-gray-200 hover:bg-gray-700"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-300" />}
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Open menu"
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`fixed right-0 top-0 bottom-0 w-72 max-w-[80%] bg-gray-900/95 backdrop-blur-xl border-l border-gray-800 shadow-2xl p-5 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                  HQ
                </div>
                <span className="font-semibold text-white">Navigation</span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      active
                        ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 opacity-75" />
                      <span>{item.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800">
            <Link
              to="/portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-md shadow-blue-500/20 text-sm"
            >
              <Briefcase className="w-4 h-4" />
              <span>Explore Full Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
