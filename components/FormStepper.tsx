import React from "react";

interface FormStepperProps {
	steps: string[];
}

const FormStepper = ({ steps }: FormStepperProps) => {
	return (
		<nav className="w-full px-8 my-8">
			<ol className="w-full flex justify-between">
				{steps.map((step) => (
					<li key={step}>{step}</li>
				))}
			</ol>
		</nav>
	);
};

export default FormStepper;
