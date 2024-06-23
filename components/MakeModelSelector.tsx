import React from "react";
import { MakeModelSelectorProps } from "@/types";

const sortMakeModel = (options: MakeModelSelectorProps["options"]) => {
	return options.toSorted((a, b) => {
		return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
	});
};

const MakeModelSelector = ({
	category,
	options,
	stateValue,
	handleChange,
}: MakeModelSelectorProps) => {
	const sortedOptions = sortMakeModel(options);

	return (
		<div className="selector flex-1 overflow-y-auto">
			{sortedOptions.map((option) => (
				<div
					key={option.name}
					className="option-container border-y-2 hover:bg-slate-500 active:bg-slate-600">
					<label
						// htmlFor={`${category}-${option.id}`}
						htmlFor={`${option.id}`}
						className="block relative w-full h-full p-2 has-[:checked]:bg-blue-400">
						<input
							type="radio"
							// id={`${category}-${option.id}`}
							id={`${option.id}`}
							name={category}
							value={option.name}
							checked={stateValue === option.name}
							onChange={handleChange}
							className={`${category}-option absolute h-0 w-0 top-0 left-0 opacity-0`}
						/>
						{option.name}
					</label>
				</div>
			))}
		</div>
	);
};

export default MakeModelSelector;
