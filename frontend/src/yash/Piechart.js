import React from 'react'
import {PieChart,Pie,Tooltip,ResponsiveContainer} from "recharts";
const Piechart = () => {
    const data=[
        {
            name:"Fitness Score",value:8563
        },
        {
name:"Unfit",value:7564
        }
    ]
  return (
    <div>
        <h1>Health Chart</h1>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
    </div>
  )
}

export default Piechart