document.getElementById("convertButton").addEventListener("click", function() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const unit = document.getElementById("unitSelect").value;
    let convertedTemp;
    let unitText;

    if (isNaN(inputTemp)) {
        alert("Please enter a valid number for the temperature.");
        return;
    }

    switch (unit) {
        case "celsius":
            convertedTemp = (inputTemp - 32) * (5/9);
            unitText = "Celsius";
            break;
        case "fahrenheit":
            convertedTemp = (inputTemp * 9/5) + 32;
            unitText = "Fahrenheit";
            break;
        case "kelvin":
            convertedTemp = inputTemp + 273.15;
            unitText = "Kelvin";
            break;
        default:
            alert("Invalid unit selected.");
            return;
    }

    document.getElementById("result").textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${unitText}`;
});
