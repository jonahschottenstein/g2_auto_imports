import React from "react";
import { CarCardProps } from "@/types";
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

const CarCard = ({
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
};

export default CarCard;
