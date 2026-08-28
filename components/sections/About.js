'use client';

import styled from 'styled-components';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

const Prose = styled.div`
  color: var(--text-secondary);
  max-width: 720px;

  p {
    margin-bottom: 1.25rem;
  }

  a {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

export default function About() {
  return (
    <Section id="about">
      <SectionHeading title="About" />
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
          Qualtrics I founded an internal AI working group and built agentic tooling, including a
          QBR deck builder adopted org-wide.
        </p>
        <p>
          Outside of work I&apos;m an endurance athlete. Marathons, triathlons, same mindset as
          shipping: show up consistently and figure out the rest along the way.
        </p>
      </Prose>
    </Section>
  );
}
