import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    width: 300px;
    border-radius:10px;
    height: 30px;
    border-color: #fff;
    font-size:18px;
    paddin-left:20px;
    color:yellow;
    &:focus{
        outline:none;
    }
`;

export const Input = ({ name, type, placeholder, onChange, value }) => {
    
    return (
        <div>
            <StyledInput
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};
