import React from "react";
import Image from "next/image";
import { CustomButton } from ".";
import Link from "next/link";
import { PrimaryBlockLink, SecondaryBlockLink } from "./CustomLinks";
import heroImage from "../public/tokyo-imports-hero-image.png";

const HeroOld = () => {
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
				<SecondaryBlockLink href="/inventory" title="View Inventory" />
			</div>
		</div>
	);
};

// TODO: Need to break this up into components
/* const Hero = () => {
	return (
		<div className="px-4 md:px-6 lg:px-8 py-10 pt-14">
			<div
				data-hs-carousel='{
      "loadingClasses": "opacity-0"
    }'
				className="relative">
				<div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)]  bg-gray-100 rounded-2xl">
					<div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0 font-sans">
						<div className="hs-carousel-slide">
							<div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('/tokyo-imports-hero-image.png')] bg-cover bg-center bg-no-repeat">
								<div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
									<span className="block text-white">Nike React</span>
									<span className="block text-white text-xl md:text-3xl">
										Rewriting sport's playbook for billions of athletes
									</span>
									<div className="mt-5">
										<a
											className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
											href="#">
											Read Case Studies
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="hs-carousel-slide">
							<div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
								<div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
									<span className="block text-white">CoolApps</span>
									<span className="block text-white text-xl md:text-3xl">
										From mobile apps to gaming consoles
									</span>
									<div className="mt-5">
										<a
											className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
											href="#">
											Read Case Studies
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="hs-carousel-slide">
							<div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('https://images.unsplash.com/photo-1629666451094-8908989cae90?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
								<div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
									<span className="block text-white">Grumpy</span>
									<span className="block text-white text-xl md:text-3xl">
										Bringing Art to everything
									</span>
									<div className="mt-5">
										<a
											className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
											href="#">
											Read Case Studies
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<button
					type="button"
					className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20">
					<span className="text-2xl" aria-hidden="true">
						<svg
							className="flex-shrink-0 size-3.5 md:size-4"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16">
							<path
								fillRule="evenodd"
								d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
						</svg>
					</span>
					<span className="sr-only">Previous</span>
				</button>

				<button
					type="button"
					className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20">
					<span className="sr-only">Next</span>
					<span className="text-2xl" aria-hidden="true">
						<svg
							className="flex-shrink-0 size-3.5 md:size-4"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16">
							<path
								fillRule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
						</svg>
					</span>
				</button>
			</div>
		</div>
	);
}; */

const HeroContent = () => {
	return (
		// <div className="relative z-10 flex flex-col items-start justify-end md:justify-center h-full p-8 text-left text-white md:w-1/3 lg:w-1/4 font-sans">
		<div className="w-full h-full max-w-screen-xl mx-auto">
			<div className="relative z-10 flex flex-col items-start justify-end md:justify-center h-full py-8 text-left text-white md:w-1/3 lg:w-1/4 font-sans">
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
					Your Dream JDM Car Awaits
				</h1>
				<p className="text-lg md:text-xl lg:text-2xl mb-4">
					Explore our exclusive collection of JDM imports.
				</p>
				<button className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
					View Inventory
				</button>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<section className="relative w-full h-[calc(100vh-74px)] px-4 md:px-6 lg:px-8">
			<div className="absolute inset-0">
				<Image
					src={heroImage}
					alt="JDM Car"
					className="w-full h-full object-cover pointer-events-none select-none"
					priority
				/>
			</div>
			<HeroContent />
		</section>
	);
};

export default Hero;
