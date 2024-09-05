import { FormProvider } from "@/context/request-import-form-context";
import { StepProvider } from "@/context/step-context";
import React from "react";

const NAV_BAR_HEIGHT = `72px`;
const FOOTER_HEIGHT = `24px`;

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		// <main className={`pt-[${NAV_BAR_HEIGHT}]`}>
		// <main className={`pt-[72px] h-[calc(100%-24px)] flex flex-col`}>
		// <main className={`pt-[72px] h-full min-h-full flex flex-col`}>
		<main className={`pt-[72px] flex flex-col min-h-svh`}>
			{/* <h1 className="text-center text-3xl text-bold mt-4">Request Import</h1> */}
			{/* <FormStepper steps={["Make", "Model", "Year(s)", "Contact", "Review"]} /> */}
			<FormProvider>
				<StepProvider>{children}</StepProvider>
			</FormProvider>
		</main>
	);
};

export default Layout;
