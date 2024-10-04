import { CustomButtonProps } from "@/types";
import React from "react";
import { sendGAEvent } from "@next/third-parties/google";

const CustomButton = ({
	// title,
	type = "button",
	value,
	styles,
	ariaLabel,
	isDisabled = false,
	handleClick,
	children,
}: CustomButtonProps) => {
	return (
		<button
			type={type}
			value={value}
			className={`custom-button font-sans ${styles}`}
			aria-label={ariaLabel}
			disabled={isDisabled}
			// onClick={handleClick}
			onClick={(e) => {
				handleClick && handleClick(e);
				// sendGAEvent("event", "buttonClicked", { value: "xyz" });
				sendGAEvent({ event: "buttonClicked", value: "xyz" });
			}}>
			{/* {title} */}
			{children}
		</button>
	);
};

export default CustomButton;
