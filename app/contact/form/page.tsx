import { CustomButton } from "@/components";
import ContactForm, { ContactForm2 } from "@/components/ContactForm";
import { BackLink } from "@/components/CustomLinks";
import FormContainer from "@/components/FormContainer";
import { FormContainerProps } from "@/types";
import React from "react";

const FormContainer2 = ({ h1, children }: FormContainerProps) => {
	return (
		<div className="form-container px-8 h-full flex flex-col min-w-96 max-w-lg w-full m-auto">
			<div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
				<h1 className="font-medium font-display text-black text-2xl uppercase sm:text-4xl dark:text-white">
					{h1}
				</h1>
			</div>
			{children}
		</div>
	);
};

const page = () => {
	return (
		// <div className="form-page flex flex-col flex-1 items-center overflow-x-hidden overflow-y-auto">
		<div className="form-page w-full max-w-7xl px-4 md:px-6 lg:px-8 py-12 lg:py-24 mx-auto min-h-[calc(100vh-72px)]">
			{/* <ContactForm /> */}
			<FormContainer2 h1="Contact Us">
				<ContactForm2
					buttonsGroupStyles="py-4"
					buttonsGroupChildren={
						<CustomButton
							// title="Submit"
							// TODO: Need to have CustomButton take children so you can pass the svg arrow
							type="submit"
							styles="w-full justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
							Submit
						</CustomButton>
					}
				/>
			</FormContainer2>
		</div>
	);
};

export default page;
