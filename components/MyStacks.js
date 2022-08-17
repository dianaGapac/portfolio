import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
const MyStack = () => {
	const sm = useMediaQuery("(min-width:300px)");
	const md = useMediaQuery("(min-width:600px)");
	const lg = useMediaQuery("(min-width:900px)");

	const stacks = [
		{
			name: "React Js",
			img: "/images/stacks/react-js.svg",
		},

		{
			name: "Next Js",
			img: "/images/stacks/next-js.svg",
		},

		{
			name: "Javascript",
			img: "/images/stacks/js.svg",
		},

		{
			name: "HTML5",
			img: "/images/stacks/html5.svg",
		},
		{
			name: "CSS3",
			img: "/images/stacks/css.svg",
		},
		{
			name: "Bootstrap",
			img: "/images/stacks/bootstrap.svg",
		},

		{
			name: "Framer Motion",
			img: "/images/stacks/framer.svg",
		},

		{
			name: "Material UI",
			img: "/images/stacks/mui.svg",
		},

		{
			name: "Flutter",
			img: "/images/stacks/flutter.svg",
		},

		{
			name: "Dart",
			img: "/images/stacks/dart.svg",
		},
		{
			name: "Tailwind CSS",
			img: "/images/stacks/tailwind.svg",
		},
		{
			name: "Figma",
			img: "/images/stacks/figma.svg",
		},
	];

	return (
		<div
			style={{
				width: "100%",

				backgroundColor: "#E6F0F8",
				marginTop: "7%",
				borderTopRightRadius: "100px",
				borderBottomLeftRadius: "60px",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					marginLeft: "5%",
					marginRight: "5%",
					marginTop: "70px",
					marginBottom: "70px",
				}}
			>
				<h3 style={{ fontSize: lg ? "32px" : md ? "26px" : "22px" }}>
					My Current Stacks
				</h3>
				<p>
					These are the technologies that I have used and learned from my
					previous projects and courses.
				</p>

				<Grid
					container
					align='center'
					spacing={4}
					marginTop={"5%"}
					marginBottom={"10%"}
				>
					{stacks.map((s, index) => (
						<Grid item lg={3} md={3} xs={4} alignSelf='center'>
							<motion.div
								initial={{ x: 0, y: 0, opacity: 1 }}
								whileInView={{
									opacity: 1,
									translateX: lg
										? index < 4 || index > 7
											? [300, 0]
											: [-300, 0]
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
								transition={{ duration: 2.5 }}
								viewport={{ once: true, amount: 0.1 }}
							>
								<img
									key={index}
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
	);
};

export default MyStack;
