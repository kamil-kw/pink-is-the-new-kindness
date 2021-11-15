let sendButton = document.querySelector('#form-button');

function ValidateForm() {
    let name = document.querySelector('#name').value;
    let emailaddress = document.querySelector('#emailaddress').value;
    let message = document.querySelector('#message').value;
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailaddress.match(mailformat) && name != '' && emailaddress != '' && message != '') {
        send();
        alert("Thanks for your sharing, " + name +" !");
        return true;
    } else if (name === '' || message === '' || emailaddress === ''){
      alert("Please fill the form before submit!");
      document.querySelector('#name').focus();
      return false;
    }  else if (!emailaddress.match(mailformat)) {
      alert("You have entered an invalid email address!");
      document.querySelector('#emailaddress').focus();
      return false;
    } else {
      alert("Something goes wrong!");
      return false;
    }
}

function send() {
  let name = document.querySelector('#name').value;
  let emailaddress = document.querySelector('#emailaddress').value;
  let message = document.querySelector('#message').value;
  $.ajax({
    type: "post",
    url: "https://script.google.com/macros/s/AKfycbw0cq22KH4sMDcDmKFAtSzHsAZiMg-JBmvushSNuok7A2i5VpJNAy17YgslEvxRPl8_4g/exec",
    data: {
      "name": name,
      "emailaddress": emailaddress,
      "message": message
    },
    dataType: "JSON"
  });
};

sendButton.addEventListener('click', ValidateForm);