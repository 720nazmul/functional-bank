document.getElementById('login-submit').addEventListener('click', function () {
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    // user password set
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
        window.location.href = "bank.html"
    }

})