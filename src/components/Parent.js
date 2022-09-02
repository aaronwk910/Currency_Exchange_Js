import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Dropdowns from './Dropdowns.js';
import InputBar from './InputBar.js';
import OutputBar from './OutputBar.js';
import Calculate from './Calculate.js';

const Parent = () => {

    const [currency1, setCurrency1] = useState("USD");
    const [currency2, setCurrency2] = useState("EUR");
    const [input, setInput] = useState("0");
    const [output, setOutput] = useState("0");

    return (
        <Container>
            <Row>
                <Col>
                    Select Input Currency!
                </Col>

                <Col>
                    Select Output Currency!
                </Col>
            </Row>
            <Row>
                <Dropdowns
                    setCurrency1={setCurrency1}
                    setCurrency2={setCurrency2}
                    currency1={currency1}
                    currency2={currency2}
                />
            </Row>
            <Row>
                <Col>
                    <InputBar
                        setInput={setInput}
                    />
                </Col>
                    <Calculate
                        input={input}
                        currency1={currency1}
                        currency2={currency2}
                        setOutput={setOutput}
                    />
                <Col>
                    <OutputBar
                        output={output}
                    />
                </Col>
            </Row>

        </Container>
    );
}

export default Parent;