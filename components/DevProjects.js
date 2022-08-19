import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Stack } from "@mui/material";
import EBaryo from "./EBaryo";
import Sneaky from "./Sneaky";
import GogoCharge from "./GogoCharge";
import Reserv from "./Reserv";

const DevProjects = () => {
	const sm = useMediaQuery("(min-width:300px)");
	const md = useMediaQuery("(min-width:600px)");
	const lg = useMediaQuery("(min-width:900px)");
	return (
		<div>
			<div
				style={{
					marginTop: lg ? "80px" : md ? "60px" : "50px",
					marginBottom: "8%",
					marginLeft: "10%",
				}}
			>
				<h3 style={{ fontSize: lg ? "32px" : md ? "26px" : "22px" }}>
					Development Projects
				</h3>

				<Stack direction='row'>
					<p
						style={{
							fontSize: lg ? "18px" : md ? "16px" : "14px",
							marginRight: "10%",
						}}
					>
						These are the development projects that I’ve made during my college
						days and throughout my internship.
					</p>
					<img
						style={{ position: "absolute", right: "0px" }}
						src='/images/round-dots-half-left.svg'
						height={lg ? "180px" : md ? "140px" : "90px"}
					/>
				</Stack>
			</div>

			<EBaryo />
			<Sneaky />
			<GogoCharge />
			<Reserv />
		</div>
	);
};

export default DevProjects;
