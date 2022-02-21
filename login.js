const form = document.getElementById('form');

const email = document.getElementById('email');

const password = document.getElementById('password');

form.addEventListener('submit', e =>{

    e.preventDefault();

    checkInputs();

});

const isValidEmail = email => {

    const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    return re.test(String(email).toLowerCase());

  }

  function checkInputs() {

    const emailValue = email.value.trim();

    const passwordValue = password.value.trim();

    //email validation

    if (emailValue === '') {

        document.getElementById('small').innerHTML = "Email is required";

        document.getElementById('email').style.borderColor = "#e74c3c";

    }

    else if (!isValidEmail(emailValue)) {

        document.getElementById('small').innerHTML = "Please Enter Valid Email";

    }

    else {

        document.getElementById('email').style.borderColor = "#2ecc71";

        document.getElementById('small').style.display = "none";

    }

    //password validation

    if (passwordValue === '') {

        document.getElementById('password').style.borderColor = "#e74c3c";

        document.getElementById('pass').innerHTML = "Password is required";

        document.getElementById('pass').style.display = "block";

    }

    else if (passwordValue.length <= 8) {

        document.getElementById('pass').innerHTML = "Password must be at least 8 characters";

        document.getElementById('password').style.borderColor = "#e74c3c";

        document.getElementById('pass').style.display = "block";

    }

    else {

        document.getElementById('password').style.borderColor = "#2ecc71";

        document.getElementById('pass').style.display = "none";

    }

}

