import React, { useState } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
	Button,
	FormControl,
	FormHelperText,
	Grid,
	IconButton,
	TextField,
} from "@mui/material";

import { Stack } from "@mui/system";

const ContactMe = () => {
	const sm = useMediaQuery("(min-width:300px)");
	const md = useMediaQuery("(min-width:600px)");
	const lg = useMediaQuery("(min-width:900px)");

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const sendEmailHandler = async () => {
		// console.log(name, email, message);
		const response = await fetch("/api/send-email", {
			method: "POST",
			body: JSON.stringify({ name, email, message }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		console.log(data);
	};

	return (
		<div style={{ marginInline: "10%", marginBlock: "5%", overflow: "hidden" }}>
			<motion.h3
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, y: [50, 0] }}
				viewport={{ once: true, amount: 1 }}
				transition={{ duration: 1 }}
				style={{ fontSize: lg ? "32px" : md ? "26px" : "22px" }}
			>
				Get In Touch
			</motion.h3>
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, y: [50, 0] }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 1, delay: 0.5 }}
			>
				Have a proposal or queries ? Get in touch and let&lsquo;s talk about it.
			</motion.p>

			<Grid container sx={{ overflow: "hidden" }}>
				<Grid item lg={5} xs={12}>
					<motion.img
						whileInView={{ scale: [0, 1] }}
						viewport={{ once: true, amount: 0.0 }}
						src='/images/ellipse-right-half.svg'
						height={lg ? "150px" : "0px"}
						style={{ position: "absolute", left: "0px" }}
					/>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, y: [50, 0] }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1, delay: 1 }}
					>
						<FormControl fullWidth>
							<TextField
								value={name}
								variant='outlined'
								label='Your Name'
								style={{ marginTop: "30px" }}
								onChange={(e) => setName(e.target.value)}
								required
							/>

							<TextField
								value={email}
								variant='outlined'
								label='Email Address'
								type='email'
								required
								onChange={(e) => setEmail(e.target.value)}
								style={{ marginTop: "15px" }}
							/>
							<TextField
								value={message}
								variant='outlined'
								label='Discuss your idea'
								multiline
								rows={4}
								onChange={(e) => setMessage(e.target.value)}
								required
								style={{ marginTop: "15px" }}
							/>

							<Button
								type='submit'
								variant='filled'
								onClick={sendEmailHandler}
								sx={{
									marginTop: "30px",
									borderRadius: "40px",
									backgroundColor: "#2DA6EB",
									color: "white",
									"&:hover": {
										backgroundColor: "#3194CD",
									},
								}}
							>
								<span style={{ fontSize: "20px", fontWeight: "bold" }}>
									SEND
								</span>
							</Button>
						</FormControl>
					</motion.div>
				</Grid>

				<Grid item lg={7} xs={12}>
					<Stack direction='column' spacing={10}>
						<motion.img
							whileInView={{ scale: [0, 1] }}
							viewport={{ once: true, amount: 0.0 }}
							src='/images/round-dots.svg'
							height={lg ? "200px" : "0px"}
							style={{ position: "absolute", right: "200px" }}
						/>

						<motion.img
							whileInView={{ scale: [0, 1] }}
							viewport={{ once: true, amount: 0.0 }}
							src='/images/light-blue-circle.svg'
							height={lg ? "50px" : "0px"}
							style={{
								position: "absolute",
								right: "500px",
								marginTop: "300px",
							}}
						/>
						<motion.img
							whileInView={{ scale: [0, 1] }}
							viewport={{ once: true, amount: 0.0 }}
							src='/images/lavender-circle.svg'
							height={lg ? "30px" : "0px"}
							style={{
								position: "absolute",
								right: "450px",
								marginTop: "250px",
							}}
						/>

						<motion.img
							whileInView={{ scale: [0, 1] }}
							viewport={{ once: true, amount: 0.0 }}
							src='/images/blue-half-ellipse.svg'
							height={lg ? "150px" : "0px"}
							style={{
								position: "absolute",
								right: "0px",
								marginTop: lg ? "200px" : "0px",
							}}
						/>
					</Stack>
				</Grid>
			</Grid>
		</div>
	);
};

export default ContactMe;
