// template id = template_r8j66r7
// service id = service_nygorjh
// public key = l86GM9hvaMZ7D8Fu-

function contact(event) {
  event.preventDefault();
  emailjs
    .sendForm("service_nygorjh", "template_r8j66r7", event.target)
    .then(() => {
      console.log("this worked");
    });
}
