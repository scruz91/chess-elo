import React from 'react';
import './App.css';
import { useState } from 'react';
import Drawer from './Drawer.js';
import ToggleBox from "./ToggleBox";
import Vehicles from "./Vehicles";
import Saludo from './Cuerpo';


function App() {

  const [greet, setGreet] = useState(':D');

  function saludo(){
    if(greet === ':D') {
      setGreet('D:');   
    }else{
      setGreet(':D');
    }
  }

  return (
    <div className="App">

      <Saludo greeting={greet}/>
      <Drawer />
      <div>
        <button onClick={() => saludo()}>
          Click me
        </button>
      </div>
      <div>
      <ToggleBox title="Mostrar Tabla">
				<Vehicles />
			</ToggleBox>
      </div>
    </div>

  );
}

export default App;
