import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { columnIt } from '../globalStyle';
import Button from '../UI/Button';

const Container = styled.div`
width: 80%;
`;
const Form = styled.form`
${columnIt};
`;
const Label = styled.label``;
const Input = styled.input``;
const Textarea = styled.textarea``;
const Select = styled.select``;
const Option = styled.option``;


const CreateBlog = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("brandi")
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();

    const submitHandle = (ev) => {
        ev.preventDefault()

        const newBlog = {title, body, author};

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newBlog)
        }) .then( () => {
            setIsPending(false);
            navigate('/');
        })

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
                onChange={(ev) => setAuthor(ev.target.value)}
                >
                    <Option value="brandi">Brandi</Option>
                    <Option value="sheryl">Sheryl</Option>
                </Select>
                {!isPending && <Button type="submit">Add Blog</Button>}
                {isPending && <Button disabled>Adding blog...</Button>}
            </Form>
        </Container>
    )
}

export default CreateBlog
