import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export const sendEmail = async (code: string, email: string) => {
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing

	// let testAccount = await nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: "smtp.sendgrid.net",
		port: 25,
		secure: false, // true for 465, false for other ports
		auth: {
			user: "apikey", // generated ethereal user
			pass: process.env.KEY, // generated ethereal password
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: "info@akafenflea.online", // sender address
		to: email, // list of receivers
		subject: "Confirmation OTP for Akafen Flea", // Subject line
		html: `<h1 style="text-align: center; font-size: 4em"><b>${code}</b><h1>`, // html body
	});

	console.log("Message sent: %s", info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
