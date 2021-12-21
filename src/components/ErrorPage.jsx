import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { columnIt } from '../globalStyle';

const Container = styled.div`
${columnIt};
justify-content: center;
`;

const linkStyle = {
    
    color: 'inherit',
}

const ErrorPage = () => {
    return (
        <Container>
            <h2>Ooops sorry...</h2>
            <p>Page not found</p>
            <Link style={linkStyle} to='/'>Back to Home page</Link>
        </Container>
    )
}

export default ErrorPage
