import React from 'react';
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core';
import { mobile } from '../../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const Container=styled.div`
       height:60px;
      ${mobile({height:'50px'})}
    `
    const Wrapper=styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({padding:'10px 0px'})}

    `

    const Left=styled.div`
    flex:1;
    display:flex;
    align-items:center

    `
    const Language=styled.div`
    font-size:14px;
    cursor:pointer;
    ${mobile({display:'none'})}

    `
    const Center=styled.div`
    flex:1
    `
    const Right=styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent:'center'})}
    `
    const SearchContainer = styled.div`
    border:1px solid lightgray;
    cursor:pointer;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px
    `
    const Input = styled.input`
    border:none;
    outline:none;
    ${mobile({width:'50px'})}

    `
    const Logo = styled.h1`
    font-weight:700;
    text-align:center;
    margin:0;
    font-family: 'Dancing Script', cursive;
    ${mobile({fontSize:'20px'})}

    `
    const MenuItem= styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({fontSize:'10px',marginLeft:'14px'})}
    `

    ///
    const quantity =useSelector(state=>state.cart.quantity)
    
    return (
        <Container>
          <Wrapper>
              <Left>
               <Language>EN</Language>
               <SearchContainer>
                   <Input placeholder='Search'/>

                <Search style={{color:'gray', fontSize:'18px'}}/>
               </SearchContainer>
              </Left>
              <Center>
                  <Logo>Dressified</Logo>
              </Center>
              <Right>
                  <MenuItem>
                  REGISTER
                  </MenuItem>
                  <MenuItem>
                  SIGN IN
                  </MenuItem>
                  <Link to='/cart'>
                  <MenuItem>
                  <Badge badgeContent={quantity} color="secondary">
                   <ShoppingCartOutlined/>
                  </Badge>
                  </MenuItem>
                  </Link>
                  
              </Right>
          </Wrapper>
        </Container>
    );
};

export default Navbar;