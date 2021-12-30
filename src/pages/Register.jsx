import React from 'react';
import styled from 'styled-components';
import bgImg from '../img/1.jpg'
import { mobile } from '../responsive';



const Container = styled.div`
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
    ${mobile({width:'100%', padding:'5px'})}

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
-webkit-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-width: 42%;
    margin: 20px 10px 0px 0px;
    padding: 19px 14px;
    background: none;
    outline: none;
    border-radius: 6px;
    border: 1px solid #DDD;
    color:#fafafa;
    ${mobile({width:"90%"})}
}

`
const Agreement = styled.p`    
font-size: 14px;
color: #fffc;
line-height: 26px;`
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
    &:hover{
        background: #DDD;
        color:black
    }
`

const Register = () => {
    return (
        <Container className='register'>
        <Wrapper>
            <Tittle>Create An Account</Tittle>
             <Form>
                 <Input placeholder='name' />
                 <Input placeholder='last name' />
                 <Input placeholder='username' />
                 <Input placeholder='email' />
                 <Input placeholder='password' />
                 <Input placeholder='confirm password' />
                 <Agreement>
                 By creating an account, I consent to the processing of my personal
                 data in accordance with the <b>PRIVACY POLICY</b>
                 </Agreement>
                 <Button>CREATE</Button>
             </Form>
        </Wrapper>
            
        </Container>
    );
};

export default Register;