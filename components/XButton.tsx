import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface XButtonProps {
	onClose: () => void;
	styles: string;
}

const XButton = ({ onClose, styles }: XButtonProps) => {
	return (
		<button
			onClick={onClose}
			className={styles}
			name="exit-button"
			aria-label="exit-button">
			<FontAwesomeIcon icon={faXmark as IconProp} className="size-6" />
		</button>
	);
};

export default XButton;
