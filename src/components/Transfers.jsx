import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../assets/ea.jpeg";
import { cardStyle } from "./reusableStyles";


export default function Transfers() {
  const transactions = [
    {
      image: avatarImage,
      name: "From Elliott Arnold",
      time: "Today, 16:36",
      amount: "+$50",
    },
    {
      image: avatarImage,
      name: "To Lam Arnold",
      time: "Today, 08:49",
      amount: "-$25",
    },
    {
      image: avatarImage,
      name: "From Arn Lamar",
      time: "Yesterday, 14:36",
      amount: "+$150",
    }]

    return (
      <Section>
        <div className="title">
          <h2>Your Transfers</h2>
        </div>

        <div className="transactions">
           {transactions.map((tx,index) => {
            return (
            <div className="transaction">


              <div className="transaction__title">
                  <div className="transaction__title__image">
                     <img src={tx.image} alt="tx image" />
                  </div>

                  <div className="transaction__title__details">
                      <h3>{tx.name}</h3>
                      <h5>{tx.time}</h5>
                  </div>
                  </div>

             

          
               <div className="transaction__amount">

                <span>{tx.amount}</span>

               </div>

            </div>)
           })}
        </div>

        <a href="#" className="view" > 
           View All <HiArrowNarrowRight />
        </a>
      </Section>
    )


}



const Section = styled.section`
${cardStyle};
display: flex;
flex-direction: column;
gap: 1rem;
.title {



  h2 {

    color:  #ffc107;
        letter-spacing: .3rem;
        font-family: "Permanent Marker"
  }
}
.transactions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  
  .transaction {
  
    display: flex;
    align-items: center;

    &__title {

      display: flex;
      gap: 1rem;

      


      &__image {
        
        img {
          height: 2.5rem;
        border-radius: 3rem;
        }
      }

      &__details {
        font-size: 1rem;
        ${'' /* font-size: .9rem;
        f

        h3 {
          margin-bottom: .4rem;
        }
        */}
        }


     

    }

    &__amount {
      justify-content: flex-end;

      background-color: #d7e41e1d;
      padding: .2rem .5rem;
      width: 4rem;
      border-radius: 1rem;
      text-align: center;

      margin-left: 2.8rem;
      
      transition: .3s ease-in-out;
      &:hover {
        background-color: #ffc107;
        span {
          color: black;
        }
      }

      span {
        color: #ffc107;
      }

    }

     
    }

  
  }
  .view {
      width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #ffc107;
    font-weight: bold;
    margin-top: 1rem;

    svg {
      transition: .3s ease-in-out;
      font-size: 1.4rem;
    }

    &:hover {
      svg {
        transform: translateX(.5rem);
      }
    }
      
    }


    @media  (max-width: 500px) {

      .transactions {

        .transaction {

          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      }
   
    }
}`

