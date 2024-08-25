"use client";

import { Step, useStep, useStepUpdater } from "@/context/step-context";
import { FormStepperProps } from "@/types";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

/* const FormStepper = ({ steps }: FormStepperProps) => {
	return (
		<nav className="w-full px-8 my-8">
			<ol className="w-full flex justify-between">
				{steps.map((step) => (
					<li key={step}>{step}</li>
				))}
			</ol>
		</nav>
	);
}; */

/* const FormStepper = ({ steps }: FormStepperProps) => {
	const [currentStep, setCurrentStep] = useState<number>(1);
	const pathName = usePathname();

	useEffect(() => {
		if (pathName) {
			const step = Number(pathName.slice(-1));
			setCurrentStep(step);
		}
	}, [pathName]);

	const liClass = (index: number) => {
		if (!currentStep) return;

		const liState =
			index === currentStep ? "active" : index < currentStep ? "success" : "";

		const liClass = `form-stepper-item form-stepper-item-${index} flex items-center gap-x-2 shrink basis-0 flex-1 last:max-w-fit group ${liState}`;

		return liClass;
	};

	return (
		<nav className="w-full px-8 my-8">
			<div className="form-stepper" data-hs-stepper="">
				<ul className="form-steps-list relative flex flex-row gap-x-2">
					{steps.map((step, index) => {
						const className = liClass(index + 1);

						return (
							<li
								key={step}
								// className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
								className={className}
								data-hs-stepper-nav-item={`{"index": ${index + 1}}`}>
								<span className="flex flex-col min-w-7 min-h-7 group sm:inline-flex sm:flex-row items-center text-xs align-middle">
									<span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600 dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
										<span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
											{index + 1}
										</span>
										<svg
											className="hidden flex-shrink-0 size-3 hs-stepper-success:block"
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
									</span>
									<span className="ms-0 sm:ms-2 text-sm font-medium text-gray-800 dark:text-neutral-200">
										{step}
									</span>
								</span>
								<div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600 dark:bg-neutral-700 dark:hs-stepper-success:bg-blue-600 dark:hs-stepper-completed:bg-teal-600"></div>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default FormStepper; */

interface StepDisplayProps {
	stepNumber: Step;
}

interface ItemStatusWrapperProps {
	styles: string;
	children: React.ReactNode;
}

interface StepNameProps {
	stepName: string;
	// ? Should I be more specific and do "Make" | "Model" etc. ?
}

// type Status = "is-active" | "is-successful" | "is-completed"

interface FormStepperItemProps {
	status: string;
	// ? Should I be more specific and do "is-active" | "is-successful" etc. ?
	stepNumber: Step;
	stepName: string;
	// ? Should I be more specific and do "Make" | "Model" etc. ?
}

type StepName = "Make" | "Model" | "Year(s)" | "Contact" | "Review";

interface FormStepperProps2 {
	steps: [StepName, StepName, StepName, StepName, StepName];
}

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
			/* className={`size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 ${styles}`} */
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

	/* 	const lineStyles =
		status === "is-successful" ? "bg-blue-600 dark:bg-blue-600" : ""; */
	const lineStyles = status === "is-successful" ? "bg-blue-600" : "";

	// console.log("STATUS", status);
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
			if ([1, 2, 3, 4, 5].includes(stepValue)) {
				const step: Step = stepValue as Step;
				updateStep(step);
			} else {
				console.error("Invalid step value:", stepValue);
			}
		}
	}, [pathName]);

	/* 	const liClass = (index: number) => {
		if (!currentStep) return;

		const liState =
			index === currentStep ? "active" : index < currentStep ? "success" : "";

		const liClass = `form-stepper-item form-stepper-item-${index} flex items-center gap-x-2 shrink basis-0 flex-1 last:max-w-fit group ${liState}`;

		return liClass;
	}; */

	// * Think you might want to keep an object in context that has the status for each step
	/* 
		{
			step_1/make: "is-successful",
			step_2/model: "is-successful",
			step_3/year(s): "is-active",
			step_4/contact: "unvisited",
			step_5/review: "unvisited"
		}
	*/
	// * This way, when all five steps are successful, you can set the values to "is-completed" to set those styles

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
