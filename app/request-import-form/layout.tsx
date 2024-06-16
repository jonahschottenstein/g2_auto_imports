import { FormProvider } from "@/context/request-import-form-context";
import React from "react";

const NAV_BAR_HEIGHT = `72px`;

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main className={`pt-[${NAV_BAR_HEIGHT}]`}>
			<FormProvider>{children}</FormProvider>
		</main>
	);
};

export default Layout;
