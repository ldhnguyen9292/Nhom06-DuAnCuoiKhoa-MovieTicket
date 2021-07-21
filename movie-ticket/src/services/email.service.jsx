import emailjs from "emailjs-com";

function sendEmail(template, data) {
  emailjs
    .send("service_9xm497f", template, data, "user_5HxI35DNwUmD0ADpIZd5Z")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

export const emailService = { sendEmail };
