const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "hotmail",
	auth: {
		user: "dg.portfolio.site@outlook.com",
		pass: "#JimmyAlapag0319",
	},
});

const options = {
	from: "dg.portfolio.site@outlook.com",
	to: "gapacdiana@gmail.com",
	subject: "sending automated email test",
	text: "Hi! I just sent an email from your portfolio website, It is working!",
};

transporter.sendMail(options, function (err, info) {
	if (err) {
		console.log(err);
		return;
	}

	console.log("SENT" + info.response);
});
