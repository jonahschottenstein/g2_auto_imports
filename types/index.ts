import { ChangeEventHandler, MouseEventHandler } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { ZodType, z } from "zod";

export interface CustomButtonProps {
	title: string;
	type?: "button";
	value?: number | string;
	styles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CarCardProps {
	imageSrc: string;
	year: number;
	make: string;
	model: string;
	price: string;
	pageUrl: string;
}

export interface Car extends CarCardProps {
	id: string;
	featured: boolean;
}

export interface Make {
	id: number;
	name: string;
}

export interface Model {
	id: number;
	name: string;
	makeId: number;
}

export interface MakeModelSelectorProps {
	category: string;
	options: Make[] | Model[];
	stateValue: string;
	handleChange: ChangeEventHandler<HTMLInputElement>;
}

export interface Production {
	id: number;
	startYear: number;
	endYear: number;
	modelId: number;
}

export interface ProductionYearsSelectorProps {
	production: Production;
	stateValue: { startYear: number; endYear: number };
	handleClick: MouseEventHandler<HTMLButtonElement>;
}

export interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	// state: string;
}

export type ValidFieldNames = "firstName" | "lastName" | "email" | "phone";
// | "state";

export type FormFieldTypes = "text" | "email" | "tel";

export interface FormFieldProps {
	label: string;
	type: FormFieldTypes;
	inputId: string;
	name: ValidFieldNames;
	register: UseFormRegister<FormData>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
	rule?: string;
}

export const UserSchema: ZodType<FormData> = z.object({
	firstName: z
		.string({
			required_error: "required field",
		})
		.trim()
		.regex(/^[A-Za-z]{2,}$/)
		.min(2, { message: "First name is too short" }),
	lastName: z
		.string()
		.trim()
		.regex(/^[A-Za-z]{2,}$/)
		.min(2, { message: "Last name is too short" }),
	email: z.string().email(),
	phone: z.string().regex(/^(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/),
	// state: z.string(),
});

// TODO: Account for if someone goes by two names (e.g., John Michael LastName) or their last name is two words (e.g., FirstName Van Buren)
