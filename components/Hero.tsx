import React from "react";
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
	return (
		<div className="border-4 border-red-700 flex flex-1 relative w-full ">
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
			<div className="hero-cta-container flex flex-col justify-end m-8 w-full z-10">
				<CustomButton
					title="View Inventory"
					styles="border-2 border-white px-4 py-2 rounded-lg text-base"
				/>
			</div>
		</div>
	);
};

export default Hero;
