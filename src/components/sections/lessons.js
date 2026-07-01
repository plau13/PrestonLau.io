import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledLessonsSection = styled.section`
  max-width: 900px;

  .intro {
    margin-bottom: 0;
    max-width: 640px;
    color: var(--slate);
  }
`;

const StyledLessonsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
`;

const StyledLesson = styled.li`
  ${({ theme }) => theme.mixins.boxShadow};
  padding: 2rem;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: translateY(-4px);
    }
  }

  .lesson-overline {
    margin: 0 0 8px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .lesson-title {
    margin: 0 0 1.25rem;
    font-size: var(--fz-xxl);
    color: var(--lightest-slate);
  }

  .lesson-fields {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 0 1.25rem;
  }

  .lesson-field {
    dt {
      margin: 0 0 4px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
    }

    dd {
      margin: 0;
      color: var(--light-slate);
      line-height: 1.6;
    }
  }

  .lesson-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;

    a.site-link {
      ${({ theme }) => theme.mixins.smallButton};
    }

    a.icon-link {
      ${({ theme }) => theme.mixins.flexCenter};
      color: var(--light-slate);
      padding: 8px;

      &:hover,
      &:focus-visible {
        color: var(--green);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const FIELDS = [
  { key: 'whatITried', label: 'What I tried' },
  { key: 'whereItBroke', label: 'Where it broke' },
  { key: 'lessonLearned', label: 'What I learned' },
  { key: 'currentChallenge', label: 'Current challenge' },
  { key: 'nextGoal', label: 'Next goal' },
];

const Lessons = () => {
  const data = useStaticQuery(graphql`
    query {
      lessons: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/lessons/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              order
              title
              category
              github
              external
              whatITried
              whereItBroke
              lessonLearned
              currentChallenge
              nextGoal
            }
          }
        }
      }
    }
  `);

  const revealTitle = useRef(null);
  const revealLessons = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealLessons.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const lessons = data.lessons.edges;

  return (
    <StyledLessonsSection id="lessons">
      <h2 className="numbered-heading" ref={revealTitle}>
        Lessons Learned
      </h2>

      <p className="intro">
        Side projects and ventures where things did not go as planned — and what I am doing about
        it.
      </p>

      <StyledLessonsGrid>
        {lessons.map(({ node }, i) => {
          const { frontmatter } = node;
          const { title, category, github, external } = frontmatter;
          const primaryLink = external || github;

          return (
            <StyledLesson key={i} ref={el => (revealLessons.current[i] = el)}>
              <p className="lesson-overline">{category || 'Lesson Learned'}</p>

              <h3 className="lesson-title">
                {primaryLink ? (
                  <a href={primaryLink} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                ) : (
                  title
                )}
              </h3>

              <dl className="lesson-fields">
                {FIELDS.map(({ key, label }) => {
                  const value = frontmatter[key];
                  if (!value) {
                    return null;
                  }

                  return (
                    <div className="lesson-field" key={key}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  );
                })}
              </dl>

              <div className="lesson-links">
                {external && (
                  <a className="site-link" href={external} target="_blank" rel="noreferrer">
                    Visit site
                  </a>
                )}
                {github && (
                  <a
                    className="icon-link"
                    href={github}
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer">
                    <Icon name="GitHub" />
                  </a>
                )}
              </div>
            </StyledLesson>
          );
        })}
      </StyledLessonsGrid>
    </StyledLessonsSection>
  );
};

export default Lessons;
