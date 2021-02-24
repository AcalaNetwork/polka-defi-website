import React, { FC } from 'react';
import styled from 'styled-components';

import workingGroup from '../../data/working-group';

const ListRoot = styled.table`
  margin-left: 32px;
  border: none;
  flex: 1;
  border-spacing: 0;
`;

const Raw = styled.tr``;

const Cell = styled.td`
  font-size: 16px;
  line-height: 32px;
  padding: 0 0 55px 0;
  border-bottom: 1px solid #000000;

  &:last-child {
    text-align: right;
  }
`;

const List: FC = () => (
  <ListRoot>
    {workingGroup.map(({
      name, type, website, repository,
    }) => (
      <Raw>
        <Cell>{name}</Cell>
        <Cell>{type}</Cell>
        <Cell>
          <a href={website} target="_blank" rel="noreferrer">
            {website}
          </a>
        </Cell>
        <Cell>
          <a href={repository} target="_blank" rel="noreferrer">
            Github
          </a>
        </Cell>
      </Raw>
    ))}
  </ListRoot>
);

export default List;
