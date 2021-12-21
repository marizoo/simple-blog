import React from 'react'
import styled from 'styled-components';
import { mainColor } from '../globalStyle';
import Button from '../UI/Button'

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


const BlogList = ({title, blogs, handleDelete }) => {
    return (
        <Container>
            <Title>{title}</Title>
            {blogs.map( blog => (
                <BlogContainer key={blog.id}>
                    <BlogTitle>{blog.title}</BlogTitle>
                    <BlogDesc>Written by {blog.author}</BlogDesc>
                    <Button onClick={() => handleDelete(blog.id)}>delete</Button>
                </BlogContainer>
            ) )}
        </Container>
    )
}

export default BlogList
