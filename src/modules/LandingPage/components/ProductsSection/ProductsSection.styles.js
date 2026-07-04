import styled from "@emotion/styled";

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
  bottom: 0;
  left: 0;
  width: 35%;
  height: 40%;
  background: radial-gradient(
    circle,
    var(--color-amber-800-alpha-05) 0%,
    transparent 70%
  );
  filter: blur(100px);
  pointer-events: none;
`;

/* ============================================================
   HEADER
   ============================================================ */
export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
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
`;

export const HeadingItalic = styled.span`
  font-style: italic;
  color: var(--color-stone-500);
`;

export const HeaderRight = styled.p`
  max-width: 20rem;
  font-size: 0.875rem;
  color: var(--color-stone-500);
  font-weight: 300;
  line-height: 1.8;
`;

/* ============================================================
   PRODUCT GRID
   ============================================================ */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5px;
  background-color: var(--color-stone-900, var(--color-stone-900));

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

/* ============================================================
   PRODUCT CARD
   ============================================================ */
export const Card = styled.div`
  position: relative;
  padding: 1.5rem;
  background-color: var(--background);
  overflow: hidden;
  cursor: pointer;
  transition: background-color 500ms;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }

  &:hover {
    background-color: var(--color-accent-dark);
  }
`;

export const CardNumber = styled.span`
  display: block;
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--color-stone-700);
  margin-bottom: 1.5rem;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 8rem;
  background-color: var(--color-stone-900, var(--color-stone-900));
  background-image: ${({ $image }) => ($image ? `url(${$image})` : "none")};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: transform 600ms ease;

  @media (min-width: 768px) {
    height: 12rem;
    margin-bottom: 2rem;
  }

  ${Card}:hover & {
    transform: scale(1.03);
  }

  svg {
    color: ${({ $image }) =>
      $image ? "transparent" : "var(--color-stone-700)"};
    transition: color 400ms;
  }

  ${Card}:hover & svg {
    color: ${({ $image }) => ($image ? "transparent" : "var(--accent)")};
  }
`;

export const CardCategory = styled.span`
  display: block;
  font-size: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.35em;
  color: var(--accent);
  margin-bottom: 0.75rem;
`;

export const CardTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.125rem;
  color: var(--foreground);
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

export const CardDesc = styled.p`
  font-size: 0.8rem;
  color: var(--color-stone-500);
  font-weight: 300;
  line-height: 1.7;
`;

/* Amber reveal line at bottom */
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
