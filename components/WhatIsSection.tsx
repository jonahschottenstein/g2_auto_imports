import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBox,
	faCar,
	faChartSimple,
	faClock,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Section from "./Section";

interface IconBlockProps {
	icon: IconProp;
	title: string;
	blurb: string;
}

interface IconBlockArrayProps {
	iconBlocks: IconBlockProps[];
}

const iconBlocks: IconBlockProps[] = [
	{
		icon: faCar as IconProp,
		title: "Authentic JDM Cars",
		blurb:
			"Tokyo-Imports specializes in importing genuine Japanese Domestic Market vehicles directly from Japan.",
	},
	{
		icon: faBox as IconProp,
		title: "Hassle-Free Importing",
		blurb:
			"We handle all the complex paperwork and logistics to ensure a smooth and stress-free car import experience.",
	},
	{
		icon: faChartSimple as IconProp,
		title: "Detailed Listings",
		blurb:
			"Each car listing includes comprehensive details and high-quality images to help you make informed decisions.",
	},
	{
		icon: faClock as IconProp,
		title: "Real-Time Inventory",
		blurb:
			"Stay updated with our constantly refreshed inventory, featuring the latest arrivals and exclusive deals.",
	},
];

const IconBlockComponent = ({ icon, title, blurb }: IconBlockProps) => {
	return (
		<div className="flex gap-x-5">
			{/* <FontAwesomeIcon className="shrink-0 fw w-7" icon={icon} size="sm" /> */}
			<FontAwesomeIcon
				className="shrink-0 mt-1 size-6 fw text-blue-600"
				icon={icon}
				size="sm"
			/>
			<div className="grow">
				<h4 className="text-lg font-semibold font-sans text-gray-800">
					{title}
				</h4>
				<p className="mt-1 font-sans text-gray-600">{blurb}</p>
			</div>
		</div>
	);
};

const IconBlockGrid = ({ iconBlocks }: IconBlockArrayProps) => {
	return (
		<div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
			<div className="lg:col-span-1">
				{/* <h3 className="font-sans font-bold text-2xl md:text-3xl text-gray-800"> */}
				<h3 className="font-sans font-bold text-xl md:text-2xl text-gray-800">
					Your Gateway to Authentic JDM Imports
				</h3>
				<p className="mt-2 md:mt-4 font-sans text-gray-500">
					Tokyo-Imports is your trusted partner for bringing the best Japanese
					Domestic Market vehicles directly to your driveway, offering a
					seamless and informed import experience from start to finish.
				</p>
			</div>
			<div className="lg:col-span-2">
				<div className="grid sm:grid-cols-2 gap-8 md:gap-12">
					{iconBlocks.map(({ icon, title, blurb }) => {
						return (
							<IconBlockComponent icon={icon} title={title} blurb={blurb} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

const WhatIsSection = () => {
	return (
		<Section h2="What's Tokyo-Imports?">
			<IconBlockGrid iconBlocks={iconBlocks} />
		</Section>
	);
};

export default WhatIsSection;
