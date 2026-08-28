'use client';

import styled from 'styled-components';
import Image from 'next/image';
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

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 1.25rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PhotoWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  justify-self: end;

  @media (max-width: 768px) {
    max-width: 200px;
    margin: 0 auto;
    justify-self: center;
    order: -1;
  }
`;

const TextCol = styled.div``;

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
  margin-bottom: 2rem;
  font-size: var(--fz-md);
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

export default function Hero() {
  return (
    <HeroSection id="top">
      <HeroGrid>
        <TextCol>
          <Label>Account Executive · AI Builder</Label>
          <Name>Preston Lau</Name>
          <Tagline>I build things for the betterment of Humanity.</Tagline>
          <Subtitle>
            Builder, athlete, husband, dad. Omaha raised, Utah based. Account Executive at
            Qualtrics, and a serial builder shipping AI products. Five years of enterprise CS
            receipts and founder aspirations.
          </Subtitle>
          <CtaRow>
            <Button href="/#projects">See what I&apos;ve built</Button>
            <Button href={siteConfig.resumePath} variant="ghost">
              Download resume
            </Button>
          </CtaRow>
        </TextCol>
        <PhotoWrap>
          <Image
            src="/images/plau.jpg"
            alt="Preston Lau"
            fill
            sizes="(max-width: 768px) 200px, 280px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </PhotoWrap>
      </HeroGrid>
    </HeroSection>
  );
}
