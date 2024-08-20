import Image from "next/image";
import React, { MouseEventHandler } from "react";

interface ImageProps {
	src: string;
	alt: string;
}

interface ImageGridProps {
	images: ImageProps[];
	onImageClick: (index: number) => void;
	onLastImageClick: () => void;
	totalPhotosCount: number;
}

interface ImageGridItemProps {
	src: string;
	alt: string;
	index: number;
	totalPhotosCount: number;
	onClick: MouseEventHandler<HTMLImageElement>;
}

const ImageGridItem = ({
	src,
	alt,
	index,
	totalPhotosCount,
	onClick,
}: ImageGridItemProps) => {
	return (
		<div
			key={index}
			className="image-grid-item group block relative overflow-hidden first:rounded-l-lg last:rounded-ee-lg [&:nth-child(5)]:rounded-tr-lg md:[&:nth-child(5)]:rounded-none md:[&:nth-child(3)]:rounded-tr-lg first:row-span-2 first:col-span-2 md:first:row-span-4 md:first:col-span-4 object-cover w-full h-full cursor-pointer"
			onClick={onClick}>
			<Image
				src={src}
				alt={alt}
				width={100}
				height={100}
				className="w-full h-full object-cover"
				// className="image-grid-item group block relative overflow-hidden first:rounded-l-lg last:rounded-ee-lg [&:nth-child(5)]:rounded-tr-lg md:[&:nth-child(5)]:rounded-none md:[&:nth-child(3)]:rounded-tr-lg first:row-span-2 first:col-span-2 md:first:row-span-4 md:first:col-span-4 object-cover w-full h-full cursor-pointer"
				// onClick={onClick}
			/>
			{index === 8 && (
				<div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl font-sans font-semibold">
					All Photos ({totalPhotosCount})
				</div>
			)}
		</div>
	);
};

const ImageGrid = ({
	images,
	onImageClick,
	onLastImageClick,
	totalPhotosCount,
}: ImageGridProps) => {
	return (
		<div className="image-grid grid overflow-x-auto gap-1 grid-rows-[repeat(2,_8rem)] grid-cols-[repeat(6,_minMax(10rem,_1fr))] md:grid-rows-[repeat(4,_100px)]">
			{images.slice(0, 9).map(({ src, alt }, index) => (
				<ImageGridItem
					src={src}
					alt={alt}
					index={index}
					totalPhotosCount={totalPhotosCount}
					onClick={() =>
						index === 8 ? onLastImageClick() : onImageClick(index)
					}
				/>
			))}
		</div>
	);
};

export default ImageGrid;
