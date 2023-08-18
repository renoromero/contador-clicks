
import './App.css';
import logoRenato from '../src/imagenes/renato-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador.js';
import {useState} from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const click = () => {
    setNumClicks(numClicks + 1);
  }

  const reset = () =>{
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='Contenedor-logo'>
        <img 
        className='logo'
        src={logoRenato}
        alt='logo'/>
      </div>
      <div className='contenedorPrincipal'>
        <Contador 
          numClicks={numClicks}/>
        <Boton
          texto='Click'
          botonClick={true}
          accionClick={click}/>
        <Boton
          texto='Reset'
          botonClick={false}
          accionClick={reset}/>
      </div>
    </div>
  );
}

export default App;
