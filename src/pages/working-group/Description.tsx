import React, { FC } from 'react';
import styled from 'styled-components';

const DescriptionRoot = styled.div`
  position: sticky;
  top: 0;
  width: 352px;
  height: 264px;
  background: #000000;
  padding: 24px 24px 24px 96px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #ffffff;
  word-break: break-all;
`;

const Content = styled.div`
  margin-top: 32px;
`;

const Description: FC = () => (
  <DescriptionRoot>
    <Text>How to get on the list:</Text>
    <Content>
      <Text>1) Build a chain or Dapp in Polkadot ecosystem</Text>
      <Text>2) Be about finance </Text>
      <Text>3) Have code</Text>
      <Text>4) Submit a PR Here</Text>
    </Content>
  </DescriptionRoot>
);

export default Description;
