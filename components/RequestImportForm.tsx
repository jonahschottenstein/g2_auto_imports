"use client";

import React, { useState } from "react";
import CustomButton from "./CustomButton";
import ProductionYearsSelector from "./ProductionYearsSelector";
import { Make, Model, Production } from "@/types";
import MakeModelSelector from "./MakeModelSelector";

/* 
    If a make and model are chosen, then the user goes back and changes the make, the model needs to be erased. Maybe when prev button is clicked.
        Don't do when prev button is clicked

    If you set model then go back and change make, model needs to reset

    If you set production years then go back and change model, production years need to reset
    
    If you set production years then go back and change make, model and production years need to reset
*/

interface RequestImportFormProps {
	makes: Make[];
	models: Model[];
	production: Production[];
}

const RequestImportForm = ({
	makes,
	models,
	production,
}: RequestImportFormProps) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [make, setMake] = useState({ id: 0, name: "" });
	const [model, setModel] = useState({ id: 0, name: "", makeId: 0 });
	const [productionYears, setProductionYears] = useState({
		startYear: 0,
		endYear: 0,
	});

	console.log("PROD", production);
	console.log("PRODUCTION YEARS", productionYears);

	const handleMakeChange = (e: React.FormEvent<HTMLInputElement>): void => {
		const target = e.target as HTMLInputElement;
		console.log(target);
		if (!target.value) return;
		if (!target.id) return;

		if (model.makeId > 0 && model.makeId !== Number(target.id)) {
			// don't think model.makeId !== Number(target.id) is necessary because this is a change event
			setModel({ id: 0, name: "", makeId: 0 });
		}

		if (productionYears.startYear > 0 || productionYears.endYear > 0) {
			setProductionYears({
				startYear: 0,
				endYear: 0,
			});
		}

		setMake({
			id: Number(target.id),
			name: target.value,
		});
	};

	const handleModelChange = (e: React.FormEvent<HTMLInputElement>): void => {
		const target = e.target as HTMLInputElement;

		if (!target.value) return;
		if (!target.id) return;

		if (productionYears.startYear > 0 || productionYears.endYear > 0) {
			setProductionYears({
				startYear: 0,
				endYear: 0,
			});
		}

		setModel({
			id: Number(target.id),
			name: target.value,
			makeId: make.id,
		});
	};

	console.log("MAKE", make);
	console.log("MODEL", model);

	const getMakeModels = (make: Make) => {
		const makeModels = models.filter((model) => model.makeId === make.id);

		return makeModels;
	};

	const getModelProductionObj = (model: Model) => {
		const productionObj = production.find(
			(productionObj) => productionObj.modelId === model.id
		);

		return productionObj;
	};

	const productionObj = getModelProductionObj(model);

	const setProductionStartYear = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLButtonElement;

		if (!target.matches(".production-year")) return;

		setProductionYears({
			startYear: Number(target.textContent),
			endYear: 0,
		});
	};

	const setProductionEndYear = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLButtonElement;

		if (!target.matches(".production-year")) return;

		setProductionYears({
			...productionYears,
			endYear: Number(target.textContent),
		});
	};

	const handleProductionYears = (e: React.MouseEvent<HTMLButtonElement>) => {
		const { startYear, endYear } = productionYears;

		const hasNoStartYear = startYear === 0;
		const hasNoEndYear = endYear === 0;
		const hasStartYear = startYear > 0;
		const hasEndYear = endYear > 0;

		const target = e.target as HTMLButtonElement;

		if (hasNoStartYear && hasNoEndYear) {
			setProductionStartYear(e);
		} else if (hasStartYear && hasNoEndYear) {
			if (Number(target.value) >= startYear) {
				setProductionEndYear(e);
			} else {
				setProductionStartYear(e);
			}
		} else if (hasStartYear && hasEndYear) {
			setProductionStartYear(e);
		}
	};

	const steps = [
		{ id: "step1", name: "Make" },
		{ id: "step2", name: "Model" },
		{ id: "step3", name: "Years" },
		{ id: "step4", name: "Contact Information" },
		{ id: "step5", name: "Review" },
		{ id: "step6", name: "Complete" },
	];

	/* const nextStep = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep((step) => step + 1);
		}
	}; */

	const nextStep = () => {
		if (currentStep === 0 && make.id > 0 && make.name) {
			setCurrentStep((step) => step + 1);
		} else if (
			currentStep === 1 &&
			model.id > 0 &&
			model.name &&
			model.makeId > 0
		) {
			setCurrentStep((step) => step + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep((step) => step - 1);
		}
	};
	return (
		<>
			<form className="request-import-form h-full overflow-y-auto">
				{currentStep === 0 && (
					<MakeModelSelector
						category="make"
						options={makes}
						stateValue={make.name}
						handleChange={handleMakeChange}
					/>
				)}
				{currentStep === 1 && (
					<MakeModelSelector
						category="model"
						options={getMakeModels(make)}
						stateValue={model.name}
						handleChange={handleModelChange}
					/>
				)}
				{currentStep === 2 && productionObj && (
					<ProductionYearsSelector
						production={productionObj}
						stateValue={productionYears}
						handleClick={handleProductionYears}
					/>
				)}
			</form>
			<div className="step-buttons-container w-full flex justify-between">
				<CustomButton title="<=" handleClick={prevStep} />
				<CustomButton title="=>" handleClick={nextStep} />
			</div>
		</>
	);
};
/* const RequestImportForm = ({
	makes,
	models,
	production,
}: RequestImportFormProps) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [make, setMake] = useState("");
	const [model, setModel] = useState("");

	const handleMakeChange = (e: React.FormEvent<HTMLInputElement>): void => {
		const target = e.target as HTMLInputElement;

		if (!target.value) return;

		setMake(target.value);
	};

	const handleModelChange = (e: React.FormEvent<HTMLInputElement>): void => {
		const target = e.target as HTMLInputElement;

		if (!target.value) return;

		setModel(target.value);
	};

	console.log("MAKE", make);

	const steps = [
		{ id: "step1", name: "Make" },
		{ id: "step2", name: "Model" },
		{ id: "step3", name: "Years" },
		{ id: "step4", name: "Contact Information" },
		{ id: "step5", name: "Review" },
		{ id: "step6", name: "Complete" },
	];

	const nextStep = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep((step) => step + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep((step) => step - 1);
		}
	};
	return (
		<>
			<form className="request-import-form h-full overflow-y-auto">
				{currentStep === 0 && (
					<MakeModelSelector
						category="make"
						options={makes}
						stateValue={make}
						handleChange={handleMakeChange}
					/>
				)}
				{currentStep === 1 && (
					<MakeModelSelector
						category="model"
						options={models}
						stateValue={model}
						handleChange={handleModelChange}
					/>
				)}
			</form>
			<div className="step-buttons-container w-full flex justify-between">
				<CustomButton title="<=" handleClick={prevStep} />
				<CustomButton title="=>" handleClick={nextStep} />
			</div>
		</>
	);
}; */

export default RequestImportForm;

/* 
    Think you may be heading down the wrong path.
    Don't think you should pass makes, models, and production to this form.
    Radio inputs may not be the way to go.
        Actually, for the 'checked' property, can do:
            checked={make === }
*/
