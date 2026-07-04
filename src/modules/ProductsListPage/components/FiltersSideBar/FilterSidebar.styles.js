import styled from "@emotion/styled";

export const SidebarContainer = styled.aside`
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: max-content;

  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 320px;
    height: 100vh;
    max-width: 85vw;
    z-index: 1000;
    overflow-y: auto;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
    border-right: 1px solid var(--card-border);
    box-shadow: ${({ isOpen }) => (isOpen ? "20px 0 40px var(--color-black-alpha-50)" : "none")};
  }
`;

export const MobileOverlay = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    inset: 0;
    background: var(--color-bg-dark-alpha-90);
    backdrop-filter: blur(4px);
    z-index: 999;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 993px) {
    display: ${({ showOnDesktop }) => (showOnDesktop ? "flex" : "none")};
  }
`;

export const SidebarTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--foreground);
  margin: 0;
`;

export const CloseBtn = styled.button`
  background: none;
  border: none;
  color: var(--color-stone-500);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  transition: color 200ms;

  &:hover {
    color: var(--foreground);
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const GroupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
  cursor: pointer;
`;

export const GroupTitle = styled.h4`
  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--foreground);
  margin: 0;
`;

export const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 300ms ease;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  color: var(--color-stone-300);
  line-height: 1.4;
  user-select: none;
  transition: color 200ms;

  &:hover {
    color: var(--foreground);
  }
`;

export const CheckboxInput = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid var(--input-border);
  background: transparent;
  border-radius: 2px;
  flex-shrink: 0;
  margin-top: 0.1rem;
  position: relative;
  cursor: pointer;
  transition: all 200ms;

  &:checked {
    background: ${({ color }) => color || "var(--accent)"};
    border-color: ${({ color }) => color || "var(--accent)"};
  }

  &:checked::after {
    content: "";
    position: absolute;
    left: 4px;
    top: 1px;
    width: 4px;
    height: 8px;
    border: solid var(--color-black);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const ColorDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ color }) => color};
  flex-shrink: 0;
  margin-top: 0.25rem;
`;

export const ClearAllBtn = styled.button`
  font-family: var(--font-sans);
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-stone-500);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  align-self: flex-start;
  transition: color 200ms;

  &:hover {
    color: var(--accent);
  }
`;

/* ── Mobile Filter Toggle Button ── */
export const MobileToggleBtn = styled.button`
  display: none;
  
  @media (max-width: 992px) {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-sans);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.6rem 1rem;
    background: var(--card-bg);
    border: 1px solid var(--input-border);
    color: var(--foreground);
    cursor: pointer;
  }
`;

export const ActiveStateDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ color }) => color || "var(--accent)"};
`;
