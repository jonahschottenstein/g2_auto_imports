"use client";

import { FormData, UserSchema, ValidFieldNames } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import {
	useForm as useFormContext,
	useFormUpdater,
} from "@/context/request-import-form-context";
import { BackLink, NextLink } from "./CustomLinks";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import FormContainer from "./FormContainer";

// TODO: Think I need to make CustomButton accept children instead of title so I can pass svg to it

const ContactForm = () => {
	const user = useFormContext();
	const updateUserData = useFormUpdater();
	const router = useRouter();

	const values = user.contactInfo;

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<FormData>({
		resolver: zodResolver(UserSchema),
		values,
	});

	useEffect(() => {
		const storedUserData = sessionStorage.getItem("userData");
		const userData = storedUserData && JSON.parse(storedUserData);

		updateUserData(userData);
	}, []);

	// TODO: Need to either figure out how to get reload to redirect user to step_1/home page or save data through reload

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

	return (
		<FormContainer h1="Contact Details">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="request-import-form contact-form flex flex-col h-[calc(100%-64px)]">
				<div className="contact-form-fields flex flex-col gap-4 flex-1 overflow-y-auto">
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
						styles="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
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
