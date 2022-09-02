import Form from 'react-bootstrap/Form';

const InputBar = props => {
    return (
        <Form.Control type="number" placeholder="Enter Amount" 
            onChange={(e) => props.setInput(e.target.value)}
        />
    );
}

export default InputBar;