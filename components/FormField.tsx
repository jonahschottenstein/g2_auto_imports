import React from "react";
import { FormFieldProps, FormFieldProps2 } from "@/types";
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
	isMessageRequired,
}: FormFieldProps) => {
	const inputMode =
		inputId === "email"
			? "email"
			: inputId === "phone" || inputId === "zip-code"
			? "numeric"
			: "text";

	const afterLabelContent =
		type === "textarea" && !isMessageRequired
			? "after:content-['(optional)']"
			: "after:content-['(required)']";

	const setInputStyles = (error: FieldError | undefined) =>
		error
			? "p-1 font-sans bg-transparent border-2 border-red-600 rounded-lg"
			: "p-1 font-sans bg-transparent border-2 border-gray-200 rounded-lg";

	return (
		<div className="form-field-container flex flex-col">
			<label
				htmlFor={inputId}
				className={`form-field-label font-sans ${afterLabelContent} after:ml-1 after:text-xs`}>
				{label}
			</label>
			{type === "textarea" ? (
				<textarea
					id={inputId}
					className={setInputStyles(error)}
					required={isMessageRequired}
					maxLength={500}
					{...register(name, { maxLength: 500 })}
					// TODO: Think I should set a max height/rows for textarea
				/>
			) : (
				<input
					type={type}
					inputMode={inputMode}
					id={inputId}
					className={setInputStyles(error)}
					required
					{...register(name, { required: true, valueAsNumber })}
				/>
			)}
			{error && (
				<span className="error-message font-sans text-sm text-red-600">
					{error.message}
				</span>
			)}
		</div>
	);
};

export default FormField;

export const FormField2 = ({
	label,
	type,
	inputId,
	name,
	register,
	error,
	valueAsNumber,
	rule,
	isMessageRequired,
}: FormFieldProps2) => {
	const inputMode =
		inputId === "email"
			? "email"
			: inputId === "phone" || inputId === "zip-code"
			? "numeric"
			: "text";
	const afterLabelContent =
		type === "textarea" && !isMessageRequired
			? "after:content-['(optional)']"
			: "after:content-['(required)']";

	const setInputStyles = (error: FieldError | undefined) =>
		error
			? "p-1 font-sans bg-transparent border-2 border-red-600 rounded-lg"
			: "p-1 font-sans bg-transparent border-2 border-gray-200 rounded-lg";

	return (
		<div
			className={
				type === "hidden"
					? "form-field-container hidden"
					: "form-field-container flex flex-col"
			}>
			{label && (
				<label
					htmlFor={inputId}
					className={`form-field-label font-sans ${afterLabelContent} after:ml-1 after:text-xs`}>
					{label}
				</label>
			)}
			{type === "textarea" ? (
				<textarea
					id={inputId}
					className={setInputStyles(error)}
					required={isMessageRequired}
					maxLength={500}
					{...register(name, { maxLength: 500 })}
					// TODO: Think I should set a max height/rows for textarea
				/>
			) : (
				<input
					type={type}
					inputMode={inputMode}
					id={inputId}
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
