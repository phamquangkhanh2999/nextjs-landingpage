import React, { useLayoutEffect, useState } from 'react';
import {
  Container,
  TitleStyled,
  TitleWrapper,
} from '../../styles/Common.style';
import { projectList } from '../../utils/data';
import CardProjectComponent from '../CardProjectComponents/CardProjectComponent';
import { ProjectContent, ProjectWrapper } from './ProjectComponentStyled';

const ProjectComponents = () => {
  const [width, setWidth]   = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useLayoutEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  return (
    <ProjectWrapper id='projects'>
      <TitleWrapper>
        <TitleStyled>Dự án</TitleStyled>
      </TitleWrapper>
      <Container>
        <ProjectContent>
          {projectList.map((item, index) => (
            <CardProjectComponent key={index} item={item} width={width}/>
          ))}
        </ProjectContent>
      </Container>
    </ProjectWrapper>
  );
};

export default ProjectComponents;
