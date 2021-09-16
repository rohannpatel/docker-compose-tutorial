import React, { useState } from 'react';
import axios from 'axios';

const displayHelloWorld = async () => {
  const response = await axios.get('http://localhost:5000/')
  console.log(response)
};

function App() {

  return (
    <div className="App">
      <div className="buttons">
        <button type="button" onClick={displayHelloWorld}>Click Me</button>
      </div>
    </div>
  );
}

export default App;