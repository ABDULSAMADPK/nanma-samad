
function PasswordValidation(password) {

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (password === '') {
        return 'Enter your password'
    }
    else if (!passwordPattern.test(password)) {
        return 'Password must have minimum 8 characters, 1 symbol, 1 letter and 1 number'
    }
    return null
}

export default PasswordValidation