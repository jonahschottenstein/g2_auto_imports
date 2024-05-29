import { MouseEventHandler } from "react";

export interface CustomButtonProps {
	title: string;
	styles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CarCardProps {
	id: string;
	year: number;
	make: string;
	model: string;
	price: number;
}
