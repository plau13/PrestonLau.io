'use client';

import styled from 'styled-components';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

const HeroSection = styled(Section)`
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    min-height: auto;
    padding-top: 2.5rem;
    padding-bottom: 3rem;
  }
`;

const Label = styled.p`
  font-size: var(--fz-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: var(--fz-display);
  margin-bottom: 0.75rem;
`;

const Tagline = styled.p`
  font-family: var(--font-serif);
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  color: var(--text-primary);
  max-width: 640px;
  margin-bottom: 1rem;
  line-height: 1.35;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  max-width: 560px;
  margin-bottom: 1.5rem;
  font-size: var(--fz-md);
`;

const CredibilityStrip = styled.p`
  max-width: 560px;
  margin-bottom: 2rem;
  font-size: var(--fz-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
  line-height: 1.8;
`;

const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 400px;
  }
`;

const credibilityItems = ['Fidelity', 'USAA', 'SoFi', 'Vett', 'SoulScribe'];

export default function Hero() {
  return (
    <HeroSection id="top">
      <Label>Account Executive · AI Builder</Label>
      <Name>Preston Lau</Name>
      <Tagline>I build things for the betterment of Humanity.</Tagline>
      <Subtitle>
        Account Executive at Qualtrics, starting August 2026 — and a serial builder shipping AI
        products with RAG, Claude API, and LLM orchestration. Five years of enterprise CS receipts
        meet founder execution.
      </Subtitle>
      <CredibilityStrip>{credibilityItems.join(' · ')}</CredibilityStrip>
      <CtaRow>
        <Button href="/#projects">See what I&apos;ve built</Button>
        <Button href={siteConfig.resumePath} variant="ghost">
          Download resume
        </Button>
      </CtaRow>
    </HeroSection>
  );
}
