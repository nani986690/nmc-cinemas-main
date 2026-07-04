import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

/* ============================================================
   ANIMATION — scanline sweep
   ============================================================ */
const scanline = keyframes`
  from { top: 0; }
  to   { top: 100%; }
`;

/* ============================================================
   FOOTER ROOT
   ============================================================ */
export const FooterRoot = styled.footer`
  position: relative;
  padding: 8rem 0 0;
  background-color: var(--background);
  border-top: 1px solid var(--type-border);
  overflow: hidden;
`;

export const Scanline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-amber-800-alpha-12),
    transparent
  );
  animation: ${scanline} 10s linear infinite;
  pointer-events: none;
`;

/* ============================================================
   MAIN GRID  — brand 5/12, links 7/12
   ============================================================ */
export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  margin-bottom: 8rem;

  @media (min-width: 1024px) {
    grid-template-columns: 5fr 7fr;
    gap: 5rem;
  }
`;

/* ============================================================
   LEFT — BRAND BLOCK 
   ============================================================ */
export const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const BrandLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  line-height: 1;
`;

export const FooterBrandDivider = styled.span`
  width: 1px;
  height: 2.5rem;
  background-color: var(--type-border);
  flex-shrink: 0;
`;

export const FooterTaglineStack = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-family: var(--font-sans);
    font-size: 0.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.35em;
    color: var(--color-stone-400);
    line-height: 1.6;
  }
`;

export const FooterLogoImg = styled.img`
  height: 4.5rem;
  width: auto;
  object-fit: contain;
  transition:
    filter 300ms,
    opacity 300ms;
  filter: brightness(1);

  ${BrandLink}:hover & {
    filter: brightness(1.2);
  }
`;

export const BrandDesc = styled.p`
  font-size: 0.875rem; /* text-sm */
  color: var(--color-stone-400);
  font-weight: 300;
  line-height: 1.75;
  max-width: 24rem;
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const SocialLink = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--input-border);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-stone-400);
  text-decoration: none;
  transition:
    border-color 300ms,
    color 300ms;
  flex-shrink: 0;

  &:hover {
    border-color: var(--color-amber-800); 
    color: var(--accent); 
  }
`;

/* ============================================================
   RIGHT — LINKS GRID
   ============================================================ */
export const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; 
`;

export const GroupTitle = styled.h4`
  font-family: var(--font-sans);
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-stone-300);
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem; 
`;

export const LinkItem = styled.li``;

export const FooterLink = styled.a`
  font-size: 0.75rem; 
  color: var(--color-stone-400);
  text-decoration: none;
  font-weight: 300;
  transition: color 300ms;

  &:hover {
    color: var(--foreground);
  }
`;

export const AddressText = styled.p`
  font-size: 0.75rem;
  color: var(--color-stone-400);
  font-weight: 300;
  line-height: 2;
  margin: 0;
`;

/* ============================================================
   BOTTOM BAR 
   ============================================================ */
export const BottomBar = styled.div`
  padding: 4rem 0 4rem; 
  border-top: 1px solid var(--type-border); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Copyright = styled.p`
  font-size: 0.5625rem;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  font-weight: 700;
  color: var(--color-stone-400);
  text-align: center;
`;

export const MadeBy = styled.p`
  font-size: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 500;
  color: var(--color-stone-400);
  transition: color 300ms;

  a {
    color: var(--foreground);
    text-decoration: none;
    transition: color 300ms;

    &:hover {
      color: var(--accent);
    }
  }

  &:hover {
    color: var(--color-stone-600);
  }
`;
