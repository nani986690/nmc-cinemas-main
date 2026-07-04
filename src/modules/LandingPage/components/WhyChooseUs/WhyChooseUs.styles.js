import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

/* ============================================================
   ANIMATIONS
   ============================================================ */
const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

/* ============================================================
   SECTION
   ============================================================ */
export const Section = styled.section`
  position: relative;
  padding: 5rem 0;
  background-color: var(--background);
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 10rem 0;
  }
`;

export const GlowOrb = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 50%;
  background: radial-gradient(
    circle,
    var(--color-amber-800-alpha-04) 0%,
    transparent 60%
  );
  filter: blur(80px);
  pointer-events: none;
`;

/* ============================================================
   HEADER
   ============================================================ */
export const HeaderRow = styled.div`
  margin-bottom: 5rem;
`;

export const Label = styled.span`
  display: block;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  color: var(--accent);
  margin-bottom: 1.25rem;
`;

export const Heading = styled.h2`
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.1;
  color: var(--foreground);
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const HeadingItalic = styled.span`
  font-style: italic;
  color: var(--color-stone-500);
`;

export const HeaderRight = styled.p`
  font-size: 0.875rem;
  color: var(--color-stone-500);
  font-weight: 300;
  line-height: 1.8;
  padding-bottom: 0.5rem;
`;

/* ============================================================
   STAT BANNER
   ============================================================ */
export const StatBanner = styled.div`
  position: relative;
  padding: 3rem;
  background-color: var(--color-stone-900);
  margin-bottom: 5rem;
  overflow: hidden;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    padding: 4rem 5rem;
  }

  /* Shimmer sweep */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--color-amber-800-alpha-06) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 4s linear infinite;
  }
`;

export const StatNumber = styled.p`
  position: relative;
  z-index: 10;
  font-family: var(--font-serif);
  font-size: clamp(4rem, 8vw, 6rem);
  line-height: 0.9;
  color: var(--accent);
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const StatTextCol = styled.div`
  position: relative;
  z-index: 10;
`;

export const StatTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.25rem;
  color: var(--foreground);
  margin-bottom: 0.75rem;
`;

export const StatDesc = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--color-stone-500);
  line-height: 1.7;
`;

/* ============================================================
   CARD ROW WRAPPER
   ============================================================ */
export const CardGridWrapper = styled.div`
  border-top: 1.5px solid var(--color-stone-900);
  border-left: 1.5px solid var(--color-stone-900);
  margin-bottom: 5rem;
`;

/* ============================================================
   CARD
   ============================================================ */
export const Card = styled.div`
  position: relative;
  padding: 2.5rem;
  background-color: var(--background);
  border-right: 1.5px solid var(--color-stone-900);
  border-bottom: 1.5px solid var(--color-stone-900);
  overflow: hidden;
  height: 100%;
  cursor: default;

  &:hover {
    background-color: var(--color-stone-900); /* Removed hardcoded var(--color-accent-dark) */
  }
`;

export const CardNum = styled.span`
  display: block;
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--color-stone-700);
  margin-bottom: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.125rem;
  color: var(--foreground);
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

export const CardText = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--color-stone-500);
  line-height: 1.7;
`;

export const CardAccent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 0;
  background: linear-gradient(to right, var(--accent), transparent);
  transition: width 700ms ease;

  ${Card}:hover & {
    width: 100%;
  }
`;

/* ============================================================
   FOOTER (N. Mahesh)
   ============================================================ */
export const Footer = styled.div`
  padding-top: 3rem;
  border-top: 1px solid var(--color-stone-700-alpha-20);
`;

export const Avatar = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  object-fit: cover;
  background-color: var(--color-stone-900);
  border: 1px solid var(--accent);
  flex-shrink: 0;
`;

export const AuthorName = styled.p`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--foreground);
  margin-bottom: 0;
`;

export const AuthorRole = styled.p`
  font-size: 0.55rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-top: 0.25rem;
  margin-bottom: 0;
`;
