import React, { FC } from 'react'
import styled from 'styled-components'
import { Project } from '../../types'

const CardRoot = styled.div`
    width: 100%;
    height: 128px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 0 32px;
    margin-bottom: 32px;
    display: grid;
    grid-template-columns: 144px repeat(4, 1fr);
    align-items: center;
`

const Logo = styled.img`
    width: 144px;
    height: 48px;
    object-fit: center;
`

const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Value = styled.p`
    font-size: 24px;
    line-height: 40px;
    font-weight: 600;
    color: #000000;
`

const Label = styled.p`
    font-size: 14px;
    line-height: 24px;
`

const Link = styled.a`
    position: relative;
    text-align: center;
    font-weight: 600;
    font-size: 24px;
    line-height: 48px;
    color: var(--link-color);
`

const Empty = styled.div``;

const Card: FC<Project> = ({
    logo,
    tvl,
    demo,
    dapp,
    category
}) => {
    return (
        <CardRoot>
            <Logo src={logo} />
            <CardItem>
                <Value>{tvl ? tvl : '-'}</Value>
                <Label>TVL</Label>
            </CardItem>
            {
                demo ? (
                    <Link
                        href={demo}
                        target='__blank'
                    >
                        Demo
                    </Link>
                ) : <Empty />
            }
            {
                dapp ? (
                    <Link
                        href={dapp}
                        target='__blank'
                    >
                        Dapp
                    </Link>
                ) : <Empty />
            }
            <CardItem>
                <Value>{category}</Value>
                <Label>Category</Label>
            </CardItem>
        </CardRoot>
    )
}

export default Card
