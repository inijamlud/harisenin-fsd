const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const smtp = nodemailer.createTransport({
  host: process.env.MAILER_SMTP_HOST,
  port: 587,
  auth: {
    user: process.env.MAILER_SMTP_USER,
    pass: process.env.MAILER_SMTP_PASSWORD,
  },
});

const now = () => new Date().toLocaleString();

(async () => {
  try {
    console.log(`${now()} - Preparing to send email...`);

    const example1 = path.join(__dirname, "example.txt");
    const example2 = path.join(__dirname, "example2-direct-name.txt");

    await smtp.sendMail({
      from: process.env.MAILER_DEFAULT_SENDER_EMAIL,
      to: "user-recipient@harisenin.com",
      subject: "Hello from Harisenin! - Attachment 3",
      text: "Test email sent using Nodemailer Attachment 3",
      html: "Test email sent using <b>Nodemailer</b>  Attachment 3",
      attachments: [
        {
          filename: "file-example-dari-path-w-custom-name.txt",
          path: example1,
        },
        {
          filename: "example2.txt",
          path: example2,
        },
        {
          filename: "license.txt",
          path: "https://github.com/nodejs/node/raw/main/LICENSE",
        },
      ],
    });

    console.log(`${now()} - Email sent successfully`);
  } catch (error) {
    console.log(error);
  }
})();
