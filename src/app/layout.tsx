import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Online Faotarah",
	description: "Mange all of your invoices on faotarah",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${nunitoSans.className} antialiased `}>{children}</body>
		</html>
	);
}
