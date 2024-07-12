import { FormProvider } from "@/context/request-import-form-context";
import React from "react";

const NAV_BAR_HEIGHT = `72px`;
const FOOTER_HEIGHT = `24px`;

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main className={`pt-[72px] h-full min-h-full flex flex-col`}>
			<FormProvider>{children}</FormProvider>
		</main>
	);
};
// ? Not sure I need to use FormProvider

export default Layout;
