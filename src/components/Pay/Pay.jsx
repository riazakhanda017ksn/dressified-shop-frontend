/* eslint-disable no-unused-expressions */
// /* eslint-disable no-lone-blocks */
// /* eslint-disable no-unused-expressions */

// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import StripeCheckout from 'react-stripe-checkout';
// import { useHistory } from 'react-router-dom';
// import {axios} from 'axios'



// const Container = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// width: 100%;
// height: 100vh;

// `
// const PayButton = styled.button`
// padding: 29px 104px;
// font-size: 16px;
// font-weight: 600;
// background: none;
// border: 2px solid #fafafa;
// color: #fafafa;
// border-radius: 46px;
// cursor:pointer;
// transition:.3s ease-in-out;
// &:hover{
// background:#FFF;
// color:#6A1B37
// }
// `
// const KEY="pk_test_51Ie2ESEWPNeHpTcOcYGgiAyzLn1dWKuMJCypcmUUPkW012cElnHSOpLYEhBmHOQMiE1WGscgo5D7QIWBdM2XqZu500UJpVv7mL"

// const Pay = () => {

// const [stripeToken,setStripeToken]=useState(null)
// const history = useHistory()
// // 
// const onToken = (token) =>{
// setStripeToken(token)
// }


// useEffect(()=>{
// const makeRequest =()=>{
//     try {
        
            // const res=axios.post("http://localhost:5000/api/checkout/payment",{
            //    tokenId:stripeToken.id,
            //    amount:2000
            // });
//             console.log(res);
//                  history.push("/success")

//        }
        
//      catch (error) {
//         console.log(error);
//     }
// }
//     stripeToken && makeRequest
// },[stripeToken,history])






//     return (
//         <Container>
//         {
//             stripeToken ? (
//                 <span style={{color:"#FFF"}}>Processing please wait</span>
//             ):(
//                  <StripeCheckout
//             image='https://i.ibb.co/S5zDVS5/65057-emoticon-signal-smiley-thumb-emoji-free-frame.png'
//             name='Dressified'
//             billingAddress
//             shippingAddress
//             description='Your amount is $20'
//             amount ={2000}
//             stripeKey={KEY}
//             token={onToken}
//             >
//             <PayButton>
//                 Pay Now
//             </PayButton>
//             </StripeCheckout>
//             )
//         }

           
//         </Container>
//     );
// };

// export default Pay;



import React, { useEffect } from 'react';
import { useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const Key='pk_test_51K57xQGuahBEUBxxjZCH52qUA4shBJaAkW9YImOmWuEyIccZ4yGZnnofIgOGmodLZnRLbzwmZU4Zac4dSgJMLmka00jIn7QzZO'

const Pay = () => {

    const [stripeToken,setStripeToken]=useState(null)

    const onToken=(token)=>{
        setStripeToken(token);
        // console.log(token);
    }
    
    useEffect(()=>{
       const makeRequest = async ()  =>{
        try {
         const res= axios.post('http://localhost:5000/api/checkout/payments',{
            tokenId:stripeToken.id,
            amount:2000
        } 
        )
        console.log(res);

          } catch (error) {
              console.log(error);
          }

       }
       stripeToken && makeRequest
    },[stripeToken])
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh",}}>
            <StripeCheckout
            name='Dressified'
            image='https://i.ibb.co/S5zDVS5/65057-emoticon-signal-smiley-thumb-emoji-free-frame.png'
            billingAddress
            shippingAddress
            description='Your total amount is $20'
            amount={2000}
            token={onToken}
            stripeKey={Key}

            >
             <button>
                pay
            </button>
            </StripeCheckout>

        </div>
    );
};

export default Pay;