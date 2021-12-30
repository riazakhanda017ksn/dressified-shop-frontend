import React from 'react';
import styled from 'styled-components'
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import { mobile } from '../../responsive';

const Container = styled.div`
display:flex;
${mobile({flexDirection:'column'})}
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Center = styled.div`
flex:1;
padding:20px;
${mobile({display:'none'})}
`
const Right = styled.div`
flex:1;
padding:20px;

`
const Logo = styled.h1` margin:0; font-family: 'Dancing Script',cursive;`
const Description = styled.p`
margin:20px 0;
font-size: 15px;
line-height: 26px;
font-weight: 500;
padding-bottom:10px;
color: #484848;

`

const SocialContainer= styled.div`
display:flex;

`
const SocialIcon = styled.div`
background: #${props=>props.color};
width:40px;
height:40px;
display:flex;
color:#FFF;
align-items:center;
justify-content:center;
border-radius:50%;
margin-right:10px;

`
const Link = styled.a`
text-decoration:none;
cursor:pointer
`

const Title= styled.h3`
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 32px;
    margin-top: 0;
`

const List =styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}`

const ListItem= styled.li`    
width: 50%;
margin-bottom: 18px;
font-weight: 500;
font-size: 15px;
`
const ContactItem =styled.div`
margin-bottom:23px;
display:flex;
align-items:center;
font-size: 15px;
 font-weight: 500;
`
const Payment = styled.img`
width:50%;
`


const Footer = () => {
    return (
        <Container>
          
            <Left>
                <Logo>Dressified</Logo>
                <Description>There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</Description>
                <SocialContainer><Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <SocialIcon color="3B5999">
                    
                    <Facebook></Facebook>
                    
                    </SocialIcon></Link>
                    <Link href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                    <SocialIcon color="E4405F">
                    <Twitter></Twitter>
                    </SocialIcon>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <SocialIcon color="55ACEE">
                    <Instagram></Instagram>
                    </SocialIcon>
                    </Link>
                    <Link href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                    <SocialIcon color="E60023">
                    <Pinterest></Pinterest>
                    </SocialIcon>
                    </Link>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Link</Title>
                <List>
                   
        <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
                 
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"15px"}}/>622 Dhaka Path , South Mirpur 14</ContactItem>
                <ContactItem><Phone style={{marginRight:"15px"}}/>+1 234 56 78</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"15px"}}/>riaz@aks.dev</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;