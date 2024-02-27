import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function NuevoNumero() {

    const [num_A, setNum_A] = useState('');
    const [num_B, setNum_B] = useState('');
    const [result, setResult] = useState('');


    const numaHandler = (event) => {
        setNum_A(event.target.value);
    }

    const numbHandler = (event) => {
        setNum_B(event.target.value);
    }

    const suma = () => {
        setResult(parseFloat(num_A) + parseFloat(num_B));
    }

    const resta = () => {
        setResult(num_A - num_B);
    }

    const producto = () => {
        setResult(num_A * num_B);
    }

    const division = () => {
        setResult(num_A / num_B);
    }



    const submitHandler = (event) => {
        // event.preventDefault();
        // const numero = {
        //     numa: numa,
        //     numb: numb,
        // }
        // props.addNumero(numero);
        setNum_A('');
        setNum_B('');
    }



    return (
        // si no hay type="submit", formulario no se ejecuta
        // en este caso solo se van activando las funciones de los botones
        <div>
        <Row>
            <Col>
                <label>Número A: </label>
                <input type="number" onChange={numaHandler} />

                <label>Número B: </label>
                <input type="number" onChange={numbHandler} />
            </Col>
        </Row>

        <Row>
            <Button onClick={suma}>+</Button>
            <Button onClick={resta}>-</Button>
            <Button onClick={producto}>X</Button>
            <Button onClick={division}>/</Button>
        </Row>

        <Row>
            <label>Resultado: DE comp resultado {result} </label>
        </Row>
    </div>

    )

}


export default NuevoNumero;