import { ImageGridItemProps, ImageGridProps } from "@/types";
import Image from "next/image";
import React, { MouseEventHandler } from "react";

/* interface ImageProps {
	src: string;
	alt: string;
} */

const ImageGridItem = ({
	src,
	alt,
	index,
	totalPhotosCount,
	onClick,
}: ImageGridItemProps) => {
	const imageSizes =
		index === 0
			? "(max-width: 768px) 324px, (max-width: 1024px) 652px, (min-width: 1024px) 63vw"
			: "160px";

	return (
		<div
			key={index}
			className="image-grid-item bg-slate-300 group block relative overflow-hidden first:rounded-l-lg last:rounded-ee-lg [&:nth-child(5)]:rounded-tr-lg md:[&:nth-child(5)]:rounded-none md:[&:nth-child(3)]:rounded-tr-lg first:row-span-2 first:col-span-2 md:first:row-span-4 md:first:col-span-4 object-cover w-full h-full cursor-pointer"
			role="button"
			tabIndex={0}
			onClick={onClick}>
			<Image
				src={src}
				alt={alt}
				fill
				sizes={imageSizes}
				className="w-full h-full object-cover"
				priority={index === 0 ? true : false}
			/>
			{/* {index === 8 && (
				<div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl font-sans font-semibold">
					All Photos ({totalPhotosCount})
				</div>
			)} */}
			{((totalPhotosCount >= 9 && index === 8) ||
				(totalPhotosCount < 9 && index === totalPhotosCount - 1)) && (
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
	const isLastImage = (index: number) =>
		(totalPhotosCount >= 9 && index === 8) ||
		(totalPhotosCount < 9 && index === totalPhotosCount - 1);

	return (
		<div className="image-grid grid overflow-x-auto gap-1 grid-rows-[repeat(2,_8rem)] grid-cols-[repeat(6,_minMax(10rem,_1fr))] md:grid-rows-[repeat(4,_7.5rem)] mt-4">
			{images.slice(0, 9).map((image, index) => (
				<ImageGridItem
					key={image}
					src={image}
					alt={`Image grid item ${index + 1}`}
					index={index}
					totalPhotosCount={totalPhotosCount}
					// onClick={() =>
					// 	index === 8 ? onLastImageClick() : onImageClick(index)
					// }
					onClick={() =>
						isLastImage(index) ? onLastImageClick() : onImageClick(index)
					}
				/>
			))}
		</div>
	);
};

export default ImageGrid;
