'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 3rem;
  max-width: var(--max-width-prose);

  &.wide {
    max-width: var(--max-width-wide);
  }
`;

const Title = styled.h2`
  font-size: var(--fz-xxl);
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  font-size: var(--fz-md);
  margin: 0;
  max-width: 540px;
`;

export default function SectionHeading({ title, subtitle, wide = false }) {
  return (
    <Wrapper className={wide ? 'wide' : undefined}>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  );
}
