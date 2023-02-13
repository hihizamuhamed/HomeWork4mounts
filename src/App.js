import React from "react";

function Welcome(props) {
  return (
  
      <h1>Привет,{props.name}</h1>
   
  );
}

function App(){
  return (
    <div>
      <Welcome name=" Mike" />
      <Welcome name=" John" />
      <Welcome name=" Jane" />
    </div>
  );
}


export default App;
