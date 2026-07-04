import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
`;

/* Decorative background glow */
export const BgGlow = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(180, 83, 9, 0.08) 0%,
    transparent 70%
  );
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const Content = styled.div`
  text-align: center;
  max-width: 560px;
  animation: ${fadeIn} 0.7s ease-out forwards;
  position: relative;
  z-index: 2;
`;

export const ErrorCode = styled.div`
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(7rem, 18vw, 12rem);
  font-weight: 800;
  line-height: 1;
  color: var(--foreground);
  opacity: 0.06;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  pointer-events: none;
  letter-spacing: -0.04em;
`;

export const IconWrapper = styled.div`
  margin-bottom: 2rem;
  animation: ${float} 4s ease-in-out infinite;

  svg {
    width: 72px;
    height: 72px;
    color: var(--accent);
    stroke-width: 1;
  }
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

export const Description = styled.p`
  font-size: 1.05rem;
  color: var(--color-stone-400, #a8a29e);
  line-height: 1.7;
  margin-bottom: 2.5rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const PrimaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  background: var(--accent);
  color: #fff;
  text-decoration: none;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: var(--accent-hover, #9a4408);
    transform: translateY(-2px);
  }
`;

export const SecondaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  background: transparent;
  color: var(--foreground);
  text-decoration: none;
  border: 1px solid var(--color-stone-700, #44403c);
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-2px);
  }
`;

export const Separator = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--color-stone-600, #57534e);
    animation: ${pulse} 2s ease-in-out infinite;

    &:nth-of-type(2) {
      animation-delay: 0.3s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.6s;
    }
  }
`;
