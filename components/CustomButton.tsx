import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({ title, styles, handleClick }: CustomButtonProps) => {
	return (
		<button className={`custom-button ${styles}`} onClick={handleClick}>
			{title}
		</button>
	);
};

export default CustomButton;
