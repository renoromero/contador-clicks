import '../style/boton.css'

function Boton({ texto, botonClick, accionClick }) {
  return(
    <button
      className={botonClick? 'botonClick' : 'botonReset'}
      onClick={accionClick}>
      {texto}
    </button>
  );
}

export default Boton;