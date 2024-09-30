const nodemailer = require('nodemailer');

// Function to send OTP via email
const  sendOTP = async (email, otp) => {

    const otpsend = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "diyoraharsh6@gmail.com",
        pass: "xrsj twdh fcfl ofdt",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP is ${otp}.`,
    };

    await otpsend.sendMail(mailOptions);
    console.log('OTP sent successfully!');
};

const sendingMail = (to, subject, html) => {
  const sendmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "diyoraharsh6@gmail.com",
      pass: "xrsj twdh fcfl ofdt",
    },
  });

  const mailOptions = {
          from: "diyoraharsh6@gmail.com",
          to: to,
          subject,
          html
      }
      sendmail.sendMail(mailOptions, (err, info) => {
          if (err) {
              console.log(err);
          }
          else {
              console.log(info);
          }
      })
  }
module.exports = {sendOTP , sendingMail}
