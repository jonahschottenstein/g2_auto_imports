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
			className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
			href={pageUrl}>
			<Image
				className="w-full h-auto rounded-t-xl"
				src={imageSrc}
				alt={`Image of ${year} ${make} ${model}`}
				width={100}
				height={100}
			/>
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
