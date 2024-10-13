import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { StaticImageData } from "next/image";
import { ChangeEventHandler, Key, MouseEventHandler, ReactNode } from "react";
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
		message?: string;
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

export interface XButtonProps {
	onClose: () => void;
	styles: string;
}
/* Buttons/Links */

/* Car */
export interface CarCardProps {
	href: string;
	image: string;
	name: string;
	features: string[];
	price: string;
	pathName: string;
	index?: number;
}

export interface CardGridProps {
	children:
		| React.ReactElement<CardGridChildProps>
		| React.ReactElement<CardGridChildProps>[];
}

export interface CardGridChildProps {
	pathName: string | null;
}

export interface Car {
	id: string;
	imageSrc: string;
	year: number;
	make: Make;
	model: Model;
	trim: string;
	vin: string;
	transmission: string;
	driveType: string;
	engine: string;
	mileage: string;
	exteriorColor: string;
	interiorColor: string;
	price: string;
	// mileage: string;
	features: string[];
	description: string;
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

/* CarPage */
export interface VehicleDetails {
	vehicleDetails: Car | undefined;
	images: string[];
}

export interface CarTableProps {
	vehicleDetails: Car;
	displayKeys: string[];
}

export interface ImageCarouselProps {
	images: string[];
	currentIndex: number;
	onClose: () => void;
}

export interface ImageGalleryModalProps {
	// images: ImageProps[];
	images: string[];
	onImageClick: (index: number) => void;
	onClose: () => void;
}

export interface ImageGridProps {
	// images: ImageProps[];
	images: string[];
	onImageClick: (index: number) => void;
	onLastImageClick: () => void;
	totalPhotosCount: number;
}

export interface ImageGridItemProps {
	src: string;
	alt: string;
	index: number;
	totalPhotosCount: number;
	onClick: MouseEventHandler<HTMLImageElement>;
}
/* CarPage */

/* ContactForm */
export interface FormFieldsContainerProps {
	children: React.ReactNode;
}

export interface FormField2 {
	key: string;
	label: string;
	type: FormFieldTypes;
	inputId: string;
	name: ValidFieldNames;
	register: UseFormRegister<ContactFormData>;
	error: FieldError | undefined;
}

export interface FormField3 {
	key: string;
	label?: string;
	type: FormFieldTypes2;
	inputId: string;
	name: ValidFieldNames2;
	register: UseFormRegister<ImportFormData>;
	error: FieldError | undefined;
}

export interface ButtonsGroupProps {
	styles: string;
	children: React.ReactNode;
}

export interface ContactForm2Props {
	buttonsGroupStyles: string;
	buttonsGroupChildren: React.ReactNode;
}
/* ContactForm */

/* PostContact */
export interface PostContactProps {
	userEmail: string;
}
/* PostContact */

/* StandAloneContactForm */
export interface StandAloneContactFormField {
	key: string;
	label: string;
	type: FormFieldTypes;
	inputId: string;
	name: ValidFieldNames;
	register: UseFormRegister<StandAloneContactFormData>;
	error: FieldError | undefined;
}

export interface FormFieldsContainerProps {
	children: React.ReactNode;
}
/* StandAloneContactForm */

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
	message?: string;
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
	message?: string | undefined;
	// contactInfo: ContactFormData | undefined;
}

export type ValidFieldNames =
	| "firstName"
	| "lastName"
	| "email"
	| "phone"
	| "zipCode"
	| "message";

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
	| "message";

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
	isMessageRequired?: boolean;
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
	isMessageRequired?: boolean;
}

export interface StandAloneContactFormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	zipCode: string;
	message: string;
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
	isMessageRequired?: boolean;
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
	message: z.string().trim().max(500).optional(),
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
	message: z.string().trim().max(500).optional(),
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
	message: z
		.string()
		.trim()
		.max(500)
		.regex(/^(?!\s*$).{1,}$/, {
			message: "Please enter your message.",
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

/* PostRequest */
export interface PostRequestProps {
	email: string;
}
/* PostRequest */

/* Logos */
export interface FullLogoProps {
	fillColor: "black" | "white";
}

export interface HalfLogoProps {
	fillColor: "black" | "white";
}
/* Logos */

/* Section */
export interface SectionProps {
	h2: string;
	children: React.ReactNode;
}
/* Section */

/* What Is Section */
export interface IconBlockProps {
	icon: IconProp;
	title: string;
	blurb: string;
}

export interface IconBlockArrayProps {
	iconBlocks: IconBlockProps[];
}
/* What Is Section */

/* About Section */
export interface AboutUsContentItemProps {
	key: Key;
	imageSrc: StaticImageData;
	imageAlt: string;
	copyElement: ReactNode;
	index: number;
}

export interface AboutContentItem {
	imageSrc: StaticImageData;
	imageAlt: string;
	copyElement: ReactNode;
}

export interface AboutUsContentProps {
	items: AboutContentItem[];
}
/* About Section */

/* Featured Inventory Section */
export interface FeaturedInventorySectionProps {
	featuredInventory: Car[];
}
/* Featured Inventory Section */

/* FAQ Section */
export interface FAQItemProps {
	question: string;
	answer: string;
}

export interface FAQContainerProps {
	children: React.ReactNode[];
}

export interface FAQContentProps {
	faqData: FAQItemProps[];
	faqCategory?: string;
}
/* FAQ Section */

/* Footer */
export interface ListItem {
	title: string;
	href: string;
	// ? Not sure if there is a more specific type for url
	icon?: React.ReactNode;
}

export interface FooterRowProps {
	listItems: ListItem[];
}
/* Footer */

/* Step Context */
export type Step = 1 | 2 | 3 | 4 | 5;

export interface StepContextType {
	step: number;
	updateStep: (value: Step) => void;
}
/* Step Context */

/* FormStepper */
export interface StepDisplayProps {
	stepNumber: Step;
}

export interface ItemStatusWrapperProps {
	styles: string;
	children: React.ReactNode;
}

export interface StepNameProps {
	stepName: string;
	// ? Should I be more specific and do "Make" | "Model" etc. ?
}

export interface FormStepperItemProps {
	status: string;
	// ? Should I be more specific and do "is-active" | "is-successful" etc. ?
	stepNumber: Step;
	stepName: string;
	// ? Should I be more specific and do "Make" | "Model" etc. ?
}

export type StepName = "Make" | "Model" | "Years" | "Contact";

export interface FormStepperProps2 {
	// steps: [StepName, StepName, StepName, StepName, StepName];
	steps: [StepName, StepName, StepName, StepName];
}
/* FormStepper */

/* NavBar */
export interface HamburgerMenuButtonProps {
	onClick: () => void;
}
/* NavBar */
