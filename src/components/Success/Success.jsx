import { Check } from '@material-ui/icons';
import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';


const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100vh;
`
const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column
`
const ImageContainer=styled.div``
const Image = styled.img`
height: 100px;
padding-bottom: 30px;
}
`
const SuccessButtonContainer = styled.div``
const Button = styled.button`
    padding: 23px 100px;
    font-size: 18px;
    background: linear-gradient(45deg, #2196f3, #03a9f4);
    outline: none;
    border: none;
    color: #fafafa;
    border-radius: 42px;
    cursor: not-allowed;
    margin-bottom: 20px;
    

`
const DescriptionContainer= styled.div``
const Desc = styled.p`
font-size: 21px;
    color: #565656;
    font-weight: 300;
    display:flex;
    justify-content:center;
    align-items:center;
`
const SpanIcon= styled.span`
display: inline-block;
    font-size: 39px;
    margin-left: 8px;
    color: #0AA5F4;
`


const Success = () => {
    const location = useLocation()
    console.log(location);
    return (
        <Container>
            <Wrapper>
                  <ImageContainer>
                      <Image src='https://i.ibb.co/S5zDVS5/65057-emoticon-signal-smiley-thumb-emoji-free-frame.png'   />
                  </ImageContainer>
                  <SuccessButtonContainer 

                   >
                     
                      <Button>SUCCESS  </Button>
                      
                  </SuccessButtonContainer>
                <DescriptionContainer>
                    <Desc>Your order is being Prepared.
                         Thanks for choosing Dressified Shop 
                         
                         <SpanIcon>
                         <Check style={{fontSize:"40px"}}  />
                         </SpanIcon>
                          </Desc>
                </DescriptionContainer>
            </Wrapper>
        </Container>
    );
};

export default Success;