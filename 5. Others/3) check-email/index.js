function isValidEmail(email) {
    return /^[0-9a-z._-]+@[0-9a-z]+\.[a-z]+$/i.test(email);
}

window.isValidEmail = isValidEmail;

export default isValidEmail;
