import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

/* ============================================================
   ANIMATIONS
   ============================================================ */
const float = keyframes`
  0%, 100% { transform: translateX(-5%); }
  50%       { transform: translateX(5%); }
`;

const floatReverse = keyframes`
  0%, 100% { transform: translateX(5%); }
  50%       { transform: translateX(-5%); }
`;

/* ============================================================
   SECTION
   ============================================================ */
export const Section = styled.section`
  position: relative;
  padding: 5rem 0;
  background-color: var(--background);
  overflow: hidden;
`;

/* Animated background lines */
export const BgLine = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  pointer-events: none;

  ${({ $top }) => css`
    top: ${$top};
  `}
  ${({ $reverse }) =>
    $reverse
      ? css`
          background-color: var(--color-amber-800-alpha-07);
          animation: ${floatReverse} 12s ease-in-out infinite;
        `
      : css`
          background-color: var(--color-stone-700-alpha-12);
          animation: ${float} 15s ease-in-out infinite;
        `}
`;

/* ============================================================
   LAYOUT
   ============================================================ */
export const Label = styled.span`
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  color: var(--accent);
  font-weight: 700;
  display: block;
  margin-bottom: 2rem;
`;

export const Heading = styled.h2`
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1.1;
  margin-bottom: 3rem;
  color: var(--foreground);
`;

export const HeadingItalic = styled.span`
  font-style: italic;
  color: var(--color-stone-500);
`;

export const Desc = styled.p`
  font-size: 0.875rem;
  color: var(--color-stone-500);
  font-weight: 300;
  line-height: 1.8;
  max-width: 22rem;
  margin-bottom: 4rem;
`;

/* ============================================================
   CONTACT INFO ITEMS
   ============================================================ */
export const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const ContactIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--color-stone-800);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-stone-500);
  flex-shrink: 0;
  transition:
    border-color 500ms,
    color 500ms;

  ${ContactItem}:hover & {
    border-color: var(--color-amber-800);
    color: var(--accent);
  }
`;

export const ContactTextLabel = styled.p`
  font-size: 0.5625rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-stone-700);
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const ContactTextValue = styled.p`
  font-size: 0.875rem;
  color: var(--foreground);
  font-weight: 300;
`;

/* ============================================================
   FORM CARD
   ============================================================ */
export const FormCard = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: var(--color-stone-900-alpha-35);
  border: 1px solid var(--color-stone-700-alpha-40);
  padding: 2.5rem;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);

  @media (min-width: 1024px) {
    padding: 4rem;
  }
`;

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

/* ============================================================
   FIELD
   ============================================================ */
export const FieldWrapper = styled.div`
  position: relative;
`;

const inputBase = `
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--color-stone-800);
  padding: 1rem 0;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--foreground);
  font-family: var(--font-sans);
  outline: none;
  transition: border-color 500ms;

  &::placeholder {
    color: var(--color-stone-700);
  }
`;

export const Input = styled.input`
  ${inputBase}
  ${({ $hasError }) =>
    $hasError &&
    css`
      border-bottom-color: var(--color-red-600);
    `}
`;

export const Textarea = styled.textarea`
  ${inputBase}
  resize: none;
  display: block;
  ${({ $hasError }) =>
    $hasError &&
    css`
      border-bottom-color: var(--color-red-600);
    `}
`;

export const ErrorMsg = styled.span`
  display: block;
  margin-top: 0.4rem;
  font-size: 0.55rem;
  letter-spacing: 0.1em;
  color: var(--color-red-600);
  font-weight: 600;
  text-transform: uppercase;
`;

/* The amber underline that grows on focus — sits right under the input */
export const FocusLine = styled.div`
  height: 1px;
  background-color: var(--accent);
  transition: width 400ms ease;
  width: ${({ $active }) => ($active ? "100%" : "0%")};
  transform-origin: left;
`;

/* ============================================================
   SUBMIT BUTTON
   ============================================================ */
export const SubmitBtn = styled.button`
  position: relative;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--color-stone-900, var(--color-stone-900));
  border: 1px solid var(--color-stone-800);
  cursor: pointer;
  overflow: hidden;
  transition:
    background-color 700ms,
    border-color 700ms;

  &:hover {
    background-color: var(--color-amber-800);
    border-color: var(--color-amber-800);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const SubmitLabel = styled.span`
  position: relative;
  z-index: 1;
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  font-weight: 700;
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: color 700ms;

  svg {
    transition: transform 300ms;
  }

  ${SubmitBtn}:hover & {
    color: var(--color-white);
  }

  ${SubmitBtn}:hover & svg {
    transform: translate(3px, -3px);
  }
`;

export const BtnGlow = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    var(--color-amber-700),
    var(--color-amber-800)
  );
  opacity: 0;
  transition: opacity 700ms;

  ${SubmitBtn}:hover & {
    opacity: 0.2;
  }
`;
