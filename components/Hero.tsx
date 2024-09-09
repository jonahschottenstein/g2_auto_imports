import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroBackgroundDesktop from "../public/images/hero/hero_desktop.jpeg";
import heroBackgroundSpaceGear from "../public/images/hero/hero_background_space_gear.jpg";
import heroSpaceGearMobile from "../public/images/hero/hero_space_gear_mobile.jpg";
import heroImageBoth from "../public/images/hero/hero_image_both.jpg";
import heroBG from "../public/images/hero/hero_bg_2.jpg";

const HeroContent = () => {
	return (
		<div className="w-full h-full max-w-screen-xl mx-auto">
			{/* <div className="relative z-10 flex flex-col items-center justify-end md:justify-center h-full py-8 text-left text-white md:w-1/3 lg:w-1/4 font-sans"> */}
			{/* <div className="relative z-10 flex flex-col items-center justify-end h-full py-8 text-left text-white font-sans"> */}
			<div className="relative z-10 flex flex-col items-start justify-start sm:justify-center h-full py-8 text-left text-white font-sans">
				{/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
					Your Dream JDM Car Awaits
				</h1> */}
				<div className="hero-content-wrapper flex flex-col justify-start items-start py-4 gap-2">
					<h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold mb-1">
						Your Dream Car Awaits
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-[80%]">
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

const Hero = () => {
	return (
		<section className="relative w-full h-[var(--section-height)] px-4 md:px-6 lg:px-8">
			<div className="absolute inset-0">
				<div className="hero-image-wrapper relative w-full h-full">
					{/* <div
					className={`hero-image-wrapper relative w-full h-full bg-[url('../public/images/hero/hero_space_gear_mobile.jpg')] sm:bg-[url('../public/images/hero/hero_background_space_gear.jpg')] bg-no-repeat bg-cover bg-[50%_50%] sm:bg-[50%_70%]`}> */}
					<Image
						src={heroBG}
						alt="JDM Car"
						className="w-full h-full object-cover pointer-events-none select-none"
						fill
						priority
					/>
					{/* <Image
						src={heroBackgroundDesktop}
						alt="JDM Car"
						className="w-full h-full object-cover object-[50%_100%] xl:object-[50%_85%] pointer-events-none select-none"
						fill
						priority
					/> */}
					{/* <Image
						src={heroSpaceGearMobile}
						alt="JDM Car"
						className="w-full h-full object-cover object-[60%_70%] pointer-events-none select-none"
						fill
						priority
					/> */}
				</div>
				{/* <div className="desktop hero-image-overlay absolute sm:bg-[linear-gradient(150deg,_rgba(0,0,0,0.6)_0%,_rgba(255,255,255,0)_50%)] inset-0"></div> */}
				{/* <div className="mobile hero-image-overlay absolute bg-[linear-gradient(180deg,_rgba(0,0,0,0.5)_0%,_rgba(255,255,255,0)_50%)] sm:bg-[linear-gradient(150deg,_rgba(0,0,0,0.6)_0%,_rgba(255,255,255,0)_50%)] inset-0"></div> */}
				<div className="mobile hero-image-overlay absolute bg-[linear-gradient(150deg,_rgba(0,0,0,0.5)_0%,_rgba(255,255,255,0)_50%)] sm:bg-[linear-gradient(90deg,_rgba(0,0,0,0.5)_0%,_rgba(0,0,0,0)_60%)] inset-0"></div>
			</div>
			<HeroContent />
		</section>
	);
};

export default Hero;
