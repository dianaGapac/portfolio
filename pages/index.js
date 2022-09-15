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
				<meta data-n-head='1' charset='utf-8' />
				<meta
					data-n-head='1'
					data-hid='description'
					name='description'
					content='UI/UX Designer, Fullstack Web developer from Manila, Philippines, Diana Gapac, Diana Rose Gapac, Diana Rose Gapac portfolio, web developer, UI/UX designer'
				/>
				<meta
					data-n-head='1'
					data-hid='apple-mobile-web-app-capable'
					name='apple-mobile-web-app-capable'
					content='yes'
				/>

				<meta
					data-n-head='1'
					data-hid='mobile-web-app-capable'
					name='mobile-web-app-capable'
					content='yes'
				/>

				<meta
					data-n-head='1'
					data-hid='og:title'
					property='og:title'
					content='Diana Gapac | Portfolio'
				/>

				<meta
					data-n-head='1'
					data-hid='og:type'
					property='og:type'
					content='portfolio'
				/>

				<meta
					data-n-head='1'
					data-hid='og:url'
					property='og:url'
					content='https://diana-gapac.ml/'
				/>

				<meta
					data-n-head='1'
					data-hid='og:image'
					property='og:image'
					content='/seo-cover.jpg'
				/>

				<meta
					data-n-head='1'
					data-hid='og:description'
					property='og:description'
					content='UI/UX Designer, Fullstack Web developer from Manila, Philippines, Diana Rose Gapac'
				/>

				<meta
					data-n-head='1'
					data-hid='og:site_name'
					property='og:site_name'
					content='Diana Gapac| Portfolio'
				/>

				<meta
					data-n-head='1'
					data-hid='twitter:card'
					name='twitter:card'
					content='summary_large_image'
				/>

				<meta
					data-n-head='1'
					data-hid='twitter:title'
					name='twitter:title'
					content='Diana Gapac | Portfolio'
				/>

				{/* <meta data-n-head="1" data-hid="twitter:site" name="twitter:site" content="@_christop_"> </meta>

				<meta data-n-head="1" data-hid="twitter:site" name="twitter:site" content="@_christop_"> </meta>
				<meta data-n-head="1" data-hid="twitter:image" name="twitter:image" content="/seo-cover.jpg"> </meta>
				<meta data-n-head="1" data-hid="twitter:creator" name="twitter:creator" content="@_christop_"> </meta> */}
				<meta
					data-n-head='1'
					data-hid='itemProp:name'
					itemProp='name'
					content='Diana Gapac| Portfolio'
				/>

				<meta
					data-n-head='1'
					data-hid='itemProp:image'
					itemProp='image'
					content='/topzdev-logo.svg'
				/>

				<meta
					data-n-head='1'
					data-hid='apple-mobile-web-app-title'
					name='apple-mobile-web-app-title'
					content='Diana Gapac | Portfolio'
				/>

				{/* <meta
					description='Diana Gapac is a web developer, graduated from Technological University of the Philippines'
					content='Diana Gapac, Diana Rose Gapac, Diana Rose Gapac portfolio, web developer, UI/UX designer'
				/> */}

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
