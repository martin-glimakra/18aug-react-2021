import React, { useState } from 'react';
import './App.css';
//Importerar komponenten Test vilket krävs för att kunna använda <Test /> i App.js
import Test from './components/Test';
import testdata from './testdata/data-sortera.json'
import Knapp from './components/Knapp'

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Skapar en ny array baserad på arrayen testdata
let nyArray = testdata.map(x => {
  
  // returnerar  <Test /> 
  return <Test data={x} />
})

function App() {
  // läs här om useState https://reactjs.org/docs/hooks-state.html
  const [state, setstate] = useState('sport')

  return (
    <div className="App">
      {// Följande tre komponenter visar tre knappar 
      }
      <Knapp titel={'mat'} />
      <Knapp titel={'sport'} />
      <Knapp titel={'städer'} />
{// Knappen nedan ändrar state till 'mat'
}
      <button onClick={() => {
        setstate('mat')
      }}>Ändra till mat</button>

      {// Knappen nedan loggar state till consolen
      }
      <button onClick={() => console.log(state)}>Logga state</button>

      {//Raden nedan visar  <div>sport</div> om state på rad 21 är lika med 'sport' 
        //Om inte state är lika med sport visar den <div>inte sport</div>
      }
      {state === 'sport' ? <div>sport</div>: <div>inte sport</div>}

      {// nyArray är en array som innehåller <Test /> komponenter 
        // De skriver ut följande på skärmen: 
        // smör
        // fotboll
        // örebro
      }
      {nyArray}
    </div>
  );
}

export default App;
