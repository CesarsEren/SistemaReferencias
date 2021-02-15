import { registrar } from "./usuario.controller";

var nodemailer = require("nodemailer");

function enviarEMailText(to: string, sujeto: string, text: string) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: "cesarsdev@gmail.com",
      pass: "pinedo2020",
    },
    enable_starttls_auto: true,
    tls: {
      rejectUnauthorized: false,
    },
  });
  //"cpinedo428@gmail.com",
  var mailOptions = {
    from: "cesarsdev@gmail.com",
    to: to,
    subject: sujeto,
    text: text,
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

function enviarEMailHtml(to: string, sujeto: string, html: string) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: "cesarsdev@gmail.com",
      pass: "pinedo2020",
    },
    enable_starttls_auto: true,
    tls: {
      rejectUnauthorized: false,
    },
  });
  //"cpinedo428@gmail.com",
  var mailOptions = {
    from: "cesarsdev@gmail.com",
    to: to,
    subject: sujeto,
    html: html,
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

export { enviarEMailHtml, enviarEMailText };
