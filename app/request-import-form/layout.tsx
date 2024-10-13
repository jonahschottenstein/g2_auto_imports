import { FormProvider } from "@/context/request-import-form-context";
import { StepProvider } from "@/context/step-context";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Request Import Form",
	description:
		"Request an import by first selecting the desired make, model, and year of the vehicle you're interested in. Then, enter your contact information so we can discuss the import process and answer any questions you may have.",
};

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main className={`pt-header flex flex-col min-h-svh`}>
			<FormProvider>
				<StepProvider>{children}</StepProvider>
			</FormProvider>
		</main>
	);
};

export default Layout;
