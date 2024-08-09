import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


interface LoginProps{
}

export const Login:React.FunctionComponent = (props:LoginProps) => {
    const [input, SetInput] = React.useState({
        username:'',
        password:'',
    });
    
    const handleSubmit = ():void => {
        console.log("Username:", input.username, "Password: ", input.password);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
        SetInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    }

    return <Wrapper>
        <LoginForm>
            <Row>
                <FieldName>Username</FieldName>
                <FieldInput type='text' name='username' onChange={handleChange} value={input.username}/>
            </Row>

            <Row>
                <FieldName>Password</FieldName>
                <FieldInput type='password' name='password' onChange={handleChange} value={input.password}/>
            </Row>

            <Row>
                <SubmitBtn value='Submit' onClick={handleSubmit}>Login</SubmitBtn>
            </Row>
            <Row>
                <Link to='/register'>Don't have an account? Register Here</Link>
            </Row>
        </LoginForm>
    </Wrapper>;
}

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Row = styled.div`
    flex-direction: row;
`;

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    align-items: center;
    justify-content: center;
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

