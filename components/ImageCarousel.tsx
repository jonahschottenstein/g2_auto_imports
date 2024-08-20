import React from "react";

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
		<div className="image-carousel fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
			<div className="image-carousel-content relative">
				<button
					onClick={onClose}
					className="close-button absolute top-0 right-0 text-white p-2">
					X
				</button>
				<button
					onClick={handlePrevious}
					className="prev-button absolute left-0 text-white p-2">
					‹
				</button>
				<img
					src={images[currentImageIndex]}
					alt={`Carousel ${currentImageIndex + 1}`}
					className="image-carousel-image w-auto h-full"
				/>
				<button
					onClick={handleNext}
					className="next-button absolute right-0 text-white p-2">
					›
				</button>
			</div>
		</div>
	);
};

export default ImageCarousel;
