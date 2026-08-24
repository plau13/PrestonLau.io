'use client';

import styled from 'styled-components';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

const Wrap = styled(Section)`
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 2rem;
  font-size: var(--fz-sm);

  a {
    color: var(--text-secondary);
    text-decoration: none;

    &:hover {
      color: var(--accent);
    }
  }
`;

export default function Contact() {
  return (
    <Wrap id="contact">
      <Title>Get in touch</Title>
      <Text>
        Open to conversations with recruiters, collaborators, and founders — whether it&apos;s AI
        product work, enterprise CS leadership, or what I&apos;m building next.
      </Text>
      <Button href={`mailto:${siteConfig.email}`}>Say hello</Button>
      <SocialRow>
        {siteConfig.socialMedia.map(({ name, url }) => (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        ))}
      </SocialRow>
    </Wrap>
  );
}
