import React from 'react'
import TimelineUI from '../timeline/TimelineUI'
import MyForm from '../timeline/Form'
import SelectDate from '../timeline/SelectDate'

const HomeTime = () => {
  return (
    <div style={{background: "#f0f0f0", padding: "1rem", display: "flex",flexDirection: "column", alignItems: "center"}}>
        <MyForm/>
       <SelectDate />
        <TimelineUI/>
    </div>
  )
}

export default HomeTime