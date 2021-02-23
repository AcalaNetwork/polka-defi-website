import React, { FC } from 'react'
import styled from 'styled-components';
import { BasicProps } from '../../types';
import projects from '../../data/projects';
import Card from './Card';

const Projects  = styled<FC<BasicProps>>(({ className }) => {
    return (
        <div className={className}> 
            {projects.map((item) => <Card {...item} />)}
        </div>
    );
})`
    margin-top: 80px;
`

export default Projects;