
import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { cardStyle } from "./reusableStyles";
export default function FAQ() {
  const faqs = [
    {
      icon: <AiFillCalendar />,
      text: "How to manage time and get good marks for trips",
    },
    {
      icon: <MdTimelapse />,
      text: "How to regulate transactions over time",
    },
    {
      icon: <IoMdCash />,
      text: "Withdrawing money through an ATM",
    }
  ]


  return <Section>
    <div className="title">
        <h2>Frequently asked questions</h2>
    </div>
    <div className="faqs">
        {faqs.map((faq,index) => {return (

            <div key={index} className="faq">
                    <div className="info">
                        {faq.icon}
                        <h4>{faq.text}</h4>
                    </div>

                <IoIosArrowForward />
            </div>
        )})}
    </div>
  </Section>



}


const Section = styled.section`
${cardStyle}
.title {
    h2 {
        color:  #ffc107;
        letter-spacing: .3rem;
        font-family: "Permanent Marker"
    }

   
} .faqs {
        display: flex; 
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
        .faq {
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor:  pointer;

            .info {
                display: flex;
                align-items: center;
                gap: 1rem;

            }
            svg {
                font-size: 1.9rem;
            }
            &:nth-of-type(2) {
                border-top: .01rem solid #6c6e6e;
                border-bottom: .01rem solid #6c6e6e;
                padding: 0.8rem 0;
            }
        }
    }`