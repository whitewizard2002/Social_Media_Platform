import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
        SetInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = ():void => {
        console.log("Username:", input.username, "Password: ", input.password);
    }

    return <Wrapper>
        <RegisterForm>
            <Row>
                <FieldName>First Name</FieldName>
                <FieldInput type='text' name='firstname' onChange={handleChange} value={input.username}/>
            </Row>

            <Row>
                <FieldName>Last Name</FieldName>
                <FieldInput type='text' name='lastname' onChange={handleChange} value={input.username}/>
            </Row>

            <Row>
                <FieldName>Email Address</FieldName>
                <FieldInput type='email' name='email' onChange={handleChange} value={input.username}/>
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
