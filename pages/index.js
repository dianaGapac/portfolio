import { Box, Stack } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Cover from "../components/Cover";
import styles from "../styles/Home.module.css";

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
					content='Diana Gapac, web developer, UI/UX designer'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Cover />
			</main>
		</div>
	);
}
