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
		<div>
			<Image src={imageSrc} alt={`Image of ${title}`} />
			<h3>{title}</h3>
		</div>
	);
};

export default CarCard;
