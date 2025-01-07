import React from "react";
import { useState } from "react";

function Home() {
  const [name, setName] = useState(""); // string
  const [address, setAddress] = useState(""); //string
  const [job, setJob] = useState(""); //string
  const [count, setCount] = useState(0); //number
  const [logic, setLogic] = useState(false); //bool
  const [data, setData] = useState({ myName: "", MyAddress: "", MyJob: "" }); //Object
  const[info,setInfo] = useState([{id:1,Name:"Hager"},{id:2,Name:"Magdy"}])//Array

function AddItem(){
  setInfo([...info,{id:info.length+1,Name:"Test"}])
 
}


  console.log(logic);
  return (
    <React.Fragment>

<div>
{info.map(item=>{
  return <div key={item.id}>{item.Name}</div>
 
})}
<button onClick={AddItem}>Add</button>
</div>


      <div>
        <input type="text" placeholder="name"value={data.myName} onChange={(e)=>setData({...data,myName:e.target.value})} />
        <input type="text" placeholder="address"value={data.MyAddress} onChange={(e)=>setData({...data,MyAddress:e.target.value})} />
        <input type="text" placeholder="job"value={data.MyJob} onChange={(e)=>setData({...data,MyJob:e.target.value})} />
        <div>my name is {data.myName}</div>
        <div>My address is {data.MyAddress}</div>
        <div>My job is {data.MyJob}</div>
      </div>

      <div>
        the logic is {logic}
        <button onClick={() => setLogic(!logic)}>Toggle</button>
      </div>

      <div>
        count is : {count}
        <button
          onClick={() => {
            setCount((nextCount) => nextCount + 1);
          }}
        >
          increase
        </button>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount - 1);
          }}
        >
          decrese
        </button>
      </div>

      <div>
        my name is : {name}{" "}
        <button
          onClick={() => {
            setName("Hager");
          }}
        >
          setName
        </button>
      </div>
      <div>
        my address is : {address}{" "}
        <button
          onClick={() => {
            setAddress("Giza");
          }}
        >
          setAddress
        </button>
      </div>
      <div>
        my job is : {job}{" "}
        <button
          onClick={() => {
            setJob("Web Developer");
          }}
        >
          setJob
        </button>
      </div>
    </React.Fragment>
  );
}

export default Home;
