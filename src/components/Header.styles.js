import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

/* ============================================================
   ANIMATIONS
   ============================================================ */
const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ============================================================
   NAV ROOT
   ============================================================ */
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: padding 700ms ease;
  padding: ${({ $scrolled }) => ($scrolled ? "0.75rem 0" : "2rem 0")};
`;

export const NavInner = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2.5rem;
  }
`;

/* Single flex row — no absolute positioning */
export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition:
    background-color 700ms ease,
    border-color 700ms ease,
    padding 700ms ease,
    border-radius 700ms ease;

  ${({ $scrolled }) =>
    $scrolled &&
    `
    background-color: var(--nav-bg);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border: 1px solid var(--nav-border);
    padding: 0.6rem 1.75rem;
    border-radius: 9999px;
  `}
`;

/* ============================================================
   LEFT — LOGO IMAGE
   ============================================================ */
export const Brand = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
  flex-shrink: 0;
`;

export const BrandDivider = styled.span`
  width: 1px;
  flex-shrink: 0;
  background-color: var(--color-stone-700);
  transition:
    height 700ms ease,
    opacity 700ms ease;
  height: ${({ $scrolled }) => ($scrolled ? "0" : "1.75rem")};
  opacity: ${({ $scrolled }) => ($scrolled ? "0" : "1")};
`;

export const BrandTagline = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition:
    opacity 700ms ease,
    max-width 700ms ease;
  opacity: ${({ $scrolled }) => ($scrolled ? "0" : "1")};
  max-width: ${({ $scrolled }) => ($scrolled ? "0" : "8rem")};
  white-space: nowrap;

  span {
    font-family: var(--font-sans);
    font-size: 0.38rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--color-stone-600);
    line-height: 1.6;
  }
`;
export const LogoImg = styled.img`
  display: block;
  height: ${({ $scrolled }) => ($scrolled ? "3rem" : "4.5rem")};
  width: auto;
  object-fit: contain;
  object-position: center center;
  transition:
    height 700ms ease,
    opacity 300ms,
    filter 300ms;
  filter: brightness(1);

  &:hover {
    filter: brightness(1.2);
  }

  @media (min-width: 768px) {
    height: ${({ $scrolled }) => ($scrolled ? "3.25rem" : "5rem")};
  }
`;

/* ============================================================
   CENTER — NAV LINKS (desktop)
   ============================================================ */
export const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 2.5rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-stone-400);
  text-decoration: none;
  transition: color 300ms;

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--accent);
    transition: width 400ms ease;
  }

  &:hover {
    color: var(--foreground);
  }

  &:hover::after {
    width: 100%;
  }
`;

/* ============================================================
   RIGHT — ACTIONS
   ============================================================ */
export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;
`;

export const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.4rem;
  color: var(--color-stone-400);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 300ms;

  &:hover {
    color: var(--foreground);
  }
`;

export const ContactButton = styled(Link)`
  display: none;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--foreground);
  text-decoration: none;
  border: 1px solid var(--color-stone-400);
  padding: 0.5rem 1.1rem;
  transition:
    border-color 300ms,
    color 300ms,
    background-color 300ms;

  &:hover {
    border-color: var(--accent);
    background-color: var(--accent);
    color: var(--color-white);
  }

  @media (min-width: 1024px) {
    display: inline-block;
  }
`;

export const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.4rem;
  color: var(--color-stone-400);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 300ms;

  &:hover {
    color: var(--foreground);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

/* ============================================================
   MOBILE MENU OVERLAY
   ============================================================ */
export const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  background-color: var(--background);
  z-index: 110;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  animation: ${slideDown} 300ms ease forwards;
`;

export const MobileCloseButton = styled.button`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  background: none;
  border: 1px solid var(--color-stone-800);
  border-radius: 9999px;
  padding: 0.875rem;
  cursor: pointer;
  color: var(--color-stone-400);
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    border-color 300ms,
    color 300ms;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const MobileNavLink = styled(Link)`
  font-family: var(--font-serif);
  font-size: 3.5rem;
  color: var(--color-stone-600);
  text-decoration: none;
  transition: color 300ms;
  display: block;
  animation: ${fadeIn} 400ms ease both;
  animation-delay: ${({ $index }) => $index * 0.1}s;
  opacity: 0;

  &:hover {
    color: var(--accent);
  }

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;
