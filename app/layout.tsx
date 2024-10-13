import type { Metadata } from "next";
import { Oswald, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components";

// import { GoogleAnalytics } from "@next/third-parties/google";

const oswald = Oswald({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-oswald",
});
const roboto_flex = Roboto_Flex({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto-flex",
});

export const metadata: Metadata = {
	title: {
		default: "G2 Auto Imports",
		template: "%s - G2 Auto Imports",
	},
	description:
		"You Pick the Car - We'll Handle the Rest. We'll source, import, title, and deliver your vehicle straight to your door.",
	twitter: {
		card: "summary_large_image",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${oswald.variable} ${roboto_flex.variable}`}>
				<NavBar />
				{children}
				<Footer />
			</body>
			{/* <GoogleAnalytics gaId="G-XYZ" /> */}
		</html>
	);
}

// TODO: Add gaID
