import React from "react";
import { CarCardProps } from "@/types";
import Image from "next/image";
import testImage from "../public/tokyo-imports-hero-image.png";
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
		<div className="car-card flex flex-col relative">
			<Link href={pageUrl}>
				<Image
					// src={imageSrc}
					src={testImage}
					alt={`Image of ${year} ${make} ${model}`}
					// width={300}
					style={{
						aspectRatio: "4 / 3",
						objectFit: "cover",
						width: "100%",
					}}
				/>
			</Link>
			<div className="car-card-detail pr-3 py-3">
				<Link href={pageUrl}>
					<h3 className="car-card-title text-lg font-semibold ">{`${year} ${make} ${model}`}</h3>
					<p>{price}</p>
				</Link>
			</div>
		</div>
	);
};

export default CarCard;
