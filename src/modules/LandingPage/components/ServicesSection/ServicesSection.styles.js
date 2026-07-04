import styled from "@emotion/styled";

/* ============================================================
   SECTION
   ============================================================ */
export const Section = styled.section`
  position: relative;
  background-color: var(--background);
  overflow: hidden;
`;

/* ============================================================
   HEADER
   ============================================================ */
export const HeaderRow = styled.div`
  margin-bottom: 5rem;
  padding-top: 5rem;
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
   3-PANEL ROW
   ============================================================ */
export const PanelRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

/* ============================================================
   PANEL
   ============================================================ */
export const Panel = styled.div`
  position: relative;
  height: 28rem;
  overflow: hidden;
  cursor: pointer;

  @media (min-width: 768px) {
    height: 36rem;
  }

  /* Dark overlay */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ $overlay }) => $overlay || "var(--color-black-alpha-55)"};
    z-index: 1;
    transition: background 600ms ease;
  }

  &:hover::before {
    background: ${({ $overlayHover }) => $overlayHover || "var(--color-card-overlay-alpha-35)"};
  }
`;

export const PanelBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: ${({ $image }) => `url(${$image})`};
  background-size: cover;
  background-position: center;
  transition: transform 700ms ease;

  ${Panel}:hover & {
    transform: scale(1.04);
  }
`;

/* Vertical divider between panels on desktop */
export const PanelDivider = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  background: var(--color-stone-700-alpha-30);
  z-index: 2;
`;

export const PanelContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const PanelTag = styled.span`
  display: block;
  font-size: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: var(--accent);
  margin-bottom: 1rem;
`;

export const PanelTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.15;
  color: var(--color-white);
  margin-bottom: 0.75rem;
`;

export const PanelDesc = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.75rem;
  max-width: 22rem;
`;

export const PanelCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.35em;
  color: var(--color-white);
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.30);
  padding-bottom: 0.25rem;
  transition:
    color 300ms,
    border-color 300ms;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
  }

  svg {
    transition: transform 300ms;
  }

  &:hover svg {
    transform: translate(3px, -2px);
  }
`;
