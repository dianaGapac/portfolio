import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button, Grid, Stack } from "@mui/material";
import RoleTag from "./RoleTag";
import { motion } from "framer-motion";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Link from "next/link";

const EBaryo = () => {
	const sm = useMediaQuery("(min-width:300px)");
	const md = useMediaQuery("(min-width:600px)");
	const lg = useMediaQuery("(min-width:900px)");
	return (
		<Grid container style={{ paddingInline: "20px", overflow: "hidden" }}>
			<Grid item lg={7} sm={6} xs={12}>
				<img
					style={{ position: "absolute", left: "0px", zIndex: "-1" }}
					src='/images/round-dots-half-right.svg'
					height={lg ? "220px" : md ? "180px" : "150px"}
				/>
				<div
					style={{
						textAlign: "center",
						width: "100%",
						display: "block",
						marginTop: lg ? "150px" : md ? "80px" : "20px",
						marginBottom: sm ? "80px" : "auto",
					}}
				>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: [0, 1],
							translateY: [50, 0],
						}}
						transition={{ duration: 1 }}
						viewport={{ once: true, amount: 0.5 }}
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
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: [0, 1],
							translateY: [50, 0],
						}}
						transition={{ duration: 1, delay: 0.1 }}
						viewport={{ once: true, amount: 0.1 }}
						style={{ color: "#606060" }}
					>
						(Progressive Web Application)
					</motion.p>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: [0, 1],
							translateY: [50, 0],
						}}
						transition={{ duration: 1, delay: 0.1 }}
						viewport={{ once: true, amount: 0.1 }}
						style={{
							display: "flex",
							justifyContent: "center",
							marginBlock: "15px",
						}}
					>
						<img
							style={{ marginInline: "10px" }}
							src='/images/stacks/stack-used/next-js-logo.svg'
							height={lg ? "35px" : md ? "30px" : "28px"}
						/>
						<img
							style={{ marginInline: "10px" }}
							src='/images/stacks/stack-used/mui-logo.svg'
							height={lg ? "35px" : md ? "30px" : "28px"}
						/>
						<img
							style={{ marginInline: "10px" }}
							src='/images/stacks/stack-used/tailwind-css-logo.svg'
							height={lg ? "35px" : md ? "30px" : "28px"}
						/>
						<img
							style={{ marginInline: "10px" }}
							src='/images/stacks/stack-used/mongo-db-logo.svg'
							height={lg ? "35px" : md ? "30px" : "28px"}
						/>
						<img
							style={{ marginInline: "10px" }}
							src='/images/stacks/stack-used/graphql-logo.svg'
							height={lg ? "35px" : md ? "30px" : "28px"}
						/>
						<img
							style={{ marginInline: "10px" }}
							src='/images/stacks/stack-used/tensor-flow-logo.svg'
							height={lg ? "35px" : md ? "30px" : "28px"}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: [0, 1],
							translateY: [50, 0],
						}}
						transition={{ duration: 1, delay: 0.1 }}
						viewport={{ once: true, amount: 0.1 }}
						style={{
							display: "flex",
							justifyContent: "center",
							marginBlock: "20px",
						}}
					>
						<RoleTag role={"UI/UX Designer"} />
						<RoleTag role={"Frontend Developer"} />
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: [0, 1],
							translateY: [50, 0],
						}}
						transition={{ duration: 1, delay: 0.1 }}
						viewport={{ once: true, amount: 0.1 }}
						style={{
							display: "flex",
							justifyContent: "center",
							marginBlock: "20px",
						}}
					>
						<Button
							style={{
								display: "flex",
								"&:hover": {
									color: "#2DA6EB",
								},
							}}
						>
							<Link
								href='https://ebaryo-admin.vercel.app/'
								style={{ fontSize: "16px" }}
							>
								Visit Website
							</Link>
							<ArrowForwardRoundedIcon
								style={{
									marginLeft: "3px",
								}}
							/>
						</Button>
					</motion.div>
				</div>
			</Grid>

			<Grid
				item
				lg={5}
				sm={6}
				xs={12}
				align={lg ? "left" : md ? "left" : sm ? "center" : "center"}
				style={{ order: lg ? "1" : md ? "1" : sm ? "-1" : "1" }}
			>
				<motion.img
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						translateX: [150, 0],
						translateY: [100, 0],
						rotate: [5, 0],
					}}
					transition={{ duration: 1 }}
					viewport={{
						once: false,
						amount: 0.2,
					}}
					src='/images/dev-projects/e-baryo.png'
					height={lg ? "500px" : md ? "350px" : "350px"}
				/>
			</Grid>
		</Grid>
	);
};

export default EBaryo;
