import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyle } from "./reusableStyles";

const elliottdata = [
  { elliottdata: 4500 },
  {
    elliottdata: 5000,
  },
  {
    elliottdata: 4700,
  },
  {
    elliottdata: 4400,
  },
  {
    elliottdata: 4800,
  },
  {
    elliottdata: 5300,
  },
  {
    elliottdata: 5800,
  },
  {
    elliottdata: 6000,
  },
  {
    elliottdata: 6300,
  },
  {
    elliottdata: 6580,
  },
  {
    elliottdata: 6780,
  },
  {
    elliottdata: 6680,
  },
  {
    elliottdata: 6500,
  },
  {
    elliottdata: 6300,
  },
  {
    elliottdata: 5900,
  },
  {
    elliottdata: 5700,
  },
  {
    elliottdata: 5500,
  },
  {
    elliottdata: 5300,
  },
  {
    elliottdata: 5100,
  },
  {
    elliottdata: 5090,
  },
  {
    elliottdata: 5300,
  },
  {
    elliottdata: 5800,
  },
  {
    elliottdata: 6000,
  },
  {
    elliottdata: 6300,
  },
  {
    elliottdata: 6780,
  },
  {
    elliottdata: 6500,
  },
  {
    elliottdata: 6300,
  },
  {
    elliottdata: 6500,
  },
  {
    elliottdata: 6700,
  },
  {
    elliottdata: 7000,
  },
  {
    elliottdata: 7300,
  },
  {
    elliottdata: 7500,
  },
  {
    elliottdata: 7700,
  },
  {
    elliottdata: 8090,
  },
  {
    elliottdata: 8190,
  },
  {
    elliottdata: 7990,
  },

  {
    elliottdata: 7700,
  },
  {
    elliottdata: 7500,
  },
  {
    elliottdata: 7300,
  },
  {
    elliottdata: 7000,
  },
  {
    elliottdata: 6700,
  },
  {
    elliottdata: 6500,
  },
  {
    elliottdata: 6300,
  },
  {
    elliottdata: 6500,
  },
  {
    elliottdata: 6780,
  },
  {
    elliottdata: 6300,
  },
  {
    elliottdata: 6000,
  },
  {
    elliottdata: 5800,
  },

  {
    elliottdata: 5490,
  },
  {
    elliottdata: 6000,
  },
  {
    elliottdata: 8000,
  },
];

export default function Earnings() {
  return (
    <Section>
        <div className="top">
            <div className="info">
                <h4>This month earnings</h4>
                <h1>$16,820.5</h1>
                <div className="growth">
                    <span>++2.45%</span>
                </div>
            </div>
        </div>
        <div className="chart">
            <ResponsiveContainer height="100%" width="100%">
                <AreaChart width={500} height={400} data={elliottdata} margin={{top:0,left:0,right:0, bottom:0}}>

                <Tooltip cursor={false}/>
                <Area
                animationBegin={800}
                animationDuration={2000}
                type="monotone"
                dataKey="elliottdata"
                stroke="#ffc107"
                fill="#8068233e"
                strokeWidth={11}
                ></Area>

                </AreaChart>
            </ResponsiveContainer>
        </div>
    </Section>
  )
}

const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 20rem;
${cardStyle};
padding: 2rem 0 0 0;
.top {
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .3rem;
    h1 {
      font-size: 2rem;
    }
    .growth {
      background-color: #d7e41e1d;
      padding: .5rem;
      border-radius: 1rem;
      transition: .3s ease-in-out;
      &: hover {
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
.chart {
    height: 70%;
    .recharts-default-tooltip {
        background-color: black !important;
    }



    @media  (max-width: 500px) {
      .chart {
    
        .recharts-responsive-container {
          width: 10% important!;
        }

    }
}`
