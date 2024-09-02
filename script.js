function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

    // Validation logic: Check if the input starts with 'pet_' and is followed by alphanumeric characters
    const regex = /^pet_\d{4}[A-Za-z]+$/;
    
    if (regex.test(input)) {
        result = 'Valid syntax! ✔️';
    } else {
        result = 'Invalid syntax. Please ensure it starts with "pet_" followed by a 4-digit year and the pet’s name.';
    }

    document.getElementById('result').innerText = result;
}


