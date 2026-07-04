import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

/* ============================================================
   ANIMATION — infinite left scroll
   ============================================================ */
const marquee = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

/* ============================================================
   SECTION
   ============================================================ */
export const Section = styled.section`
  position: relative;
  padding: 5rem 0;
  background-color: var(--background);
  border-top: 1px solid var(--color-white-alpha-04);
  border-bottom: 1px solid var(--color-white-alpha-04);
  overflow: hidden;
`;

/* Fade edges — left */
export const FadeLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 10rem;
  background: linear-gradient(to right, var(--background), transparent);
  z-index: 10;
  pointer-events: none;
`;

/* Fade edges — right */
export const FadeRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 10rem;
  background: linear-gradient(to left, var(--background), transparent);
  z-index: 10;
  pointer-events: none;
`;

/* ============================================================
   LABEL ABOVE THE MARQUEE
   ============================================================ */
export const SectionLabel = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const LabelText = styled.span`
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  color: var(--color-stone-600);
`;

/* ============================================================
   MARQUEE TRACK
   ============================================================ */
export const Track = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 0 2.5rem;
  animation: ${marquee} 35s linear infinite;
  will-change: transform;

  /* Pause on hover */
  &:hover {
    animation-play-state: paused;
  }

  @media (min-width: 768px) {
    gap: 8rem;
  }
`;

/* ============================================================
   BRAND ITEM
   ============================================================ */
export const BrandItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: default;
  user-select: none;
`;

export const BrandName = styled.span`
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8em;
  color: var(--color-stone-300);
  transition: color 700ms;
  cursor: default;
  user-select: none;

  ${BrandItem}:hover & {
    color: var(--accent);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Dot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: var(--color-stone-800);
  flex-shrink: 0;
`;

/* reuse --color-stone-300 — add to App.css if missing */
