'use client';

import styled from 'styled-components';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Prose from '@/components/ui/Prose';

const Timeline = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 2px solid var(--border);
  margin-left: 0.5rem;

  @media (max-width: 480px) {
    margin-left: 0.25rem;
  }
`;

const Item = styled.li`
  position: relative;
  padding: 0 0 2.5rem 1.75rem;

  @media (max-width: 480px) {
    padding-left: 2rem;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -7px;
    top: 0.35rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ $highlight }) => ($highlight ? 'var(--accent)' : 'var(--border-strong)')};
    border: 2px solid var(--bg-primary);
  }
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  margin-bottom: 0.35rem;
  font-size: var(--fz-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const Role = styled.h3`
  font-size: var(--fz-xl);
  margin-bottom: 0.25rem;
`;

const Company = styled.a`
  font-family: var(--font-serif);
  font-size: var(--fz-lg);
  color: var(--text-primary);
  text-decoration: none;

  &:hover {
    color: var(--accent);
  }
`;

const CompanyName = styled.span`
  font-family: var(--font-serif);
  font-size: var(--fz-lg);
  color: var(--text-primary);
`;

export default function Experience({ jobs }) {
  return (
    <Section id="experience">
      <SectionHeading title="Experience" wide />
      <Timeline>
        {jobs.map((job, i) => (
          <Item key={job.slug} $highlight={i === 0}>
            <Meta>
              <span>{job.range}</span>
              <span>{job.location}</span>
            </Meta>
            {job.url ? (
              <Company href={job.url} target="_blank" rel="noopener noreferrer">
                {job.company}
              </Company>
            ) : (
              <CompanyName>{job.company}</CompanyName>
            )}
            <Role>{job.title}</Role>
            <Prose html={job.html} />
          </Item>
        ))}
      </Timeline>
    </Section>
  );
}
