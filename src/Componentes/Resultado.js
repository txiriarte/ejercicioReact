
import './Resultado.css'; 

// En este caso, { resultado } equivale a props.resultado
const Resultado = ( { resultado } ) => {
    return (
        <div className="resultado">
            <h2>Resultado</h2>
            <p>{resultado}</p>
        </div>
    );
}

export default Resultado;
