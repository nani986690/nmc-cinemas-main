import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── page wrapper ── */
export const PageWrapper = styled.div`
  background-color: var(--background);
  min-height: 100vh;
  padding-bottom: 6rem;
`;

/* ── breadcrumb ── */
export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 6.5rem 0 1rem;
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  animation: ${fadeUp} 0.5s ease both;
`;

export const BreadcrumbLink = styled(Link)`
  color: var(--color-stone-500);
  text-decoration: none;
  text-transform: uppercase;
  transition: color 200ms;

  &:hover {
    color: var(--foreground);
  }
`;

export const BreadcrumbSep = styled.span`
  color: var(--color-stone-700);
  display: flex;
  align-items: center;
`;

export const BreadcrumbCurrent = styled.span`
  color: var(--color-stone-300);
  text-transform: uppercase;
`;

/* ── hero ── */
export const DetailHero = styled.section`
  padding: 2rem 0 3rem;
  border-bottom: 1px solid var(--type-border);
  animation: ${fadeUp} 0.6s ease both;
  animation-delay: 0.1s;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse 50% 80% at 80% 30%,
      var(--color-amber-700-alpha-04) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const HeroContent = styled.div`
  max-width: 720px;
`;

export const HeroMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-stone-500);
  margin-bottom: 1rem;
`;

export const CategoryDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ color }) => color || "var(--accent)"};
  flex-shrink: 0;
`;

export const HeroBrand = styled.p`
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-stone-400);
  margin-bottom: 0.3rem;
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 400;
  color: var(--foreground);
  line-height: 1;
  margin: 0 0 1.2rem 0;

  &::after {
    content: "";
    display: block;
    width: 48px;
    height: 2px;
    margin-top: 1rem;
    background: ${({ color }) => color || "var(--accent)"};
  }
`;

export const HeroDesc = styled.p`
  font-family: var(--font-sans);
  font-size: 0.8rem;
  line-height: 1.75;
  color: var(--color-stone-400);
  margin: 0 0 1.5rem 0;
  max-width: 640px;
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const ActionBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 20px;
  border: none;
  background: ${({ color }) => color || "var(--accent)"};
  color: var(--color-white);
  cursor: pointer;
  transition: opacity 250ms, transform 250ms;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

export const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid var(--input-border);
  background: transparent;
  color: var(--foreground);
  cursor: pointer;
  transition: background 250ms, border-color 250ms;

  &:hover {
    background: var(--card-bg);
    border-color: var(--input-border);
  }
`;

/* ── color configurator ── */
export const ConfiguratorWrapper = styled.div`
  margin-bottom: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--type-border);
`;

export const ColorLabel = styled.div`
  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--color-stone-400);
  margin-bottom: 1rem;
  
  strong {
    color: var(--foreground);
    margin-left: 0.4rem;
  }
`;

export const ColorOptionsGrid = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ColorOption = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg || "var(--color-gray-300)"};
  border: 1px solid var(--input-border);
  cursor: pointer;
  position: relative;
  transition: transform 200ms;
  box-shadow: inset 0 2px 8px var(--color-black-alpha-50);

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 2px solid ${({ active, color }) => (active ? (color || "var(--accent)") : "transparent")};
    transition: border-color 300ms;
  }
`;

/* ── gallery ── */
export const GallerySection = styled.section`
  padding: 3rem 0;
  border-bottom: 1px solid var(--type-border);
  animation: ${fadeUp} 0.7s ease both;
  animation-delay: 0.2s;
`;

export const GalleryGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
`;

export const MainImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
`;

export const ThumbRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ThumbImg = styled.img`
  width: 80px;
  height: 56px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid ${({ active, color }) =>
    active ? color || "var(--accent)" : "var(--type-border)"};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transition: opacity 200ms, border-color 200ms;

  &:hover {
    opacity: 1;
    border-color: var(--card-border);
  }
`;

/* ── content grid (features + specs) ── */
export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 3rem 0 2rem;
  animation: ${fadeUp} 0.8s ease both;
  animation-delay: 0.3s;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

/* ── features ── */
export const FeaturesSection = styled.div``;

export const SectionTitle = styled.h2`
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--foreground);
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const SectionAccent = styled.span`
  width: 3px;
  height: 14px;
  background: ${({ color }) => color || "var(--accent)"};
  flex-shrink: 0;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--color-stone-300);
`;

export const FeatureDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ color }) => color || "var(--accent)"};
  flex-shrink: 0;
  margin-top: 0.45rem;
`;

/* ── specs ── */
export const SpecsSection = styled.div``;

export const SpecsTable = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--card-border);
`;

export const SpecRow = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  border-bottom: 1px solid var(--card-border);
  transition: background 200ms;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: var(--card-bg);
  }

  @media (max-width: 600px) {
    grid-template-columns: 120px 1fr;
  }
`;

export const SpecLabel = styled.div`
  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-stone-500);
  padding: 0.6rem 0.8rem;
  border-right: 1px solid var(--card-border);
  text-transform: capitalize;
`;

export const SpecValue = styled.div`
  font-family: var(--font-sans);
  font-size: 0.7rem;
  color: var(--color-stone-300);
  padding: 0.6rem 0.8rem;
  line-height: 1.5;
`;

/* ── source link ── */
export const SourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-sans);
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  color: ${({ color }) => color || "var(--accent)"};
  text-decoration: none;
  margin-top: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid transparent;
  transition: border-color 200ms;

  &:hover {
    border-bottom-color: ${({ color }) => color || "var(--accent)"};
  }
`;

/* ── back link ── */
export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-stone-500);
  margin-top: 2rem;
  padding: 0.5rem 0;
  transition: color 200ms;

  &:hover {
    color: var(--foreground);
  }
`;

/* ── not found ── */
export const NotFoundWrapper = styled.div`
  background-color: var(--background);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

export const NotFoundTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--foreground);
  margin-bottom: 0.5rem;
`;

export const NotFoundText = styled.p`
  font-family: var(--font-sans);
  font-size: 0.8rem;
  color: var(--color-stone-500);
  margin-bottom: 2rem;
`;
