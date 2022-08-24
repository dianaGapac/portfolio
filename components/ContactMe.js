import React, { useState } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
	Button,
	FormControl,
	Grid,
	IconButton,
	TextField,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import { Stack } from "@mui/system";

const ContactMe = () => {
	const sm = useMediaQuery("(min-width:300px)");
	const md = useMediaQuery("(min-width:600px)");
	const lg = useMediaQuery("(min-width:900px)");

	const [loading, setLoading] = useState(true);
	function handleClick() {
		setLoading(true);
	}

	return (
		<div style={{ marginInline: "10%", marginBlock: "5%", overflow: "hidden" }}>
			<motion.h3
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, x: [-100, 0] }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 1 }}
				style={{ fontSize: lg ? "32px" : md ? "26px" : "22px" }}
			>
				Get In Touch
			</motion.h3>
			<p>Have a proposal or queries ? Get in touch and let's talk about it.</p>

			<Grid container>
				<Grid item lg={5}>
					<img
						src='/images/ellipse-right-half.svg'
						height='150px'
						style={{ position: "absolute", left: "0px" }}
					/>
					<FormControl fullWidth sx={{ m: 1 }}>
						<TextField
							outlined
							label='Your Name'
							style={{ marginTop: "15px" }}
						/>
						<TextField
							outlined
							label='Email Address'
							style={{ marginTop: "15px" }}
						/>
						<TextField
							outlined
							label='Discuss your idea'
							multiline
							rows={4}
							style={{ marginTop: "15px" }}
						/>

						<Button
							variant='filled'
							sx={{
								marginTop: "30px",
								backgroundColor: "#2DA6EB",
								color: "white",
								"&:hover": {
									backgroundColor: "#3194CD",
								},
							}}
						>
							<span style={{ fontSize: "20px", fontWeight: "bold" }}>SEND</span>
						</Button>
					</FormControl>
				</Grid>

				<Grid item lg={7}>
					<Stack direction='column' spacing={10}>
						<img
							src='/images/round-dots.svg'
							height='200px'
							style={{ position: "absolute", right: "200px" }}
						/>

						<img
							src='/images/light-blue-circle.svg'
							height='50px'
							style={{
								position: "absolute",
								right: "500px",
								marginTop: "300px",
							}}
						/>
						<img
							src='/images/lavender-circle.svg'
							height='30px'
							style={{
								position: "absolute",
								right: "450px",
								marginTop: "250px",
							}}
						/>

						<img
							src='/images/blue-half-ellipse.svg'
							height='150px'
							style={{
								position: "absolute",
								right: "0px",
								marginTop: "200px",
							}}
						/>
					</Stack>
				</Grid>
			</Grid>
		</div>
	);
};

export default ContactMe;
