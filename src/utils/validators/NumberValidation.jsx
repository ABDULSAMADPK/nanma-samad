
function NumberValidation(phone) {
    const numberPattern = /^[0-9]{10}$/;

    if (phone === '') {
        return 'Enter your mobile number'
    }
    else if (!numberPattern.test(phone)) {
        return 'Please enter 10 digit Mobile Number'
    }
    return null
}

export default NumberValidation