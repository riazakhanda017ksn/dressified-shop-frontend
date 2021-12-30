import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import Annoucement from '../components/Annoucement/Annoucement'
import Footer from '../components/Footer/Footer'
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from './requestMethod';
import { useHistory } from 'react-router';

const KEY = process.env.REACT_APP_STRIPE
console.log('key',KEY);

const Container = styled.div`

`

const Wrapper = styled.div`
padding:20px;
${mobile({padding:'10px'})}
`

const Tittle = styled.h1`
font-weight:300;
text-align:center;
`

const Top = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:20px;
`

const TopButton = styled.button`
   padding: 19px 25px;
  font-weight: 300;
  cursor: pointer;
border: ${props=>props.type === 'filled' && 'none'};
background: ${props=>props.type === 'filled' ? "black" : 'transparent'};
color: ${props=>props.type === 'filled' && 'white'}
`



const TopTexts=styled.div`
${mobile({display:'none'})}
`
const TopText = styled.span`
text-decoration:underline;
margin:0 15px 0;
cursor:pointer
`
const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:'column',})}
`
const Info = styled.div`
flex:3;
`

const Product = styled.div`
${mobile({flexDirection:'column',margin:'10px 0'})};
display:flex;
justify-content:space-between;

`
const ProductDetails = styled.div`
flex:2;
display:flex;
`
const Image = styled.img`
width:200px;
`
const Details = styled.div`
display:flex;
justify-content:space-around;
flex-direction:column;
padding:20px
`
const ProductName= styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background: ${props => props.color }
`
const ProductSize = styled.span``
const PriceDetails = styled.div`
flex:1;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
cursor:pointer

`
const ProductAmount= styled.div`
font-size:24px;
margin:5px;
${mobile({margin:"5px 15px"})}
`
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
margin-top:15px;
${mobile({marginBottom:"20px"})}
`
const Hr= styled.hr`
border:none;
background:#DDD;
height:1px

`
const Summary= styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:55vh;
`
const SummeryTittle= styled.h1`
font-weight:200;
`
const SummeryItem = styled.div`
margin:30px 0;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === 'total' && '500'};
font-size:${props=>props.type === 'total' && '25px'}
`
const SummeryItemText=styled.span``
const SummeryItemPrice = styled.span``
const Button =styled.button`
    padding: 13px;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    border: 2px solid #646464;
    color: #ffffff;
    background: #646464;
    border-radius: 5px;
    cursor:pointer

`
const DivisionMaintainContainer= styled.div`
padding:50px 0;
background:#fafafa
`


const Cart = () => {
  const cart = useSelector(state=>state.cart)
  const [stripeToken,setToken]=useState(null)
  const history = useHistory()
  const onToken=(token)=>{
      setToken(token)
     
  }
  useEffect(()=>{
  const makeRequest = async()=>{
      try {
          const res = await userRequest.post('/checkout/payment',{
            tokenId: stripeToken.id,
              amount: 500
              
          })
          history.push('/success', {data:res.data})
      } catch (error) {
          console.log('error',error);
      }
  }
    stripeToken &&  makeRequest()
  },[stripeToken,cart.total,history])
    return (
        <Container>
            <Navbar/>
            <Annoucement/>
        <DivisionMaintainContainer>
            <Wrapper>
                    <Tittle>
                        YOUR BAG
                    </Tittle>
                    <Top>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag (2) </TopText>
                            <TopText>Your Wishlist (2) </TopText>
                        </TopTexts>
                        <TopButton type='filled'>CHECKOUT NOW</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                           { cart.products.map(product=>(
                               <Product>
                                <ProductDetails>
                                    <Image src={product.img}/>
                                    <Details>
                                        <ProductName>  <b>Product:</b>  {product.title}</ProductName>
                                        <ProductId>  <b>ProductId:</b>  {product._id}</ProductId>
                                        <ProductColor color={product.color}/>
                                        <ProductSize> <b>Size :</b>   {product.size}</ProductSize>
                                    </Details>
                                </ProductDetails>
                                <PriceDetails>
                                    <ProductAmountContainer>
                                        <Add/>
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Remove/>
                                    </ProductAmountContainer>
                                    <ProductPrice> $ {product.price * product.quantity}</ProductPrice>
                                </PriceDetails>
                            </Product>
                           ))
                            }
                            <Hr/>
                        </Info>
                        <Summary>
                        <SummeryTittle>ORDER SUMMERY</SummeryTittle>
                        <SummeryItem>
                        <SummeryItemText>Subtotal : </SummeryItemText>
                        <SummeryItemPrice>$ {cart.total}</SummeryItemPrice>
                        </SummeryItem>
                        <SummeryItem>
                        <SummeryItemText>Estimate Shipping : </SummeryItemText>
                        <SummeryItemPrice>$ 10.12</SummeryItemPrice>
                        </SummeryItem>
                        <SummeryItem>
                        <SummeryItemText>Shipping Discount : </SummeryItemText>
                        <SummeryItemPrice>$ -5.12</SummeryItemPrice>
                        </SummeryItem>
                        <SummeryItem type='total'>
                        <SummeryItemText>Total</SummeryItemText>
                        <SummeryItemPrice>$ {cart.total}</SummeryItemPrice>
                        </SummeryItem>
                        <StripeCheckout
                        name='dressified'
                        image='https://i.ibb.co/S5zDVS5/65057-emoticon-signal-smiley-thumb-emoji-free-frame.png'
                        billingAddress
                        shippingAddress
                        description={`your total is $${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey={KEY}
                        >
                        <Button>Checkout Now</Button>
                        </StripeCheckout >
                        
                        </Summary>
                    </Bottom>
                </Wrapper>
                </DivisionMaintainContainer>
            <Footer/>
        </Container>
    );
};

export default Cart;