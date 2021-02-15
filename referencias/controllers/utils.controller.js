"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviarEMailText = exports.enviarEMailHtml = void 0;
var nodemailer = require("nodemailer");
function enviarEMailText(to, sujeto, text) {
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
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Email sent: " + info.response);
        }
    });
}
exports.enviarEMailText = enviarEMailText;
function enviarEMailHtml(to, sujeto, html) {
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
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Email sent: " + info.response);
        }
    });
}
exports.enviarEMailHtml = enviarEMailHtml;
