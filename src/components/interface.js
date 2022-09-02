
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Dropdowns = props => {
        return ( 
            <div className="interface">
                <DropdownButton size = "lg" variant = "success" id="dropdown-basic-button" title={props.currency1} onClick={(e) => props.setCurrency1(e.target.text)}>
                    <Dropdown.Item href="#/action-1-1">USD</Dropdown.Item>
                    <Dropdown.Item href="#/action-1-2">EUR</Dropdown.Item>
                    <Dropdown.Item href="#/action-1-3">YEN</Dropdown.Item>
                </DropdownButton>

                <DropdownButton size = "lg" variant = "success" id="dropdown-basic-button" title={props.currency2} onClick={(e) => props.setCurrency2(e.target.text)}>
                    <Dropdown.Item href="#/action-2-1">USD</Dropdown.Item>
                    <Dropdown.Item href="#/action-2-2">EUR</Dropdown.Item>
                    <Dropdown.Item href="#/action-2-3">YEN</Dropdown.Item>
                </DropdownButton>

            </div>
            
        );
}

export default Dropdowns;