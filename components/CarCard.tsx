import React from "react";
import Image from "next/image";

interface ProductProps {
	id: string;
	title: string;
	description: string;
	imageSrc: string;
	pageUrl: string;
}

const Product: React.FC<ProductProps> = ({
	id,
	title,
	description,
	imageSrc,
	pageUrl,
}) => {
	return (
		<div>
			<Image src={imageSrc} alt={`Image of ${title}`} />
			<h3>{title}</h3>
		</div>
	);
};

export default Product;
