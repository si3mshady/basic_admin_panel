
import React, {useState} from "react";
import styled from "styled-components";
import avatarImage from "../assets/ea.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyle } from "./reusableStyles";

export default function Profile() {

  return (
    <>
    <Section>

    <div className="image">

      <img src={avatarImage} alt="" />
    </div>

    <div className="title">
      <h2>Elliott Arnold</h2>
      <h5>
        <HiOutlineLocationMarker /> DFW, TEXAS 
      </h5>
    </div>

    <div className="info">

      <div className="container">
        <h5>Days at work</h5>
        <h3>88</h3>
      </div>


      <div className="container">
        <h5>Rides</h5>
        <h3>483</h3>
      </div>

      <div className="container">
        <h5>Hours</h5>
        <h3>5</h3>
      </div>



    </div>
    
    </Section>
    
    </>
  )
}

const Section = styled.section`
${cardStyle}
display: flex;
flex-direction: column;
align-items: center; 
gap: 1rem;

.image {
  max-height: 10rem;
  overflow: hidden;
  border-radius: 20rem;
  img {
    height: 10rem;
    width: 10rem;
    object-fit: contain;
    border-radius: 20rem;
    transition: .5s ease-in-out;
  
    
  }

  &:hover {
    img {
      transform: scale(1.3);
    }
   
  }
}

.title {
  text-align: center;
  h2,h5 {
    color:  #ffc107;
        letter-spacing: .3rem;
        font-family: "Permanent Marker"
  }
  h5 {
    letter-spacing: .3rem;
  }
}

.info {
  display: flex;
  gap: 1rem;
  text-align: center;
}
`

