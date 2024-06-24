"use client";

import { useForm } from "@/context/request-import-form-context";
import Link from "next/link";
import React from "react";

interface FormReviewSectionProps {
	title: string;
	children: React.ReactNode[];
	href: string;
}

interface FormReviewSectionRowProps {
	children: React.ReactNode[];
}

const FormReviewSection = ({
	title,
	children,
	href,
}: FormReviewSectionProps) => {
	return (
		<div>
			<div className="title-row flex w-full justify-center gap-4">
				<h3>{title}</h3>
				<Link href={href}>Edit</Link>
			</div>
			<div className="content">{children}</div>
		</div>
	);
};

const FormReviewSectionRow = ({ children }: FormReviewSectionRowProps) => {
	return (
		<div className="section-row flex w-full justify-evenly">{children}</div>
	);
};

const FormReview = () => {
	const user = useForm();

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

	return (
		<div className="form-container px-8 h-full flex flex-col">
			<h2 className="text-center text-2xl mb-4">Review</h2>
			<form className="request-import-form review-form flex flex-col h-[calc(100%-50px)]">
				<FormReviewSection title="Car Information" href="/">
					<FormReviewSectionRow>
						<div>{`Year(s)`}</div>
						<div>
							{user.productionYears?.startYear === user.productionYears?.endYear
								? user.productionYears?.startYear
								: user.productionYears?.startYear +
								  "-" +
								  user.productionYears?.endYear}
						</div>
					</FormReviewSectionRow>
					<FormReviewSectionRow>
						<div>Make</div>
						<div>{user.make?.name}</div>
					</FormReviewSectionRow>
					<FormReviewSectionRow>
						<div>Model</div>
						<div>{user.model?.name}</div>
					</FormReviewSectionRow>
					{
						// Object.entries(user)
						// 	.filter(([key, value]) => {
						// 		key !== "contactInfo";
						// 	})
						// 	.map(([key, value]) => {
						// 		<div>{setVal(key, value)}</div>;
						// return (
						// 	<FormReviewSectionRow>
						// 		<div>{key}</div>
						// 		{key === "productionYears" ? (
						// 			<div>{value.startYear + "-" + value.endYear}</div>
						// 		) : (
						// 			<div>{value.name}</div>
						// 		)}
						// 	</FormReviewSectionRow>
						// );
						// })
					}
					{/* {Object.keys(user)
						.filter((key) => key !== "contactInfo")
						.map((key) => {
							return (
								<FormReviewSectionRow>
									<div>{key}</div>
									<div>{}</div>
								</FormReviewSectionRow>
							);
						})} */}
					{/* <FormReviewSectionRow>
						<div>Year(s)</div>
						<div>
							{user.productionYears?.startYear +
								"-" +
								user.productionYears?.endYear}
						</div>
					</FormReviewSectionRow> */}
				</FormReviewSection>
			</form>
		</div>
	);
};

export default FormReview;
