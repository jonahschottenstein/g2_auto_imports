import { ChangeEventHandler, MouseEventHandler } from "react";

export interface CustomButtonProps {
	title: string;
	type?: "button";
	value?: number | string;
	styles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CarCardProps {
	imageSrc: string;
	year: number;
	make: string;
	model: string;
	price: string;
	pageUrl: string;
}

export interface Car extends CarCardProps {
	id: string;
	featured: boolean;
}

export interface Make {
	id: number;
	name: string;
}

export interface Model {
	id: number;
	name: string;
	makeId: number;
}

export interface MakeModelSelectorProps {
	category: string;
	options: Make[] | Model[];
	stateValue: string;
	handleChange: ChangeEventHandler<HTMLInputElement>;
}

export interface Production {
	id: number;
	startYear: number;
	endYear: number;
	modelId: number;
}

export interface ProductionYearsSelectorProps {
	production: Production;
	stateValue: { startYear: number; endYear: number };
	handleClick: MouseEventHandler<HTMLButtonElement>;
}
