const sgMail = require("@sendgrid/mail");
const dotenv = require('dotenv');

dotenv.config({path: "../config.env"})
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendSGMail = async ({
  recipient,
  sender,
  subject,
  html,
  text,
  attachments,
}) => {
  try {
    const from = sender || "fallback email";

    const msg = {
      to: recipient,
      from: from,
      subject,
      html: html,
      text: text,
      attachments,
    };

    return sgMail.send(msg);
  } catch (error) {
    console.log(error, "send grid error");
  }
};

exports.sendMail = async (args) => {
    if(process.env.NODE_ENV === 'development'){
        return new Promise.resolve();
    }else{
        return sendSGMail(args)
    }
}