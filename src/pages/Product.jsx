import { Add, Remove } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import Annoucement from '../components/Annoucement/Annoucement';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import NewsLater from '../components/NewsLater/NewsLater';
import { addProduct } from '../Redux/cartRedux';
import { mobile } from '../responsive';
import { publicRequest } from './requestMethod';

const Container = styled.div``
const Wrapper = styled.div`
padding: 50px;
display:flex;
${mobile({padding:'10px', flexDirection:'column',})}

`
const ImageContainer = styled.div`
flex:1;
`
const Image= styled.img`
width:100%;
height:90vh;
object-fit:cover;
`
const InfoContainer=styled.div`
flex:1;
padding: 0 50px;
${mobile({padding:'0 10px' })}
`
const Title=styled.h1`
font-weight:300;
margin-top:0;
${mobile({marginTop:"20px"})}
`
const Description = styled.p`
font-size: 15px;
    color: #424141;
    font-weight: 500;
    line-height: 22px;
    margin-bottom: 20px;`
const Price = styled.span`
font-size:40px;
font-weight:300;
`

const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
width:50%;
margin:30px 0;
${mobile({width:'100%'})}
`
const Filter = styled.div`
display:flex;
align-items:center;
`
const FilterTitle = styled.span`   
font-size: 18px;
font-weight: 500;
color: #4e4e4e;`
const FilterColor = styled.div`
width:23px;
height:23px;
border-radius:50%;
background: ${props=>props.color};
margin:0px 6px;
cursor:pointer;
border:1px solid #DDD

`
const FilterSize = styled.select`
margin-left: 10px;
padding: 8px;
outline: none;
border: 1px solid #DDD;
border-radius: 16px;
cursor:pointer;
color:#767676
`
const FilterSizeOption = styled.option`
color:#767676
`

const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content: space-between;
${mobile({width:'100%'})}
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight:700;
`
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
display:flex;
justify-content:center;
align-items: center;
border:1px solid #DDD;
margin: 0 12px;
color:#767676
`
const Button = styled.button`
padding: 15px 26px;
    background: #FFF;
    border: 2px solid teal;
    color: teal;
    font-weight: 500;
    outline: none;
    transition: 0.3s ease-in-out;
    cursor:pointer;
    border-radius:3px;
    &:hover{
        background:teal;
        color:#FFFF
    }


`




const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product,setProduct]=useState({})
    const [quantity,setQuantity]=useState(1)
    const [color,setColor]=useState("")
    const [size,setSize]=useState("")
    const disPatch=useDispatch()

    useEffect(()=>{
     const getProduct = async () =>{
         try {
             const res = await publicRequest.get('/products/find/' + id)
             setProduct(res.data)
         } catch (error) {
             console.log(error);
         }
     }
     getProduct()
    },[id])
    
   const handleQuantity=(type)=>{
       if(type === 'dec'){
       quantity > 1 && setQuantity(quantity - 1)
       }else{
           setQuantity(quantity + 1)
       }
   }

   const handleClick=()=>{
    disPatch(
    addProduct({...product, quantity, color, size})
    )
   
   }

    return (
        <Container>
            <Navbar/>
            <Annoucement></Annoucement>
            <Wrapper>
            <ImageContainer>
             <Image src={product.img} />

            </ImageContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Description>{product.desc}</Description>
                <Price>$ {product.price}</Price>
                <FilterContainer>
                  <Filter>
                    <FilterTitle>
                        Color
                    </FilterTitle>
                    {
                        product?.color?.map(c=>(
                            <FilterColor color={c} key={c} onClick={()=>setColor(c)} style={{cursor:'pointer'}}/> 
                        ))
                    }
                   
                   
                  </Filter> 
                  <Filter>
                      <FilterTitle>Size</FilterTitle>
                      <FilterSize onChange={(e)=>setSize(e.target.value)} style={{cursor:"pointer"}}>
                          {
                              product?.size?.map(s=>(
                                    <FilterSizeOption key={s} style={{cursor:"pointer"}}>{s}</FilterSizeOption>
                              ))
                          }
                    
                      </FilterSize>
                  </Filter>
              </FilterContainer>
              <AddContainer>
                  <AmountContainer>
                      <Remove  onClick={()=>handleQuantity("dec")}  style={{cursor:"pointer"}}  /> 
                      <Amount> {quantity}</Amount>
                     
                      <Add  onClick={()=>handleQuantity("inc")} style={{cursor:"pointer"}}  />
                  </AmountContainer>
                  <Button onClick={handleClick}>ADD TO CART</Button>
              </AddContainer>
            </InfoContainer>
            </Wrapper>
            <NewsLater></NewsLater>
            <Footer></Footer>
        </Container>
    );
};

export default Product;