import { ChangeEventHandler, MouseEventHandler } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { ZodType, z } from "zod";

export interface CustomButtonProps {
	// title: string;
	type?: "button" | "submit";
	value?: number | string;
	styles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
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

export interface FormContainerProps {
	h1: string;
	children: React.ReactNode;
}

export interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	zipCode: string;
	comments?: string;
}

export type ValidFieldNames =
	| "firstName"
	| "lastName"
	| "email"
	| "phone"
	| "zipCode"
	| "comments";

export type FormFieldTypes = "text" | "email" | "tel" | "textarea";

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
		.min(1, { message: "Enter first name" }),
	// .regex(/^[A-Za-z]{1,}$/)
	// .min(2, { message: "First name is too short" })
	lastName: z.string().trim().min(1, { message: "Enter last name" }),
	// .regex(/^[A-Za-z]{1,}$/)
	// .min(2, { message: "Last name is too short" })
	email: z.string().email(),
	phone: z.string().regex(/^(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/),
	zipCode: z
		.string()
		.length(5)
		.regex(/^[0-9]{5}$/),
	comments: z.string().max(500).optional(),
	// TODO: Make comments optional and everything else required
});

// TODO: Account for if someone goes by two names (e.g., John Michael LastName) or their last name is two words (e.g., FirstName Van Buren)
