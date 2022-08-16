import { Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { motion } from "framer-motion";

import Typewriter from "react-typewriter-animate";
import "react-typewriter-animate/dist/Typewriter.css";

const Cover = () => {
	const handleDone = () => {
		console.log(`Done after 5 loops!`);
	};

	return (
		<div>
			<Stack direction='column' spacing={-7} marginTop='45px'>
				<motion.div
					initial={{ x: 1200 }}
					animate={{ x: 0 }}
					transition={{ type: "tween", duration: 1.5 }}
					style={{
						width: "100%",
						height: "30px",
						background:
							"linear-gradient(90deg, hsla(191, 88%, 81%, 1) 0%, hsla(260, 72%, 82%, 1) 40%, hsla(247, 73%, 69%, 1) 100%)",
					}}
				></motion.div>

				<div style={{ align: "left", marginLeft: "100px", zIndex: "99" }}>
					<motion.img
						src='/images/dg-logo.svg'
						height={"90"}
						animate={{ rotate: 360 }}
						transition={{ duration: 1.5 }}
					/>
				</div>
			</Stack>

			<Stack direction={"row"} spacing={0} justifyContent='space-between'>
				<div
					style={{ marginLeft: "100px", display: "block", marginTop: "30px" }}
				>
					<h3>Hi, I'm </h3>
					<h2> Diana Rose Gapac</h2>
					<h1 style={{ color: "#6858DF", marginTop: "20px" }}>
						<Typewriter
							dataToRotate={[
								[{ type: "word", text: "Web Developer" }],
								[{ type: "word", text: "UI/UX Designer" }],
								[{ type: "word", text: "Frontend Dev" }],
								[{ type: "word", text: "Web Developer" }],
							]}
						/>
					</h1>

					<Stack direction='row'>
						<motion.div
							animate={{ y: [0, -5, -5, 0] }}
							transition={{
								repeat: Infinity,
								duration: 1,
								repeatDelay: 1,
							}}
							style={{ marginTop: "40px" }}
						>
							<Button
								variant='contained'
								color='inherit'
								sx={{
									height: "60px",
									width: "130px",
									borderRadius: "40px",
									padding: "10px",
									backgroundColor: "#20C0E6",
									color: "white",
									"&:hover": {
										backgroundColor: "#2DA6EB",
									},
								}}
							>
								<text style={{ fontSize: "16px", fontWeight: "bold" }}>
									Hire Me
								</text>
							</Button>
						</motion.div>

						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 1.5 }}
							style={{
								position: "absolute",
								left: "650px",
								top: "300px",
							}}
						>
							<img src='/images/hexagons.svg' height='120px' />
						</motion.div>
					</Stack>
				</div>

				<Box>
					<Stack direction={"row"} justifyContent='end'>
						<div style={{ align: "right", zIndex: "99" }}>
							<img
								src='/images/diana-gapac.png'
								alt='picture of Diana Rose Gapac'
								height={550}
							/>
						</div>
						<Stack direction={"column"}>
							<Stack direction='row'>
								{/* <motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ duration: 1.5 }}
									style={{
										position: "absolute",
										right: "550px",
										top: "300px",
									}}
								>
									<img src='/images/hexagons.svg' height='120px' />
								</motion.div> */}

								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ duration: 1.5 }}
									style={{
										position: "absolute",
										right: "210px",
										top: "200px",
									}}
								>
									<img src='/images/round-dots.svg' height='180px' />
								</motion.div>
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ duration: 1.5 }}
									style={{ position: "absolute", right: "0px", top: "360px" }}
								>
									<img src='/images/half-ellipse.svg' height={150} />
								</motion.div>
							</Stack>

							<motion.div
								animate={{ y: 10 }}
								transition={{ type: "tween", duration: 1.5 }}
								style={{
									position: "absolute",
									right: "0px",
									top: "580px",
									width: "100%",
									height: "30px",
									background:
										"linear-gradient(90deg, hsla(247, 68%, 61%, 1) 0%, hsla(252, 70%, 73%, 1) 23%, hsla(191, 53%, 61%, 1) 56%, hsla(191, 92%, 85%, 1) 100%",
								}}
							></motion.div>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</div>
	);
};

export default Cover;
