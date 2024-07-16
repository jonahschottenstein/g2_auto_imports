import React from "react";
import { CarCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

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
			className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
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
				<h3 className="text-lg font-bold text-gray-800 dark:text-white">
					{`${year} ${make} ${model}`}
				</h3>
				<p className="mt-1 text-gray-500 dark:text-neutral-400">{price}</p>
			</div>
		</Link>
	);
};

export default CarCard;
