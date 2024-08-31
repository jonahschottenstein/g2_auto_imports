import React from "react";

const NAV_BAR_HEIGHT = `72px`;
const FOOTER_HEIGHT = `24px`;

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <main className={`pt-[72px] h-auto flex flex-col`}>{children}</main>;
};
// ? Not sure I need to use FormProvider

export default Layout;
