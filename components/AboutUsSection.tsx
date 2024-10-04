import React, { Key, ReactNode } from "react";
import Section from "./Section";
import Image, { StaticImageData } from "next/image";
import about1 from "../public/images/about_compressed/about1.jpg";
import about2 from "../public/images/about_compressed/about2.jpg";
import about3 from "../public/images/about_compressed/about3.jpg";
import about4 from "../public/images/about_compressed/about4.jpg";

interface AboutUsContentItemProps {
	key: Key;
	imageSrc: StaticImageData;
	imageAlt: string;
	copyElement: ReactNode;
	index: number;
}

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
		imageAlt: "about1",
		copyElement: (
			<div className="font-sans md:pl-[16%]">
				<h3 className="font-bold mb-4">Our Mission</h3>
				<p>
					At G2 Auto Imports, our mission is to source unique and desirable
					vehicles tailored specifically to you. Whether you're a fan of
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
		imageAlt: "about2",
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
		imageAlt: "about3",
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
	{
		imageSrc: about4,
		imageAlt: "about4",
		copyElement: (
			<div className="font-sans md:pr-[16%]">
				<h3 className="font-bold mb-4">Title</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
					dicta officia minima officiis laborum dolorum est odit quam natus
					quidem repudiandae pariatur, amet architecto dolores, illo provident
					accusamus praesentium fuga.
				</p>
			</div>
		),
	},
];

interface AboutContentItem {
	imageSrc: StaticImageData;
	imageAlt: string;
	copyElement: ReactNode;
}

interface AboutUsContentProps {
	items: AboutContentItem[];
}

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

/* export const AboutUsContent = () => {
	return (
		<div className="max-w-2xl mx-auto">
			<p className="text-left font-sans mb-8">
				Over the last few years, many car enthusiasts have started turning their
				attention to recent vehicles – cars from the 1980s, 1990s, and beyond.
				Automotive reviewer Doug DeMuro realized there isn’t yet a specific
				place that’s focused solely on buying and selling these modern
				enthusiast cars, but there should be – so he and a team created Cars &
				Bids, with its simple name modeled after Doug’s famous pursuit of
				“quirks and features.”
			</p>
			<p className="text-left font-sans mb-8">
				Cars & Bids is the best online auction marketplace to buy and sell
				modern enthusiast cars – and that means pretty much anything that’s cool
				from the 1980s, 1990s, 2000s, 2010s, or 2020s. To us, “cool” ranges from
				the obvious (a Ferrari F355 or a Lamborghini Gallardo) to the esoteric
				(a pristine Dodge Dakota Convertible or a Mercury Capri XR2) to the
				traditional fun cars that enthusiasts love (a Mazda MX-5 Miata or a
				Porsche 911). Basically everything that’s exciting, fun, interesting, or
				quirky is welcome here – as long as it comes from the modern era.
			</p>
			<p className="text-left font-sans mb-8">
				Although there are many places to buy and sell a special car, Cars &
				Bids offers significant advantages over other websites.{" "}
				<strong>Here are just a few of our benefits:</strong>
			</p>
			<ul className="list-disc ml-4">
				<li className="font-sans text-left pl-2 mb-8">
					<strong>We’re focused on modern enthusiast cars:</strong> the 1980s to
					the 2020s. That means anyone interested in the next era of exciting
					cars will come here first to buy and sell.
				</li>
				<li className="font-sans text-left pl-2 mb-8">
					<strong>Our fees are low.</strong> Sellers list for free, and the
					buyer's fee is just 4.5%, with a minimum of $225 and a maximum of
					$4,500 — far below other auction houses and enthusiast car auction
					websites.
				</li>
				<li className="font-sans text-left pl-2 mb-8">
					<strong>
						We believe that every vehicle should come with a vehicle history
						report
					</strong>{" "}
					– so we provide one, for free, instead of asking sellers to pay for
					their own.
				</li>
				<li className="font-sans text-left pl-2 mb-8">
					<strong>
						Doug DeMuro will bring extra eyes – and extra buyers – to your cars,
					</strong>
					periodically reviewing cars offered on Cars & Bids. If your car is
					chosen, you’ll get far more eyes on your vehicle than any other
					auction platform on earth.
				</li>
				<li className="font-sans text-left pl-2 mb-8">
					While other car auctions take weeks or even months to get your car
					listed and available to buyers,{" "}
					<strong>we’ll get your car listed quickly</strong> – and we’ll even
					take your input on scheduling your car’s auction.
				</li>
				<li className="font-sans text-left pl-2 mb-8">
					<strong>
						Cars &amp; Bids makes it easy to submit your car for sale.
					</strong>{" "}
					We value your time by asking for only a few crucial details before
					letting you know whether or not we’re accepting your vehicle. That
					means you don’t have to waste your time providing initial information
					only to have your car rejected.
				</li>
				<li className="font-sans text-left pl-2 mb-8">
					<strong>
						Cars &amp; Bids is the most user-friendly online automotive
						marketplace,
					</strong>
					with easy sorting and searching – and simplified auctions that tell
					you exactly what you need to know about each vehicle.
				</li>
				<li className="font-sans text-left pl-2 mb-8">
					We’re always here to help -{" "}
					<strong>including after the auction ends</strong> We’ve built a
					step-by-step checklist to ensure a smooth sale – and we’re just a chat
					away if you have any questions.
				</li>
			</ul>
		</div>
	);
}; */

const AboutUsSection = () => {
	return (
		<Section h2="About Us">
			<AboutUsContent items={items} />
		</Section>
	);
};

export default AboutUsSection;
