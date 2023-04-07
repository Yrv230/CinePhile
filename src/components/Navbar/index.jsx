import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { Container } from '../Container'
import logo from '../../assets/images/logo.svg'
import { navLinks } from '../../routes'
import search from '../../assets/images/search.svg'

const Nav = styled.nav`
    background: rgba(20, 20, 20, 0.5);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavList = styled.ul`
    display: flex;
    column-gap: 30px;
`

const NavLinks = styled(NavLink)`
    font-size: 18px;
    line-height: 21px;
    color: rgba(255, 255, 255, 0.6);
    font-family: 'RalBold';
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 0;
    position: relative;
    ::after {
        content: '';
        display: none;
        background: #149A03;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        position: absolute;
        bottom: 10px;
    }
    &.active::after {
        display: block;
    }
    &.active {
        color: #FFFFFF;
    }
`


const NavBar = () => {
    return (
        <Nav>
            <Container>
                <NavWrapper>
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                    <NavList>
                        {
                            navLinks.map((item) => (
                                <li key={item.url}>
                                    <NavLinks to={item.url}>
                                        {item.title}
                                    </NavLinks>
                                </li>
                            ))
                        }
                        <NavLinks to={'/search'}>
                            <img src={search} alt="" />
                        </NavLinks>
                    </NavList>
                </NavWrapper>
            </Container>
        </Nav>
    )
}

export default NavBar