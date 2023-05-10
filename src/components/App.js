
import React from "react";
import './../styles/App.css';

const App = () => {
  function greeting(event) {
    event.preventDefault();
    let greet = event.target.value;
    if(greet != "") {
      document.getElementById('greeting').innerHTML = `Hello ${greet}!`;
    } else {
      document.getElementById('greeting').innerHTML = "";
    }
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form>
          <label for="name">Enter your name:</label>
          <br />
          <input id="name" type="text" onInput={greeting} />
        </form>
        <p id="greeting"></p>
    </div>
  )
}

export default App
