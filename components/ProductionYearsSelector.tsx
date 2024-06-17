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
	stateValue,
	handleClick,
}: ProductionYearsSelectorProps) => {
	const productionYears = getProductionYears(production);

	const startYearDisplay =
		stateValue.startYear > 0
			? `Start Year: ${stateValue.startYear}`
			: `Select start year`;
	const endYearDisplay =
		stateValue.startYear === 0 && stateValue.endYear === 0
			? `End year: `
			: stateValue.endYear > 0
			? `End Year: ${stateValue.endYear}`
			: `Select end year`;

	const setButtonStyles = (year: number) => {
		const buttonStyles =
			year === stateValue.startYear
				? "production-year start-year bg-blue-400 w-16 border-2 py-4"
				: year === stateValue.endYear
				? "production-year end-year bg-blue-400 w-16 border-2 py-4"
				: year > stateValue.startYear && year < stateValue.endYear
				? "production-year between-year bg-blue-300 w-16 border-2 py-4"
				: "production-year w-16 border-2 py-4";

		return buttonStyles;
	};

	return (
		<div className="flex flex-col">
			<div className="flex justify-between">
				<span>{startYearDisplay}</span>
				<span>{endYearDisplay}</span>
			</div>
			<div className="production-years-list-container flex-1 overflow-auto">
				<ul className="flex flex-wrap">
					{productionYears.map((year) => (
						<li key={year}>
							<CustomButton
								title={year.toString()}
								value={year}
								styles={setButtonStyles(year)}
								handleClick={handleClick}
							/>
						</li>
					))}
				</ul>
			</div>
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

/* 
Production Years Selector Rules:
	- Should probably add a class to the selected buttons
	- First selected year is highlighted
	- If next selected year...
		- precedes first selected year...
			- first selected year 


	- startYear, endYear

	- startYear = first year clicked
	- if second year clicked precedes current startYear, second year becomes start year
	- if second year clicked is after first year clicked, that becomes endYear
	- if second year clicked is same as first year clicked, startYear === endYear
	- if startYear && endYear, and another year is clicked, that becomes startYear, and endYear is erased
*/
