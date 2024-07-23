import { FormContainerProps } from "@/types";
import React from "react";

const FormContainer = ({ h1, children }: FormContainerProps) => {
	return (
		<div className="form-container px-8 h-[calc(100%-92px)] flex flex-col min-w-96 max-w-lg w-full">
			<div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
				<h1 className="font-medium font-display text-black text-2xl uppercase sm:text-4xl ">
					{h1}
				</h1>
			</div>
			{children}
		</div>
	);
};

export default FormContainer;
