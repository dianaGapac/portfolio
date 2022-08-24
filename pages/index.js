import { Box, Stack } from "@mui/system";
import Head from "next/head";
import Cover from "../components/Cover";
import Axios from "axios";
// import fileDownload from "js-file-download";
import { Button, Grid } from "@mui/material";
import AboutMe from "../components/AboutMe";
import MyStack from "../components/MyStacks";
import DevProjects from "../components/DevProjects";
import DesignProjects from "../components/DesignProjects";
import Footer from "../components/Footer";
import ContactMe from "../components/ContactMe";

export default function Home() {
	const myLoader = ({ src, width, quality }) => {
		return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
	};

	return (
		<div>
			<Head>
				<title>Diana Gapac</title>
				<meta
					name='Diana Gapac is a web developer, graduated from Technological University of the Philippines'
					content='Diana Gapac, Diana Rose Gapac, Diana Rose Gapac portfolio, web developer, UI/UX designer'
				/>
				<link rel='icon' href='/dg-logo.ico' />
			</Head>

			<main>
				<Stack direction='column'>
					<Grid item xs={12}>
						<Cover />
					</Grid>

					<Grid item xs={12}>
						<AboutMe />
					</Grid>

					<Grid item xs={12}>
						<MyStack />
					</Grid>

					<Grid item xs={12}>
						<DevProjects />
					</Grid>

					<Grid item xs={12}>
						<DesignProjects />
					</Grid>

					<Grid id='contact-form' item xs={12}>
						<ContactMe />
					</Grid>

					<Grid id='footer' item xs={12}>
						<Footer />
					</Grid>
				</Stack>
			</main>
		</div>
	);
}
