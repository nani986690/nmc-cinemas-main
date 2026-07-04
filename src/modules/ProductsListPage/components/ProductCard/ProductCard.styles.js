import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

const riseIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Card = styled.div`
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${riseIn} 0.4s ease both;
  transition: transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease, background 300ms ease;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ accentColor }) => accentColor || "var(--accent)"};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 300ms ease;
    z-index: 10;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: var(--color-white-alpha-100);
    box-shadow: 0 24px 48px var(--color-black-alpha-15);
    background: var(--color-white-alpha-02);

    &::before {
      transform: scaleY(1);
    }
  }
`;

export const Thumb = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  position: relative;
  overflow: hidden;
  background: ${({ bg }) => bg || "var(--card-bg)"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 600ms ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const CardBadgeWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
  z-index: 2;
`;

export const CardBadge = styled.span`
  font-family: var(--font-sans);
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 2px;
  background: ${({ color }) => color || "var(--accent)"};
  color: var(--color-white);
  box-shadow: 0 2px 8px var(--color-black-alpha-15);
`;

export const Body = styled.div`
  padding: 1.25rem;
  border-top: 1px solid var(--card-border);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const BrandTag = styled.div`
  font-family: var(--font-sans);
  font-size: 0.55rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: ${({ color }) => color || "var(--accent)"};
`;

export const ColorSwatchesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 0.8rem;
`;

export const CardColorDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg || "var(--color-gray-300)"};
  border: 1px solid var(--color-white-alpha-15);
  box-shadow: inset 0 2px 4px var(--color-black-alpha-15);
`;

export const CardName = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 400;
  color: var(--foreground);
  line-height: 1.25;
  margin: 0 0 0.5rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardDesc = styled.p`
  font-family: var(--font-sans);
  font-size: 0.7rem;
  color: var(--color-stone-400);
  line-height: 1.5;
  margin: 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const SpecTag = styled.span`
  font-family: var(--font-sans);
  font-size: 0.5rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 6px;
  margin-top: 0.5rem;
  align-self: flex-start;
  border: 1px solid var(--card-border);
  color: var(--color-stone-400);
  background: var(--background);
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  border-top: 1px solid var(--card-border);

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ViewDetailsLink = styled(Link)`
  font-family: var(--font-sans);
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 12px;
  border: none;
  background: var(--color-white-alpha-03);
  color: var(--foreground);
  cursor: pointer;
  flex: 1;
  text-align: center;
  transition: background 250ms, color 250ms;

  &:hover {
    background: var(--color-white-alpha-08);
    color: ${({ color }) => color || "var(--accent)"};
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const EnquireBtn = styled.button`
  font-family: var(--font-sans);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 12px;
  border: none;
  border-left: 1px solid var(--card-border);
  background: ${({ color }) => color || "var(--accent)"};
  color: var(--color-white);
  cursor: pointer;
  flex: 1;
  text-align: center;
  transition: opacity 250ms;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 576px) {
    border-left: none;
    border-top: 1px solid var(--card-border);
    width: 100%;
  }
`;
