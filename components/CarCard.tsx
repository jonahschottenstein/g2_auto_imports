import React from "react";
import Image from "next/image";
import Link from "next/link";

/* const CarCard = ({
	imageSrc,
	year,
	make,
	model,
	price,
	pageUrl,
}: CarCardProps) => {
	return (
		<Link
			className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition "
			href={pageUrl}>
			<div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
				<Image
					className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
					src={imageSrc}
					alt={`Image of ${year} ${make} ${model}`}
					width={100}
					height={100}
				/>
			</div>
			<div className="p-4 md:p-5">
				<h3 className="text-lg font-bold text-gray-800 ">
					{`${year} ${make} ${model}`}
				</h3>
				<p className="mt-1 text-gray-500 ">{price}</p>
			</div>
		</Link>
	);
}; */

/* const CarCard = ({
	imageSrc,
	year,
	make,
	model,
	price,
	pageUrl,
}: CarCardProps) => {
	return (
		<Link
			className="car-card flex flex-col shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
			href={pageUrl}>
			<div className="relative pb-[66.6667%]">
				<Image
					className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300"
					src={imageSrc}
					alt={`Image of ${year} ${make} ${model}`}
					width={100}
					height={100}
				/>
			</div>
			<div className="p-4">
				<h3 className="car-name text-xl text-gray-800 font-bold font-display uppercase">{`${year} ${make} ${model}`}</h3>
				<p className="text-lg font-sans text-gray-600">{`${price}`}</p>
			</div>
		</Link>
	);
}; */

interface CarCardProps {
	href: string;
	image: string;
	name: string;
	features: string[];
	price: string;
}

const CarCard = ({ href, image, name, features, price }: CarCardProps) => {
	return (
		<div className="car-card flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
			<Image
				src={image}
				alt={name}
				width={650}
				height={330}
				style={{
					aspectRatio: 16 / 9,
					objectPosition: "50% 63%",
				}}
				className="car-image w-full object-cover pointer-events-none"
			/>
			<div className="car-card-details px-4 flex flex-col flex-1 justify-between">
				<div className="car-card-info">
					<h3 className="car-name text-lg font-semibold text-black mt-2 font-display">
						{name}
					</h3>
					{/* <p className="car-card-features font-sans">{features.join(" | ")}</p> */}
					<ul className="car-card-features-list">
						{features.map((feature) => (
							<li className="inline text-base text-gray-800 font-sans after:content-['_|_'] after:text-gray-400 last:after:content-none">
								{feature}
							</li>
						))}
					</ul>
					<p className="car-price text-md font-semibold text-black font-sans">
						{price}
					</p>
				</div>
				<Link
					href={href}
					className="car-card-cta-link bg-blue-600 text-white font-semibold py-2 px-4 my-4 rounded-lg block w-full font-sans text-center hover:bg-blue-700"
					aria-label="View details">
					View Details
				</Link>
			</div>
		</div>
	);
};

export default CarCard;
