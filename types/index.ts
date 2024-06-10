import { MouseEventHandler } from "react";

export interface CustomButtonProps {
	title: string;
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
