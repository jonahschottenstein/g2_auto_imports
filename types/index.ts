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
	ariaLabel: string;
	isDisabled?: boolean;
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

export interface Car {
	id: string;
	imageSrc: string;
	year: number;
	make: Make;
	model: Model;
	price: string;
	mileage: string;
	features: string[];
	pageUrl: string;
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

export interface ImportFormData {
	carMake: string | undefined;
	carModel: string | undefined;
	productionYears: string | undefined;
	firstName: string | undefined;
	lastName: string | undefined;
	email: string | undefined;
	phone: string | undefined;
	zipCode: string | undefined;
	comments?: string | undefined;
	// contactInfo: ContactFormData | undefined;
}

export type ValidFieldNames =
	| "firstName"
	| "lastName"
	| "email"
	| "phone"
	| "zipCode"
	| "comments";

export type ValidFieldNames2 =
	| "productionYears"
	| "carMake"
	| "carModel"
	// | "contactInfo";
	| "firstName"
	| "lastName"
	| "email"
	| "phone"
	| "zipCode"
	| "comments";

export type FormFieldTypes = "text" | "email" | "tel" | "textarea";

export type FormFieldTypes2 = "text" | "email" | "tel" | "textarea" | "hidden";

export interface FormFieldProps {
	label: string;
	type: FormFieldTypes;
	inputId: string;
	name: ValidFieldNames;
	register:
		| UseFormRegister<ContactFormData>
		| UseFormRegister<StandAloneContactFormData>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
	rule?: string;
	areCommentsRequired?: boolean;
}

export interface FormFieldProps2 {
	label?: string;
	type: FormFieldTypes2;
	inputId: string;
	name: ValidFieldNames2;
	register: UseFormRegister<ImportFormData>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
	rule?: string;
	areCommentsRequired?: boolean;
}

export interface StandAloneContactFormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	zipCode: string;
	comments: string;
}

export interface StandAloneFormFieldProps {
	label: string;
	type: FormFieldTypes;
	inputId: string;
	name: ValidFieldNames;
	register: UseFormRegister<StandAloneContactFormData>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
	rule?: string;
	areCommentsRequired?: boolean;
}

export const UserSchema: ZodType<ContactFormData> = z.object({
	firstName: z
		.string({
			required_error: "required field",
			// TODO: Figure out if you want to include required_error. https://github.com/colinhacks/zod/issues/3114 says error message will only appear if the value is undefined, not an empty string.
		})
		.trim()
		.min(1, { message: "Enter first name" })
		.regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,40}$/, {
			message:
				"Please enter a valid first name. It should only contain letters.",
			// TODO: Determine if you want to make it only contain letters.
		}),
	lastName: z
		.string()
		.trim()
		.min(1, { message: "Enter last name" })
		.regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,40}$/, {
			message:
				"Please enter a valid last name. It should only contain letters.",
			// TODO: Determine if you want to make it only contain letters.
		}),
	email: z.string().trim().email({
		message:
			"Please enter a valid email address in the format: example@domain.com.",
	}),
	phone: z
		.string()
		.trim()
		.regex(/^(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/, {
			message:
				"Please enter a valid phone number, including area code. Only numbers, dashes, and parentheses are allowed.",
			// TODO: Figure out if you want to allow spaces. Currently, spaces are allowed.
		}),
	zipCode: z
		.string()
		.trim()
		.regex(/^[0-9]{5}$/, { message: "Please enter a valid 5-digit zip code." }),
	comments: z.string().trim().max(500).optional(),
});

export const UserSchema2: ZodType<ImportFormData> = z.object({
	carMake: z.string().min(1, { message: "Please enter a valid vehicle make." }),
	carModel: z
		.string()
		.min(1, { message: "Please enter a valid vehicle model." }),
	productionYears: z
		.string()
		.length(9)
		.regex(/^\d{4}-\d{4}$/, {
			message: "Please enter the years in the correct format.",
		}),
	// contactInfo: UserSchema,
	firstName: z
		.string({
			required_error: "required field",
			// TODO: Figure out if you want to include required_error. https://github.com/colinhacks/zod/issues/3114 says error message will only appear if the value is undefined, not an empty string.
		})
		.trim()
		.min(1, { message: "Enter first name" })
		.regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,40}$/, {
			message:
				"Please enter a valid first name. It should only contain letters.",
			// TODO: Determine if you want to make it only contain letters.
		}),
	lastName: z
		.string()
		.trim()
		.min(1, { message: "Enter last name" })
		.regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,40}$/, {
			message:
				"Please enter a valid last name. It should only contain letters.",
			// TODO: Determine if you want to make it only contain letters.
		}),
	email: z.string().trim().email({
		message:
			"Please enter a valid email address in the format: example@domain.com.",
	}),
	phone: z
		.string()
		.trim()
		.regex(/^(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/, {
			message:
				"Please enter a valid phone number, including area code. Only numbers, dashes, and parentheses are allowed.",
			// TODO: Figure out if you want to allow spaces. Currently, spaces are allowed.
		}),
	zipCode: z
		.string()
		.trim()
		.regex(/^[0-9]{5}$/, { message: "Please enter a valid 5-digit zip code." }),
	comments: z.string().trim().max(500).optional(),
});

export const ContactPageSchema: ZodType<ContactFormData> = z.object({
	firstName: z
		.string({
			required_error: "required field",
			// TODO: Figure out if you want to include required_error. https://github.com/colinhacks/zod/issues/3114 says error message will only appear if the value is undefined, not an empty string.
		})
		.trim()
		.min(1, { message: "Enter first name" })
		.regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,40}$/, {
			message:
				"Please enter a valid first name. It should only contain letters.",
			// TODO: Determine if you want to make it only contain letters.
		}),
	lastName: z
		.string()
		.trim()
		.min(1, { message: "Enter last name" })
		.regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,40}$/, {
			message:
				"Please enter a valid last name. It should only contain letters.",
			// TODO: Determine if you want to make it only contain letters.
		}),
	email: z.string().trim().email({
		message:
			"Please enter a valid email address in the format: example@domain.com.",
	}),
	phone: z
		.string()
		.trim()
		.regex(/^(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/, {
			message:
				"Please enter a valid phone number, including area code. Only numbers, dashes, and parentheses are allowed.",
			// TODO: Figure out if you want to allow spaces. Currently, spaces are allowed.
		}),
	zipCode: z
		.string()
		.trim()
		.regex(/^[0-9]{5}$/, { message: "Please enter a valid 5-digit zip code." }),
	comments: z
		.string()
		.trim()
		.max(500)
		.regex(/^(?!\s*$).{10,}$/, {
			message: "Please enter at least 10 characters.",
		}),
});

export interface FormReviewSectionProps {
	title: string;
	children: React.ReactNode[];
	href: string;
}

export interface FormReviewSectionRowProps {
	children: React.ReactNode[];
	href: string;
}
/* Form */
