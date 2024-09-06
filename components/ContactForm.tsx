"use client";

import {
	ContactFormData,
	ContactPageSchema,
	FormFieldTypes,
	FormFieldTypes2,
	ImportFormData,
	UserSchema,
	UserSchema2,
	ValidFieldNames,
	ValidFieldNames2,
} from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { FieldError, UseFormRegister, useForm } from "react-hook-form";
import FormField, { FormField2 } from "./FormField";
import {
	useForm as useFormContext,
	useFormUpdater,
} from "@/context/request-import-form-context";
import { BackLink } from "./CustomLinks";
import CustomButton from "./CustomButton";
import { usePathname, useRouter } from "next/navigation";
import FormContainer from "./FormContainer";
import emailjs from "@emailjs/browser";

// TODO: Think I need to make CustomButton accept children instead of title so I can pass svg to it

export const ContactPageContactForm = () => {
	const user = useFormContext();
	const updateUserData = useFormUpdater();
	const formRef = useRef<HTMLFormElement>(null);
	const router = useRouter();

	const values = user.contactInfo;
	// TODO: Figure out if you're supposed to use user.contactInfo

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<ContactFormData>({
		resolver: zodResolver(ContactPageSchema),
		values,
	});

	const sendEmail = (form: HTMLFormElement) => {
		console.log("SEND EMAIL");
		if (!formRef.current) return;
		console.log("SEND EMAIL 2");

		emailjs
			.sendForm("import_form_service", "import_form", form, {
				publicKey: "mGa2zHLRjc8S7ytXl",
			})
			.then(
				() => {
					console.log("SUCCESS");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	const onSubmit = async (data: ContactFormData) => {
		console.log("SUCCESS", data);

		try {
			const response = await axios.post("/api/form", data); // Make a POST request
			const { errors = {} } = response.data; // Destructure the 'errors' property from the response data
			console.log("ERRORS", errors);

			// Define a mapping between server-side field names and their corresponding client-side names
			const fieldErrorMapping: Record<string, ValidFieldNames> = {
				firstName: "firstName",
				lastName: "lastName",
				email: "email",
				phone: "phone",
				// state: "state",
				zipCode: "zipCode",
				comments: "comments",
			};

			// Find the first field with an error in the response data
			const fieldWithError = Object.keys(fieldErrorMapping).find(
				(field) => errors[field]
			);

			// If a field with an error is found, update the form error state using setError
			if (fieldWithError) {
				// Use the ValidFieldNames type to ensure the correct field names
				setError(fieldErrorMapping[fieldWithError], {
					type: "server",
					message: errors[fieldWithError],
				});
			} else {
				const data = {
					contactInfo: {
						firstName: (
							document.getElementById("first-name") as HTMLInputElement
						).value,
						lastName: (document.getElementById("last-name") as HTMLInputElement)
							.value,
						email: (document.getElementById("email") as HTMLInputElement).value,
						phone: (document.getElementById("phone") as HTMLInputElement).value,
						zipCode: (document.getElementById("zip-code") as HTMLInputElement)
							.value,
						comments: (
							document.getElementById("comments") as HTMLTextAreaElement
						).value,
					},
				};

				sessionStorage.setItem("contactInfo", JSON.stringify(data));

				router.push("/contact/post-contact");

				sendEmail(formRef.current as HTMLFormElement);
			}
		} catch (error) {
			console.log("ERROR", error);
			alert("Submitting form failed!");
		}
	};

	const formFieldsData: FormField2[] = [
		{
			key: "first-name",
			label: "First Name",
			type: "text",
			inputId: "first-name",
			name: "firstName",
			register: register,
			error: errors.firstName,
		},
		{
			key: "last-name",
			label: "Last Name",
			type: "text",
			inputId: "last-name",
			name: "lastName",
			register: register,
			error: errors.lastName,
		},
		{
			key: "email",
			label: "Email",
			type: "email",
			inputId: "email",
			name: "email",
			register: register,
			error: errors.email,
		},
		{
			key: "phone",
			label: "Phone",
			type: "tel",
			inputId: "phone",
			name: "phone",
			register: register,
			error: errors.phone,
		},
		{
			key: "zip-code",
			label: "Zip Code",
			type: "text",
			inputId: "zip-code",
			name: "zipCode",
			register: register,
			error: errors.zipCode,
		},
		{
			key: "comments",
			label: "Comments",
			type: "textarea",
			inputId: "comments",
			name: "comments",
			register: register,
			error: errors.comments,
		},
	];

	console.log("ERRORS", errors);

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmit(onSubmit)}
			className="contact-form flex flex-col h-[calc(100%-64px)] font-sans">
			<FormFieldsContainer>
				{formFieldsData.map((formFieldData: FormField2) => {
					return (
						<FormField
							key={formFieldData.inputId}
							label={formFieldData.label}
							type={formFieldData.type}
							inputId={formFieldData.inputId}
							name={formFieldData.name}
							register={formFieldData.register}
							error={formFieldData.error}
							areCommentsRequired={
								formFieldData.inputId === "comments" ? true : false
							}
						/>
					);
				})}
			</FormFieldsContainer>
			<div className="py-4">
				<CustomButton
					type="submit"
					styles="w-full justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
					ariaLabel="Submit">
					Submit
				</CustomButton>
			</div>
		</form>
	);
};

const ContactForm = () => {
	const user = useFormContext();
	const updateUserData = useFormUpdater();
	const router = useRouter();

	const values = user.contactInfo;
	console.log("u zer", user);
	console.log("values", values);
	console.log({ ...user.contactInfo });

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<ContactFormData>({
		resolver: zodResolver(UserSchema),
		values,
	});

	/* 	useEffect(() => {
		const storedUserData = sessionStorage.getItem("userData");
		const userData = storedUserData && JSON.parse(storedUserData);

		updateUserData(userData);
	}, []); */

	useEffect(() => {
		const storedUserData = sessionStorage.getItem("userData");
		const userData = storedUserData && JSON.parse(storedUserData);

		if (!userData?.make?.name || userData?.make?.id === 0) {
			console.log("NO MAKE");
			router.push("/request-import-form/step_1");
		} else if (!userData?.model?.name || userData?.model?.id === 0) {
			console.log("NO MODEL");
			router.push("/request-import-form/step_2");
		} else if (
			!userData?.productionYears?.startYear ||
			!userData?.productionYears?.endYear
		) {
			console.log("NO YEAR(S)");
			router.push("/request-import-form/step_3");
		} else {
			updateUserData(userData);
		}
	}, []);

	// TODO: Need to either figure out how to get reload to redirect user to step_1/home page or save data through reload

	const onSubmit = async (data: ContactFormData) => {
		console.log("SUCCESS", data);

		try {
			const response = await axios.post("/api/form", data); // Make a POST request
			const { errors = {} } = response.data; // Destructure the 'errors' property from the response data
			console.log("ERRORS", errors);

			// Define a mapping between server-side field names and their corresponding client-side names
			const fieldErrorMapping: Record<string, ValidFieldNames> = {
				firstName: "firstName",
				lastName: "lastName",
				email: "email",
				phone: "phone",
				// state: "state",
				zipCode: "zipCode",
				comments: "comments",
			};

			// Find the first field with an error in the response data
			const fieldWithError = Object.keys(fieldErrorMapping).find(
				(field) => errors[field]
			);

			// If a field with an error is found, update the form error state using setError
			if (fieldWithError) {
				// Use the ValidFieldNames type to ensure the correct field names
				setError(fieldErrorMapping[fieldWithError], {
					type: "server",
					message: errors[fieldWithError],
				});
			} else {
				const data = {
					contactInfo: {
						firstName: (
							document.getElementById("first-name") as HTMLInputElement
						).value,
						lastName: (document.getElementById("last-name") as HTMLInputElement)
							.value,
						email: (document.getElementById("email") as HTMLInputElement).value,
						phone: (document.getElementById("phone") as HTMLInputElement).value,
						zipCode: (document.getElementById("zip-code") as HTMLInputElement)
							.value,
						comments: (
							document.getElementById("comments") as HTMLTextAreaElement
						).value,
					},
				};
				const storedUserData = sessionStorage.getItem("userData");
				const userData = storedUserData && JSON.parse(storedUserData);
				const newUserData = {
					...userData,
					...data,
				};

				sessionStorage.setItem("userData", JSON.stringify({ ...newUserData }));

				updateUserData(data);

				router.push("/request-import-form/step_5");
			}
		} catch (error) {
			console.log("ERROR", error);
			alert("Submitting form failed!");
		}
	};

	const STEPPER_HEIGHT = "92px";
	const H1_HEIGHT = "64px";

	/* 
		main: take away height and min-height
		main > div: take away overflow-y
		
		form: height: auto
	*/

	return (
		<FormContainer h1="Contact Details">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="request-import-form contact-form flex flex-col h-[calc(100%-64px)]">
				{/* Removing overflow-y: auto from contact-form-fields fixed scroll problem, but not sure if I should also set request-import-form height: auto */}
				<div className="contact-form-fields flex flex-col gap-4 flex-1">
					<FormField
						label="First Name"
						type="text"
						inputId="first-name"
						name="firstName"
						register={register}
						error={errors.firstName}
						// rule="Must be at least two letters"
					/>
					<FormField
						label="Last Name"
						type="text"
						inputId="last-name"
						name="lastName"
						register={register}
						error={errors.lastName}
						// rule="Must be at least two letters"
					/>
					<FormField
						label="Email"
						type="email"
						inputId="email"
						name="email"
						register={register}
						error={errors.email}
					/>
					<FormField
						label="Phone"
						type="tel"
						inputId="phone"
						name="phone"
						register={register}
						error={errors.phone}
						rule="(###) ###-####"
					/>
					<FormField
						label="Zip Code"
						type="text"
						inputId="zip-code"
						name="zipCode"
						register={register}
						error={errors.zipCode}
						rule="#####"
					/>
					<FormField
						label="Comments"
						type="textarea"
						inputId="comments"
						name="comments"
						register={register}
						error={errors.comments}
					/>
				</div>
				<div className="form-nav-container w-full flex justify-around p-4">
					<BackLink href="/request-import-form/step_3" isDisabled={false} />
					<CustomButton
						// title="Submit"
						// TODO: Need to have CustomButton take children so you can pass the svg arrow
						type="submit"
						styles="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
						ariaLabel="Submit">
						Next
						<svg
							className="flex-shrink-0 size-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<path d="M5 12h14"></path>
							<path d="m12 5 7 7-7 7"></path>
						</svg>
					</CustomButton>
					{/* <NextLink href="/request-import-form/step_5" isDisabled={false} /> */}
				</div>
			</form>
		</FormContainer>
	);
};

export default ContactForm;

/* 
	- contact-form-fields could be component that accepts children

*/

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

export const FormFieldsContainer = ({ children }: FormFieldsContainerProps) => {
	return (
		// <div className="form-fields-container flex flex-col gap-4 flex-1 overflow-y-auto">
		<div className="form-fields-container flex flex-col gap-4 flex-1 ">
			{/* {Array.isArray(children) &&
				children?.map((formField: FormField2) => {
					return (
						<FormField
							key={formField.inputId}
							label={formField.label}
							type={formField.type}
							inputId={formField.inputId}
							name={formField.name}
							register={formField.register}
							error={formField.error}
						/>
					);
				})} */}
			{children}
		</div>
	);
};
// Think this should just have children ^

export interface ButtonsGroupProps {
	styles: string;
	children: React.ReactNode;
}

export const ButtonsGroup = ({ styles, children }: ButtonsGroupProps) => {
	return <div className={`buttons-group ${styles}`}>{children}</div>;
};

export interface ContactForm2Props {
	buttonsGroupStyles: string;
	buttonsGroupChildren: React.ReactNode;
}

export const ContactForm2 = ({
	buttonsGroupStyles,
	buttonsGroupChildren,
}: ContactForm2Props) => {
	const user = useFormContext();
	const updateUserData = useFormUpdater();
	const formRef = useRef<HTMLFormElement>(null);
	const router = useRouter();
	const pathName = usePathname();

	const values = user.contactInfo;

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<ContactFormData>({
		resolver: zodResolver(UserSchema),
		values,
	});

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!formRef.current) return;

		emailjs
			.sendForm("import_form_service", "import_form", formRef.current, {
				publicKey: "mGa2zHLRjc8S7ytXl",
			})
			.then(
				() => {
					console.log("SUCCESS");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	const onSubmitImportForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formStepper = document.querySelector("div.form-stepper");
		const stepFiveItem = document.querySelector("li.form-stepper-item-5");

		stepFiveItem?.classList.add("success");
		formStepper?.classList.add("completed");

		router.push("/request-import-form/post-request");

		sendEmail(e);
	};

	const onSubmitContactForm = async (data: ContactFormData) => {};

	const onSubmit = async (data: ContactFormData) => {
		console.log("SUCCESS", data);
		console.log("PATHNAME", pathName);

		try {
			const response = await axios.post("/api/form", data); // Make a POST request
			const { errors = {} } = response.data; // Destructure the 'errors' property from the response data
			console.log("ERRORS", errors);

			// Define a mapping between server-side field names and their corresponding client-side names
			const fieldErrorMapping: Record<string, ValidFieldNames> = {
				firstName: "firstName",
				lastName: "lastName",
				email: "email",
				phone: "phone",
				// state: "state",
				zipCode: "zipCode",
				comments: "comments",
			};

			// Find the first field with an error in the response data
			const fieldWithError = Object.keys(fieldErrorMapping).find(
				(field) => errors[field]
			);

			// If a field with an error is found, update the form error state using setError
			if (fieldWithError) {
				// Use the ValidFieldNames type to ensure the correct field names
				setError(fieldErrorMapping[fieldWithError], {
					type: "server",
					message: errors[fieldWithError],
				});
			} else {
				const data = {
					contactInfo: {
						firstName: (
							document.getElementById("first-name") as HTMLInputElement
						).value,
						lastName: (document.getElementById("last-name") as HTMLInputElement)
							.value,
						email: (document.getElementById("email") as HTMLInputElement).value,
						phone: (document.getElementById("phone") as HTMLInputElement).value,
						zipCode: (document.getElementById("zip-code") as HTMLInputElement)
							.value,
						comments: (
							document.getElementById("comments") as HTMLTextAreaElement
						).value,
					},
				};

				if (pathName === "/request-import-form/step_4") {
					const storedUserData = sessionStorage.getItem("userData");
					const userData = storedUserData && JSON.parse(storedUserData);
					const newUserData = {
						...userData,
						...data,
					};

					sessionStorage.setItem(
						"userData",
						JSON.stringify({ ...newUserData })
					);

					updateUserData(data);

					router.push("/request-import-form/step_5");
				} else if (pathName === "/contact/form") {
					sessionStorage.setItem("contactInfo", JSON.stringify(data));

					router.push("/contact/post-contact");
				}

				// sendEmail(e);

				// if (pathName !== "/contact/form") {
				// if (pathName === "/request-import-form/step_4") {
				// 	const data = {
				// 		contactInfo: {
				// 			firstName: (
				// 				document.getElementById("first-name") as HTMLInputElement
				// 			).value,
				// 			lastName: (
				// 				document.getElementById("last-name") as HTMLInputElement
				// 			).value,
				// 			email: (document.getElementById("email") as HTMLInputElement)
				// 				.value,
				// 			phone: (document.getElementById("phone") as HTMLInputElement)
				// 				.value,
				// 			zipCode: (document.getElementById("zip-code") as HTMLInputElement)
				// 				.value,
				// 			comments: (
				// 				document.getElementById("comments") as HTMLTextAreaElement
				// 			).value,
				// 		},
				// 	};
				/* const storedUserData = sessionStorage.getItem("userData");
					const userData = storedUserData && JSON.parse(storedUserData);
					const newUserData = {
						...userData,
						...data,
					};

					sessionStorage.setItem(
						"userData",
						JSON.stringify({ ...newUserData })
					); */

				// 	updateUserData(data);

				// 	router.push("/request-import-form/step_5");
				// } else {
				// 	console.log("Go to post-contact page");
				// 	console.log("Send emails");
				// 	router.push("/contact/post-contact");
				// }
			}
		} catch (error) {
			console.log("ERROR", error);
			alert("Submitting form failed!");
		}
	};

	const formFieldsData: FormField2[] = [
		{
			key: "first-name",
			label: "First Name",
			type: "text",
			inputId: "first-name",
			name: "firstName",
			register: register,
			error: errors.firstName,
		},
		{
			key: "last-name",
			label: "Last Name",
			type: "text",
			inputId: "last-name",
			name: "lastName",
			register: register,
			error: errors.lastName,
		},
		{
			key: "email",
			label: "Email",
			type: "email",
			inputId: "email",
			name: "email",
			register: register,
			error: errors.email,
		},
		{
			key: "phone",
			label: "Phone",
			type: "tel",
			inputId: "phone",
			name: "phone",
			register: register,
			error: errors.phone,
		},
		{
			key: "zip-code",
			label: "Zip Code",
			type: "text",
			inputId: "zip-code",
			name: "zipCode",
			register: register,
			error: errors.zipCode,
		},
		{
			key: "comments",
			label: "Comments",
			type: "textarea",
			inputId: "comments",
			name: "comments",
			register: register,
			error: errors.comments,
		},
	];
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="contact-form flex flex-col h-[calc(100%-64px)] font-sans">
			<FormFieldsContainer>
				{formFieldsData.map((formFieldData: FormField2) => {
					return (
						<FormField
							key={formFieldData.inputId}
							label={formFieldData.label}
							type={formFieldData.type}
							inputId={formFieldData.inputId}
							name={formFieldData.name}
							register={formFieldData.register}
							error={formFieldData.error}
						/>
					);
				})}
			</FormFieldsContainer>
			<ButtonsGroup styles={buttonsGroupStyles}>
				{buttonsGroupChildren}
			</ButtonsGroup>
		</form>
	);
};

export const ContactForm3 = () => {
	const user = useFormContext();
	const updateUserData = useFormUpdater();
	const formRef = useRef<HTMLFormElement>(null);
	const router = useRouter();

	const values = {
		carMake: user.make?.name,
		carModel: user.model?.name,
		productionYears: `${user.productionYears?.startYear}-${user.productionYears?.endYear}`,
		firstName: user.contactInfo?.firstName,
		lastName: user.contactInfo?.lastName,
		email: user.contactInfo?.email,
		phone: user.contactInfo?.phone,
		zipCode: user.contactInfo?.zipCode,
		comments: user.contactInfo?.comments,
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<ImportFormData>({
		resolver: zodResolver(UserSchema2),
		values,
	});

	useEffect(() => {
		const storedUserData = sessionStorage.getItem("userData");
		const userData = storedUserData && JSON.parse(storedUserData);

		if (!userData?.make?.name || userData?.make?.id === 0) {
			console.log("NO MAKE");
			router.push("/request-import-form/step_1");
		} else if (!userData?.model?.name || userData?.model?.id === 0) {
			console.log("NO MODEL");
			router.push("/request-import-form/step_2");
		} else if (
			!userData?.productionYears?.startYear ||
			!userData?.productionYears?.endYear
		) {
			console.log("NO YEAR(S)");
			router.push("/request-import-form/step_3");
		} else {
			updateUserData(userData);
		}
	}, []);

	const sendEmail = (form: HTMLFormElement) => {
		if (!formRef.current) return;

		emailjs
			.sendForm("import_form_service", "import_form", form, {
				publicKey: "mGa2zHLRjc8S7ytXl",
			})
			.then(
				() => {
					console.log("SUCCESS");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	const onSubmit = async (data: ImportFormData) => {
		console.log("SUCCESS", data);

		try {
			const response = await axios.post("/api/form", data); // Make a POST request
			const { errors = {} } = response.data; // Destructure the 'errors' property from the response data
			console.log("ERRORS", errors);

			// Define a mapping between server-side field names and their corresponding client-side names
			const fieldErrorMapping: Record<string, ValidFieldNames2> = {
				productionYears: "productionYears",
				carMake: "carMake",
				carModel: "carModel",
				// contactInfo: "contactInfo",
				firstName: "firstName",
				lastName: "lastName",
				email: "email",
				phone: "phone",
				zipCode: "zipCode",
				comments: "comments",
			};

			// Find the first field with an error in the response data
			const fieldWithError = Object.keys(fieldErrorMapping).find(
				(field) => errors[field]
			);

			// If a field with an error is found, update the form error state using setError
			if (fieldWithError) {
				// Use the ValidFieldNames type to ensure the correct field names
				setError(fieldErrorMapping[fieldWithError], {
					type: "server",
					message: errors[fieldWithError],
				});
			} else {
				const data = {
					contactInfo: {
						firstName: (
							document.getElementById("first-name") as HTMLInputElement
						).value,
						lastName: (document.getElementById("last-name") as HTMLInputElement)
							.value,
						email: (document.getElementById("email") as HTMLInputElement).value,
						phone: (document.getElementById("phone") as HTMLInputElement).value,
						zipCode: (document.getElementById("zip-code") as HTMLInputElement)
							.value,
						comments: (
							document.getElementById("comments") as HTMLTextAreaElement
						).value,
					},
				};
				const storedUserData = sessionStorage.getItem("userData");
				const userData = storedUserData && JSON.parse(storedUserData);
				const newUserData = {
					...userData,
					...data,
				};

				sessionStorage.setItem("userData", JSON.stringify({ ...newUserData }));

				updateUserData(data);

				/* const formStepper = document.querySelector("div.form-stepper");
				const stepFourItem = document.querySelector("li.form-stepper-item-4");

				stepFourItem?.classList.add("success");
				formStepper?.classList.add("completed"); */

				router.push("/request-import-form/post-request");

				sendEmail(formRef.current as HTMLFormElement);
			}
		} catch (error) {
			console.log("ERROR", error);
			alert("Submitting form failed!");
		}
	};

	const formFieldsData: FormField3[] = [
		{
			key: "production-years",
			type: "hidden",
			inputId: "production-years",
			name: "productionYears",
			register: register,
			error: errors.productionYears,
		},
		{
			key: "car-make",
			type: "hidden",
			inputId: "car-make",
			name: "carMake",
			register: register,
			error: errors.firstName,
		},
		{
			key: "car-model",
			type: "hidden",
			inputId: "car-model",
			name: "carModel",
			register: register,
			error: errors.firstName,
		},
		{
			key: "first-name",
			label: "First Name",
			type: "text",
			inputId: "first-name",
			name: "firstName",
			register: register,
			error: errors.firstName,
		},
		{
			key: "last-name",
			label: "Last Name",
			type: "text",
			inputId: "last-name",
			name: "lastName",
			register: register,
			error: errors.lastName,
		},
		{
			key: "email",
			label: "Email",
			type: "email",
			inputId: "email",
			name: "email",
			register: register,
			error: errors.email,
		},
		{
			key: "phone",
			label: "Phone",
			type: "tel",
			inputId: "phone",
			name: "phone",
			register: register,
			error: errors.phone,
		},
		{
			key: "zip-code",
			label: "Zip Code",
			type: "text",
			inputId: "zip-code",
			name: "zipCode",
			register: register,
			error: errors.zipCode,
		},
		{
			key: "comments",
			label: "Comments",
			type: "textarea",
			inputId: "comments",
			name: "comments",
			register: register,
			error: errors.comments,
		},
	];

	return (
		<FormContainer h1="Contact Details">
			<form
				ref={formRef}
				onSubmit={handleSubmit(onSubmit)}
				className="request-import-form contact-form flex flex-col h-[calc(100%-64px)] font-sans">
				<FormFieldsContainer>
					{formFieldsData.map((formFieldData: FormField3) => {
						return (
							<FormField2
								key={formFieldData.inputId}
								label={formFieldData?.label}
								type={formFieldData.type}
								inputId={formFieldData.inputId}
								name={formFieldData.name}
								register={formFieldData.register}
								error={formFieldData.error}
								areCommentsRequired={false}
							/>
						);
					})}
				</FormFieldsContainer>
				<div className="py-4">
					<CustomButton
						type="submit"
						styles="w-full justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
						ariaLabel="Submit">
						Submit
					</CustomButton>
				</div>
			</form>
		</FormContainer>
	);
};
