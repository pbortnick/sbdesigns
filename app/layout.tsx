import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";
import Footer from "./footer";

const cormorant = Cormorant_Garamond({
	variable: "--font-cormorant",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
});

const jost = Jost({
	variable: "--font-jost",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
	title: "SB Designs",
	description: `I work to have an understanding of my clients' style preferences which I use to create an environment where they feel happy, comfortable, and, most importantly, at home.`,
	openGraph: {
		images: ["https://www.sbdesigns516.com/og-image.png"],
	},
	twitter: {
		images: ["https://www.sbdesigns516.com/og-image.png"],
	},
	icons: {
		icon: "/favicon.ico",
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 3,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navigation />
			<html lang="en">
				<body className={`${cormorant.variable} ${jost.variable}`}>
					{children}
				</body>
				<Footer />
			</html>
		</>
	);
}
