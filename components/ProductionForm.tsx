"use client";

import { useForm, useFormUpdater } from "@/context/request-import-form-context";
import { Model, Production } from "@/types";
import React from "react";
import ProductionYearsSelector from "./ProductionYearsSelector";

interface ProductionFormProps {
	production: Production[];
}

const ProductionForm = ({ production }: ProductionFormProps) => {
	const user = useForm();
	const updateUserData = useFormUpdater();

	const getModelProductionObj = (model: Model) => {
		const modelProductionObj = production.find(
			(productionObj) => productionObj.modelId === model.id
		);

		return modelProductionObj;
	};

	const model = user.model || { id: 0, name: "", makeId: 0 };

	const productionObj = getModelProductionObj(model);

	const setProductionStartYear = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLButtonElement;

		if (!target.matches(".production-year")) return;

		const data = {
			productionYears: { startYear: Number(target.value), endYear: 0 },
		};

		updateUserData(data);
	};

	const setProductionEndYear = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLButtonElement;

		if (!target.matches(".production-year")) return;

		if (!user.productionYears?.startYear) return;

		const data = {
			productionYears: {
				...user.productionYears,
				endYear: Number(target.value),
			},
		};

		updateUserData(data);
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!user.productionYears) return;

		const { startYear, endYear } = user.productionYears;

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
		// TODO: Make this cleaner
	};

	const productionYears = user.productionYears;

	return (
		<div className="form-container">
			<form className="request-import-form production-form h-full overflow-y-auto">
				{productionObj && productionYears ? (
					<ProductionYearsSelector
						production={productionObj}
						stateValue={productionYears}
						handleClick={handleClick}
					/>
				) : (
					<p>Could not find years of production</p>
				)}
			</form>
		</div>
	);
};

export default ProductionForm;
