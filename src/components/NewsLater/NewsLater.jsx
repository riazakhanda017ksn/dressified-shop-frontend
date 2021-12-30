import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container = styled.div`
height:70vh;
display:flex;
justify-content:center;
align-items:center;
background:#fcf5f5;
flex-direction:column;

`
const Title = styled.h1`    font-size: 70px;
margin: 0;
margin-bottom: 5px;`
const Desc= styled.p`margin-bottom: 38px;
font-size: 21px;
-webkit-letter-spacing: 3px;
-moz-letter-spacing: 3px;
-ms-letter-spacing: 3px;
letter-spacing: 3px;
line-height: 45px;
margin-right: 26px !important;
${mobile({textAlign:'center'})}
`
const InputContainer=styled.div`
display:flex;
justify-content:space-between;
border:1px solid lightgray;
width:50%;
height:46px;
background:#fffff;
${mobile({width:'80%'})}
`
const Input = styled.input`
border:none;
outline:none;
flex:8;
padding-left:10px;
font-size:14px
`
const Button= styled.button`
flex:1;
outline:none;
background:teal;
border:none;
color:#FFF;
cursor:pointer
`
const NewsLater = () => {
    return (
        <Container>
            <Title>
                NewsLetter
            </Title>
            <Desc>Get timely update for your favorite product </Desc>
            <InputContainer>
             <Input placeholder='Enter Your Email' type='email' required/>
             <Button>
                 <Send></Send>
             </Button>
            </InputContainer>
        </Container>
    );
};

export default NewsLater;