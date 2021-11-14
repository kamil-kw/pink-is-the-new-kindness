let sendButton = document.querySelector('#form-button');

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
    dataType: "JSON",
    success: function(response) {
      console.log(response);
      if(response == "Success!"){
        alert("Success!");
      }
    },
  });
};

sendButton.addEventListener('click', send);