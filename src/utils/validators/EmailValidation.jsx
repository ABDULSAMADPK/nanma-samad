
function EmailValidation(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        return 'Enter your email'
    }
    if (!emailPattern.test(email)) {
        return 'Please enter valid Email ID'
    }
    return null
}

export default EmailValidation