import React, { useState } from 'react';
import styled from 'styled-components'
import { mobile } from '../responsive';
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../Redux/apiCalls';
const MainContainer = styled.div`
width:100vw;
height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;

`
const Wrapper = styled.div`
    width: 40%;
    padding: 25px;
    border-radius: 20px;
    ${mobile({width:'100%'})}

`
const Tittle = styled.h3`
    color: #fafafa;
    font-size: 22px;
    font-weight: 300;
    color: #fafafa;
    font-size: 22px;
    font-weight: 300;
    margin-bottom: 13px;
`
const Form = styled.form`
flex-wrap:wrap;
flex-direction:column
`

const Input = styled.input`

    min-width: 100%;
    margin: 20px 10px 0px 0px;
    padding: 19px 14px;
    background: none;
    outline: none;
    border-radius: 6px;
    border: 1px solid #DDD;
    color:#fafafa;
    ${mobile({minWidth: '88%'
    })}
}

`

const Button = styled.button`
    border-radius:5px;
    padding: 15px 50px;
    margin-bottom: 12px;
    background: none;
    border: 1.5px solid #DDD;
    color: #FFFF;
    font-weight: 500;
    cursor: pointer;
    transition:0.3s ease-in;
    margin-top:30px ;
    display:block;
    &:hover{
        background: #DDD;
        color:black
    }
 &:disabled{
     color:#DDDDDD;
     cursor:not-allowed;
 }
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
  color: #fafafa;
    margin-right: 6px;
    text-decoration: none;
    position: relative;
    top: 17px;
    &:hover{
        text-decoration: underline;
        color:#FD0155
    }
`;

const Error = styled.span`
color:red
`
const LogIn = () => {
    const[username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const {isFetching, error} = useSelector((state)=>state.user)
   

    const handleClick=(e)=>{
        e.preventDefault()
        login(dispatch,{username,password})
        
    }

    return (
        <MainContainer className='login'>
        <Wrapper>
            <Tittle>Sign In</Tittle>
             <Form>
                 <Input placeholder='username' onChange={(e)=>setUsername(e.target.value)}  />
                 <Input placeholder='password'  onChange={(e)=>setPassword(e.target.value)} type='password' />
                 <Button onClick={handleClick} disabled={isFetching}>CREATE</Button>
                 {error && <Error >Something went wrong ....</Error>}
                 <br />
                 <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                 <Link>CREATE A NEW ACCOUNT</Link>
             </Form>
        </Wrapper>
        </MainContainer>
    );
};

export default LogIn;