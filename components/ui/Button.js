'use client';

import styled, { css } from 'styled-components';

const variants = {
  primary: css`
    background: var(--accent);
    color: white;
    border: 2px solid var(--accent);

    &:hover,
    &:focus-visible {
      background: var(--accent-hover);
      border-color: var(--accent-hover);
      color: white;
      text-decoration: none;
    }
  `,
  ghost: css`
    background: transparent;
    color: var(--accent);
    border: 2px solid var(--border-strong);

    &:hover,
    &:focus-visible {
      border-color: var(--accent);
      color: var(--accent);
      text-decoration: none;
    }
  `,
};

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.5rem;
  font-family: var(--font-sans);
  font-size: var(--fz-sm);
  font-weight: 500;
  border-radius: var(--radius);
  text-decoration: none;
  transition: all var(--transition);
  cursor: pointer;
  min-height: 44px;
  ${({ $variant }) => variants[$variant] || variants.primary};

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export default function Button({ href, children, variant = 'primary', ...props }) {
  return (
    <StyledButton href={href} $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}
