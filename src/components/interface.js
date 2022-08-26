
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { Component } from 'react';

class Dropdowns extends Component {
    state = {
        currency1: 'USD',
        currency2: 'EUR',
    }

    render() {
        return (
            <div className="interface">
                <DropdownButton size = "lg" variant = "success" id="dropdown-basic-button" title={this.state.currency1} onClick={(e) => this.handleCurrency1Changed(e)}>
                    <Dropdown.Item href="#/action-1-1">USD</Dropdown.Item>
                    <Dropdown.Item href="#/action-1-2">EURO</Dropdown.Item>
                    <Dropdown.Item href="#/action-1-3">YEN</Dropdown.Item>
                </DropdownButton>

                <DropdownButton size = "lg" variant = "success" id="dropdown-basic-button" title={this.state.currency2} onClick={(e) => this.handleCurrency2Changed(e)}>
                    <Dropdown.Item href="#/action-2-1">USD</Dropdown.Item>
                    <Dropdown.Item href="#/action-2-2">EURO</Dropdown.Item>
                    <Dropdown.Item href="#/action-2-3">YEN</Dropdown.Item>
                </DropdownButton>

            </div>
            
            
        );
    }

    handleCurrency1Changed(event) {
        var currentCurrency1 = this.state.currency1;
        var modifiedValue = event.target.text;
        currentCurrency1 = modifiedValue;
        this.setState({
          currency1: currentCurrency1
        });
    }
    handleCurrency2Changed(event) {
        var currentCurrency2 = this.state.currency2;
        var modifiedValue = event.target.text;
        currentCurrency2 = modifiedValue;
        this.setState({
          currency2: currentCurrency2
        });
    }
}

export default Dropdowns;