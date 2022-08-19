import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Stack } from "@mui/material";
import RoleTag from "./RoleTag";
import { motion } from "framer-motion";

const DevProjects = () => {
	const sm = useMediaQuery("(min-width:300px)");
	const md = useMediaQuery("(min-width:600px)");
	const lg = useMediaQuery("(min-width:900px)");
	return (
		<div>
			<div
				style={{
					marginTop: lg ? "80px" : md ? "180px" : "180px",
					marginBottom: "8%",
					marginLeft: "10%",
				}}
			>
				<h3 style={{ fontSize: lg ? "32px" : md ? "26px" : "22px" }}>
					Development Projects
				</h3>

				<Stack direction='row'>
					<p style={{ fontSize: lg ? "18px" : md ? "16px" : "14px" }}>
						These are the development projects that I’ve made during my college
						days and throughout my internship.
					</p>
					<img
						style={{ position: "absolute", right: "0px" }}
						src='/images/round-dots-half-left.svg'
						height='180px'
					/>
				</Stack>
			</div>

			<Grid container>
				<Grid item lg={7} xs={12}>
					<img
						style={{ position: "absolute", left: "0px" }}
						src='/images/round-dots-half-right.svg'
						height='220px'
					/>
					<div
						style={{
							textAlign: "center",
							width: "100%",
							display: "block",
							marginTop: "150px",
						}}
					>
						<motion.div
							whileInView={{
								opacity: [0, 1],
								translateY: [50, 0],
								rotate: [5, -5, 0],
							}}
							transition={{ duration: 1 }}
							viewport={{ once: true, amount: 0.8 }}
						>
							<p
								style={{
									fontSize: lg ? "30px" : md ? "24px" : "20px",
									fontWeight: "600",
								}}
							>
								E-Baryo
							</p>
						</motion.div>

						<motion.p
							whileInView={{
								opacity: [0, 1],
								translateY: [50, 0],
							}}
							transition={{ duration: 1, delay: 0.1 }}
							viewport={{ once: true, amount: 0.8 }}
							style={{ color: "#606060" }}
						>
							(Progressive Web Application)
						</motion.p>

						<motion.div
							whileInView={{
								opacity: [0, 1],
								translateY: [50, 0],
							}}
							transition={{ duration: 1, delay: 0.1 }}
							viewport={{ once: true, amount: 0.8 }}
							style={{
								display: "flex",
								justifyContent: "center",
								marginBlock: "15px",
							}}
						>
							<img
								style={{ marginInline: "10px" }}
								src='/images/stacks/stack-used/next-js-logo.svg'
								height='35px'
							/>
							<img
								style={{ marginInline: "10px" }}
								src='/images/stacks/stack-used/mui-logo.svg'
								height='35px'
							/>
							<img
								style={{ marginInline: "10px" }}
								src='/images/stacks/stack-used/tailwind-css-logo.svg'
								height='35px'
							/>
							<img
								style={{ marginInline: "10px" }}
								src='/images/stacks/stack-used/mongo-db-logo.svg'
								height='35px'
							/>
							<img
								style={{ marginInline: "10px" }}
								src='/images/stacks/stack-used/graphql-logo.svg'
								height='35px'
							/>
							<img
								style={{ marginInline: "10px" }}
								src='/images/stacks/stack-used/tensor-flow-logo.svg'
								height='35px'
							/>
						</motion.div>

						<motion.div
							whileInView={{
								opacity: [0, 1],
								translateY: [50, 0],
							}}
							transition={{ duration: 1, delay: 0.1 }}
							viewport={{ once: true, amount: 0.8 }}
							style={{
								display: "flex",
								justifyContent: "center",
								marginBlock: "20px",
							}}
						>
							<RoleTag role={"UI/UX Designer"} />
							<RoleTag role={"Frontend Developer"} />
						</motion.div>
					</div>
				</Grid>

				<Grid item lg={5} xs={12} align='center'>
					<motion.img
						whileInView={{
							translateX: [150, 0],
							translateY: [-100, 0],
							rotate: [-10, 10, 0],
						}}
						transition={{ duration: 1 }}
						viewport={{ once: true, amount: 0.1 }}
						style={{}}
						src='/images/dev-projects/e-baryo.svg'
						height='500px'
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default DevProjects;
