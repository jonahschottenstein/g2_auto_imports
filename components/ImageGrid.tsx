import React from "react";

interface ImageGridProps {
	images: string[];
	onImageClick: (index: number) => void;
}

const ImageGrid = ({ images, onImageClick }: ImageGridProps) => {
	return (
		<div className="image-grid grid grid-cols-3 gap-2">
			{images.slice(0, 9).map((src, index) => (
				<img
					key={index}
					src={src}
					alt={`Thumbnail ${index + 1}`}
					className="image-grid-item w-full h-auto cursor-pointer"
					onClick={() => onImageClick(index)}
				/>
			))}
		</div>
	);
};

export default ImageGrid;
