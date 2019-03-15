var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get("/huh", function(req, res){
    console.log("we got huh");
    req.flash("success", "here we go");
    res.redirect("/");
});

router.post("/submit", function(req, res){
    var name = req.body.name,
        email = req.body.email,
        phone = req.body.phone,
        service = req.body.service,
        subject = req.body.subject,
        message = req.body.message;
        
    const output = `
    <p style="background: green; color: green; padding: 20px 50px; font-weight: 500; font-size: 20px;">You have a new contact</p>
    <h3>Contact Details:</h3>
    <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Phone: ${phone}</li>
      <li>Service: ${service}</li>
      <li>Subject: ${subject}</li>
    </ul>
    <h4>Message: </h4>
    <p>${message}</p>
    `;
    
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "naturekingwebsite@gmail.com", // generated ethereal user
          pass: "natureking#1" // generated ethereal password
        }
    });
    
    let mailOptions = {
        from: '"Nature King Job Request" <naturekingwebsite@gmail.com>', // sender address
        to: "alkabsh_mohammed@yahoo.com", // list of receivers
        subject: subject, // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
    };
    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            req.flash("error", "We're sorry but your message wasn't sent properly");
            res.redirect("/");
            return console.log(err);
        }
        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        req.flash("success", "Your message has been sent and we will contact you soon!");
        res.redirect("/");
    });
    
});
    


module.exports = router;

