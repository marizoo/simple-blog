import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mainColor } from '../globalStyle';

const Container = styled.div``;

const Title = styled.h1`
color: ${mainColor};
margin-bottom: 20px;
`;

const BlogContainer = styled.div`
margin-bottom: 30px;

`
const BlogTitle = styled.h2`
color: ${mainColor};
`
const BlogDesc = styled.p`
`

const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
}


const BlogList = ({title, blogs, handleDelete }) => {
    return (
        <Container>
            <Title>{title}</Title>
            {blogs.map( blog => (
                <BlogContainer key={blog.id}>
                    <Link style={linkStyle} to={`/blogs/${blog.id}`}>
                        <BlogTitle>{blog.title}</BlogTitle>
                        <BlogDesc>Written by {blog.author}</BlogDesc>
                    </Link>
                </BlogContainer>
            ) )}
        </Container>
    )
}

export default BlogList
