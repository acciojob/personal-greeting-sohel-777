
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {
let  [msg, useMsg]=useState("")
console.log(msg)

  return (
    <div>
        {/* Do not remove the main div */}
      <form >
        
        <label htmlFor="name">Enter your name :</label>
        <br />
        <input id="name" type="text" onChange={(event)=>{useMsg(event.target.value)}}/>
      </form>
      <p id="greet">
        {
          msg ? `hello ${msg}!` : ""
          
        }
      </p>
    </div>
  )
}

export default App
