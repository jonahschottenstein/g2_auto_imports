import { ChangeEventHandler, MouseEventHandler } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { ZodType, z } from "zod";

/* Database */
export interface CarData {
	Make: string;
	Model: string;
	ProductionStartYear: number;
	ProductionEndYear: number;
}
/* Database */

/* Context */
export interface User {
	make: { id: number; name: string };
	model: { id: number; name: string; makeId: number };
	productionYears: { startYear: number; endYear: number };
	contactInfo: {
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		zipCode: string;
		comments?: string;
	};
}

export interface FormContextType {
	user: Partial<User>;
	updateUserData: (values: Partial<User>) => void;
}
/* Context */

/* Buttons/Links */
export interface CustomButtonProps {
	// title: string;
	type?: "button" | "submit";
	value?: number | string;
	styles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
}

export interface CustomLink {
	href: string;
	title: string;
}

export interface ProgressLink {
	href: string;
	isDisabled: boolean;
}
/* Buttons/Links */

/* Car */
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

export interface Production {
	id: number;
	startYear: number;
	endYear: number;
	modelId: number;
}
/* Car */

/* Form */
export interface FormStepperProps {
	steps: string[];
}

export interface FormContainerProps {
	h1: string;
	children: React.ReactNode;
}

export interface MakesFormProps {
	makes: Make[];
}

export interface ModelsFormProps {
	models: Model[];
}

export interface MakeModelSelectorProps {
	category: string;
	options: Make[] | Model[];
	stateValue: string;
	handleChange: ChangeEventHandler<HTMLInputElement>;
}

export interface ProductionFormProps {
	production: Production[];
}

export interface ProductionYearsSelectorProps {
	production: Production;
	stateValue: { startYear: number; endYear: number };
	handleClick: MouseEventHandler<HTMLButtonElement>;
}

export interface YearsDisplayProps {
	startYear: number;
	endYear: number;
}

export interface ContactFormData {
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
	register: UseFormRegister<ContactFormData>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
	rule?: string;
}

export const UserSchema: ZodType<ContactFormData> = z.object({
	firstName: z
		.string({
			required_error: "required field",
		})
		.trim()
		.min(1, { message: "Enter first name" })
		.regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,40}$/),
	lastName: z
		.string()
		.trim()
		.min(1, { message: "Enter last name" })
		.regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,40}$/),
	email: z.string().email(),
	phone: z.string().regex(/^(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/),
	zipCode: z
		.string()
		.regex(/^[0-9]{5}$/, { message: "Zip code must be exactly five digits" }),
	comments: z.string().max(500).optional(),
});

export interface FormReviewSectionProps {
	title: string;
	children: React.ReactNode[];
	href: string;
}

export interface FormReviewSectionRowProps {
	children: React.ReactNode[];
}
/* Form */
