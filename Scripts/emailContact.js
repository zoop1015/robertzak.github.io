const EMAIL_SEND_DEBOUNCE_IN_MILLISECONDS = 3500; 

function onMailSent(message)
{
  let sendButton = document.getElementById("email-send-button");

  if (message == "OK") {
    sendButton.style.backgroundColor = "rgb(43, 205, 43)";
    sendButton.textContent = "Sendingin náðist!";
  }
  else
  {
    sendButton.style.backgroundColor = "rgb(220, 36, 36)";
    sendButton.textContent = "Eitthvað fór rangt!";
  }

  setTimeout(() => {
    sendButton.disabled = false;
    sendButton.style.backgroundColor = 'rgb(75, 171, 255)';
    sendButton.textContent = "Senda";
  }, EMAIL_SEND_DEBOUNCE_IN_MILLISECONDS)
}

function sendMail()
{
  let sendButton = document.getElementById("email-send-button");
  sendButton.disabled = true;

  sendButton.style.backgroundColor = "rgb(236, 192, 61)";
  sendButton.textContent = "Í Vinnslu";

  let senderEmail = document.getElementById("email-mail");
  let senderName = document.getElementById("email-name");
  let senderCompany = document.getElementById("email-company");
  let senderMessage = document.getElementById("email-message");

  let message = '| This mail was automatically sent by SMTP JS |\n\n\
  Name: ' + senderName.value + '\n\n\
  Email: ' + senderEmail.value + '\n\n\
  Company: ' + senderCompany.value + '\n\n\
  Message : \n\n' + senderMessage.value;

  Email.send({
    Host: 'smtp.elasticemail.com',
    Username : 'roberthelgi@icloud.com',
    Password : '75F32727CE17BC4928DDCA946154CBEE6BAF',
    To : 'roberthelgi@icloud.com',
    From : 'roberthelgipersonal@gmail.com',
    Subject : "YOUR-PORTFOLIO | " + senderEmail.value,
    Body : message
  }).then(onMailSent)
}