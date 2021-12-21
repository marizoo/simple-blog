import React, {useState} from 'react'
import styled from 'styled-components';
import BlogList from './BlogList';

const Container = styled.div`

`;


const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
       
    ])

    const handleDelete = (id) => {
       const newBlogs = blogs.filter(blog => blog.id !== id);
       setBlogs(newBlogs);
        // setBlogs(blogs.filter(blog => blog.id !== id))
    }

    return (
        <Container>
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        </Container>
    )
}

export default Home
