import React from "react";
import { useReducer,useRef } from "react";
import { useFormik } from "formik";

function Store() {
 
  const formik=useFormik({
    initialValues: { name: '', password: '' },

    onSubmit: values => {
      console.log('Submitting', values);
    },
  })


  let initialState = 0;
  const username=useRef();
  const password=useRef();
  const [count, dispatch] = useReducer(reduce, initialState);
  function reduce(state, action) {
    if (action === "INCREMENT") {
      return state + 1;
    } else if (action === "DECREMENT") {
      return state - 1;
    } else {
      return state;
    }
  }
function  handel(e){
  e.preventDefault();

 
console.log(username.current.value);
console.log(password.current.value);
  }

  return (
    <div>
      the count is {count}{" "}
      <button onClick={() => dispatch("INCREMENT")}>increase</button>
      <button onClick={() => dispatch("DECREMENT")}>decrese</button>
      <form onSubmit={handel}>
      <input type="text" placeholder="name" ref={username} />
      <input type="text" placeholder="password" ref={password} />
      <button type="submit">Submit</button>
      </form>

      <form onSubmit={formik.handleSubmit}>
      <input type="text" id="name" name="name" placeholder="name" onChange={formik.handleChange} value={formik.values.name} />
      <input type="text" id="password" placeholder="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
      <button type="submit">Submit</button>
      </form>
    
    </div>
  );
}

export default Store;
