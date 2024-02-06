
function Validation(inputs) {

    const errors = {}

    const namePattern = /^[A-Za-z]{3,16}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const numberPattern = /^[0-9]{10}$/;
    const otpPattern = /^[0-9]{4,6}$/;

    if (inputs.name === '') {
        errors.name = 'Enter your name'
    }
    else if (!namePattern.test(inputs.name)) {
        errors.name = 'Name should be 3-16 characters, dont add any symbol or number'
    }

    if (inputs.email === '') {
        errors.email = 'Enter your email'
    }
    else if (!emailPattern.test(inputs.email)) {
        errors.email = 'Please enter valid Email ID'
    }

    if (inputs.number === '') {
        errors.number = 'Enter your mobile number'
    }
    else if (!numberPattern.test(inputs.number)) {
        errors.number = 'Please enter 10 digit Mobile Number'
    }

    if (inputs.password === '') {
        errors.password = 'Enter your password'
    }
    else if (!passwordPattern.test(inputs.password)) {
        errors.password = 'Password must have minimum 8 characters, 1 symbol, 1 letter and 1 number'
    }

    if (inputs.resetpassword === '') {
        errors.resetpassword = 'Enter your reset password'
    } else if (!passwordPattern.test(inputs.resetpassword)) {
        errors.resetpassword = 'Password must have minimum 8 characters, 1 symbol, 1 letter and 1 number'
    }

    if (inputs.confirmpassword === '') {
        errors.confirmpassword = 'Confirm Password is required'
    } else if (inputs.password !== inputs.confirmpassword) {
        errors.confirmpassword = 'Password is not matching'
    }
    if (inputs.confirmresetpassword === '') {
        errors.confirmresetpassword = 'Confirm Password is required'
    } else if (inputs.resetpassword !== inputs.confirmresetpassword) {
        errors.confirmresetpassword = 'Password is not matching'
    }

    if (inputs.otp === '') {
        errors.otp = 'Please enter your OTP'
    } else if (!otpPattern.test(inputs.otp)) {
        errors.otp = 'Please enter 4-6 digit OTP'
    }

    return errors;
}

export default Validation