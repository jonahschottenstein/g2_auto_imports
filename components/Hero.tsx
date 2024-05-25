import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="border-4 border-red-700 flex flex-1 relative w-full ">
			<Image
				src={"/tokyo-imports-hero-image.png"}
				alt="Hero image"
				className="object-cover right-4"
				fill
				style={{
					objectPosition: "61.5% 50%",
				}}
			/>
		</div>
	);
};

export default Hero;
