import React from "react";
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
	return (
		<div className="flex flex-1 relative w-full h-full sm:items-end">
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
				<CustomButton
					title="Request Import"
					styles="bg-black text-white px-4 py-2 rounded-lg text-base"
				/>
				<CustomButton
					title="View Inventory"
					styles="border-2 border-white px-4 py-2 rounded-lg text-base"
				/>
			</div>
		</div>
	);
};

export default Hero;
