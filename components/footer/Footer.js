'use client';

import styled from 'styled-components';
import { siteConfig } from '@/lib/config';

const FooterEl = styled.footer`
  border-top: 1px solid var(--border);
  padding: 2.5rem 24px;
  margin-top: 2rem;
`;

const Inner = styled.div`
  max-width: var(--max-width-wide);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: var(--fz-sm);
  color: var(--text-muted);
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;

  a {
    color: var(--text-secondary);
    text-decoration: none;

    &:hover {
      color: var(--accent);
    }
  }
`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterEl>
      <Inner>
        <span>© {year} Preston Lau</span>
        <Links>
          {siteConfig.socialMedia.map(({ name, url }) => (
            <a key={url} href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          ))}
          <a href={`mailto:${siteConfig.email}`}>Email</a>
        </Links>
      </Inner>
    </FooterEl>
  );
}
