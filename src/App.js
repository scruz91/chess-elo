import React from 'react';
import { useState } from 'react';
import ToggleBox from "./components/ToggleBox";
import Jugadores from "./components/Jugadores";
import Header from './components/Header';
import {Divider, Button, TextField, makeStyles} from '@material-ui/core/';
import './App.css';


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
  },
}));

export default function App() {

  const classes = useStyles();

  const [j1, setJ1] = useState('{');
  const [j2, setJ2] = useState('nn');
  const [j1Result, setJ1Result] = useState('0');
  const [j2Result, setJ2Result] = useState('0');

  function calculateElo(win, loss){
    
    var Elo = require('elo-rating');
    var won = parseInt(win);
    var lost = parseInt(loss);
    var result = Elo.calculate(won, lost, true, 40);    

      setJ1Result(result.playerRating);   

      setJ2Result(result.opponentRating);

    console.log('Ganador ELO:' + j1Result + ' -> nuevo ELO: ' + result.playerRating) // Output: 1735
    console.log('Perdedor ELO:' + j2Result + ' -> nuevo ELO: ' + result.opponentRating) // Output: 1735
    
  }

  return (
    
    <form className={classes.root} noValidate autoComplete="off"> 
      <div className="App">
        <div className="Header">
          <Header J1Result={j1Result} J2Result={j2Result}/>
          <TextField 
                label="ELO Ganador"
                defaultValue=""
                placeholder = "ELO Ganador" onChange={e => setJ1Result(e.target.value)}></TextField>
            <TextField 
                label="ELO Perdedor"
                defaultValue=""
                placeholder = "ELO Perdedor" onChange={e => setJ2Result(e.target.value)}></TextField>
            <Divider />
            <Button variant="contained" color="primary" onClick={() => calculateElo(j1Result, j2Result)}>
              Calcular ELO
            </Button>
        </div>
        <div className="Table">
        <ToggleBox title="Tabla">
            <Jugadores />
          </ToggleBox>
        </div>

      </div>
    </form>
    
  );
}
