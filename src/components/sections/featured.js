import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledFeaturedSection = styled.section`
  max-width: 900px;
`;

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
`;

const StyledProject = styled.li`
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

  .project-header {
    ${({ theme }) => theme.mixins.flexBetween};
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }

  .project-overline {
    margin: 0 0 8px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .project-title {
    margin: 0;
    font-size: var(--fz-xxl);
    color: var(--lightest-slate);
  }

  .project-description {
    margin: 0 0 1.25rem;
    color: var(--light-slate);
    line-height: 1.6;
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
    margin: 0 0 1.25rem;
    padding: 0;
    list-style: none;

    li {
      color: var(--slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
    }
  }

  .project-links {
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

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/featured/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              order
              title
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  const featuredProjects = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <StyledFeaturedSection id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Some Things I&apos;ve Built
      </h2>

      <StyledProjectsGrid>
        {featuredProjects.map(({ node }, i) => {
          const { frontmatter, html } = node;
          const { external, title, tech, github } = frontmatter;
          const primaryLink = external || github;

          return (
            <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
              <div className="project-header">
                <div>
                  <p className="project-overline">Featured Project</p>
                  <h3 className="project-title">
                    {primaryLink ? (
                      <a href={primaryLink} target="_blank" rel="noreferrer">
                        {title}
                      </a>
                    ) : (
                      title
                    )}
                  </h3>
                </div>
              </div>

              <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />

              {tech?.length > 0 && (
                <ul className="project-tech-list">
                  {tech.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}

              <div className="project-links">
                {external && (
                  <a
                    className="site-link"
                    href={external}
                    target="_blank"
                    rel="noreferrer">
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
            </StyledProject>
          );
        })}
      </StyledProjectsGrid>
    </StyledFeaturedSection>
  );
};

export default Featured;
