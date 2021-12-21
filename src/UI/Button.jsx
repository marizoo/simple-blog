import React from 'react'
import styled from 'styled-components';
import {centerIt} from '../globalStyle'


const ContainerButton = styled.button`
padding: 5px;
margin: 10px 0;
color: white;
background-color: ${props => props.bg || 'crimson'};
${centerIt};
border: none;
font-weight: 600;
cursor: pointer;
`;


const Button = (props) => {
    return (
        <ContainerButton type={props.type || 'button'} bg={props.bg} onClick={props.onClick}>
            {props.children}
        </ContainerButton>
    )
}

export default Button
