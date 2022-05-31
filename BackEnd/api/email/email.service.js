


const nodemailer = require('nodemailer');
const {
  google
} = require('googleapis');



// These id's and secrets should come from .env file.
const CLIENT_ID = process.env.CLIENT_ID
const CLEINT_SECRET = process.env.CLEINT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
});

//MARK:- Mailer for new ticket created
exports.sendMailForNewTicket = (data) => {

  try {
    console.log("this is the resposes: ", data)

    const accessToken = oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.USER_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    })
    // console.log("this is the resposes of user: ", name)
    const mailOptions = {
      from: 'Brotherhood Infotech <'+ process.env.USER_EMAIL+'>',
      to: [data.clientEmail, data.createrEmail, 'dd.dewan.mead@gmail.com'],
      cc: process.env.EMAIL_CC,
      subject: "#" + data.ticketNumber + ' New Ticket created',

      html: `<html>
      <head><center><p color:red;"><h1>Thank You !!</h1></p></center></head>
      <body>
        <p><h4><center> Hello ` + data.clientName +
        `, you have created a new ticket. One of our team member will contact with you soon.
        </p></h4></center>
        <p><center> <h4>TICKET INFORMATION</center></h4>
        <p><b>Ticket Number: </b>` + data.ticketNumber +
        `<br><b>Product Name: </b>` + data.productName +
        `<br><b>Priority: </b>` + data.priority +
        `<br><b>Subject: </b>` + data.subject +
        `<br><b>Description: </b>` + data.description +
        `<br><b>Mobile Number: </b>` + data.clientNumber +
        `<br><b>Email: </b>` + data.clientEmail +
        `</p>
      </body>

      <footer>
      <p>
      <b>Brotherhood Infotech</b><br>`+ process.env.COMPANY_PHONE +
     `<br>
     info@brotherhoodinfotech.com<br>
     http://brotherhoodinfotech.com
      </p>
      </footer>
      </html>`


    };

    const result = transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

//MARK:- Mailer for status changed to 'closed'
exports.sendMailForClosingTicket =(data) =>{

  try {
    console.log("this is the resposes: ", data)

    const accessToken = oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.USER_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    })
    // console.log("this is the resposes of user: ", name)
    const mailOptions = {
      from: 'Brotherhood Infotech <'+ process.env.USER_EMAIL+'>',
      to: [data.clientEmail, data.createrEmail, 'dd.dewan.mead@gmail.com'],
      cc: process.env.EMAIL_CC,
      subject: "#" + data.ticketNumber + ' Ticket closed',

      html: `<html>
      <head><center><p><h1>You are our priority !!</h1></p></center></head>
      <body>
        <p><h4><center> Hello ` + data.clientName +
        `, your ticket marked as `+  data.status + `. <br>Feel free to create ticket if you face any problem related to any of our product 
        you using. Our support team  is here to serve you. 
        </p></h4></center>
        <p><center> <h4>TICKET INFORMATION</center></h4>
        <p><b>Ticket Number: </b>` + data.ticketNumber +
        `<br><b>Status: </b>` + data.status +
        `<br><b>Product Name: </b>` + data.productName +
        `<br><b>Priority: </b>` + data.priority +
        `<br><b>Subject: </b>` + data.subject +
        `<br><b>Description: </b>` + data.description +
        `<br><b>Mobile Number: </b>` + data.clientNumber +
        `<br><b>Email: </b>` + data.clientEmail +
        `</p>
      </body>

      <footer>
      <p>
      <b>Brotherhood Infotech</b><br>`+ process.env.COMPANY_PHONE +
     `<br>
     info@brotherhoodinfotech.com<br>
     http://brotherhoodinfotech.com
      </p>
      </footer>
      </html>`


    };

    const result = transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}
