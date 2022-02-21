const form = document.getElementById('form');

const text = document.getElementById('text');

const email = document.getElementById('email');

const password = document.getElementById('password');

const password2 = document.getElementById('password2');

form.addEventListener('submit', e =>{

    e.preventDefault();

   

    checkInputs();

});

const isValidEmail = email => {

    const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    return re.test(String(email).toLowerCase());

  }

  //general validation

  function checkInputs() {

    const textvalue = text.value.trim();

    const emailValue = email.value.trim();

    const passwordValue = password.value.trim();

    const password2Value = password2.value.trim();

  //username validation

    

    if (textvalue === '') {

        document.getElementById('user').innerHTML = "Username is required";

        document.getElementById('text').style.borderColor = "#e74c3c";

        document.getElementById('pass').style.display = "block";

    }

    else if (textvalue.length < 8) {

        document.getElementById('user').innerHTML = "Username is too short";

        document.getElementById('text').style.borderColor = "#e74c3c";

        document.getElementById('user').style.display = "block";

    }

    else{

        document.getElementById('text').style.borderColor = "#2ecc71";

        document.getElementById('user').style.display = "none";

    }

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

// confirm password validation

    if (password2Value === '') {

        document.getElementById('password2').style.borderColor = "#e74c3c";

        document.getElementById('pass2').innerHTML = "Password is required";

        document.getElementById('pass2').style.display = "block";

    }

    else if (password2Value !== passwordValue) {

        document.getElementById('pass2').innerHTML = "Password do not match";

        document.getElementById('password2').style.borderColor = "#e74c3c";

        document.getElementById('pass2').style.display = "block";

    }

    else {

        document.getElementById('password2').style.borderColor = "#2ecc71";

        document.getElementById('pass2').style.display = "none";

        

    }

  }

