import { FormContainerProps } from "@/types";
import React from "react";

const FormContainer = ({ h1, children }: FormContainerProps) => {
	return (
		<div className="form-container px-8 h-[calc(100%-92px)] flex flex-col min-w-96 max-w-lg w-full">
			<h1 className="text-center text-2xl mb-4">{h1}</h1>
			{children}
		</div>
	);
};

export default FormContainer;
