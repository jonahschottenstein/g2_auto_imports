import React from "react";
import XButton from "./XButton";
import Image from "next/image";

interface ImageCarouselProps {
	images: string[];
	currentIndex: number;
	onClose: () => void;
}

const ImageCarousel = ({
	images,
	currentIndex,
	onClose,
}: ImageCarouselProps) => {
	const [currentImageIndex, setCurrentImageIndex] =
		React.useState(currentIndex);

	const handleNext = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrevious = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className="image-carousel fixed inset-0 bg-black flex justify-center items-center z-30">
			<XButton
				onClose={onClose}
				styles={
					"absolute top-2 right-2 text-white font-sans p-2 z-50 bg-black bg-opacity-75 flex justify-center items-center rounded-md"
				}
			/>
			<div className="image-carousel-content relative w-full h-full">
				<button
					onClick={handlePrevious}
					className="prev-button absolute left-4 top-[50%] font-sans text-3xl text-white p-2 bg-black bg-opacity-75 w-9 h-14 rounded-md z-40"
					name="view-previous-image-button"
					aria-label="View previous image">
					‹
				</button>
				<Image
					src={images[currentImageIndex]}
					alt={`Carousel ${currentImageIndex + 1}`}
					// className="image-carousel-image w-auto h-full max-h-[450px] object-contain"
					className="image-carousel-image object-contain"
					// width={600}
					// height={400}
					fill
					// priority={true}
					// TODO: Figure this out (width/height/fill/sizes/etc.)
				/>
				<button
					onClick={handleNext}
					className="next-button absolute right-4 top-[50%] font-sans text-3xl text-white p-2 bg-black bg-opacity-75 w-9 h-14 rounded-md z-40"
					name="view-next-image-button"
					aria-label="View next image">
					›
				</button>
			</div>
		</div>
	);
};

export default ImageCarousel;
