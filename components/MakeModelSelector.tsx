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

	const elementIsVisibleInViewport = (
		el: HTMLDivElement | null,
		container: Element | null
	) => {
		if (!el) return;

		const elementRect = el.getBoundingClientRect();
		const containerRect = container?.getBoundingClientRect();

		if (!elementRect || !containerRect) return;

		// Check if the element is partially visible in the container
		const isVerticallyVisible =
			elementRect.top < containerRect?.bottom &&
			elementRect.bottom > containerRect?.top;
		const isHorizontallyVisible =
			elementRect.left < containerRect?.right &&
			elementRect.right > containerRect?.left;

		return isVerticallyVisible && isHorizontallyVisible;
	};

	useLayoutEffect(() => {
		const container = document.querySelector(".selector");
		const selectedMakeIsVisible = elementIsVisibleInViewport(
			selectedMakeRef.current,
			container
		);

		if (selectedMakeIsVisible) return;

		handleScrollToSelectedMake();
	}, [stateValue]);
	// THIS IS AN IMPROVEMENT. INTERSECTIONOBSERVER IS PROBABLY A BETTER SOLUTION

	// * 371px is the max-height that makes the page height full

	return (
		<>
			{" "}
			<div
				className="selector flex-1 font-sans max-h-72 overflow-y-auto
			[&::-webkit-scrollbar]:w-2
			[&::-webkit-scrollbar-track]:rounded-full
			[&::-webkit-scrollbar-track]:bg-gray-100
			[&::-webkit-scrollbar-thumb]:rounded-full
			[&::-webkit-scrollbar-thumb]:bg-gray-300">
				{sortedOptions.map((option) => {
					const itemProps =
						stateValue === option.name ? { ref: selectedMakeRef } : {};
					const inputId = `${option.name.replace(" ", "-")}-${option.id}`;
					const dataAttribute =
						category === "make"
							? { "data-make-id": option.id }
							: category === "model"
							? { "data-model-id": option.id }
							: {};

					return (
						<div
							key={option.name}
							className="option-container first:border-t-2 border-b-2 border-gray-100"
							{...itemProps}>
							<label
								htmlFor={`${inputId}`}
								className="block relative w-full h-full p-2 has-[:checked]:bg-blue-600 has-[:checked]:text-white cursor-pointer">
								<input
									type="radio"
									id={`${inputId}`}
									name={category}
									value={option.name}
									checked={stateValue === option.name}
									onChange={handleChange}
									className={`${category}-option absolute h-0 w-0 top-0 left-0 opacity-0`}
									{...dataAttribute}
								/>
								{option.name}
							</label>
						</div>
					);
				})}
			</div>
			{sortedOptions.length > 7 ? (
				<span className="font-sans text-center text-gray-500">
					Scroll to view more
				</span>
			) : null}
		</>
	);
};

export default MakeModelSelector;
