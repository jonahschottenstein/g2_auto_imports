import React from "react";
import {
	Production,
	ProductionYearsSelectorProps,
	YearsDisplayProps,
} from "@/types";
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

	/* 	const setButtonStyles = (year: number) => {
		const buttonStyles =
			year === stateValue.startYear
				? "production-year start-year bg-blue-400 w-16 border-2 py-4"
				: year === stateValue.endYear
				? "production-year end-year bg-blue-400 w-16 border-2 py-4"
				: year > stateValue.startYear && year < stateValue.endYear
				? "production-year between-year bg-blue-300 w-16 border-2 py-4"
				: "production-year w-16 border-2 py-4";

		return buttonStyles;
	}; */
	const setLiStyles = (year: number) => {
		// const liStyles =
		// 	year === stateValue.startYear && year === stateValue.endYear
		// 		? ""
		// 		: year === stateValue.startYear && stateValue.endYear
		// 		? "bg-gray-200 rounded-l-[50%]"
		// 		: year === stateValue.endYear
		// 		? "bg-gray-200 rounded-r-[50%]"
		// 		: "";
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
		// const buttonStyles =
		// 	year === stateValue.startYear
		// 		? "production-year start-year bg-blue-600 text-white w-10 h-10 rounded-[50%] text-xs"
		// 		: year === stateValue.endYear
		// 		? "production-year end-year bg-blue-600 text-white w-10 h-10 rounded-[50%] text-xs"
		// 		: year > stateValue.startYear && year < stateValue.endYear
		// 		? "production-year between-year bg-gray-200 w-10 h-10 text-xs"
		// 		: "production-year w-10 h-10 text-xs";
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
		// <div className="flex flex-col flex-1 w-fit">
		<div className="flex flex-col flex-1 w-full max-h-72">
			{/* <div className="flex justify-between">
				<span>{startYearDisplay}</span>
				<span>{endYearDisplay}</span>
			</div> */}
			<YearsDisplay
				startYear={stateValue.startYear}
				endYear={stateValue.endYear}
			/>
			{/* <div className="production-years-list-container flex-1 overflow-auto w-fit"> */}
			<div className="production-years-list-container flex-1 overflow-auto">
				{/* <ul className="flex flex-wrap"> */}
				{/* <ul className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10"> */}
				{/* <ul className="grid grid-cols-5 gap-y-2 sm:grid-cols-6">
					{productionYears.map((year) => ( */}
				<ul className="grid grid-cols-7 gap-y-2">
					{productionYears.map((year) => (
						// <li key={year} className={setLiStyles(year)}>
						// 	<CustomButton
						// 		// title={year.toString()}
						// 		value={year}
						// 		styles={setButtonStyles(year)}
						// 		handleClick={handleClick}>
						// 		{year.toString()}
						// 	</CustomButton>
						// </li>
						<li key={year} className={setLiStyles(year)}>
							<div className={setLeftSideStyles(year)}></div>
							<div className={setRightSideStyles(year)}></div>
							<CustomButton
								// title={year.toString()}
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
