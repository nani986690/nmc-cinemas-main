import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── page ── */
export const PageWrapper = styled.div`
  background-color: var(--background);
  min-height: 100vh;
  padding-bottom: 4rem;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-stone-500);
  text-decoration: none;
  transition: color 200ms;

  &:hover {
    color: var(--foreground);
  }
`;

/* ── layout grid ── */
export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  padding: 3rem 0;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    padding: 2rem 0;
  }
`;

export const MainContent = styled.div`
  min-width: 0;
`;

export const MobileFilterToggle = styled.button`
  display: none;
  
  @media (max-width: 992px) {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-sans);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.7rem 1.25rem;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    color: var(--foreground);
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 1.5rem;
  }
`;

/* ── hero ── */
export const Hero = styled.header`
  position: relative;
  padding: 8rem 0 3rem;
  border-bottom: 1px solid var(--type-border);
  overflow: hidden;
  animation: ${fadeUp} 0.9s ease both;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 80% at 80% 40%, var(--color-amber-700-alpha-05) 0%, transparent 70%),
      radial-gradient(ellipse 40% 60% at 10% 80%, var(--color-soft-blue-alpha-04) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 900px) {
    padding: 7rem 0 2.5rem;
  }
`;

export const HeroInner = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Eyebrow = styled.p`
  font-family: var(--font-sans);
  font-size: 0.625rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.5rem;
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(2.8rem, 6vw, 5.5rem);
  font-weight: 400;
  color: var(--foreground);
  line-height: 0.95;
  letter-spacing: -0.02em;
  margin: 0;
`;

export const HeroSub = styled.p`
  font-family: var(--font-serif);
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 400;
  font-style: italic;
  color: var(--color-foreground-alpha-45);
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

export const HeroRight = styled.div`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Stat = styled.div``;

export const StatNum = styled.div`
  font-family: var(--font-serif);
  font-size: 2.2rem;
  font-weight: 400;
  color: var(--foreground);
  line-height: 1;
`;

export const StatLabel = styled.div`
  font-family: var(--font-sans);
  font-size: 0.55rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-stone-600);
  margin-top: 0.2rem;
`;

/* ── search bar ── */
export const SearchBar = styled.div`
  padding: 0.875rem 0;
  border-bottom: 1px solid var(--type-border);
  background: transparent;
`;

export const SearchBarInner = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const SearchInput = styled.input`
  flex: 1;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  color: var(--foreground);
  font-family: var(--font-sans);
  font-size: 0.8rem;
  padding: 0.6rem 1rem;
  outline: none;
  max-width: 400px;
  transition: border-color 200ms;

  &::placeholder {
    color: var(--color-stone-600);
  }

  &:focus {
    border-color: var(--color-amber-700-alpha-40);
  }
`;

export const SearchCount = styled.span`
  font-family: var(--font-sans);
  font-size: 0.65rem;
  color: var(--color-stone-600);
  letter-spacing: 0.08em;
  margin-left: auto;
`;

/* ── category tabs ── */
export const CatNavScrollWrapper = styled.div`
  background: transparent;
  border-bottom: 1px solid var(--type-border);
`;

export const CatNav = styled.nav`
  display: flex;
  gap: 0;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CatTab = styled.button`
  flex-shrink: 0;
  background: none;
  border: none;
  border-right: 1px solid var(--type-border);
  border-bottom: 2px solid ${({ active, color }) => (active ? color || "var(--accent)" : "transparent")};
  color: ${({ active, color }) => (active ? color || "var(--accent)" : "var(--color-stone-600)")};
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 1rem 1.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 200ms, border-bottom-color 200ms, background 200ms;
  
  /* The first tab shouldn't have left padding to align perfectly with the container edge */
  &:first-of-type {
    padding-left: 0;
  }

  &:hover {
    color: var(--foreground);
    background: var(--card-bg);
  }
`;

export const CatDot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ color }) => color || "var(--accent)"};
  opacity: ${({ active }) => (active ? 1 : 0.4)};
  transition: opacity 200ms;
`;

/* ── section head (category label + divider line) ── */
export const SectionHead = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 3rem 0 1.5rem;

  @media (max-width: 900px) {
    padding: 2.5rem 0 1rem;
  }
`;

export const SectionLabel = styled.span`
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-weight: 500;
  white-space: nowrap;
  color: ${({ color }) => color || "var(--accent)"};
`;

export const SectionLine = styled.div`
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, ${({ color }) => color || "var(--accent)"}, transparent);
`;

/* ── brand sub-heading ── */
export const BrandHead = styled.div`
  padding: 0 0 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const BrandHeadName = styled.span`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--foreground);
`;

export const BrandDivider = styled.div`
  flex: 1;
  height: 1px;
  background: var(--type-border);
`;
