import React, { useState } from "react";

import styled from "styled-components";
import Button from "../UI/Button/Button";
import { Container } from "../UI/Container/Container";
import { Input } from "../UI/Input/Input";

const StyledForm = styled.form`
    width: 500px;
    background-color: pink;
    height: 500px;
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 10px;
    box-shadow: 0 0 10 rgba(0, 0, 0.5);
`;

const FormContainer = styled.div`
    padding-top: 60px;
`;

export const Forms = () => {
    const localData = JSON.parse(localStorage.getItem("data"))
    const [usersData, setUsersData] = useState(localData ? localData : []);
    const [userData, setUserData] = useState({
        name: "",
        number: "",
        hobbi: "",
    });

    const onChangeHandler = (e) => {
        const inputName = e.target.name;
        if (inputName === "name") {
            setUserData({ ...userData, name: e.target.value });
        } else if (inputName === "number") {
            setUserData({ ...userData, number: e.target.value });
        } else if (inputName === "hobbi") {
            setUserData({ ...userData, hobbi: e.target.value });
        }
    };
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setUsersData((prevData) => {
            return [...prevData, userData];
        });
        localStorage.setItem("data", JSON.stringify([...usersData, userData]));
    };

    const onGetHandler = (e) => {
        e.preventDefault();
        console.log(JSON.parse(localStorage.getItem("data")));
    };

    return (
        <StyledForm>
            <FormContainer>
                <h1>User Story</h1>
                <Container>
                    <Input type="text" name="name" onChange={onChangeHandler} />
                </Container>
                <Container>
                    <Input
                        type="number"
                        name="number"
                        onChange={onChangeHandler}
                    />
                </Container>
                <Container>
                    <Input
                        type="text"
                        name="hobbi"
                        onChange={onChangeHandler}
                    />
                </Container>
                <Button
                    title="Submit"
                    primary={true}
                    onClick={onSubmitHandler}
                />
            </FormContainer>
            <Button title="get" onClick={onGetHandler} />
        </StyledForm>
    );
};
