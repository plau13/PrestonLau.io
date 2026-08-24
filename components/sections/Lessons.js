'use client';

import styled from 'styled-components';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Item = styled.li`
  padding: 1.5rem;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const Theme = styled.p`
  font-size: var(--fz-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 0.5rem;
`;

const Title = styled.h3`
  font-family: var(--font-serif);
  font-size: var(--fz-xl);
  margin: 0 0 1rem;
  line-height: 1.3;
`;

const Field = styled.div`
  margin-bottom: 0.75rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  dt {
    font-size: var(--fz-xs);
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 0.25rem;
  }

  dd {
    margin: 0;
    color: var(--text-secondary);
    font-size: var(--fz-md);
    line-height: 1.6;
  }
`;

const LessonLabel = styled.dt`
  color: var(--accent) !important;
`;

const Context = styled.p`
  margin: 1rem 0 0;
  font-size: var(--fz-xs);
  color: var(--text-muted);
`;

export default function Lessons({ lessons }) {
  return (
    <Section id="lessons">
      <SectionHeading
        title="Mistakes I've made"
        subtitle="Broad lessons from building — themes, not highlight reels."
      />
      <List>
        {lessons.map((lesson) => (
          <Item key={lesson.slug}>
            {lesson.theme && <Theme>{lesson.theme}</Theme>}
            <Title>{lesson.title}</Title>
            {lesson.mistake && (
              <Field>
                <dt>Mistake</dt>
                <dd>{lesson.mistake}</dd>
              </Field>
            )}
            {lesson.lesson && (
              <Field>
                <LessonLabel>Lesson</LessonLabel>
                <dd>{lesson.lesson}</dd>
              </Field>
            )}
            {lesson.context && <Context>From {lesson.context}</Context>}
          </Item>
        ))}
      </List>
    </Section>
  );
}
