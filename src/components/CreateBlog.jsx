import React, {useState} from 'react'
import styled from 'styled-components';
import Button from '../UI/Button';

const Container = styled.div``;
const Form = styled.form``;
const Label = styled.label``;
const Input = styled.input``;
const Textarea = styled.textarea``;
const Select = styled.select``;
const Option = styled.option``;


const CreateBlog = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("brandi")

    const submitHandle = (ev) => {
        ev.preventDefault()

        const newBlog = {title, body, author};

        console.log(newBlog);


        setTitle("")
        setBody("")
    }

    return (
        <Container>
            <h2>Add a new Blog</h2>
            <Form onSubmit={submitHandle}>
                <Label>Blog Title:</Label>
                <Input
                type="text"
                required
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
                />
                <Label>Blog body:</Label>
                <Textarea
                required
                value={body}
                onChange={(ev) => setBody(ev.target.value)}
                ></Textarea>
                <Label>Blog Author:</Label>
                <Select
                value={author}
                setAuthor={(ev) => setAuthor(ev.target.value)}
                >
                    <Option value="brandi">Brandi</Option>
                    <Option value="sheryl">Sheryl</Option>
                </Select>
                <Button type="submit">Add Blog</Button>
               
            </Form>
        </Container>
    )
}

export default CreateBlog
