import FormReview from "@/components/FormReview";
import FormStepper from "@/components/FormStepper";
import React from "react";

const page = () => {
	return (
		<div
			// className="form-page flex flex-col flex-1 items-center overflow-x-hidden overflow-y-auto"
			// className="form-page flex flex-col flex-1 items-center overflow-x-hidden overflow-y-clip"
			className="form-page flex flex-col flex-1 items-center overflow-x-hidden">
			<FormStepper steps={["Make", "Model", "Year(s)", "Contact", "Review"]} />
			<FormReview />
		</div>
	);
};

export default page;
