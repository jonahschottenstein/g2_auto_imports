import { MouseEventHandler } from "react";

export interface CustomButtonProps {
	title: string;
	styles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}
