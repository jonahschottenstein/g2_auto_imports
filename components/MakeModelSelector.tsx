import React, { useLayoutEffect, useRef } from "react";
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
	const selectedMakeRef = useRef<null | HTMLDivElement>(null);
	const sortedOptions = sortMakeModel(options);

	const handleScrollToSelectedMake = () => {
		if (!selectedMakeRef.current) return;

		selectedMakeRef.current.scrollIntoView({
			behavior: "instant",
			block: "end",
		});
	};

	useLayoutEffect(() => {
		handleScrollToSelectedMake();
	}, [stateValue]);

	// * 371px is the max-height that makes the page height full

	return (
		<div
			className="selector flex-1 font-sans max-h-[371px] overflow-y-auto
			[&::-webkit-scrollbar]:w-2
			[&::-webkit-scrollbar-track]:rounded-full
			[&::-webkit-scrollbar-track]:bg-gray-100
			[&::-webkit-scrollbar-thumb]:rounded-full
			[&::-webkit-scrollbar-thumb]:bg-gray-300
			dark:[&::-webkit-scrollbar-track]:bg-neutral-700
			dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
			{sortedOptions.map((option) => {
				const itemProps =
					stateValue === option.name ? { ref: selectedMakeRef } : {};

				return (
					<div
						key={option.name}
						/* className="option-container border-y-2 hover:bg-slate-500 active:bg-slate-600" */
						className="option-container border-y-2"
						{...itemProps}>
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
				);
			})}
		</div>
	);
};

export default MakeModelSelector;
