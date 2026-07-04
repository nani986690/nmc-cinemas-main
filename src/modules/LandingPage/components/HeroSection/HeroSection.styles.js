import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

/* ============================================================
   ANIMATIONS
   ============================================================ */
const scaleGlow1 = keyframes`
  0%, 100% { transform: scale(1);   opacity: 0.12; }
  50%       { transform: scale(1.1); opacity: 0.22; }
`;

const scaleGlow2 = keyframes`
  0%, 100% { transform: scale(1);   opacity: 0.08; }
  50%       { transform: scale(1.2); opacity: 0.15; }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const floatBadge = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
`;

const scrollLine = keyframes`
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const lineExpand = keyframes`
  from { width: 0; }
  to   { width: 100%; }
`;

/* ============================================================
   SECTION
   ============================================================ */
export const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 9rem 1.5rem 6rem;
  background-color: var(--background);

  @media (min-width: 768px) {
    padding: 9rem 3rem 6rem;
  }
`;

/* ============================================================
   BACKGROUND
   ============================================================ */
export const BgLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

export const Glow1 = styled.div`
  position: absolute;
  top: -10%;
  left: -10%;
  width: 50%;
  height: 50%;
  background-color: var(--accent);
  border-radius: 50%;
  filter: blur(120px);
  animation: ${scaleGlow1} 15s ease-in-out infinite;
`;

export const Glow2 = styled.div`
  position: absolute;
  bottom: -10%;
  right: -10%;
  width: 60%;
  height: 60%;
  background-color: var(--color-stone-400);
  border-radius: 50%;
  filter: blur(150px);
  animation: ${scaleGlow2} 20s ease-in-out infinite;
  animation-delay: 2s;
`;

export const NoiseOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.03;
`;

/* ============================================================
   LEFT COLUMN
   ============================================================ */
export const LeftCol = styled.div`
  animation: ${slideInLeft} 1.2s cubic-bezier(0.19, 1, 0.22, 1) both;
`;

export const SeriesLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const SeriesText = styled.span`
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  color: var(--color-amber-800);
  font-weight: 700;
`;

export const SeriesLine = styled.div`
  height: 1px;
  width: 5rem;
  background-color: var(--color-stone-800);
  flex-shrink: 0;
`;

export const Headline = styled.h1`
  font-size: clamp(3rem, 7vw, 7.5rem);
  line-height: 0.88;
  margin-bottom: 3rem;
  position: relative;
`;

export const HeadlineGhost = styled.span`
  display: block;
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--color-stone-500-alpha-35);
`;

export const HeadlineMain = styled.span`
  display: block;
  font-family: var(--font-serif);
  color: var(--foreground);
  margin-top: -0.3rem;

  @media (min-width: 768px) {
    margin-top: -0.6rem;
  }
`;

export const HeadlineUnderline = styled.span`
  display: block;
  height: 1px;
  background-color: var(--accent);
  opacity: 0.5;
  margin-top: 1.5rem;
  animation: ${lineExpand} 1.5s 0.6s ease both;
  width: 0;
`;

export const CtaRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: ${fadeInUp} 1s 0.4s ease both;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }
`;

export const BodyText = styled.p`
  max-width: 320px;
  font-size: 0.9rem;
  color: var(--color-stone-500);
  line-height: 1.8;
  font-weight: 300;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.75rem;
  background-color: var(--color-stone-900);
  color: var(--foreground);
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition:
    background-color 400ms,
    color 400ms,
    transform 100ms;

  svg {
    flex-shrink: 0;
    transition: transform 300ms;
  }

  &:hover {
    background-color: var(--accent);
    color: var(--color-white);
    svg {
      transform: translate(3px, 3px);
    }
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-stone-500);
  transition: color 300ms;

  .play-icon {
    transition: transform 300ms;
  }

  &:hover {
    color: var(--foreground);
    .play-icon {
      transform: scale(1.1);
    }
  }
`;

export const PlayLabel = styled.span`
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

/* ============================================================
   RIGHT COLUMN
   ============================================================ */
export const RightCol = styled.div`
  position: relative;
  animation: ${fadeInUp} 1.4s cubic-bezier(0.19, 1, 0.22, 1) both;
  animation-delay: 0.2s;
`;

export const ImageFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  box-shadow: 0 30px 80px var(--color-black-alpha-15);

  @media (max-width: 767px) {
    aspect-ratio: 16 / 9;
    max-height: 340px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.08);
  filter: grayscale(100%);
  opacity: 0.65;
  transition:
    transform 2s ease,
    filter 2s ease,
    opacity 2s ease;

  ${ImageFrame}:hover & {
    transform: scale(1);
    filter: grayscale(0%);
    opacity: 1;
  }
`;

export const ImageGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    var(--background) 0%,
    transparent 55%,
    transparent 100%
  );
  opacity: 0.7;
  pointer-events: none;
`;

export const FloatingBadge = styled.div`
  position: absolute;
  top: -1.25rem;
  left: -1.25rem;
  width: 7.5rem;
  height: 7.5rem;
  background-color: var(--stone-deep);
  border: 1px solid var(--color-stone-800);
  display: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  animation: ${floatBadge} 4s ease-in-out infinite;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const BadgeText = styled.span`
  font-size: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.35em;
  color: var(--color-stone-500);
  line-height: 1.6;
  font-weight: 700;

  em {
    font-style: normal;
    color: var(--color-amber-800);
  }
`;

export const VerticalCaption = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  display: none;

  @media (min-width: 1280px) {
    display: block;
    position: absolute;
    right: -2.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const CaptionText = styled.span`
  font-size: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.8em;
  color: var(--color-stone-700);
  white-space: nowrap;
`;

/* ============================================================
   SCROLL INDICATOR
   ============================================================ */
export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

export const ScrollLine = styled.div`
  width: 1px;
  height: 3rem;
  background-color: var(--color-stone-800);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--color-amber-600-alpha-60);
    animation: ${scrollLine} 2s ease-in-out infinite;
  }
`;
