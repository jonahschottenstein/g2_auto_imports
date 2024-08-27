import React from "react";
import { FormFieldProps } from "@/types";
import { FieldError } from "react-hook-form";

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

	const setInputStyles = (error: FieldError | undefined) =>
		error
			? "p-1 font-sans bg-transparent border-2 border-red-600 rounded-lg"
			: "p-1 font-sans bg-transparent border-2 border-gray-200 rounded-lg";

	return (
		<div className="form-field-container flex flex-col">
			{/* <label htmlFor={inputId} className="form-field-label"> */}
			<label
				htmlFor={inputId}
				className={`form-field-label font-sans ${afterLabelContent} after:ml-1 after:text-xs`}>
				{label}
				{/* {type === "textarea" ? `${label} ` : `* ${label}`} */}
			</label>
			{type === "textarea" ? (
				<textarea
					id={inputId}
					className="p-1 font-sans bg-transparent border-2 border-gray-200 rounded-lg"
					maxLength={500}
					{...register(name, { maxLength: 500 })}
					// TODO: Think I should set a max height/rows for textarea
				/>
			) : (
				<input
					type={type}
					inputMode={inputMode}
					id={inputId}
					// className="p-1 font-sans bg-transparent border-2 border-gray-200 rounded-lg"
					className={setInputStyles(error)}
					required
					{...register(name, { required: true, valueAsNumber })}
				/>
			)}
			{/* {rule && <p className="rule text-xs">{rule}</p>} */}
			{error && (
				<span className="error-message font-sans text-sm text-red-600">
					{error.message}
				</span>
			)}
		</div>
	);
};

export default FormField;
