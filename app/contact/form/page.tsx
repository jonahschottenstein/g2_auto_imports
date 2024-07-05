import { CustomButton } from "@/components";
import ContactForm, { ContactForm2 } from "@/components/ContactForm";
import { BackLink } from "@/components/CustomLinks";
import FormContainer from "@/components/FormContainer";
import { FormContainerProps } from "@/types";
import React from "react";

const FormContainer2 = ({ h1, children }: FormContainerProps) => {
	return (
		<div className="form-container px-8 h-full flex flex-col min-w-96 max-w-lg w-full">
			<h1 className="text-center text-2xl mt-8 mb-4">{h1}</h1>
			{children}
		</div>
	);
};

const page = () => {
	return (
		<div className="form-page flex flex-col flex-1 items-center overflow-x-hidden overflow-y-auto">
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
