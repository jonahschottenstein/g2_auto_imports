import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CarCardProps } from "@/types";

const CarCard = ({
	href,
	image,
	name,
	features,
	price,
	pathName,
	index,
}: CarCardProps) => {
	const getImageSizes =
		pathName === "/"
			? "(max-width: 640px) 100vw, (min-width: 640px) 50vw"
			: "(max-width: 640px) 100vw, ((min-width: 640px) and (max-width: 768px)) 50vw, ((min-width: 768px) and (max-width: 1024px)) 33.33vw, (min-width: 1024px) 25vw";

	return (
		<div className="car-card flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
			<div
				className="car-card-image-wrapper relative w-full group overflow-hidden"
				style={{
					aspectRatio: 16 / 9,
				}}>
				<Image
					src={image}
					alt={name}
					style={{
						objectPosition: "50% 63%",
					}}
					className="car-image object-cover pointer-events-none group-hover:scale-105 transition-transform duration-500"
					fill
					sizes={getImageSizes}
					priority={index === 0 ? true : false}
				/>
			</div>
			<div className="car-card-details px-4 flex flex-col flex-1 justify-between">
				<div className="car-card-info">
					{pathName === "/" ? (
						<h3 className="car-name text-lg font-semibold text-black mt-2 font-sans">
							{name}
						</h3>
					) : (
						<h2 className="car-name text-lg font-semibold text-black mt-2 font-sans">
							{name}
						</h2>
					)}
					{/* <p className="car-card-features font-sans">{features.join(" | ")}</p> */}
					<ul className="car-card-features-list">
						{features.map((feature) => (
							<li
								key={feature}
								className="inline text-base text-gray-800 font-sans after:content-['_|_'] after:text-gray-400 last:after:content-none">
								{feature}
							</li>
						))}
					</ul>
					<p className="car-price text-md font-semibold text-black font-sans mt-1">
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
