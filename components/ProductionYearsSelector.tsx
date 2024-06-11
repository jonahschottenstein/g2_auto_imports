import React from "react";
import { Production, ProductionYearsSelectorProps } from "@/types";
import CustomButton from "./CustomButton";

/* const getRange = (size: number, startYear: number): ReadonlyArray<number> => {
    return [...Array(size).keys()].map((i) => i + startYear)
} */
// * Type 'IterableIterator<number>' can only be iterated through when using the '--downlevelIteration' flag or with a '--target' of 'es2015' or higher.
// ? Should I use the '--downlevelIteration' flag or set '--target' to 'es2015'?
// ? Or should I use the for loop?

const getRange = (size: number, startYear: number): ReadonlyArray<number> => {
	let range: number[] = [];

	for (let i = startYear; i <= startYear + size; i++) {
		range = range.concat([i]);
	}

	return range;
};

const getProductionYears = (productionObj: Production) => {
	const { startYear, endYear } = productionObj;
	const size = endYear - startYear;
	const productionYears = getRange(size, startYear);

	return productionYears;
};

const ProductionYearsSelector = ({
	production,
}: ProductionYearsSelectorProps) => {
	const productionYears = getProductionYears(production);
	return (
		<div>
			<ul className="flex flex-wrap">
				{productionYears.map((year) => (
					<li key={year}>
						<CustomButton title={year.toString()} styles="w-16 border-2 py-4" />
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductionYearsSelector;

/* 
for Production:

    it will only take one object

    from that one object, create year options by making an array from startYear to endYear with a for loop

    map over those, creating an option for each year

    so should you pass the Production object and make the array in the Selector component, or make the array in the form page and pass the array to the Selector component?

    Production might need to be a different component
*/
