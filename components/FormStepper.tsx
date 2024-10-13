"use client";

import { useStep, useStepUpdater } from "@/context/step-context";
import {
	FormStepperItemProps,
	FormStepperProps2,
	ItemStatusWrapperProps,
	Step,
	StepDisplayProps,
	StepNameProps,
} from "@/types";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const StepDisplay = ({ stepNumber }: StepDisplayProps) => {
	return <span>{stepNumber}</span>;
};

const CheckMarkDisplay = () => {
	return (
		<svg
			className="flex-shrink-0 size-3"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="3"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polyline points="20 6 9 17 4 12"></polyline>
		</svg>
	);
};

const ItemStatusWrapper = ({ styles, children }: ItemStatusWrapperProps) => {
	return (
		<span
			className={`size-7 flex justify-center items-center flex-shrink-0 font-medium rounded-full group-focus:bg-gray-200 ${styles}`}>
			{children}
		</span>
	);
};

const StepName = ({ stepName }: StepNameProps) => {
	return (
		<span className="ms-0 sm:ms-2 text-sm font-medium text-gray-800">
			{stepName}
		</span>
	);
};

const FormStepperItem = ({
	status,
	stepNumber,
	stepName,
}: FormStepperItemProps) => {
	const unvisitedStyles = "bg-gray-100 text-gray-800";
	const activeStyles = "bg-blue-600 text-white";
	const successStyles = "bg-blue-600 text-white";
	const completedStyles = "bg-teal-500 group-focus:bg-teal-600 ";

	const wrapperStyles =
		status === "is-unvisited"
			? unvisitedStyles
			: status === "is-active"
			? activeStyles
			: status === "is-successful"
			? successStyles
			: status === "is-completed"
			? completedStyles
			: "";

	const lineStyles = status === "is-successful" ? "bg-blue-600" : "";

	return (
		<li
			className={`form-stepper-item form-stepper-item-${stepNumber} flex items-center gap-x-2 shrink basis-0 flex-1 last:max-w-fit group`}>
			<span className="flex flex-col min-w-7 min-h-7 group sm:inline-flex sm:flex-row items-center text-xs align-middle">
				<ItemStatusWrapper styles={wrapperStyles}>
					{status === "is-successful" || status === "is-completed" ? (
						<CheckMarkDisplay />
					) : (
						<StepDisplay stepNumber={stepNumber} />
					)}
				</ItemStatusWrapper>
				<StepName stepName={stepName} />
			</span>
			<div
				className={`w-full h-px flex-1 bg-gray-200 group-last:hidden ${lineStyles}`}></div>
		</li>
	);
};

const FormStepper = ({ steps }: FormStepperProps2) => {
	const contextStep = useStep();
	const updateStep = useStepUpdater();
	const pathName = usePathname();

	useEffect(() => {
		if (pathName) {
			const stepValue = Number(pathName.slice(-1));
			if ([1, 2, 3, 4].includes(stepValue)) {
				const step: Step = stepValue as Step;
				updateStep(step);
			} else {
				console.error("Invalid step value:", stepValue);
			}
		}
	}, [pathName]);

	return (
		<nav className="w-full max-w-screen-xl my-8 font-sans">
			<div className="form-stepper">
				<ul className="form-steps-list relative flex flex-row gap-x-2">
					{steps.map((stepTitle, index) => {
						const stepNumber: Step = (index + 1) as Step;
						return (
							<FormStepperItem
								key={stepTitle}
								status={
									index + 1 === contextStep
										? "is-active"
										: index + 1 < contextStep
										? "is-successful"
										: index + 1 > contextStep
										? "is-unvisited"
										: ""
								}
								stepNumber={stepNumber}
								stepName={stepTitle}
							/>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default FormStepper;
