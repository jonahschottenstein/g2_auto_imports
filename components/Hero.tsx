import React from "react";
import Image from "next/image";
import Link from "next/link";
// import heroMobile from "../public/images/hero/heroMobile.webp";
// import heroDesktop from "../public/images/hero/heroDesktop.webp";
// import starWagon from "../public/images/hero/hero_bg_just_green.jpg";
// import desktopImage from "../public/images/hero/hero_desktop.jpeg";
import heroD from "../public/images/hero/hero_d.webp";
import heroM from "../public/images/webp/hero/hero_star_wagon.webp";

const MobileHeroImage = () => {
	/* return (
		<Image
			src={heroMobile}
			alt="White 1999 Mitsubishi Delica Space Gear"
			className="w-full h-full object-cover object-[50%_30%] pointer-events-none select-none sm:hidden"
			fill
			priority
		/>
	); */
	return (
		<Image
			src={heroM}
			alt="Green 1999 Mitsubishi Delica Star Wagon"
			className="w-full h-full object-cover object-[50%_60%] pointer-events-none select-none sm:hidden"
			fill
			sizes="(max-width: 640px) 100vw, 0px"
			priority
		/>
	);
	// ? Should max-width be 639px?
};

const DesktopHeroImage = () => {
	/* return (
		<Image
			src={heroDesktop}
			alt="White 1999 Mitsubishi Delica Space Gear"
			className="w-full h-full object-cover object-[50%_90%] pointer-events-none select-none hidden sm:block"
			fill
			priority
		/>
	); */
	return (
		<Image
			// src={desktopImage}
			src={heroD}
			alt="Green 1999 Mitsubishi Delica Star Wagon and white 1999 Mitsubishi Delica Space Gear"
			className="w-full h-full object-cover pointer-events-none select-none hidden sm:block"
			fill
			sizes="(max-width: 640px): 0px, 100vw"
			priority
		/>
	);
	// ? Should max-width be 639px?
};

const HeroContent = () => {
	/* return (
		<div className="w-full h-full max-w-screen-xl mx-auto">
			<div className="relative z-10 flex flex-col items-start justify-start sm:justify-center h-full py-8 text-left text-white font-sans">
				<div className="hero-content-wrapper flex flex-col justify-start items-start text-left py-4 gap-2 text-black">
					<h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold mb-1">
						Your Dream Car Awaits
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-[80%] font-semibold">
						Explore our exclusive collection of JDM imports.
					</p>
					<Link
						href="/inventory"
						className="w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-center text-white font-semibold rounded-lg transition duration-300"
						aria-label="View inventory">
						View Inventory
					</Link>
				</div>
			</div>
		</div>
	); */
	return (
		<div className="w-full h-full max-w-screen-xl mx-auto">
			<div className="relative z-10 flex flex-col items-center justify-start h-full py-8 text-center text-white font-sans">
				<div className="hero-content-wrapper flex flex-col justify-start items-center text-center py-4 gap-2 text-white sm:mt-20 xl:mt-16">
					<h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold mb-1">
						Your Dream Car Awaits
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-[80%] font-semibold">
						Explore our exclusive collection of JDM imports.
					</p>
					<Link
						href="/inventory"
						className="w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-center text-white font-semibold rounded-lg transition duration-300"
						aria-label="View inventory">
						View Inventory
					</Link>
				</div>
			</div>
		</div>
	);
};
// ? Should I use translate instead of margin to move text at different screen sizes?

const Hero = () => {
	return (
		<section className="relative w-full h-[var(--section-height)] px-4 md:px-6 lg:px-8">
			<div className="absolute inset-0">
				<div className="hero-image-wrapper relative w-full h-full">
					<MobileHeroImage />
					<DesktopHeroImage />
				</div>
			</div>
			<HeroContent />
		</section>
	);
};

export default Hero;
