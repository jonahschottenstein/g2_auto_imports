import React from "react";
import Image from "next/image";
import { CustomButton } from ".";
import Link from "next/link";

const Hero = () => {
	const NAV_BAR_HEIGHT = "72px";
	// TODO: Make sure this is always the case

	return (
		<div
			// style={{ minHeight: `calc(100vh - ${NAV_BAR_HEIGHT})` }}
			// className="hero flex flex-1 relative w-full h-screen min-h-screen sm:items-end"
			// className={`hero flex flex-1 relative w-full h-screen min-h-[calc(100vh-72px)] items-end`}
			className={`hero flex flex-1 relative w-full h-screen min-h-[calc(100vh-${NAV_BAR_HEIGHT})] items-end sm:min-h-screen`}>
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
				{/* <CustomButton
					title="Request Import"
					styles="bg-black text-white px-4 py-2 rounded-lg text-base"
				/> */}
				<Link href={"/request-import"}>Request Import</Link>
				<CustomButton
					title="View Inventory"
					styles="bg-white text-black px-4 py-2 rounded-lg text-base"
				/>
			</div>
		</div>
	);
};

export default Hero;
