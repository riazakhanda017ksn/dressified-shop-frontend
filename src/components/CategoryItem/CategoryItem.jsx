import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`
const Image = styled.img`
height:100%;
width:100%;
object-fit:cover;

`
const  Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const  Title = styled.h1`
    color: #FFFF;
    font-size: 30px;
    font-weight: 600;
`
const Button = styled.button`

    padding: 13px 34px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 6px;
    border: 2px solid transparent;
    cursor: pointer;
    color: #5e5e5e;

`

const CategoryItem = ({item}) => {
    return (
        <Container>
        <Link to={`/products/${item.cat}`}>
          <Image src={item.img} />
         <Info>
             <Title>{
                item.title
             }</Title>
             
             <Button>Shop Now</Button>
         </Info>
        </Link>
       
        </Container>
    );
};

export default CategoryItem;