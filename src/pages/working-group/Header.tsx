import React, { FC } from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-weight: normal;
  font-size: 126px;
  line-height: 187px;

  text-align: center;
  letter-spacing: 0.03em;
  white-space: nowrap;
`;

const HeaderBottom = styled.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 32px;
  font-weight: normal;
`;

const HeaderRoot = styled.div`
  color: #000000;
`;

const SubTitle = styled.p``;

const Discussion = styled.p``;

const Link = styled.a`
  color: var(--primary-color);
`;

const Header: FC = () => (
  <HeaderRoot>
    <Title>POLKADEFI LIST</Title>
    <HeaderBottom>
      <SubTitle>A working group to map DeFi on PolkaDot</SubTitle>
      <Discussion>
        Discussion happening on
        {' '}
        <Link href="https://discord.gg/agzWA2DP8U" target="_blank">
          Discord
        </Link>
      </Discussion>
    </HeaderBottom>
  </HeaderRoot>
);

export default Header;
