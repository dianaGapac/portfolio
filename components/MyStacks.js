import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { stacks, moreStack } from "../data/stackData";

const MyStack = () => {
	const sm = useMediaQuery("(min-width:300px)");
	const md = useMediaQuery("(min-width:600px)");
	const lg = useMediaQuery("(min-width:900px)");

	return (
		<div>
			<div
				style={{
					width: "100%",
					backgroundColor: "#E6F0F8",
					marginTop: "7%",
					borderTopRightRadius: "50px",
					borderBottomLeftRadius: "50px",
					overflow: "hidden",
				}}
			>
				<div
					style={{
						marginLeft: "10%",
						marginRight: "10%",
						marginTop: "70px",
						marginBottom: "70px",
					}}
				>
					<h3 style={{ fontSize: lg ? "32px" : md ? "26px" : "22px" }}>
						My Current Stacks
					</h3>
					<p style={{ fontSize: lg ? "18px" : md ? "16px" : "14px" }}>
						These are the technologies that I have used and learned from my
						previous projects and courses.
					</p>
					<div
						style={{
							backgroundColor: "",
							marginInline: lg ? "15%" : "5%",
						}}
					>
						<Grid
							container
							bgcolor={"lightred"}
							align='center'
							spacing={4}
							marginTop={"5%"}
							marginBottom={"10%"}
						>
							{stacks.map((s, index) => (
								<Grid key={index} item lg={3} md={3} xs={4} alignSelf='center'>
									<motion.div
										initial={{ x: 0, y: 0, opacity: 1 }}
										whileInView={{
											opacity: 1,
											translateX: lg
												? index < 4 || index > 7
													? [400, 0]
													: [-400, 0]
												: md
												? index < 3 ||
												  (index > 5 && index < 9) ||
												  (index > 11 && index < 15)
													? [300, 0]
													: [-300, 0]
												: sm
												? index < 3 ||
												  (index > 5 && index < 9) ||
												  (index > 11 && index < 15)
													? [300, 0]
													: [-300, 0]
												: [0, 0],
										}}
										transition={{ duration: lg ? 2 : md ? 1.8 : 1.5 }}
										viewport={{ once: true, amount: 0.1 }}
									>
										<img
											src={s.img}
											alt={s.name}
											height={lg ? "130px" : md ? "110px" : "95px"}
										/>
									</motion.div>
								</Grid>
							))}
						</Grid>
					</div>
				</div>
			</div>

			<div
				style={{
					marginLeft: "12%",
					marginRight: "12%",
					marginTop: "50px",
					marginBottom: "50px",
				}}
			>
				<h3 style={{ fontSize: lg ? "28px" : md ? "24px" : "20px" }}>More</h3>

				<motion.div
					style={{
						marginLeft: "10%",
						marginRight: "10%",
						marginTop: "50px",
						maxWidth: "100%",
						cursor: "grab",
						overflow: "hidden",
					}}
				>
					<motion.div
						drag='x'
						dragConstraints={{ right: 0, left: lg ? -100 : md ? -400 : -600 }}
						whileInView={{
							translateX: [0, lg ? -350 : md ? -450 : -500, 0],
						}}
						transition={{ duration: 20, repeat: Infinity }}
						viewport={{ once: false, amount: 0.1 }}
						style={{ display: "flex" }}
					>
						{moreStack.map((s, index) => (
							<motion.div key={index} style={{ marginInline: "20px" }}>
								<img
									src={s.img}
									height={lg ? "70px" : sm ? "50px" : "70px"}
									style={{ pointerEvents: "none" }}
								/>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default MyStack;
