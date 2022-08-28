// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

export default function handler(req, res) {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;
	res.status(200).json({ message: name, email });

	const transporter = nodemailer.createTransport({
		service: "hotmail",
		auth: {
			// user: "dg.portfolio.site@outlook.com",
			// pass: "dg.nodemailer",

			user: "dianagapaportfolio.site@outlook.com",
			pass: "#JimmyAlapag0319",
		},
	});

	const options = {
		from: "dianagapaportfolio.site@outlook.com",
		to: "dianarose.gapac@tup.edu.ph",
		subject: "Someone wants to Get In Touch with you",
		text: `Hi! Diana,
		${name} wants to get in touch with you.
		Email: ${email}
		Message: ${message}
		 `,
	};

	transporter.sendMail(options, function (err, info) {
		if (err) {
			console.log(err);
			return;
		}

		console.log("SENT" + info.response);
	});
}
