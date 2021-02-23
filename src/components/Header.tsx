import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { ReactComponent as OriginLogo } from '../asserts/logo.svg';

const HeaderRoot = styled.div`
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled(OriginLogo)`
    width: 184px;
    height: 32px;
`

const Menu = styled.ul`
    height: 100%;
    list-style: none;
    display: flex;
    align-items: stretch;
`
const MenuItem = styled(NavLink)`
    position: relative;
    display: grid;
    place-items: center;
    padding: 0 32px;
    font-size: 18px;
    text-decoration: none !important;
    color: #3d3d3d !important;
    transition: background .2s;

    &:hover {
        background: rgba(230, 0, 122, 0.2);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 2px;
        background: transparent;
        transition: background .2s;
    }

    &.active {
        background: rgba(230, 0, 122, 0.2);
    }

    &.active::after {
        background: var(--primary-color);
    }
`

const Header = styled(() => {
    return (
        <HeaderRoot>
            <Logo />
            <Menu>
                <MenuItem
                    activeClassName='active'
                    to='/polka-defi'
                >
                    Polka Defi
                </MenuItem>
                <MenuItem
                    activeClassName='active'
                    to='/working-group'
                >
                    Working Group
                </MenuItem>
            </Menu>
        </HeaderRoot>
    );
})``

export default Header