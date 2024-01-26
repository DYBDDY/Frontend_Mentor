function myfunction(event) {
  let email = document.forms["mailform"]["email"].value;
  if (email == "") {
    event.preventDefault();
    alert("Field must not be empty");
    return false;
  } else {
    document.forms["mailform"].action = "/success.html?email=" + encodeURIComponent(email);
  }
}

window.onload = function() {

  let params = new URLSearchParams(window.location.search);
  let email = params.get('email');


  let emailElement = document.querySelector('.quote p');
  if (emailElement) {
    emailElement.innerHTML = "A confirmation email has been sent to <strong> " + decodeURIComponent(email) + "</strong>.Please open it and click the button inside to confirm your subscription.";
  }
}


