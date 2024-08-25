import ContactForm from "@/components/ContactForm";
import FormStepper from "@/components/FormStepper";
import React from "react";

const page = () => {
	return (
		<div
			// className="form-page flex flex-col flex-1 items-center overflow-x-hidden overflow-y-auto"
			className="form-page flex flex-col flex-1 items-center overflow-x-hidden overflow-y-clip min-h-[calc(100vh-72px)] px-4 md:px-6 lg:px-8">
			<FormStepper steps={["Make", "Model", "Year(s)", "Contact", "Review"]} />
			<ContactForm />
		</div>
	);
};

export default page;
