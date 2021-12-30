import { ArrowLeftOutlined, ArrowRightOutlined, Translate } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../../Data';

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;

`
const Arrow = styled.div`
width:50px;
height:50px;
border-radius:50%;
background:#DDDD;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
top:0;
bottom:0;
margin: auto;
left:${props => props.direction  ==='left' && '10px'};
right:${props => props.direction ==='right' && '10px'};
cursor:pointer;
z-index:2;
`
const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color: #${props=>props.bg}
`
const ImageContainer= styled.div`
height:100%;
flex:1;
text-align:center;
`
const Image = styled.img`
height:80%;
`
const InfoContainer = styled.div`
padding:50px;
flex:1;
`

const Wrapper = styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform: translateX(${props=>props.slideIndex * -100}vw);
`

const Title= styled.h1`
    font-size: 70px;

`
const Description = styled.p`
margin: 39px 0;
font-size: 21px;
letter-spacing: 3px;
line-height: 45px;
margin-right: 26px !important
`

const Button = styled.button`
padding: 17px 49px;
background: none;
border: 2px solid #424542;
font-weight: 500;
color: #424542;
cursor: pointer;
margin-top: 17px
}
`
const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0)
    const handleClick=(direction)=>{
       if(direction==='left'){
        setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
       }else{
           setSlideIndex(slideIndex < 2 ? slideIndex + 1 :0)
       }
    }
    return (
        <Container>
            <Arrow direction='left' onClick={()=>handleClick('left')}>
                <ArrowLeftOutlined></ArrowLeftOutlined>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {
                    sliderItems.map((item)=>(
                        <Slide bg={item.bg}>
          <ImageContainer>
              <Image src={item.img} />
          </ImageContainer>
          <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOP NOW</Button>
          </InfoContainer>
          </Slide>
                    ))
                }
                
            
            </Wrapper>
            <Arrow direction='right' onClick={()=>handleClick('right')}>
                <ArrowRightOutlined></ArrowRightOutlined>
            </Arrow>
        </Container>
    );
};

export default Slider;