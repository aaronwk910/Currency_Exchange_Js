import axios from 'axios';
const Calculate = props => {
    const currency1 = props.currency1;
    const currency2 = props.currency2;
    const input = props.input;
    var output = 0;


    //call api
    axios.get('http://localhost:5000/rates/' + currency1 + '/' + currency2)
        .then(response => {
            output = input * response.data;
            output = Math.round(output * 100) / 100;
            props.setOutput(output);
        })
        .catch((error) => {
            console.log(error);
        })
}

export default Calculate;