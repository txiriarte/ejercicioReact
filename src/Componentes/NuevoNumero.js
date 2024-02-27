import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
// import './NuevoNumero.css'; // Estilos personalizados

function NuevoNumero() {
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
        <Container className="calculator">
            <Row>
                <Col>
                    <input type="text" name="num_A" value={num_A} onChange={handleChange} className="form-control" placeholder="Número A" />
                </Col>

                <Col>
                    <input type="text" name="num_B" value={num_B} onChange={handleChange} className="form-control" placeholder="Número B" />
                </Col>
            </Row>

            <Row>
                <Col>      
                 {/* parece que no hace falta `${}`          */}
                    <Button variant={activeOperation === 'suma' ? 'primary' : 'secondary'} onClick={() => calculate('suma')}>+</Button>
                </Col>

                <Col>                
                    <Button variant={activeOperation === 'resta' ? 'primary' : 'secondary'} onClick={() => calculate('resta')}>-</Button>
                </Col>

                <Col>               
                    <Button variant={activeOperation === 'producto' ? 'primary' : 'secondary'} onClick={() => calculate('producto')}>*</Button>
                </Col>

                <Col>                
                    <Button variant={activeOperation === 'division' ? 'primary' : 'secondary'} onClick={() => calculate('division')}>/</Button>
                </Col>

            </Row>

            <Row>
                <Col>
                    <input type="text" value={result} className="form-control" readOnly />
                </Col>
            </Row>
        </Container>
    );
}

export default NuevoNumero;
