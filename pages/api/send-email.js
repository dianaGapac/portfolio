// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;

	const transporter = nodemailer.createTransport({
		service: "hotmail",
		auth: {
			user: "dgportfolio.site@outlook.com",
			pass: "dg.portfolio",
		},
	});

	const options = {
		from: "dgportfolio.site@outlook.com",
		to: "dianarose.gapac@tup.edu.ph",
		subject: "Someone wants to Get In Touch with you",
		text: `Hi! Diana,
		${name} wants to get in touch with you.
		Email: ${email}
		Message: ${message}
		 `,
	};

	await new Promise((resolve, reject) => {
		// send mail
		transporter.sendMail(options, (err, info) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				console.log("SENT");
				resolve(info);
			}
		});
	});

	res.status(200).json({ status: "OK" });
}
