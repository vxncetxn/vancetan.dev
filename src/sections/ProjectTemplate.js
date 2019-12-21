import React from "react";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import InternalLink from "../InternalLink";

const ProjectTemplate = styled.div`
  padding: 100px 0;
`;

const StyledImg = styled(Img)`
  background-color: ${props => props.imgBackgroundColor};
`;

const ProjectNav = styled.div`
  padding: 0 15%;
  display: flex;
  justify-content: space-between;

  & span {
    font-family: var(--font-secondary);
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--color-text);

    @media (max-width: 550px) {
      font-size: 14px;
    }

    @media (max-width: 375px) {
      font-size: 12px;
    }
  }

  & path {
    stroke: var(--color-text);
  }

  @media (max-width: 833px) {
    padding: 0 20px;
  }
`;

const ProjectHero = styled.div`
  position: relative;
  margin-top: 20px;

  margin: 0 15%;

  @media (max-width: 833px) {
    margin: 0;
  }
`;

const ProjectTitle = styled.h1`
  position: absolute;
  left: 0;
  bottom: 20px;
  width: 90%;
  padding-left: 30px;
  font-family: var(--font-secondary);
  font-weight: 600;
  font-size: 4vw;
  color: var(--color-text);

  @media (max-width: 1220px) {
    font-size: 44px;
  }

  @media (max-width: 833px) {
    padding-left: 50px;
  }

  @media (max-width: 550px) {
    padding-left: 20px;
    bottom: 10px;
    font-size: 32px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

const ProjectContent = styled.div`
  display: flex;
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 1.5vw;
  color: var(--color-text);
  line-height: 1.6;
  margin-top: 50px;
  padding: 0 calc(15% + 30px);

  @media (max-width: 1220px) {
    font-size: 18px;
  }

  @media (max-width: 833px) {
    flex-direction: column;
    width: 90%;
    padding: 0 50px;
  }

  @media (max-width: 550px) {
    padding: 0 20px;
    font-size: 14px;
  }

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const ProjectDesc = styled.div`
  width: 50%;

  @media (max-width: 833px) {
    width: 100%;
  }
`;

const ProjectInfo = styled.div`
  width: 50%;
  padding: 20px 30px 0 30px;
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 30px;
  }

  @media (max-width: 833px) {
    width: 100%;
    margin-top: 30px;
    padding: 20px 0;
  }
`;

const ProjectInfoItem = styled.div`
  position: relative;

  &::before {
    content: "${props => props.before}";
    color: var(--color-layer-top);
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1vw;
    text-transform: none;
    position: absolute;
    top: -20px;

    @media (max-width: 1220px) {
      font-size: 16px;
    }
  
    @media (max-width: 550px) {
      font-size: 12px;
    }
  
    @media (max-width: 375px) {
      font-size: 10px;
    }
  }
`;

const ProjectTemplateComp = ({ project }) => {
  const projectImages = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "project-images" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `).allFile.edges;

  return (
    <ProjectTemplate>
      <ProjectNav>
        <InternalLink
          to={project.previous ? `projects/${project.previous}` : null}
          disabled={project.previous ? false : true}
        >
          ← Previous
        </InternalLink>
        <InternalLink
          to={project.next ? `projects/${project.next}` : null}
          disabled={project.next ? false : true}
        >
          Next →
        </InternalLink>
      </ProjectNav>
      <ProjectHero>
        <StyledImg
          fluid={projectImages[0].node.childImageSharp.fluid}
          alt="some pic"
          imgBackgroundColor="var(--color-layer-top)"
        />
        <ProjectTitle>{project.title}</ProjectTitle>
      </ProjectHero>
      <ProjectContent>
        <ProjectDesc>
          <MDXRenderer>{project.body}</MDXRenderer>
        </ProjectDesc>
        <ProjectInfo>
          <ProjectInfoItem before="Contributions">
            {project.contributions}
          </ProjectInfoItem>
          <ProjectInfoItem before="Tech Stack">{project.tech}</ProjectInfoItem>
          <ProjectInfoItem before="View Project">
            {project.source && (
              <a className="link" href={project.source}>
                Source
              </a>
            )}
            {project.demo && (
              <a
                className="link"
                href={project.demo}
                style={{ marginLeft: "20px" }}
              >
                Demo
              </a>
            )}
          </ProjectInfoItem>
        </ProjectInfo>
      </ProjectContent>
    </ProjectTemplate>
  );
};

export default ProjectTemplateComp;
