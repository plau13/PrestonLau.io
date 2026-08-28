'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Prose = styled.div`
  color: var(--text-secondary);

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
  aspect-ratio: 3 / 4;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  justify-self: end;

  @media (max-width: 768px) {
    max-width: 280px;
    margin: 0 auto;
    justify-self: center;
    order: -1;
  }
`;

export default function About() {
  return (
    <Section id="about">
      <SectionHeading title="About" />
      <Layout>
        <Prose>
          <p>
            I&apos;m an Omaha native and former competitive swimmer who studied Political Science at
            BYU. I&apos;ve spent the last five years at{' '}
            <a href="https://www.qualtrics.com/" target="_blank" rel="noopener noreferrer">
              Qualtrics
            </a>
            , growing from Enterprise Support Specialist to Account Executive in financial services
            and insurance.
          </p>
          <p>
            I build AI products on the side, starting with{' '}
            <a href="https://soulscribe.info" target="_blank" rel="noopener noreferrer">
              SoulScribe
            </a>{' '}
            (privacy-first journaling) and{' '}
            <a href="https://vetthq.com" target="_blank" rel="noopener noreferrer">
              Vett
            </a>{' '}
            (legal conflict screening with hierarchical RAG and ABA-compliant audit trails). At
            Qualtrics I run a Center of Excellence AI group for GTM and build agentic tooling,
            including an expansion opportunity builder adopted by 3K+ employees.
          </p>
          <p>
            Outside of work I&apos;m an endurance athlete. Marathons, triathlons, same mindset as
            shipping: show up consistently and figure out the rest along the way.
          </p>
        </Prose>
        <PhotoWrap>
          <Image
            src="/images/about-ironman.png"
            alt="Preston Lau with friends after an Ironman 70.3 triathlon"
            fill
            sizes="(max-width: 768px) 280px, 340px"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </PhotoWrap>
      </Layout>
    </Section>
  );
}
