"use client";

import { useForm, useFormUpdater } from "@/context/request-import-form-context";
import Link from "next/link";
import React, { useEffect } from "react";
import { BackLink } from "./CustomLinks";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import FormContainer from "./FormContainer";

interface FormReviewSectionProps {
	title: string;
	children: React.ReactNode[];
	href: string;
}

interface FormReviewSectionRowProps {
	children: React.ReactNode[];
}

// !Current component layout won't work. You have one Edit Button for all of Make, Model, Years. You would need an Edit Button for each of them

const FormReviewSection = ({
	title,
	children,
	href,
}: FormReviewSectionProps) => {
	return (
		<div className="form-review-section flex-1">
			<div className="title-row flex w-full justify-between gap-4">
				<h3>{title}</h3>
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
	const router = useRouter();

	useEffect(() => {
		const storedUserData = sessionStorage.getItem("userData");
		const userData = storedUserData && JSON.parse(storedUserData);

		updateUserData(userData);
	}, []);

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
	};

	const STEPPER_HEIGHT = "92px";
	const H1_HEIGHT = "64px";

	return (
		<FormContainer h1="Review">
			<form
				onSubmit={onSubmit}
				className="request-import-form review-form flex flex-col h-[calc(100%-64px)]">
				<div className="form-review-sections flex flex-col gap-4 flex-1 overflow-y-auto">
					<FormReviewSection title="Car Information" href="/">
						<FormReviewSectionRow>
							<h4>{`Year(s)`}</h4>
							<div className="font-bold">
								{user.productionYears?.startYear ===
								user.productionYears?.endYear
									? user.productionYears?.startYear
									: user.productionYears?.startYear +
									  "-" +
									  user.productionYears?.endYear}
							</div>
						</FormReviewSectionRow>
						<FormReviewSectionRow>
							<h4>Make</h4>
							<div className="font-bold">{user.make?.name}</div>
						</FormReviewSectionRow>
						<FormReviewSectionRow>
							<h4>Model</h4>
							<div className="font-bold">{user.model?.name}</div>
						</FormReviewSectionRow>
					</FormReviewSection>
					<FormReviewSection title="Contact Information" href="/">
						<FormReviewSectionRow>
							<h4>First Name</h4>
							<div className="font-bold">{`${user.contactInfo?.firstName}`}</div>
						</FormReviewSectionRow>
						<FormReviewSectionRow>
							<h4>Last Name</h4>
							<div className="font-bold">{`${user.contactInfo?.lastName}`}</div>
						</FormReviewSectionRow>
						<FormReviewSectionRow>
							<h4>Email</h4>
							<div className="font-bold">{`${user.contactInfo?.email}`}</div>
						</FormReviewSectionRow>
						<FormReviewSectionRow>
							<h4>Phone</h4>
							<div className="font-bold">{`${user.contactInfo?.phone}`}</div>
						</FormReviewSectionRow>
						<FormReviewSectionRow>
							<h4>Zip Code</h4>
							<div className="font-bold">{`${user.contactInfo?.zipCode}`}</div>
						</FormReviewSectionRow>
						<FormReviewSectionRow>
							<h4>Comments</h4>
							<div className="font-bold">{`${user.contactInfo?.comments}`}</div>
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
