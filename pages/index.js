import { Box, Stack } from "@mui/system";
import Head from "next/head";
import Cover from "../components/Cover";
import Axios from "axios";
// import fileDownload from "js-file-download";
import { Button, Grid } from "@mui/material";
import AboutMe from "../components/AboutMe";

export default function Home() {
	const myLoader = ({ src, width, quality }) => {
		return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
	};
	// const download = (e) => {
	// 	Axios({
	// 		url: "http://localhost:3000",
	// 		method: "GET",
	// 		responseType: "blob",
	// 	}).then((res) => {
	// 		fileDownload(res.data, "Gapac-DianaRose.pdf");
	// 	});
	// };
	return (
		<div>
			<Head>
				<title>Diana Gapac</title>
				<meta
					name='Diana Gapac is a web developer, graduated from Technological University of the Philippines'
					content='Diana Gapac, web developer, UI/UX designer'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Stack direction='column'>
					<Grid item xs={12}>
						<Cover />
					</Grid>

					<Grid item>
						<AboutMe xs={12} />
					</Grid>
				</Stack>
			</main>
		</div>
	);
}
