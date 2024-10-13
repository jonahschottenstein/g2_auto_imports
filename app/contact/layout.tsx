import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Contact Us",
	description: "Contact us",
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
