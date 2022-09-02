import Form from 'react-bootstrap/Form';

const OutputBar = props => {
        return (
            <Form.Control type="text" value={props.output} readOnly onChange />
        );
}

export default OutputBar;