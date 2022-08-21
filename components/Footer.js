import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button, Grid } from "@mui/material";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Stack } from "@mui/system";
import Link from "next/link";

const Footer = () => {
	const sm = useMediaQuery("(min-width:300px)");
	const md = useMediaQuery("(min-width:600px)");
	const lg = useMediaQuery("(min-width:900px)");
	return (
		<div style={{ marginTop: "5%" }}>
			<div
				style={{
					borderTopRightRadius: lg ? "80px" : md ? "60px" : "50px",
					borderBottomLeftRadius: lg ? "50px" : md ? "40px" : "30px",
					paddingBlock: "30px",
					paddingInline: "10%",
					background:
						"linear-gradient(90deg, hsla(260, 72%, 82%, 1) 0%, hsla(191, 57%, 70%, 1) 100%)",
					overflow: "hidden",
				}}
			>
				<Grid container>
					<Grid item lg={7} xs={12}>
						<motion.h1
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, translateX: [-100, 0] }}
							viewport={{ once: false, amount: 0.5 }}
							transition={{ duration: 1 }}
							style={{
								fontSize: lg ? "46px" : md ? "38px" : "30px",
							}}
						>
							<span>IT ALWAYS</span>
							<br /> <span> SEEMS </span> <br />
							<motion.span
								style={{
									color: "#6858DF",
									fontSize: lg ? "54px" : md ? "46px" : "38px",
								}}
							>
								IMPOSSIBLE
							</motion.span>
							<br />
							<span> UNTIL IT&apos;S </span> <br />
							<span
								style={{
									color: "#6858DF",
									fontSize: lg ? "60px" : md ? "52px" : "46px",
								}}
							>
								DONE
							</span>
						</motion.h1>
					</Grid>

					<Grid
						item
						lg={5}
						xs={12}
						style={{ marginTop: lg ? "0px" : md ? "15px" : "20px" }}
					>
						<motion.h2
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, x: [100, 0] }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 1 }}
							style={{ fontSize: lg ? "28px" : md ? "24px" : "20px" }}
						>
							CONTACTS
						</motion.h2>
						<Stack direction='column' style={{ marginTop: "5%" }} spacing={2}>
							<Stack
								direction='row'
								style={{ fontSize: "18px", alignItems: "center" }}
							>
								<Link href='tel:09304150690'>
									<motion.div
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1, y: [50, 0] }}
										viewport={{ once: true, amount: 0.5 }}
										transition={{ duration: 1 }}
										style={{
											backgroundColor: "rgba(255, 255, 255, 0.4)",
											borderRadius: "100%",
											paddingInline: "10px",
											paddingBlock: "5px",
											marginRight: "10px",
											cursor: "pointer",
										}}
									>
										<PhoneAndroidIcon
											sx={{
												"&:hover": {
													color: "#7162DF",
												},
											}}
										/>
									</motion.div>
								</Link>

								<Link href='tel:09304150690'>
									<motion.span
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1, y: [50, 0] }}
										viewport={{ once: true, amount: 0.5 }}
										transition={{ duration: 1 }}
										style={{
											cursor: "pointer",
											fontSize: lg ? "20px" : md ? "18px" : "16px",
										}}
									>
										+639304150690
									</motion.span>
								</Link>
							</Stack>

							<Stack
								direction='row'
								style={{ fontSize: "18px", alignItems: "center" }}
							>
								<Link href='mailto:dianarose.gapac@tup.edu.ph'>
									<motion.div
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1, y: [50, 0] }}
										viewport={{ once: true, amount: 0.5 }}
										transition={{ duration: 1, delay: 0.5 }}
										style={{
											backgroundColor: "rgba(255, 255, 255, 0.4)",
											borderRadius: "100%",
											paddingInline: "10px",
											paddingBlock: "5px",
											marginRight: "10px",
											cursor: "pointer",
										}}
									>
										<MailIcon
											sx={{
												"&:hover": {
													color: "#7162DF",
												},
											}}
										/>
									</motion.div>
								</Link>

								<Link href='mailto:dianarose.gapac@tup.edu.ph'>
									<motion.span
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1, y: [50, 0] }}
										viewport={{ once: true, amount: 0.5 }}
										transition={{ duration: 1, delay: 0.5 }}
										style={{
											cursor: "pointer",
											fontSize: lg ? "20px" : md ? "18px" : "16px",
										}}
									>
										dianarose.gapac@tup.edu.ph
									</motion.span>
								</Link>
							</Stack>

							<Stack
								direction='row'
								style={{ fontSize: "18px", alignItems: "center" }}
							>
								<Link href='https://github.com/dianaGapac'>
									<motion.div
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1, y: [50, 0] }}
										viewport={{ once: true, amount: 0.5 }}
										transition={{ duration: 1, delay: 1 }}
										style={{
											backgroundColor: "rgba(255, 255, 255, 0.4)",
											borderRadius: "100%",
											paddingInline: "10px",
											paddingBlock: "5px",
											marginRight: "10px",
											cursor: "pointer",
										}}
									>
										<GitHubIcon
											sx={{
												"&:hover": {
													color: "#7162DF",
												},
											}}
										/>
									</motion.div>
								</Link>

								<Link href='https://github.com/dianaGapac'>
									<motion.span
										initial={{ opacity: 0 }}
										whileInView={{ opacity: [0, 1], y: [50, 0] }}
										viewport={{ once: true, amount: 0.5 }}
										transition={{ duration: 1, delay: 1 }}
										style={{
											cursor: "pointer",
											fontSize: lg ? "20px" : md ? "18px" : "16px",
										}}
									>
										GitHub
									</motion.span>
								</Link>
							</Stack>

							<Stack
								direction='row'
								style={{ fontSize: "18px", alignItems: "center" }}
							>
								<Link href='https://www.linkedin.com/in/diana-rose-gapac-6716b4233/'>
									<motion.div
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1, y: [50, 0] }}
										viewport={{ once: true, amount: 0.5 }}
										transition={{ duration: 1, delay: 1.5 }}
										style={{
											backgroundColor: "rgba(255, 255, 255, 0.4)",
											borderRadius: "100%",
											paddingInline: "10px",
											paddingBlock: "5px",
											marginRight: "10px",
											cursor: "pointer",
										}}
									>
										<LinkedInIcon
											sx={{
												"&:hover": {
													color: "#7162DF",
												},
											}}
										/>
									</motion.div>
								</Link>

								<Link href='https://www.linkedin.com/in/diana-rose-gapac-6716b4233/'>
									<motion.span
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1, y: [50, 0] }}
										viewport={{ once: true, amount: 0.5 }}
										transition={{ duration: 1, delay: 1.5 }}
										style={{
											cursor: "pointer",
											fontSize: lg ? "20px" : md ? "18px" : "16px",
										}}
									>
										LinkedIn
									</motion.span>
								</Link>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
			</div>
			<div
				style={{ fontSize: "16px", textAlign: "center", paddingBlock: "1%" }}
			>
				<p style={{ marginBottom: "0px", fontSize: "16px" }}>
					Designed and Developed by Diana Gapac
				</p>

				<span> ©2022</span>
			</div>
		</div>
	);
};

export default Footer;
