const express = require("express");
const next = require("next");
// import dotenv from "dotenv";

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		const server = express();
		server.get("*", (req, res) => {
			return handle(req, res);
		});

		server.listen(3000, (err) => {
			if (err) throw err;
			console.log("server is ready");
		});

		app.get("/", (req, res) => {
			res.download("./files/diana-gapac.pdf");
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit;
	});
