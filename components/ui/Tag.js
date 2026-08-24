'use client';

import styled from 'styled-components';

const StyledTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.625rem;
  font-size: var(--fz-xs);
  color: var(--text-secondary);
  background: var(--bg-muted);
  border: 1px solid var(--border);
  border-radius: 999px;
`;

export default function Tag({ children }) {
  return <StyledTag>{children}</StyledTag>;
}
