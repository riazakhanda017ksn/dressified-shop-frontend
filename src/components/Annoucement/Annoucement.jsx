import React from 'react';
import styled from 'styled-components';
const Container=styled.div`
height: 38px;
display: flex;
justify-content: center;
align-items: center;
background: #FF4F5A;
font-size: 14px;
font-weight: 500;
color: #FFFF;

    `
const Annoucement = () => {
    
    return (
        <Container>
            Super deal ! Free shipping on orders overs $50
        </Container>
    );
};

export default Annoucement;