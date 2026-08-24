'use client';

import styled from 'styled-components';

const StyledProse = styled.div`
  color: var(--text-secondary);
  line-height: 1.7;

  ul {
    margin: 0;
    padding-left: 1.25rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  li:last-child {
    margin-bottom: 0;
  }

  p {
    margin: 0 0 1rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export default function Prose({ html, className }) {
  if (!html) {
    return null;
  }

  return <StyledProse className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
