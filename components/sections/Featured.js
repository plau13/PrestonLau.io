'use client';

import styled from 'styled-components';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Tag from '@/components/ui/Tag';
import Prose from '@/components/ui/Prose';
import CaseStudyMedia from '@/components/ui/CaseStudyMedia';
import Button from '@/components/ui/Button';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }
`;

const CaseStudy = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-bottom: 2.5rem;
  }
`;

const Header = styled.div`
  grid-column: 1 / -1;
`;

const ContentCol = styled.div`
  @media (max-width: 900px) {
    order: 1;
  }
`;

const MediaCol = styled.div`
  @media (max-width: 900px) {
    order: 2;
  }
`;

const Category = styled.p`
  font-size: var(--fz-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 0.5rem;
`;

const Title = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: var(--accent);
    }
  }
`;

const Field = styled.div`
  margin-bottom: 1.25rem;

  h4 {
    font-family: var(--font-sans);
    font-size: var(--fz-xs);
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--accent);
    margin: 0 0 0.35rem;
  }
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin: 1.25rem 0;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export default function Featured({ projects }) {
  return (
    <Section id="projects">
      <SectionHeading
        title="Work"
        subtitle="Case studies — problem, what I built, and results."
        wide
      />
      <List>
        {projects.map((project) => {
          const primaryLink = project.external || project.github;

          return (
            <CaseStudy key={project.slug}>
              <Header>
                {project.category && <Category>{project.category}</Category>}
                <Title>
                  {primaryLink ? (
                    <a href={primaryLink} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </Title>
              </Header>

              <ContentCol>
                {project.problemHtml && (
                  <Field>
                    <h4>Problem</h4>
                    <Prose html={project.problemHtml} />
                  </Field>
                )}
                {project.whatIBuiltHtml && (
                  <Field>
                    <h4>What I built</h4>
                    <Prose html={project.whatIBuiltHtml} />
                  </Field>
                )}
                {project.resultHtml && (
                  <Field>
                    <h4>Result</h4>
                    <Prose html={project.resultHtml} />
                  </Field>
                )}
                {project.stack?.length > 0 && (
                  <Stack>
                    {project.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </Stack>
                )}
                {project.external && (
                  <Links>
                    <Button href={project.external} variant="ghost">
                      Visit site
                    </Button>
                  </Links>
                )}
              </ContentCol>

              <MediaCol>
                <CaseStudyMedia
                  mediaType={project.mediaType || 'placeholder'}
                  mediaLabel={project.mediaLabel}
                  mediaUrl={project.mediaUrl}
                  screenshot={project.screenshot}
                />
              </MediaCol>
            </CaseStudy>
          );
        })}
      </List>
    </Section>
  );
}
