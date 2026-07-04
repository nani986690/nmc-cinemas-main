import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  background-color: var(--background);
  min-height: 100vh;
`;

export const HeroSection = styled.header`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, var(--color-dark-brown-alpha-40), var(--color-dark-brown-alpha-80));
    z-index: 1;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: ${({ $image }) => `url(${$image})`};
  background-size: cover;
  background-position: center;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 1rem;
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

export const Heading = styled.h1`
  font-family: var(--font-serif);
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1.1;
  color: var(--color-white);
  margin-bottom: 1rem;
`;

export const HeadingItalic = styled.span`
  font-style: italic;
  color: rgba(255, 255, 255, 0.70);
`;

export const ContentSection = styled.section`
  padding: 6rem 0;
`;

export const ContentText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--color-stone-400);
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const DetailCard = styled.div`
  background-color: var(--color-stone-900);
  padding: 3rem;
  border: 1px solid var(--color-stone-800);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 300ms, border-color 300ms;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-amber-800-alpha-50);
  }
`;

export const CardIconWrapper = styled.div`
  color: var(--accent);
  margin-bottom: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--foreground);
  margin-bottom: 1rem;
`;

export const CardDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-stone-500);
`;

export const CtaWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background-color: var(--color-stone-900);
  color: var(--foreground);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 700;
  border: 1px solid var(--color-stone-800);
  cursor: pointer;
  text-decoration: none;
  transition: background-color 400ms, border-color 400ms, color 400ms;

  svg {
    flex-shrink: 0;
    transition: transform 300ms;
  }

  &:hover {
    background-color: var(--accent);
    border-color: var(--accent);
    color: var(--color-white);
    svg {
      transform: translate(3px, -3px);
    }
  }
`;

export const BackBtn = styled.a`
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  z-index: 20;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.60);
  text-decoration: none;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: color 300ms, transform 300ms;

  &:hover {
    color: var(--color-white);
    transform: translateX(-5px);
  }
`;
