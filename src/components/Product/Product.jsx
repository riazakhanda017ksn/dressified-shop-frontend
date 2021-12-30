import React from 'react';
import styled from 'styled-components'
import  { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom';


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
 
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  transition: all 0.5s ease;
  &::before{content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background: #00000054;
  z-index:2;
  transition: all 0.5s ease;};
  &:hover::before{
    height:100%;
  };
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
height:200px;
width:200px;
border-radius:50%;
position: absolute;
background:#FFFF;
`;

const Image = styled.img`
height:244px !important;
z-index:2;

`;
const Icon = styled.div`
height:40px;
width:40px;
background:#fafafa;
display:flex;
justify-content:center;
align-items:center;
margin:10px;
border-radius:50%;
cursor:pointer;
transition: all 0.5s ease;
&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`

const Product = ({item}) => {
  console.log(item);
    return (
        <Container>
            <Circle>
                <Image src={item.img}/>
                <Info>
                    <Icon>
                        <ShoppingCartOutlined/>
                    </Icon>
                    <Link to={`/product/${item._id}`} style={{color:"black !important"}}>
                    <Icon>
                      <SearchOutlined/> 
                    </Icon> </Link>
                    <Icon>
                        <FavoriteBorderOutlined/>
                    </Icon>
                </Info>
            </Circle>
        </Container>
    );
};

export default Product;