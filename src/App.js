import React from 'react';
import './App.css';

import './Style.css';


function App() {

  const name = "Love react by 2021"
  const myStyle = {
    color: "blue"
  }

  return (

    /**
     * JSX code
     */
    <div className="App">
      <p className="test-paragraph">Type ur name here ... export default Yassine</p>

      {/* use expression to view data */}
      <p style={{ color: "green", margin: "3 30%", backgroundColor: "yellow" }}>{name}</p>
      <p style={myStyle}>{6 * 3.202}</p>

      {/* Closing tags */}
      <hr style={{ width: "50%" }} />
      
      {/* importing images */}
      <img src='logo192.png' alt="" style={{ width: "14%" }} />
      <br /><br /><br />
      <img src='./src/assets/jsxsrc.png' alt="" style={{ width: "20%" }} />
      <br /><br /><br />
      <video controls src={"/assets/WhySelenium.mp4"} type={"video/mp4"} width={"320"} height={"240"}/>  
      <br /><br /><br />
      
      
    </div>
  );
}

export default App;
