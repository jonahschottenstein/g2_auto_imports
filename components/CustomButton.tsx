import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({
	// title,
	type = "button",
	value,
	styles,
	isDisabled = false,
	handleClick,
	children,
}: CustomButtonProps) => {
	return (
		<button
			type={type}
			value={value}
			className={`custom-button font-sans ${styles}`}
			disabled={isDisabled}
			onClick={handleClick}>
			{/* {title} */}
			{children}
		</button>
	);
};

export default CustomButton;
