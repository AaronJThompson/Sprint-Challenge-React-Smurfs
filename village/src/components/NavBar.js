import React from 'react';
import { NavLink } from 'react-router-dom';
import Colors from './colors';
import styled from 'styled-components';

const StyledNav = styled.nav`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    display:flex;
    justify-content:space-evenly;
    background-color: ${Colors.primary};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-sizing: border-box;
`;

const StyledLink = styled(NavLink)`
    width: 8rem;
    height: 2rem;
    display:flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.white};
    text-decoration: none;
    box-sizing: content-box;
    padding: 0 1rem;

    &.active{
        border-color: ${Colors.light};
        border-bottom-width: 0.2rem;
        border-bottom-style:solid;
    }
`;

export default function NavBar(props) {
    let { links } = props;

    return (
        <StyledNav>
            {
                links.map(link => {
                    return <StyledLink exact={link.exact} to={link.path}>{link.label}</StyledLink>
                })
            }
        </StyledNav>
    )
}