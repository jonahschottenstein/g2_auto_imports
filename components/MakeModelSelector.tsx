import React from "react";
import { MakeModelSelectorProps } from "@/types";

const sortMakeModel = (options: MakeModelSelectorProps["options"]) => {
	return options.toSorted((a, b) => {
		return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
	});
};

const MakeModelSelector = ({ category, options }: MakeModelSelectorProps) => {
	const sortedOptions = sortMakeModel(options);

	return (
		<div className="selector">
			{sortedOptions.map((option) => (
				<div className="option-container border-y-2 p-2 hover:bg-slate-500 active:bg-slate-600">
					<input
						type="radio"
						id={`${category}-${option.id}`}
						name={category}
						value={option.name}
						className="absolute h-0 w-0 top-0 left-0 opacity-0"
					/>
					<label htmlFor={`${category}-${option.id}`}>{option.name}</label>
				</div>
			))}
		</div>
	);
};

export default MakeModelSelector;
