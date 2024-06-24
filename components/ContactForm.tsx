"use client";

import { FormData, UserSchema, ValidFieldNames } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import {
	useForm as useFormContext,
	useFormUpdater,
} from "@/context/request-import-form-context";
import { BackLink, NextLink } from "./CustomLinks";
import CustomButton from "./CustomButton";

const ContactForm = () => {
	const user = useFormContext();
	const updateUserData = useFormUpdater();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<FormData>({
		resolver: zodResolver(UserSchema),
	});

	const onSubmit = async (data: FormData) => {
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
				updateUserData({ contactInfo: data });
			}
		} catch (error) {
			console.log("ERROR", error);
			alert("Submitting form failed!");
		}
	};

	return (
		<div className="form-container px-8 h-full flex flex-col">
			<h2 className="text-center text-2xl mb-4">Contact Details</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="request-import-form contact-form flex flex-col h-[calc(100%-50px)]">
				<div className="contact-form-fields flex flex-col gap-4 flex-1 overflow-y-auto">
					<FormField
						label="First Name"
						type="text"
						inputId="first-name"
						name="firstName"
						register={register}
						error={errors.firstName}
						rule="Must be at least two letters"
					/>
					<FormField
						label="Last Name"
						type="text"
						inputId="last-name"
						name="lastName"
						register={register}
						error={errors.lastName}
						rule="Must be at least two letters"
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
				</div>
				<div className="form-nav-container w-full flex justify-around p-4">
					<BackLink href="/request-import-form/step_3" isDisabled={false} />
					{/* <CustomButton
						title="Submit"
						type="submit"
						styles="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
					/> */}
					<NextLink href="/request-import-form/step_5" isDisabled={false} />
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
