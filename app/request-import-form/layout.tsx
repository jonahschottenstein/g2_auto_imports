import { FormProvider } from "@/context/request-import-form-context";
import React from "react";

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main>
			<FormProvider>{children}</FormProvider>
		</main>
	);
};

export default Layout;
