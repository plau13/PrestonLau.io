'use client';

import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { siteConfig } from '@/lib/config';
import Button from '@/components/ui/Button';

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--nav-height);
  background: rgba(250, 250, 248, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
`;

const Inner = styled.div`
  max-width: var(--max-width-wide);
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

const Wordmark = styled.a`
  font-family: var(--font-serif);
  font-size: var(--fz-xl);
  color: var(--text-primary);
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: var(--accent);
  }
`;

const NavLinks = styled.nav`
  display: none;
  align-items: center;
  gap: 1.75rem;

  @media (min-width: 769px) {
    display: flex;
  }

  a {
    font-size: var(--fz-sm);
    color: var(--text-secondary);
    text-decoration: none;
    transition: color var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--accent);
    }
  }
`;

const Actions = styled.div`
  display: none;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 769px) {
    display: flex;
  }
`;

const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  min-width: 44px;
  min-height: 44px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--text-primary);
    transition: var(--transition);
  }
`;

const MobileOverlay = styled.div`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  inset: 0;
  top: var(--nav-height);
  background: var(--bg-primary);
  padding: 2rem 24px;
  z-index: 40;
  gap: 1.5rem;
  overflow-y: auto;

  a {
    font-family: var(--font-serif);
    font-size: var(--fz-xl);
    color: var(--text-primary);
    text-decoration: none;
    min-height: 44px;
    display: flex;
    align-items: center;
  }
`;

export default function Nav() {
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, closeMenu]);

  return (
    <>
      <Header>
        <Inner>
          <Wordmark href="/">Preston Lau</Wordmark>
          <NavLinks aria-label="Main navigation">
            {siteConfig.navLinks.map(({ name, url }) => (
              <a key={url} href={url}>
                {name}
              </a>
            ))}
          </NavLinks>
          <Actions>
            <Button href={siteConfig.resumePath} variant="ghost">
              Resume
            </Button>
          </Actions>
          <MenuButton
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </MenuButton>
        </Inner>
      </Header>
      <MobileOverlay $open={open} role="dialog" aria-hidden={!open} aria-modal={open}>
        {siteConfig.navLinks.map(({ name, url }) => (
          <a key={url} href={url} onClick={closeMenu}>
            {name}
          </a>
        ))}
        <Button href={siteConfig.resumePath} variant="ghost" onClick={closeMenu}>
          Resume
        </Button>
      </MobileOverlay>
    </>
  );
}
