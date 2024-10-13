import React from "react";
import Section from "./Section";
import Image from "next/image";
import about1 from "../public/images/about_compressed/about1.jpg";
import about2 from "../public/images/about_compressed/about2.jpg";
import about3 from "../public/images/about_compressed/about3.jpg";
import { AboutUsContentItemProps, AboutUsContentProps } from "@/types";
// import about4 from "../public/images/about_compressed/about4.jpg";

const AboutUsContentItem = ({
	imageSrc,
	imageAlt,
	copyElement,
	index,
}: AboutUsContentItemProps) => {
	const mdFlexDirection =
		index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";

	return (
		<div
			className={`about-content-item flex flex-col ${mdFlexDirection} gap-4 md:gap-8`}>
			<div className="image-wrapper w-full md:w-1/2 relative">
				<Image
					src={imageSrc}
					alt={imageAlt}
					sizes="(max-width: 768px): 100vw, 50vw"
				/>
			</div>
			<div className="copy-wrapper flex justify-center items-center w-full md:w-1/2">
				{copyElement}
			</div>
		</div>
	);
};

const items = [
	{
		imageSrc: about1,
		imageAlt:
			"Green Mitsubishi Delica Star Wagon (left) and white Mitsubishi Delica Space Gear (right) parked side-by-side on a dirt road.",
		copyElement: (
			<div className="font-sans md:pl-[16%]">
				<h3 className="font-bold mb-4">Our Mission</h3>
				<p>
					At G2 Auto Imports, our mission is to source unique and desirable
					vehicles tailored specifically to you. Whether you&apos;re a fan of
					hard-to-find classics, JDM icons, or anything in between, our goal is
					to make your acquisition experience as simple as possible. We handle
					sourcing, importing, and registering the vehicles, ensuring the title
					transfer is as straightforward as any domestic vehicle purchase.
				</p>
			</div>
		),
	},
	{
		imageSrc: about2,
		imageAlt:
			"White Mitsubishi Delica Space Gear parked in front of green Mitsubishi Delica Star Wagon on a dirt road.",
		copyElement: (
			<div className="font-sans md:pr-[16%]">
				<h3 className="font-bold mb-4">Our Story</h3>
				<p>
					My name is Grant Glimcher, and I'm the founder of G2 Auto Imports.
					Growing up, I watched as strict safety and emissions regulations led
					manufacturers to produce increasingly uniform vehicles, often
					sacrificing style and creativity. While I have no issue with the
					efficacy of these vehicles, I aim to bring more fun, excitement, and
					variety to the roads—for the enjoyment of both owners and onlookers.
				</p>
			</div>
		),
	},
	{
		imageSrc: about3,
		imageAlt:
			"White Mitsubishi Delica Space Gear parked on a dirt road, facing camera.",
		copyElement: (
			<div className="font-sans md:pl-[16%]">
				<h3 className="font-bold mb-4">Our Services</h3>
				<p>
					Leveraging our relationships with exporters, international shipping
					companies, customs brokers, inland shipping services, and unique
					registration solutions, we provide an all-in-one service to find and
					deliver any vehicle you are interested in. Explore our inventory
					today, or contact us to discuss the vehicle that best fits your taste.
				</p>
			</div>
		),
	},
];

const AboutUsContent = ({ items }: AboutUsContentProps) => {
	return (
		<div className="about-content flex flex-col gap-16">
			{items.map(({ imageSrc, imageAlt, copyElement }, index) => {
				return (
					<AboutUsContentItem
						key={imageAlt}
						imageSrc={imageSrc}
						imageAlt={imageAlt}
						copyElement={copyElement}
						index={index}
					/>
				);
			})}
		</div>
	);
};

const AboutUsSection = () => {
	return (
		<Section h2="About Us">
			<AboutUsContent items={items} />
		</Section>
	);
};

export default AboutUsSection;
