import { Button, Grid } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { motion } from "framer-motion";

const AboutMe = () => {
	const sm = useMediaQuery("(min-width:300px)");
	const md = useMediaQuery("(min-width:600px)");
	const lg = useMediaQuery("(min-width:900px)");

	return (
		<div
			style={{
				marginTop: lg ? "100px" : md ? "80px" : "120px",
				marginLeft: "10%",
			}}
		>
			<motion.h3
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, y: [50, 0] }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 1 }}
				style={{ fontSize: lg ? "32px" : md ? "26px" : "22px" }}
			>
				About Me
			</motion.h3>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, y: [50, 0] }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 1, delay: 0.5 }}
				style={{ maxWidth: lg ? "60%" : md ? "80%" : "92%" }}
			>
				<p
					style={{
						fontSize: lg ? "18px" : md ? "16px" : "14px",
						textIndent: "30px",
						textAlign: "justify",
						textJustify: "inter-word",
					}}
				>
					Hello! I am Diana, Information Technology graduate from Technological
					University of the Philippines-Manila. An aspiring web developer,
					specialized in frontend development and UI/UX designing. I had gained
					most of my skills and knowledge by self-studying, online courses and
					constant practice.
					<br /> <br />
					Passionate, Dedicated, Teachable
				</p>
			</motion.div>

			<motion.a
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, y: [50, 0] }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 1, delay: 1 }}
				href='diana-gapac.pdf'
				download='diana-gapac.pdf'
			>
				<Button variant='outlined' size='lg' style={{ marginTop: "30px" }}>
					<FileDownloadOutlinedIcon />
					<span style={{ fontWeight: "bold", marginLeft: "3px" }}>
						DOWNLOAD MY RESUME
					</span>
				</Button>
			</motion.a>

			<motion.img
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 1, delay: 1 }}
				style={{ position: "absolute", right: "15px", marginTop: "50px" }}
				src='/images/arrow-triangle.svg'
				height={lg ? "25px" : md ? "20px" : "12px"}
			/>
		</div>
	);
};

export default AboutMe;
