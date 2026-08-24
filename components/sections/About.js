'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

const Prose = styled.div`
  color: var(--text-secondary);

  @media (max-width: 768px) {
    order: 2;
  }

  p {
    margin-bottom: 1.25rem;
  }

  a {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 2px;
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
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 240px;
    order: 1;
  }
`;

export default function About() {
  return (
    <Section id="about">
      <SectionHeading title="About" subtitle="Builder first. Enterprise operator second." />
      <Grid>
        <Prose>
          <p>
            I&apos;m an Omaha native and former competitive swimmer who studied Political Science at
            BYU. I&apos;ve spent the last five years at{' '}
            <a href="https://www.qualtrics.com/" target="_blank" rel="noopener noreferrer">
              Qualtrics
            </a>
            , growing from Support Specialist to Senior Technical Success Manager — and joining as
            Account Executive in August 2026.
          </p>
          <p>
            I build AI products on the side —{' '}
            <a href="https://vetthq.com" target="_blank" rel="noopener noreferrer">
              Vett
            </a>{' '}
            (legal conflict screening with hierarchical RAG and ABA-compliant audit trails) and{' '}
            <a href="https://soulscribe.info" target="_blank" rel="noopener noreferrer">
              SoulScribe
            </a>{' '}
            (privacy-first journaling). At Qualtrics I founded an AI Center of Excellence and built
            an AI-powered QBR deck builder adopted org-wide.
          </p>
          <p>
            I also help enterprise clients like Fidelity, USAA, and SoFi close experience gaps — the
            same judgment that shows up in my products shows up in my day job. Outside work I&apos;m
            an endurance athlete: marathons, triathlons, same mindset as shipping — show up
            consistently and figure out the rest along the way.
          </p>
        </Prose>
        <PhotoWrap>
          <Image
            src="/images/plau.jpg"
            alt="Preston Lau"
            fill
            sizes="(max-width: 768px) 240px, 280px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </PhotoWrap>
      </Grid>
    </Section>
  );
}
