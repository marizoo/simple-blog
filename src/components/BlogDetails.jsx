import React from 'react'
import styled from 'styled-components';
import {useParams, useNavigate} from 'react-router-dom'
import useFetch from '../useFetch';
import Button from '../UI/Button';

const Container = styled.div``

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate()

    const handleDelete = (ev) => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
           method: 'DELETE' 
        }) .then( () => {
            navigate('/')
        })
    }


    return (
        <Container>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <Button onClick={handleDelete}>delete</Button>
                </article>
            )}
        </Container>
    )
}

export default BlogDetails
