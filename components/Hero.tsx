import React from "react";
import Image from "next/image";
import Link from "next/link";
import desktopImage from "../public/images/hero/hero_desktop.jpeg";
// import heroMobile from "../public/images/hero/heroMobile (1).jpeg";

/* const MobileHeroImage = () => {
	return (
		<Image
			src={heroMobile}
			alt="Green 1999 Mitsubishi Delica Star Wagon"
			className="w-full h-full object-cover pointer-events-none select-none sm:hidden"
			fill
			sizes="(max-width: 640px) 100vw, 0px"
			priority
		/>
	);
	// ? Should max-width be 639px?
}; */

const DesktopHeroImage = () => {
	return (
		<Image
			src={desktopImage}
			// src={heroD}
			// src={heroStylized}
			alt="Green 1999 Mitsubishi Delica Star Wagon and white 1999 Mitsubishi Delica Space Gear"
			className="w-full h-full object-cover object-[82%_50%] pointer-events-none select-none sm:block"
			fill
			sizes="100vw"
			priority
		/>
	);
};

const HeroContent = () => {
	return (
		<div className="w-full h-full max-w-screen-xl mx-auto">
			<div className="relative z-10 flex flex-col items-center justify-start h-full py-8 text-center text-white font-sans translate-y-20 transition-transform xl:translate-y-10 [@media(max-height:500px)]:translate-y-0 [@media(max-height:500px)]:pt-0">
				<div className="hero-content-wrapper flex flex-col justify-start items-center text-center py-4 gap-2 text-white">
					<h1 className="text-[4.5vw] text-center md:text-4xl font-bold mb-1">
						You Pick the Car. We&apos;ll Handle the Rest.
					</h1>
					<h2 className="text-base md:text-xl lg:text-2xl mb-4 max-w-[80%] font-semibold">
						We&apos;ll source, import, title, and deliver your vehicle straight
						to your door.
					</h2>
					<Link
						href="/request-import-form/step_1"
						className="w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-center text-white font-semibold rounded-lg transition duration-300"
						aria-label="Request Import">
						Request Import
					</Link>
				</div>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<section className="relative w-full h-[var(--section-height)] px-4 md:px-6 lg:px-8">
			<div className="absolute inset-0">
				<div className="hero-image-wrapper relative w-full h-full">
					{/* <MobileHeroImage /> */}
					<DesktopHeroImage />
				</div>
			</div>
			<HeroContent />
		</section>
	);
};

export default Hero;
