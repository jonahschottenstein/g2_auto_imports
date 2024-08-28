import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/tokyo-imports-hero-image.png";
import heroBackgroundMobile from "../public/images/hero/hero_mobile.jpeg";
import heroBackgroundDesktop from "../public/images/hero/hero_desktop.jpeg";

const OldHeroContent = () => {
	return (
		<div className="w-full h-full max-w-screen-xl mx-auto">
			<div className="relative z-10 flex flex-col items-start justify-end md:justify-center h-full py-8 text-left text-white md:w-1/3 lg:w-1/4 font-sans">
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
					Your Dream JDM Car Awaits
				</h1>
				<p className="text-lg md:text-xl lg:text-2xl mb-4">
					Explore our exclusive collection of JDM imports.
				</p>
				<Link
					href="/inventory"
					className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-center text-white font-semibold rounded-lg transition duration-300">
					View Inventory
				</Link>
			</div>
		</div>
	);
};
const HeroContent = () => {
	return (
		<div className="w-full h-full max-w-screen-xl mx-auto">
			{/* <div className="relative z-10 flex flex-col items-center justify-end md:justify-center h-full py-8 text-left text-white md:w-1/3 lg:w-1/4 font-sans"> */}
			<div className="relative z-10 flex flex-col items-center justify-end h-full py-8 text-left text-white font-sans">
				{/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
					Your Dream JDM Car Awaits
				</h1> */}
				<h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold mb-1">
					Your Dream Car Awaits
				</h1>
				<p className="text-lg text-center md:text-xl lg:text-2xl mb-4">
					Explore our exclusive collection of JDM imports.
				</p>
				<Link
					href="/inventory"
					className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-center text-white font-semibold rounded-lg transition duration-300">
					View Inventory
				</Link>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<section className="relative w-full h-[calc(100vh-74px)] px-4 md:px-6 lg:px-8">
			<div className="absolute inset-0">
				{/* <div */}
				{/* // className= */}
				{/* {`absolute inset-0 bg-[url('/images/hero/hero_mobile.jpeg')] md:bg-[url('/images/hero/hero_desktop.jpeg')] bg-cover bg-[50%_70%] md:bg-[50%_80%]`} */}
				{/* // className= */}
				{/* {`absolute inset-0 bg-[url('/images/hero/hero_mobile.jpeg')] lg:bg-[url('/images/hero/hero_desktop.jpeg')] bg-cover bg-[50%_70%] lg:bg-[50%_100%]`} */}
				{/* // > */}
				<Image
					// src={heroImage}
					src={heroBackgroundDesktop}
					// src={heroBackgroundMobile}
					alt="JDM Car"
					// className="w-full h-full object-cover pointer-events-none select-none"
					className="w-full h-full object-cover object-[50%_100%] xl:object-[50%_85%] pointer-events-none select-none"
					fill
					priority
				/>
			</div>
			<HeroContent />
		</section>
	);
};

export default Hero;
