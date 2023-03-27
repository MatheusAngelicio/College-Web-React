import React from "react";
import "./App.css";

const Nome = (props) => {

  return (
    <div className='estilo'>
      {props.texto}
    </div>
  )
}

function App() {
  return (
    <>
      <div>
        <Nome texto="Eduardo Lino" />
        <Nome texto="Maria" />
        <Nome texto="José" />
        <Nome texto="Olivia" />
      </div>
    </>
  );
}

export default App;
