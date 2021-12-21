import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { centerIt, mainColor } from '../globalStyle';

const Container = styled.div`
height: 70px;
width: 100vw;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
top: 0;
left: 0;
border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

const Logo = styled.h1`
margin-left: 50px;
color: ${mainColor};
`

const UL = styled.ul`
margin-right: 50px;
list-style: none;
${centerIt};
`

const LI = styled.li`
margin-right: 35px;
`

const linkStyle = {
    color: 'inherit',
    textDecoration: 'none'
}



const Navbar = () => {
    return (
        <Container>
            <Logo>Zoo Blog</Logo>
            <UL>
                <LI><Link style={linkStyle} to="/">Home</Link></LI>
                <LI><Link style={linkStyle} to="/create">New Blog</Link></LI>
            </UL>
        </Container>
    )
}

export default Navbar
