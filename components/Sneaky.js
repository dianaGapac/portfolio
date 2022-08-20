import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button, Grid, Stack } from "@mui/material";
import RoleTag from "./RoleTag";
import { motion } from "framer-motion";
import Link from "next/link";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const Sneaky = () => {
	const sm = useMediaQuery("(min-width:300px)");
	const md = useMediaQuery("(min-width:600px)");
	const lg = useMediaQuery("(min-width:900px)");
	return (
		<Grid container style={{ paddingInline: "20px", overflow: "hidden" }}>
			<Grid
				item
				lg={5}
				sm={6}
				xs={12}
				align={lg ? "right" : sm ? "center" : "right"}
			>
				<motion.img
					whileInView={{
						opacity: [0, 1],
						translateX: [-150, 0],
						translateY: [-100, 0],
						rotate: [5, 0],
					}}
					transition={{ duration: 1 }}
					viewport={{ once: lg ? false : md ? false : true, amount: 0.1 }}
					style={{}}
					src='/images/dev-projects/sneaky.svg'
					height={lg ? "500px" : md ? "350px" : "350px"}
				/>
			</Grid>

			<Grid item lg={7} sm={6} xs={12}>
				<img
					style={{ position: "absolute", right: "0px" }}
					src='/images/round-dots-half-left.svg'
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
							Sneaky
						</p>
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: [0, 1],
							translateY: [50, 0],
						}}
						transition={{ duration: 1, delay: 0.1 }}
						viewport={{ once: true, amount: 0.5 }}
						style={{ color: "#606060" }}
					>
						(Responsive E-Commerce Web Application)
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
							src='/images/stacks/stack-used/react-js-logo.svg'
							height={lg ? "35px" : md ? "30px" : "28px"}
						/>
						<img
							style={{ marginInline: "10px" }}
							src='/images/stacks/stack-used/mongo-db-logo.svg'
							height={lg ? "35px" : md ? "30px" : "28px"}
						/>
						<img
							style={{ marginInline: "10px" }}
							src='/images/stacks/stack-used/node-js-logo.svg'
							height={lg ? "35px" : md ? "30px" : "28px"}
						/>
						<img
							style={{ marginInline: "10px" }}
							src='/images/stacks/stack-used/express-js-logo.svg'
							height={lg ? "35px" : md ? "30px" : "28px"}
						/>
						<img
							style={{ marginInline: "10px" }}
							src='/images/stacks/stack-used/react-bootstrap-logo.svg'
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
						<RoleTag role={"Fullstack Developer"} />
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
								href='https://sneaky-shoppy.herokuapp.com/'
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
		</Grid>
	);
};

export default Sneaky;
