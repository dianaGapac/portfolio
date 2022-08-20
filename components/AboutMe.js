import { Button, Grid } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const AboutMe = () => {
	const sm = useMediaQuery("(min-width:300px)");
	const md = useMediaQuery("(min-width:600px)");
	const lg = useMediaQuery("(min-width:900px)");

	return (
		<div
			style={{
				marginTop: lg ? "150px" : md ? "180px" : "180px",
				marginLeft: "10%",
			}}
		>
			<h3 style={{ fontSize: lg ? "32px" : md ? "26px" : "22px" }}>About Me</h3>
			<div style={{ maxWidth: lg ? "60%" : md ? "80%" : "92%" }}>
				<p
					style={{
						fontSize: lg ? "18px" : md ? "16px" : "14px",
						textIndent: "30px",
						textAlign: "justify",
						textJustify: "inter-word",
					}}
				>
					Hello! I am Diana, 22 yrs old. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Nec tellus, quisque aliquet purus tempor nisl, eu
					enim. Pellentesque placerat quis vitae cursus fermentum
				</p>
			</div>

			<a href='diana-gapac.pdf' download='diana-gapac.pdf'>
				<Button variant='outlined' size='lg' style={{ marginTop: "30px" }}>
					<FileDownloadOutlinedIcon />
					<span style={{ fontWeight: "bold", marginLeft: "3px" }}>
						DOWNLOAD MY RESUME
					</span>
				</Button>
			</a>

			<img
				style={{ position: "absolute", right: "15px", marginTop: "50px" }}
				src='/images/arrow-triangle.svg'
				height={lg ? "25px" : md ? "20px" : "12px"}
			/>
		</div>
	);
};

export default AboutMe;
