import React from "react";
import XButton from "./XButton";

interface ImageProps {
	src: string;
	alt: string;
}

interface ImageCarouselProps {
	images: ImageProps[];
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
		<div className="image-carousel fixed inset-0 bg-black flex justify-center items-center pt-[calc(72px_-_1rem)]">
			<XButton
				onClose={onClose}
				styles={"absolute top-20 right-2 text-white font-sans p-2"}
			/>
			<div className="image-carousel-content relative">
				<button
					onClick={handlePrevious}
					className="prev-button absolute left-4 top-[50%] font-sans text-3xl text-white p-2 bg-black bg-opacity-75 w-9 h-14 rounded-md">
					‹
				</button>
				<img
					src={images[currentImageIndex].src}
					alt={`Carousel ${currentImageIndex + 1}`}
					className="image-carousel-image w-auto h-full max-h-[450px] object-contain"
				/>
				<button
					onClick={handleNext}
					className="next-button absolute right-4 top-[50%] font-sans text-3xl text-white p-2 bg-black bg-opacity-75 w-9 h-14 rounded-md">
					›
				</button>
			</div>
		</div>
	);
};

export default ImageCarousel;
