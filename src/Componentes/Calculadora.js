import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Resultado from "./Resultado";

const Calculadora = () => {

    const [num_A, setNum_A] = useState('');
    const [num_B, setNum_B] = useState('');
    const [result, setResult] = useState('');
    const [activeOperation, setActiveOperation] = useState(null);
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'num_A') {
            setNum_A(value);
        } else if (name === 'num_B') {
            setNum_B(value);
        }
    }

    const calculate = (operation) => {
        let res;
        switch (operation) {
            case 'suma':
                res = parseFloat(num_A) + parseFloat(num_B);
                break;
            case 'resta':
                res = parseFloat(num_A) - parseFloat(num_B);
                break;
            case 'producto':
                res = parseFloat(num_A) * parseFloat(num_B);
                break;
            case 'division':
                res = parseFloat(num_A) / parseFloat(num_B);
                break;
            default:
                break;
        }
        setResult(res);
        setActiveOperation(operation); // Establece la operación activa
    }

    return (
        <Container className="text-center mt-5">
            <Row className="mb-5">
                <Col>
                    <input className="mx-2"  type="number" name="num_A" value={num_A} onChange={handleChange}  placeholder="Número A" />
                    <input className="mx-2" type="number" name="num_B" value={num_B} onChange={handleChange}  placeholder="Número B" />
                </Col>
            </Row>
            {/* mt-3 margen top */}
            <Row>
                <Col>      
                    <Button className="mx-2"  variant={activeOperation === 'suma' ? 'primary' : 'secondary'} onClick={() => calculate('suma')}>+</Button>
                    <Button className="mx-2" variant={activeOperation === 'resta' ? 'primary' : 'secondary'} onClick={() => calculate('resta')}>-</Button>
                    <Button className="mx-2" variant={activeOperation === 'producto' ? 'primary' : 'secondary'} onClick={() => calculate('producto')}>X</Button>
                    <Button className="mx-2" variant={activeOperation === 'division' ? 'primary' : 'secondary'} onClick={() => calculate('division')}>/</Button>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    {/* <input type="number" value={result} readOnly /> */}
                    <Resultado resultado = {result} />
                </Col>
            </Row>
        </Container>
    );

}

export default Calculadora;
