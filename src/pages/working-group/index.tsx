import React, { FC } from 'react';
import styled from 'styled-components';
import { BasicProps } from '../../types';
import Description from './Description';
import Header from './Header';
import List from './List';

const Content = styled.div`
  margin-top: 144px;
  display: flex;
`;

const WorkingGroup = styled<FC<BasicProps>>(({ className }) => (
  <div className={className}>
    <Header />
    <Content>
      <Description />
      <List />
    </Content>
  </div>
))`
  margin-top: 80px;
  font-family: 'Space Mono', monospace;
`;

export default WorkingGroup;
