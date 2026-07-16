const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pachiyammald2016@gmail.com',
        pass: 'jilgoerhjlrptjym'
    }
});

transporter.verify(function(error, success) {
    if (error) {
        console.log("SMTP Error:", error);
    } else {
        console.log("SMTP Server is ready to take our messages");
    }
});
