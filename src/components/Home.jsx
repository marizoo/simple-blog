import React, {useState} from 'react'
import styled from 'styled-components';
import BlogList from './BlogList';
import useFetch from '../useFetch';

const Container = styled.div`

`;


const Home = () => {

   const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    // const handleDelete = (id) => {
    //    const newBlogs = blogs.filter(blog => blog.id !== id);
    //    setBlogs(newBlogs);
    //     // setBlogs(blogs.filter(blog => blog.id !== id))
    // }

    return (
        <Container>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            
            {blogs && 
            <BlogList blogs={blogs} title="All Blogs"/>}
        </Container>
    )
}

export default Home
