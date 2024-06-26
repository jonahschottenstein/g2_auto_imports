import React from "react";
import Image from "next/image";
import { CustomButton } from ".";
import Link from "next/link";
import { PrimaryBlockLink, SecondaryBlockLink } from "./CustomLinks";

const Hero = () => {
	const NAV_BAR_HEIGHT = "72px";
	// TODO: Make sure this is always the case

	return (
		<div
			className={`hero flex flex-1 relative w-full h-screen min-h-[calc(100vh-72px)] items-end sm:min-h-screen`}>
			<Image
				src={"/tokyo-imports-hero-image.png"}
				alt="Hero image"
				className="object-cover right-4"
				fill
				priority
				style={{
					objectPosition: "61.5% 50%",
				}}
			/>
			<div className="hero-cta-container flex flex-col sm:flex-row sm:h-fit sm:justify-start gap-4 justify-end m-8 w-full z-10">
				<PrimaryBlockLink
					href="/request-import-form/step_1"
					title="Request Import"
				/>
				<SecondaryBlockLink href="/" title="View Inventory" />
			</div>
		</div>
	);
};

export default Hero;
