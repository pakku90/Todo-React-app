import React from 'react';



function App(prop) {
  const name = prop.name;
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name} !
        </p>
      
      </header>
    </div>
  );
}

export default App;
