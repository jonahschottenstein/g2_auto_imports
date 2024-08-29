"use client";

import { useForm, useFormUpdater } from "@/context/request-import-form-context";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { BackLink } from "./CustomLinks";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import FormContainer from "./FormContainer";
import { FormReviewSectionProps, FormReviewSectionRowProps } from "@/types";

// !Current component layout won't work. You have one Edit Button for all of Make, Model, Years. You would need an Edit Button for each of them

const FormReviewSection = ({
	title,
	children,
	href,
}: FormReviewSectionProps) => {
	return (
		<div className="form-review-section flex-1 font-sans">
			<div className="title-row flex w-full justify-between gap-4">
				<h3 className="font-bold text-sm text-[#6f6f6f]">{title}</h3>
				<Link href={href}>Edit</Link>
			</div>
			<div className="content">{children}</div>
		</div>
	);
};

const FormReviewSectionRow = ({ children }: FormReviewSectionRowProps) => {
	return (
		<div className="section-row flex flex-col w-full p-4 border-2 border-slate-50">
			{children}
		</div>
	);
};

const FormReview = () => {
	const user = useForm();
	const updateUserData = useFormUpdater();
	const formRef = useRef<HTMLFormElement>(null);
	const router = useRouter();

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

	useEffect(() => {
		const storedUserData = sessionStorage.getItem("userData");
		const userData = storedUserData && JSON.parse(storedUserData);

		updateUserData(userData);
	}, []);

	const textareaTextContent = document.getElementById("comments")?.textContent;

	useEffect(() => {
		const textarea = document.getElementById("comments");

		if (!textarea) return;

		textarea.style.height = textarea.scrollHeight + "px";
	}, [textareaTextContent]);

	const setVal = (key: string, value: any) => {
		return (
			<>
				<div>{key}</div>
				{key === "productionYears" ? (
					<div>{value.startYear + "-" + value.endYear}</div>
				) : (
					<div>{value.name}</div>
				)}
			</>
		);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formStepper = document.querySelector("div.form-stepper");
		const stepFiveItem = document.querySelector("li.form-stepper-item-5");

		stepFiveItem?.classList.add("success");
		formStepper?.classList.add("completed");

		router.push("/request-import-form/post-request");

		sendEmail(e);
	};

	const STEPPER_HEIGHT = "92px";
	const H1_HEIGHT = "64px";

	return (
		<FormContainer h1="Review">
			<form
				ref={formRef}
				onSubmit={onSubmit}
				className="request-import-form review-form flex flex-col h-[calc(100%-64px)]">
				<div className="form-review-sections flex flex-col gap-4 flex-1">
					<FormReviewSection title="Car Information" href="/">
						<FormReviewSectionRow>
							<h4 className="text-[#595959] text-sm">{`Year(s)`}</h4>
							{/* <div className="font-bold">
								{user.productionYears?.startYear ===
								user.productionYears?.endYear
									? user.productionYears?.startYear
									: user.productionYears?.startYear +
									  "-" +
									  user.productionYears?.endYear}
							</div> */}
							<input
								type="text"
								id="production-years"
								name="productionYears"
								value={
									user.productionYears?.startYear ===
									user.productionYears?.endYear
										? user.productionYears?.startYear
										: user.productionYears?.startYear +
										  "-" +
										  user.productionYears?.endYear
								}
								readOnly
								className="bg-transparent pointer-events-none font-bold text-base"
							/>
						</FormReviewSectionRow>
						<FormReviewSectionRow>
							<h4 className="text-[#595959] text-sm">Make</h4>
							{/* <div className="font-bold">{user.make?.name}</div> */}
							<input
								type="text"
								id="car-make"
								name="carMake"
								value={user.make?.name}
								readOnly
								className="bg-transparent pointer-events-none font-bold text-base"
							/>
						</FormReviewSectionRow>
						<FormReviewSectionRow>
							<h4 className="text-[#595959] text-sm">Model</h4>
							{/* <div className="font-bold">{user.model?.name}</div> */}
							<input
								type="text"
								id="car-model"
								name="carModel"
								value={user.model?.name}
								readOnly
								className="bg-transparent pointer-events-none font-bold text-base"
							/>
						</FormReviewSectionRow>
					</FormReviewSection>
					<FormReviewSection title="Contact Information" href="/">
						<FormReviewSectionRow>
							<h4 className="text-[#595959] text-sm">First Name</h4>
							{/* <div className="font-bold">{`${user.contactInfo?.firstName}`}</div> */}
							<input
								type="text"
								id="first-name"
								name="firstName"
								value={user.contactInfo?.firstName}
								readOnly
								className="bg-transparent pointer-events-none font-bold text-base"
							/>
						</FormReviewSectionRow>
						<FormReviewSectionRow>
							<h4 className="text-[#595959] text-sm">Last Name</h4>
							{/* <div className="font-bold">{`${user.contactInfo?.lastName}`}</div> */}
							<input
								type="text"
								id="last-name"
								name="lastName"
								value={user.contactInfo?.lastName}
								readOnly
								className="bg-transparent pointer-events-none font-bold text-base"
							/>
						</FormReviewSectionRow>
						<FormReviewSectionRow>
							<h4 className="text-[#595959] text-sm">Email</h4>
							{/* <div className="font-bold">{`${user.contactInfo?.email}`}</div> */}
							<input
								type="email"
								id="email"
								name="email"
								value={user.contactInfo?.email}
								readOnly
								className="bg-transparent pointer-events-none font-bold text-base"
							/>
						</FormReviewSectionRow>
						<FormReviewSectionRow>
							<h4 className="text-[#595959] text-sm">Phone</h4>
							{/* <div className="font-bold">{`${user.contactInfo?.phone}`}</div> */}
							<input
								type="tel"
								id="phone"
								name="phone"
								value={user.contactInfo?.phone}
								readOnly
								className="bg-transparent pointer-events-none font-bold text-base"
							/>
						</FormReviewSectionRow>
						<FormReviewSectionRow>
							<h4 className="text-[#595959] text-sm">Zip Code</h4>
							{/* <div className="font-bold">{`${user.contactInfo?.zipCode}`}</div> */}
							<input
								type="text"
								id="zip-code"
								name="zipCode"
								value={user.contactInfo?.zipCode}
								readOnly
								className="bg-transparent pointer-events-none font-bold text-base"
							/>
						</FormReviewSectionRow>
						<FormReviewSectionRow>
							<h4 className="text-[#595959] text-sm">Comments</h4>
							{/* <div className="font-bold">{`${user.contactInfo?.comments}`}</div> */}
							<textarea
								id="comments"
								name="comments"
								value={user.contactInfo?.comments}
								readOnly
								className="bg-transparent resize-none pointer-events-none font-bold text-base"
							/>
						</FormReviewSectionRow>
					</FormReviewSection>
				</div>
				<div className="form-nav-container w-full flex justify-around p-4">
					<BackLink href="/request-import-form/step_4" isDisabled={false} />
					<CustomButton
						// title="Submit"
						type="submit"
						styles="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
						Submit
					</CustomButton>
				</div>
			</form>
		</FormContainer>
	);

	// return (
	// 	// <div className="form-container px-8 h-full flex flex-col">
	// 	<div className="form-container px-8 h-[calc(100%-92px)] flex flex-col">
	// 		<h1 className="text-center text-2xl mb-4">Review</h1>
	// 		<form
	// 			onSubmit={onSubmit}
	// 			className="request-import-form review-form flex flex-col h-[calc(100%-64px)]">
	// 			<div className="form-review-sections flex flex-col gap-4 flex-1 overflow-y-auto">
	// 				<FormReviewSection title="Car Information" href="/">
	// 					<FormReviewSectionRow>
	// 						<h4>{`Year(s)`}</h4>
	// 						<div className="font-bold">
	// 							{user.productionYears?.startYear ===
	// 							user.productionYears?.endYear
	// 								? user.productionYears?.startYear
	// 								: user.productionYears?.startYear +
	// 								  "-" +
	// 								  user.productionYears?.endYear}
	// 						</div>
	// 					</FormReviewSectionRow>
	// 					<FormReviewSectionRow>
	// 						<h4>Make</h4>
	// 						<div className="font-bold">{user.make?.name}</div>
	// 					</FormReviewSectionRow>
	// 					<FormReviewSectionRow>
	// 						<h4>Model</h4>
	// 						<div className="font-bold">{user.model?.name}</div>
	// 					</FormReviewSectionRow>
	// 				</FormReviewSection>
	// 				<FormReviewSection title="Contact Information" href="/">
	// 					<FormReviewSectionRow>
	// 						<h4>First Name</h4>
	// 						<div className="font-bold">{`${user.contactInfo?.firstName}`}</div>
	// 					</FormReviewSectionRow>
	// 					<FormReviewSectionRow>
	// 						<h4>Last Name</h4>
	// 						<div className="font-bold">{`${user.contactInfo?.lastName}`}</div>
	// 					</FormReviewSectionRow>
	// 					<FormReviewSectionRow>
	// 						<h4>Email</h4>
	// 						<div className="font-bold">{`${user.contactInfo?.email}`}</div>
	// 					</FormReviewSectionRow>
	// 					<FormReviewSectionRow>
	// 						<h4>Phone</h4>
	// 						<div className="font-bold">{`${user.contactInfo?.phone}`}</div>
	// 					</FormReviewSectionRow>
	// 					<FormReviewSectionRow>
	// 						<h4>Zip Code</h4>
	// 						<div className="font-bold">{`${user.contactInfo?.zipCode}`}</div>
	// 					</FormReviewSectionRow>
	// 					<FormReviewSectionRow>
	// 						<h4>Comments</h4>
	// 						<div className="font-bold">{`${user.contactInfo?.comments}`}</div>
	// 					</FormReviewSectionRow>
	// 				</FormReviewSection>
	// 			</div>
	// 			<div className="form-nav-container w-full flex justify-around p-4">
	// 				<BackLink href="/request-import-form/step_4" isDisabled={false} />
	// 				<CustomButton
	// 					// title="Submit"
	// 					type="submit"
	// 					styles="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
	// 					Submit
	// 				</CustomButton>
	// 			</div>
	// 		</form>
	// 	</div>
	// );
};

export default FormReview;
