import React from "react";
import Section from "./Section";

export const AboutUsContent = () => {
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
};

const AboutUsSection = () => {
	return (
		<Section h2="About Us">
			<AboutUsContent />
		</Section>
	);
};

export default AboutUsSection;
