import { Button } from "@mui/material";
import { Box, Stack } from "@mui/system";

const Cover = () => {
	return (
		<div>
			<Stack direction='column' spacing={-7} marginTop='45px'>
				{/* <img src='/images/nav-bar.svg' alt='logo' height={"90px"} /> */}
				<div
					style={{
						width: "100%",
						height: "30px",
						background:
							"linear-gradient(90deg, hsla(191, 88%, 81%, 1) 0%, hsla(260, 72%, 82%, 1) 40%, hsla(247, 73%, 69%, 1) 100%)",
					}}
				></div>

				<div style={{ align: "left", marginLeft: "100px" }}>
					<img src='/images/dg-logo.svg' height={"90"} />
				</div>
			</Stack>

			<Stack direction={"row"} spacing={0} justifyContent='space-between'>
				<div
					style={{ marginLeft: "100px", display: "block", marginTop: "30px" }}
				>
					<h3>Hi, I'm </h3>
					<h2> DIANA ROSE GAPAC</h2>
					<h1 style={{ color: "#6858DF", marginTop: "20px" }}>
						WEB <br /> DEVELOPER
					</h1>

					<div style={{ marginTop: "20px" }}>
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
					</div>
				</div>

				<Box style={{ backgroundColor: "" }}>
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
								<div
									style={{
										position: "absolute",
										right: "480px",
										top: "380px",
									}}
								>
									<img src='/images/hexagons.svg' height='120px' />
								</div>

								<div
									style={{
										position: "absolute",
										right: "210px",
										top: "200px",
									}}
								>
									<img src='/images/round-dots.svg' height='180px' />
								</div>
								<div
									style={{ position: "absolute", right: "0px", top: "360px" }}
								>
									<img src='/images/half-ellipse.svg' height={150} />
								</div>
							</Stack>

							<div
								style={{
									position: "absolute",
									right: "0px",
									top: "580px",
									width: "100%",
									height: "30px",
									background:
										"linear-gradient(90deg, hsla(247, 68%, 61%, 1) 0%, hsla(252, 70%, 73%, 1) 23%, hsla(191, 53%, 61%, 1) 56%, hsla(191, 92%, 85%, 1) 100%",
								}}
							></div>

							{/* <div
								style={{
									position: "absolute",
									left: "0px",
									top: "580px",
									width: "15%",
									height: "30px",
									background:
										"linear-gradient(90deg, hsla(247, 68%, 61%, 1) 0%, hsla(252, 70%, 73%, 1) 23%, hsla(191, 53%, 61%, 1) 56%, hsla(191, 92%, 85%, 1) 100%",
								}}
							></div> */}
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</div>
	);
};

export default Cover;
