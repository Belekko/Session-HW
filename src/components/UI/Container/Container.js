import React from "react";
import styled from "styled-components";

const StyledContainer=styled.div`
margin:30px;

`

export const Container=({children})=>{
    return <StyledContainer>{children}</StyledContainer>
}