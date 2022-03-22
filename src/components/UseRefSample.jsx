import React from "react";
import { useRef } from "react";


const UseRefSample = () =>{
  const inputRef = useRef()
  const headingRef = useRef()
  
  const submitHandler =(event) =>{
    event.preventDefault()
    console.log(inputRef.current.value)
    headingRef.current.innerText= "We will get back to you soon"
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} className="form-control mb-2" />
        <button type="submit" className="btn btn-warning">Submit</button>
      </form>
      <h3 ref={headingRef}>Home of tech</h3>
    </div>
  )
}

export default UseRefSample;