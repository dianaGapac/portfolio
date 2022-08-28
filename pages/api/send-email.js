// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;

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

	await new Promise((resolve, reject) => {
		// send mail
		transporter.sendMail(options, (err, info) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				console.log("SENT" + response.info);
				resolve(info);
			}
		});
	});

	res.status(200).json({ status: "OK" });
}
