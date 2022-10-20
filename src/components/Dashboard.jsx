import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Analytics from './Analytics'
import FAQ from './FAQ'
import Earnings from './Earnings'
import Profile from './Profile'
import Transfers from './Transfers'

export default function Dashboard() {
  return (
    <Section>
    <Navbar />


    <div className='grid'>
        <div className='row_one'>
            <Analytics />
            <FAQ />
          
        </div>

        <div className='row_two'>

        <Earnings />
        <Profile />
        <Transfers />

        </div>


    </div>
    </Section>
  )
}


const Section = styled.section`
margin-left: 18vw;
padding: 2rem;
height: 100%;
.grid {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  margin-top: 2rem;
  .row_one {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 50%;
    gap: 1rem;
    background-color: red;
  }
  .row_two {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 50%;
    gap: 1rem;
    background-color: red;
  }
}`
