function refreshIframe() {
    const iframe = document.getElementById('myIframe');
    iframe.src = iframe.src; // Reloads the iframe
    alert('Form submitted successfully!');
}

function formatNumber(input){
    let value = input.value.replace(/[^0-9.]/g, "");

    if (value === "" || isNaN(value)) {
        input.value = "";
        return;
    }

    // Parse the number and format it with commas and two decimal places
    let formattedValue = parseFloat(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    // Set the formatted value back to the input
    input.value = formattedValue;
}

