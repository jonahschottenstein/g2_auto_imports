import React from "react";
import {
	Production,
	ProductionYearsSelectorProps,
	YearsDisplayProps,
} from "@/types";
import CustomButton from "./CustomButton";

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

const YearsDisplay = ({ startYear, endYear }: YearsDisplayProps) => {
	const startYearDisplay = startYear > 0 ? startYear : "Select year";
	const endYearDisplay =
		startYear === 0 && endYear === 0
			? ""
			: endYear > 0
			? endYear
			: "Select year";
	const startYearActiveDisplay =
		startYear > 0
			? "active-indicator h-1 bg-inherit"
			: "active-indicator h-1 bg-blue-600";
	const endYearActiveDisplay =
		startYear === 0 && endYear === 0
			? "active-indicator h-1 bg-inherit"
			: endYear > 0
			? "active-indicator h-1 bg-inherit"
			: "active-indicator h-1 bg-blue-600";

	return (
		<div className="years-display-container flex w-full mb-2">
			<div className="year-display start-year flex flex-col flex-1 border-gray-300 border-[1px]">
				<span className="text-center text-xs mt-1 font-sans uppercase">
					Start Year
				</span>
				<span className="text-center font-medium mb-1 font-sans">
					{startYearDisplay}
				</span>
				<div className={startYearActiveDisplay}></div>
			</div>
			<div className="year-display start-year flex flex-col flex-1 border-gray-300 border-[1px]">
				<span className="text-center text-xs mt-1 font-sans uppercase">
					End Year
				</span>
				<span className="text-center font-medium mb-1 font-sans">
					{endYearDisplay}
				</span>
				<div className={endYearActiveDisplay}></div>
			</div>
		</div>
	);
};

const ProductionYearsSelector = ({
	production,
	stateValue,
	handleClick,
}: ProductionYearsSelectorProps) => {
	const productionYears = getProductionYears(production);

	const setLiStyles = (year: number) => {
		const liStyles =
			year === stateValue.startYear && year === stateValue.endYear
				? "relative"
				: year === stateValue.startYear && stateValue.endYear
				? "relative"
				: year === stateValue.endYear
				? "relative"
				: "relative";

		return liStyles;
	};
	const setButtonStyles = (year: number) => {
		const buttonStyles =
			year === stateValue.startYear
				? "production-year relative left-[calc(50%_-_20px)] start-year bg-blue-600 text-white w-10 h-10 rounded-[50%] text-xs"
				: year === stateValue.endYear
				? "production-year relative left-[calc(50%_-_20px)] end-year bg-blue-600 text-white w-10 h-10 rounded-[50%] text-xs"
				: year > stateValue.startYear && year < stateValue.endYear
				? "production-year relative left-[calc(50%_-_20px)] between-year w-10 h-10 text-xs"
				: "production-year relative left-[calc(50%_-_20px)] w-10 h-10 text-xs";

		return buttonStyles;
	};

	const setLeftSideStyles = (year: number) => {
		const leftSideStyles =
			year === stateValue.startYear && year === stateValue.endYear
				? "left-side absolute top-0 bottom-0 left-0 w-1/2 -z-10"
				: year === stateValue.endYear
				? "left-side absolute top-0 bottom-0 left-0 w-1/2 -z-10 bg-gray-200"
				: year > stateValue.startYear && year < stateValue.endYear
				? "left-side absolute top-0 bottom-0 left-0 w-1/2 -z-10 bg-gray-200"
				: "left-side absolute top-0 bottom-0 left-0 w-1/2 -z-10";

		return leftSideStyles;
	};

	const setRightSideStyles = (year: number) => {
		const rightSideStyles =
			year === stateValue.startYear && year === stateValue.endYear
				? "right-side absolute top-0 bottom-0 right-0 w-1/2 -z-10"
				: year === stateValue.startYear && stateValue.endYear
				? "right-side absolute top-0 bottom-0 right-0 w-1/2 -z-10 bg-gray-200"
				: year > stateValue.startYear && year < stateValue.endYear
				? "right-side absolute top-0 bottom-0 right-0 w-1/2 -z-10 bg-gray-200"
				: "right-side absolute top-0 bottom-0 right-0 w-1/2 -z-10";

		return rightSideStyles;
	};

	return (
		<div className="flex flex-col flex-1 w-full max-h-72">
			<YearsDisplay
				startYear={stateValue.startYear}
				endYear={stateValue.endYear}
			/>
			<div className="production-years-list-container flex-1 overflow-auto">
				<ul className="grid grid-cols-7 gap-y-2">
					{productionYears.map((year) => (
						<li key={year} className={setLiStyles(year)}>
							<div className={setLeftSideStyles(year)}></div>
							<div className={setRightSideStyles(year)}></div>
							<CustomButton
								value={year}
								styles={setButtonStyles(year)}
								ariaLabel={`${year}`}
								handleClick={handleClick}>
								{year.toString()}
							</CustomButton>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProductionYearsSelector;
