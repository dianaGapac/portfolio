import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Stack } from "@mui/system";
import { motion } from "framer-motion";
import Link from "next/link";

const DesignProjects = () => {
	const sm = useMediaQuery("(min-width:300px)");
	const md = useMediaQuery("(min-width:600px)");
	const lg = useMediaQuery("(min-width:900px)");
	return (
		<div>
			<div
				style={{
					marginTop: lg ? "120px" : md ? "60px" : "50px",
					marginLeft: "10%",
				}}
			>
				<h3 style={{ fontSize: lg ? "32px" : md ? "26px" : "22px" }}>
					Design Projects
				</h3>

				<p
					style={{
						fontSize: lg ? "18px" : md ? "16px" : "14px",
						marginRight: "10%",
					}}
				>
					These are the design projects that I’ve made during my college days
					and throughout my internship.
				</p>
			</div>

			<div
				style={{
					height: lg ? "1600px" : md ? "1000px" : "650px",
					backgroundColor: "#E6F0F8",
					overflow: "hidden",
					clipPath: "polygon(0 10%, 100% 0,100% 90%, 0 100%)",
					position: "relative",
					paddingBlock: lg ? "20%" : md ? "20%" : "22%",
				}}
			>
				<Stack
					direction='row'
					style={{ justifyContent: "center", zIndex: "100" }}
					spacing={2}
				>
					<Stack direction='column' spacing={2}>
						<Link href='https://www.figma.com/file/bOoMuaNU16VsbEdaZcJglV/Hillary-Laurente?node-id=0%3A1'>
							<motion.img
								style={{ cursor: "pointer" }}
								whileInView={{ translateX: [-50, 0] }}
								transition={{ duration: 1 }}
								whileHover={{ rotate: [0, 1, -1, 0] }}
								viewport={{ once: false, amount: 0.0 }}
								whileTap={{ rotate: [0, 1, -1, 0] }}
								src='/images/design-projects/hillary.png'
								height={lg ? "450px" : md ? "300px" : "200px"}
							/>
						</Link>

						<Link href='https://www.figma.com/file/25KjLm418pRAvTGQ3w2qZZ/E-Baryo?node-id=0%3A1'>
							<motion.img
								style={{ cursor: "pointer" }}
								whileInView={{ translateX: [-50, 0] }}
								transition={{ duration: 1 }}
								viewport={{ once: false, amount: 0.0 }}
								whileHover={{ rotate: [0, 1, -1, 0] }}
								whileTap={{ rotate: [0, 1, -1, 0] }}
								src='/images/design-projects/e-baryo.png'
								height={lg ? "450px" : md ? "300px" : "200px"}
							/>
						</Link>
					</Stack>

					<Stack direction='column' spacing={2} style={{ marginTop: "10%" }}>
						<Link href='https://www.figma.com/file/ATWmEeEwwb8XFWVa44NU7E/GogoCharge-Design'>
							<motion.img
								style={{ cursor: "pointer" }}
								whileInView={{ translateX: [50, 0] }}
								transition={{ duration: 1 }}
								viewport={{ once: false, amount: 0.0 }}
								whileHover={{ rotate: [0, 1, -1, 0] }}
								whileTap={{ rotate: [0, 1, -1, 0] }}
								src='/images/design-projects/gogocharge.png'
								height={lg ? "450px" : md ? "300px" : "200px"}
							/>
						</Link>

						<Link href='https://www.figma.com/file/LHSJpLclkzOD7eZzBTv79G/DA-GIANNI-DESIGN?node-id=0%3A1'>
							<motion.img
								style={{ cursor: "pointer" }}
								whileInView={{ translateX: [50, 0] }}
								transition={{ duration: 1 }}
								viewport={{ once: false, amount: 0.2 }}
								whileHover={{ rotate: [0, 1, -1, 0] }}
								whileTap={{ rotate: [0, 1, -1, 0] }}
								src='/images/design-projects/da-gianni.png'
								height={lg ? "450px" : md ? "300px" : "200px"}
							/>
						</Link>
					</Stack>
				</Stack>

				<motion.img
					whileInView={{ scale: [0, 1] }}
					viewport={{ once: true, amount: 0.0 }}
					style={{
						position: "absolute",
						left: lg ? "220px" : md ? "100px" : "50px",
						top: lg ? "300px" : md ? "240px" : "150px",
						zIndex: "-1",
					}}
					src='/images/round-dots.svg'
					height={lg ? "150px" : md ? "110px" : "0px"}
				/>

				<motion.img
					whileInView={{ translateX: [-100, 0] }}
					viewport={{ once: true, amount: 0.0 }}
					style={{
						position: "absolute",
						left: lg ? "10px" : md ? "5px" : "5px",
						top: lg ? "800px" : md ? "550px" : "450px",
						zIndex: "-1",
					}}
					src='/images/triangles-right.svg'
					height={lg ? "25px" : md ? "20px" : "0px"}
				/>

				<motion.img
					whileInView={{ scale: [0, 1] }}
					viewport={{ once: true, amount: 0 }}
					style={{
						position: "absolute",
						right: lg ? "220px" : md ? "100px" : "70px",
						top: lg ? "800px" : md ? "500px" : "300px",
						zIndex: "-1",
					}}
					src='/images/round-dots.svg'
					height={lg ? "150px" : md ? "110px" : "0px"}
				/>

				<motion.img
					whileInView={{ translateX: [100, 0] }}
					viewport={{ once: true, amount: 0 }}
					style={{
						position: "absolute",
						right: lg ? "10px" : md ? "5px" : "5px",
						top: lg ? "1100px" : md ? "750px" : "540px",
						zIndex: "-1",
					}}
					src='/images/triangles-left.svg'
					height={lg ? "25px" : md ? "20px" : "0px"}
				/>
			</div>
		</div>
	);
};

export default DesignProjects;
