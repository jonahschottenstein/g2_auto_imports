import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({
	// title,
	type = "button",
	value,
	styles,
	handleClick,
	children,
}: CustomButtonProps) => {
	return (
		<button
			type={type}
			value={value}
			className={`custom-button font-sans ${styles}`}
			onClick={handleClick}>
			{/* {title} */}
			{children}
		</button>
	);
};

export default CustomButton;
