import React, { useState } from 'react';
import Dropdowns from './interface.js';
import InputBar from './InputBar.js';
import OutputBar from './OutputBar.js';
import Calculate from './Calculate.js';

const Parent = () => {

    const [currency1, setCurrency1] = useState("EUR");
    const [currency2, setCurrency2] = useState("USD");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("0");

    return (
        <React.Fragment>
            <Dropdowns
                setCurrency1={setCurrency1}
                setCurrency2={setCurrency2}
                currency1={currency1}
                currency2={currency2}
            />
            <InputBar
                setInput={setInput}
            />

            <Calculate
                input={input}
                currency1={currency1}
                currency2={currency2}
                setOutput={setOutput}
            />

            <OutputBar
                output={output}
            />

        </React.Fragment>
    );
}

export default Parent;