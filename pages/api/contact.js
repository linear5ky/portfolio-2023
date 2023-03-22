import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
     console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "marcus.powell@linearsky.com", // Your email where you'll receive emails
      from: "marcus.powell@linearsky.com", // your website email address here
      subject: `Quote Request from ${req.body.email}`,
      html: `
       firstname: ${req.body.firstname} <br>
       lastname: ${req.body.lastname}  <br>
       email: ${req.body.email}   <br>
       phone: ${req.body.phone}     <br>
       service: ${req.body.service}  <br>
       message: ${req.body.message}`,
    });
  } catch (error) {
     console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
 