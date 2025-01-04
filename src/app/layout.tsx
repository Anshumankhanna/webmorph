import type { Metadata } from "next";
import localFont from "next/font/local";
import ApiContext from "@/context/ApiContext";
import "./globals.css";
import Background from "@/components/Background";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "WebMorph",
	description: "A Mistral AI Application that helps you visualize the sites better",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
			>
				<ApiContext>
					<Background />
					{children}
				</ApiContext>
			</body>
		</html>
	);
}
