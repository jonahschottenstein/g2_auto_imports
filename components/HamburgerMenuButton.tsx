import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface HamburgerMenuButtonProps {
	onClick: () => void;
}

export const HamburgerMenuButton = ({ onClick }: HamburgerMenuButtonProps) => {
	return (
		<button
			onClick={onClick}
			className="flex focus:outline-none"
			name="hamburger-menu-button"
			aria-label="Hamburger menu button">
			<FontAwesomeIcon icon={faBars as IconProp} className="size-6" />
		</button>
	);
};
