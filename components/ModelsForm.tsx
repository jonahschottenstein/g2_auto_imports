"use client";

import { useForm, useFormUpdater } from "@/context/request-import-form-context";
import { Make, ModelsFormProps } from "@/types";
import React, { useEffect } from "react";
import MakeModelSelector from "./MakeModelSelector";
import { BackLink, NextLink } from "./CustomLinks";
import FormContainer from "./FormContainer";
import { useRouter } from "next/navigation";

// ? Would it be bad to use effect hook?

// * May need to use router. Currently, if I'm on step_2 and I click the previous button to go back to step_1, then I go back a page, it takes me to step_2. I don't know if I want that or if that's how it's supposed to be. I looked at that Home Advisor form for reference.

const ModelsForm = ({ models }: ModelsFormProps) => {
	const user = useForm();
	const updateUserData = useFormUpdater();
	const router = useRouter();

	const resetFormField = (formField: string) => {
		switch (formField) {
			case "make":
				return { make: { id: 0, name: "" } };
			case "model":
				return { model: { id: 0, name: "", makeId: 0 } };
			case "productionYears":
				console.log("PROD RESET");
				return { productionYears: { startYear: 0, endYear: 0 } };

			default:
				console.log("default");
				break;
		}
	};

	/* 	useEffect(() => {
		const storedUserData = sessionStorage.getItem("userData");
		const userData = storedUserData && JSON.parse(storedUserData);

		updateUserData(userData);
	}, []); */

	useEffect(() => {
		const storedUserData = sessionStorage.getItem("userData");
		const userData = storedUserData && JSON.parse(storedUserData);

		if (!userData?.make?.name || !userData?.make?.id) {
			console.log("NO MAKE");
			router.push("/request-import-form/step_1");
		} else {
			updateUserData(userData);
		}
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;

		console.log(target.className.includes("model-option"));

		if (!target.className.includes("model-option")) return;

		const hasSelectedProductionYears =
			user.productionYears &&
			(user.productionYears.startYear > 0 || user.productionYears.endYear > 0);

		const data = hasSelectedProductionYears
			? {
					model: {
						id: Number(target.id),
						name: target.value,
						makeId: Number(user.make?.id),
					},
					productionYears: {
						startYear: 0,
						endYear: 0,
					},
			  }
			: {
					model: {
						id: Number(target.id),
						name: target.value,
						makeId: Number(user.make?.id),
					},
			  };

		const storedUserData = sessionStorage.getItem("userData");
		const userData = storedUserData && JSON.parse(storedUserData);
		/* const newUserData = {
			...userData,
			model: {
				id: Number(target.id),
				name: target.value,
				makeId: Number(user.make?.id),
			},
		}; */
		const newUserData = {
			...userData,
			...data,
		};

		sessionStorage.setItem(
			"userData",
			JSON.stringify({
				...newUserData,
			})
		);

		updateUserData(data);
	};

	const getMakeModels = (make: Make) => {
		const makeModels = models.filter((model) => model.makeId === make.id);

		return makeModels;
	};

	const make = user.make || { id: 0, name: "" };

	const makeIsSelected = user.make?.id && user.make.name;
	const modelIsSelected =
		user.model?.id && user.model.name && user.model.makeId;
	const okayToContinue = makeIsSelected && modelIsSelected;

	const STEPPER_HEIGHT = "92px";
	const H1_HEIGHT = "64px"; // at small viewport size;

	return (
		<FormContainer h1="Select Model">
			<form className="request-import-form models-form flex flex-col h-[calc(100%-124px)]">
				<MakeModelSelector
					category="model"
					options={getMakeModels(make)}
					stateValue={user.model?.name || ""}
					handleChange={handleChange}
				/>
				<div className="form-nav-container w-full flex justify-around p-4">
					<BackLink href="/request-import-form/step_1" isDisabled={false} />
					<NextLink
						href="/request-import-form/step_3"
						isDisabled={!okayToContinue}
					/>
				</div>
			</form>
		</FormContainer>
	);

	// return (
	// 	// <div className="form-container px-8 h-full flex flex-col">
	// 	<div className="form-container px-8 h-[calc(100%-92px)] flex flex-col">
	// 		<h1 className="text-center text-2xl mb-4">Select Model</h1>
	// 		<form className="request-import-form models-form flex flex-col h-[calc(100%-64px)]">
	// 			<MakeModelSelector
	// 				category="model"
	// 				options={getMakeModels(make)}
	// 				stateValue={user.model?.name || ""}
	// 				handleChange={handleChange}
	// 			/>
	// 			<div className="form-nav-container w-full flex justify-around p-4">
	// 				<BackLink href="/request-import-form/step_1" isDisabled={false} />
	// 				<NextLink
	// 					href="/request-import-form/step_3"
	// 					isDisabled={!okayToContinue}
	// 				/>
	// 			</div>
	// 		</form>
	// 	</div>
	// );
};

export default ModelsForm;
