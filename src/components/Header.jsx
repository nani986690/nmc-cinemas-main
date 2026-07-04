import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Menu, X, Sun, Moon } from "lucide-react";
import {
  Nav,
  NavInner,
  NavBar,
  Brand,
  BrandTagline,
  BrandDivider,
  LogoImg,
  NavLinks,
  NavLink,
  RightSection,
  ContactButton,
  HamburgerButton,
  MobileMenu,
  MobileCloseButton,
  MobileNavLinks,
  MobileNavLink,
  ThemeToggleButton,
} from "./Header.styles";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Why Us", href: "/#why-us" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    // Check theme setting
    const stored = localStorage.getItem("nmc-theme");
    if (stored === "dark") {
      setIsLight(false);
      document.body.classList.remove("light");
    } else {
      setIsLight(true);
      document.body.classList.add("light");
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.body.classList.remove("light");
      localStorage.setItem("nmc-theme", "dark");
      setIsLight(false);
    } else {
      document.body.classList.add("light");
      localStorage.setItem("nmc-theme", "light");
      setIsLight(true);
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Nav $scrolled={scrolled}>
        <NavInner>
          <NavBar $scrolled={scrolled}>
            {/* Left — Logo */}
            <Brand to="/">
              <LogoImg
                src={logo}
                alt="NMC Audio Visual Solutions"
                $scrolled={scrolled}
              />
              <BrandDivider $scrolled={scrolled} />
              <BrandTagline $scrolled={scrolled}>
                <span>Audio</span>
                <span>Visual</span>
                <span>Solutions</span>
              </BrandTagline>
            </Brand>

            {/* Center — Desktop Nav Links */}
            <NavLinks>
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </NavLinks>

            {/* Right — CTA + Hamburger */}
            <RightSection>
              <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle theme">
                {isLight ? <Moon size={20} /> : <Sun size={20} />}
              </ThemeToggleButton>

              <ContactButton to="/#contact">Get a Quote</ContactButton>

              <HamburgerButton
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </HamburgerButton>
            </RightSection>
          </NavBar>
        </NavInner>
      </Nav>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <MobileMenu>
          <MobileCloseButton onClick={closeMenu} aria-label="Close menu">
            <X size={24} strokeWidth={1} />
          </MobileCloseButton>
          <MobileNavLinks>
            {navLinks.map((link, i) => (
              <MobileNavLink
                key={link.name}
                to={link.href}
                onClick={closeMenu}
                $index={i}
              >
                {link.name}
              </MobileNavLink>
            ))}
          </MobileNavLinks>
        </MobileMenu>
      )}
    </>
  );
};

export default Header;
