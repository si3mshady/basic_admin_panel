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


const Section = styled.section``
