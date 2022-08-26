import Form from 'react-bootstrap/Form';
import React, { Component } from 'react';

class InputBar extends Component {
    state = {
        value1:'0',
        output:'0',
    }
    render() {
        return (
        <div className="inputbar">
            <Form.Control type="number" placeholder="Enter Amount" 
                onChange={this.handleInputChanged.bind(this)}
            />
            <Form.Control type="text" value={this.state.output} readOnly />
        </div>
    );
    }

    handleInputChanged(event) {
        var currentOutput = this.state.output;
        var modifiedValue = event.target.value;
        currentOutput = modifiedValue;
        this.setState({
          output: currentOutput
        });
      }
}
export default InputBar;