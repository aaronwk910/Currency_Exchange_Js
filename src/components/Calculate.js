const Calculate = props => {
    const currency1 = props.currency1;
    const currency2 = props.currency2;
    const input = props.input;
    var output = 0;


    
    if (currency1 === "USD" && currency2 === "EUR") {
        output=(input * 1.005).toFixed(2);
    }
    else if (currency1 === "USD" && currency2 === "YEN") {
        output=(input * 140.118).toFixed(2);
    }
    else if (currency1 === "EUR" && currency2 === "USD") {
        output=(input * .995).toFixed(2);
    }
    else if (currency1 === "EUR" && currency2 === "YEN") {
        output=(input * 137.407).toFixed(2);
    }
    else if (currency1 === "YEN" && currency2 === "USD") {
        output=(input * .0071).toFixed(2);
    }
    else if (currency1 === "YEN" && currency2 === "EUR") {
        output=(input * 0.0073).toFixed(2);
    }
    else {
        output = input;
    }
    return ( 
        props.setOutput(output)
     );
}

export default Calculate;