import { Footer } from "@/Components/Footer";
import { Navbar } from "@/Components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	//console.log(pageProps);
	return (
		<>
			<Navbar pageType={pageProps?.pageType} />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
