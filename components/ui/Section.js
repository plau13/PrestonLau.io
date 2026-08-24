'use client';

import styled from 'styled-components';

const StyledSection = styled.section`
  padding: var(--section-padding-y) 24px;
  max-width: var(--max-width-wide);
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: var(--section-padding-y-mobile) 20px;
  }
`;

export default function Section({ id, children, className }) {
  return (
    <StyledSection id={id} className={className}>
      {children}
    </StyledSection>
  );
}
