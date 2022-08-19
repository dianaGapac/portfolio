import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import { Stack } from "@mui/system";

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
					height: "1600px",
					backgroundColor: "#E6F0F8",

					clipPath: "polygon(0 10%, 100% 0,100% 90%, 0 100%)",
					position: "relative",
					paddingBlock: "20%",
				}}
			>
				<Stack direction='row' style={{ justifyContent: "center" }} spacing={2}>
					<Stack direction='column' spacing={2}>
						<img src='/images/design-projects/hillary.svg' height='450px' />
						<img
							src='/images/design-projects/e-baryo-design.svg'
							height='450px'
						/>
					</Stack>

					<Stack direction='column' spacing={2} style={{ marginTop: "10%" }}>
						<img src='/images/design-projects/gogocharge.svg' height='450px' />
						<img src='/images/design-projects/da-gianni.svg' height='450px' />
					</Stack>
				</Stack>
			</div>
		</div>
	);
};

export default DesignProjects;
