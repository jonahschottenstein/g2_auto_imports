"use client";

import {
	ContactPageSchema,
	FormFieldsContainerProps,
	FormFieldTypes,
	StandAloneContactFormData,
	StandAloneContactFormField,
	ValidFieldNames,
} from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useRef } from "react";
import { FieldError, UseFormRegister, useForm } from "react-hook-form";
import FormField from "./FormField";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

export const FormFieldsContainer = ({ children }: FormFieldsContainerProps) => {
	return (
		<div className="form-fields-container flex flex-col gap-4 flex-1 ">
			{children}
		</div>
	);
};

const StandAloneContactForm = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const router = useRouter();

	// TODO: Figure out if you're supposed to use user.contactInfo

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<StandAloneContactFormData>({
		resolver: zodResolver(ContactPageSchema),
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

	const onSubmit = async (data: StandAloneContactFormData) => {
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
				zipCode: "zipCode",
				message: "message",
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
				const userEmail = (document.getElementById("email") as HTMLInputElement)
					.value;

				router.push(`/contact/post-contact/?email=${userEmail}`);

				sendEmail(formRef.current as HTMLFormElement);
			}
		} catch (error) {
			console.log("ERROR", error);
			alert("Submitting form failed!");
		}
	};

	const formFieldsData: StandAloneContactFormField[] = [
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
			key: "message",
			label: "Message",
			type: "textarea",
			inputId: "message",
			name: "message",
			register: register,
			error: errors.message,
		},
	];

	console.log("ERRORS", errors);

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmit(onSubmit)}
			className="contact-form flex flex-col h-[calc(100%-64px)] font-sans">
			<FormFieldsContainer>
				{formFieldsData.map((formFieldData: StandAloneContactFormField) => {
					return (
						<FormField
							key={formFieldData.inputId}
							label={formFieldData.label}
							type={formFieldData.type}
							inputId={formFieldData.inputId}
							name={formFieldData.name}
							register={formFieldData.register}
							error={formFieldData.error}
							isMessageRequired={
								formFieldData.inputId === "message" ? true : false
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

export default StandAloneContactForm;
