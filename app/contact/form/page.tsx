import StandAloneContactForm from "@/components/StandAloneContactForm";
import { FormContainerProps } from "@/types";
import React from "react";

const FormContainer2 = ({ h1, children }: FormContainerProps) => {
	return (
		<div className="form-container px-8 h-full flex flex-col min-w-96 max-w-lg w-full m-auto">
			<div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
				<h1 className="font-medium font-display text-black text-2xl uppercase sm:text-4xl ">
					{h1}
				</h1>
			</div>
			{children}
		</div>
	);
};

const page = () => {
	return (
		<div className="form-page w-full max-w-7xl px-4 md:px-6 lg:px-8 py-12 mx-auto min-h-[calc(100vh-72px)]">
			<FormContainer2 h1="Contact Us">
				<StandAloneContactForm />
			</FormContainer2>
		</div>
	);
};

export default page;
