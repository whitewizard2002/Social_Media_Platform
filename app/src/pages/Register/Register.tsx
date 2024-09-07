import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

interface RegisterProps{
}

export const Register:React.FunctionComponent = (props:RegisterProps) => {
    const [input, SetInput] = React.useState({
        firstname:'',
        lastname:'',
        email:'',
        username:'',
        password:'',
    });
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
        SetInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = async () => {
        console.log("First Name: ",input.firstname, "Last Name:", input.lastname, "Email:", input.email, "Username:",input.username, "Password:", input.password);
        try{
            const response = await axios.post('http://localhost:5000/api/register', {
                    firstname: input.firstname,
                    lastname: input.lastname,
                    email: input.email,
                    username: input.username,
                    password: input.password,
            });
            console.log(response);
            navigate('/');
        }catch(error){
            console.log("Error: ",error);
        }

    }

    return <Wrapper>
        <RegisterForm>
            <Row>
                <FieldName>First Name</FieldName>
                <FieldInput type='text' name='firstname' onChange={handleChange} value={input.firstname}/>
            </Row>

            <Row>
                <FieldName>Last Name</FieldName>
                <FieldInput type='text' name='lastname' onChange={handleChange} value={input.lastname}/>
            </Row>

            <Row>
                <FieldName>Email Address</FieldName>
                <FieldInput type='email' name='email' onChange={handleChange} value={input.email}/>
            </Row>

            <Row>
                <FieldName>Username</FieldName>
                <FieldInput type='text' name='username' onChange={handleChange} value={input.username}/>
            </Row>

            <Row>
                <FieldName>Password</FieldName>
                <FieldInput type='password' name='password' onChange={handleChange} value={input.password}/>
            </Row>

            <Row>
                <SubmitBtn value='Submit' onClick={handleSubmit}>Register</SubmitBtn>
            </Row>

            <Row>
                <Link to='http://localhost:3000/'>Already have an account? Sign up Here</Link>
            </Row>

        </RegisterForm>
    </Wrapper>;
}

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const RegisterForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    align-items: center;
    justify-content: center;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const FieldName = styled.label`
    font-weight: bold;
    margin-bottom: 5px;
`;

const FieldInput = styled.input`
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const SubmitBtn = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
`;
