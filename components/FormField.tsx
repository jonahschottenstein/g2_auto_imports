import React from "react";
import { FormFieldProps } from "@/types";

const FormField = ({
	label,
	type,
	inputId,
	name,
	register,
	error,
	valueAsNumber,
	rule,
}: FormFieldProps) => {
	const inputMode =
		inputId === "email"
			? "email"
			: inputId === "phone" || inputId === "zip-code"
			? "numeric"
			: "text";
	const afterLabelContent =
		type === "textarea"
			? "after:content-['(optional)']"
			: "after:content-['(required)']";

	return (
		<div className="form-field-container flex flex-col">
			{/* <label htmlFor={inputId} className="form-field-label"> */}
			<label
				htmlFor={inputId}
				className={`form-field-label ${afterLabelContent} after:ml-1 after:text-xs`}>
				{label}
				{/* {type === "textarea" ? `${label} ` : `* ${label}`} */}
			</label>
			{type === "textarea" ? (
				<textarea
					id={inputId}
					className="p-1 bg-gray-400"
					maxLength={500}
					{...register(name, { maxLength: 500 })}
				/>
			) : (
				<input
					type={type}
					inputMode={inputMode}
					id={inputId}
					className="p-1 bg-gray-400"
					{...register(name, { required: true, valueAsNumber })}
				/>
			)}
			{rule && <p className="rule text-xs">{rule}</p>}
			{error && <span className="error-message">{error.message}</span>}
		</div>
	);
};

export default FormField;
