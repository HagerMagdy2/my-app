import React from 'react'
import { useState } from 'react'

function Home() {
  const[name,setName]=useState("")
  const[address,setAddress]=useState("")
  const[job,setJob]=useState("")
  const[count,setCount]=useState(0)
  return (
  <React.Fragment>

<div>count is : {count} <button onClick={()=>{setCount(nextCount=>nextCount+1)}}>increase</button>
 <button onClick={()=>{setCount(prevCount=>prevCount-1)}}>decrese</button></div>

<div>my name is : {name} <button onClick={()=>{setName("Hager")}}>setName</button></div>
<div>my address is : {address} <button onClick={()=>{setAddress("Giza")}}>setAddress</button></div>
<div>my job is : {job} <button onClick={()=>{setJob("Web Developer")}}>setJob</button></div>

  </React.Fragment>
  )
}

export default Home