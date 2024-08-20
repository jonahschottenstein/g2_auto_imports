import React from "react";

interface ImageProps {
	src: string;
	alt: string;
}

interface ImageGridProps {
	images: ImageProps[];
	onImageClick: (index: number) => void;
}

const ImageGrid = ({ images, onImageClick }: ImageGridProps) => {
	return (
		// <div className="image-grid grid grid-cols-3 gap-2">
		<div className="image-grid grid overflow-x-auto gap-1 grid-rows-[repeat(2,_8rem)] grid-cols-[repeat(6,_minMax(10rem,_1fr))] md:grid-rows-[repeat(4,_100px)]">
			{images.slice(0, 9).map(({ src, alt }, index) => (
				<img
					key={index}
					src={src}
					alt={`Thumbnail ${index + 1}`}
					// className="image-grid-item w-full h-auto cursor-pointer"
					className="image-grid-item group block relative overflow-hidden first:rounded-l-lg last:rounded-ee-lg [&:nth-child(5)]:rounded-tr-lg md:[&:nth-child(5)]:rounded-none md:[&:nth-child(3)]:rounded-tr-lg first:row-span-2 first:col-span-2 md:first:row-span-4 md:first:col-span-4 object-cover w-full h-full"
					onClick={() => onImageClick(index)}
				/>
			))}
		</div>
	);
};

export default ImageGrid;
