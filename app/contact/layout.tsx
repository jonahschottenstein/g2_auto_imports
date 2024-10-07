import { Metadata } from "next";
import React from "react";

const NAV_BAR_HEIGHT = `72px`;
const FOOTER_HEIGHT = `24px`;

export const metadata: Metadata = {
	title: "Contact Us",
};

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main className={`pt-header flex flex-col min-h-svh`}>{children}</main>
	);
};
// ? Not sure I need to use FormProvider

export default Layout;
