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
	return (
		<div className="form-field-container flex flex-col">
			<label htmlFor={inputId} className="form-field-label">
				{label}
			</label>
			{type === "textarea" ? (
				<textarea
					id={inputId}
					className="p-1 bg-gray-400"
					{...register(name, { maxLength: 500 })}
				/>
			) : (
				<input
					type={type}
					id={inputId}
					className="p-1 bg-gray-400"
					{...register(name, { valueAsNumber })}
				/>
			)}
			{rule && <p className="rule text-xs">{rule}</p>}
			{error && <span className="error-message">{error.message}</span>}
		</div>
	);
};

export default FormField;
