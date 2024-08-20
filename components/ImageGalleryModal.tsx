import Image from "next/image";
import React from "react";
import XButton from "./XButton";

interface ImageProps {
	src: string;
	alt: string;
}

interface ImageGalleryModalProps {
	images: ImageProps[];
	onImageClick: (index: number) => void;
	onClose: () => void;
}

const ImageGalleryModal = ({
	images,
	onImageClick,
	onClose,
}: ImageGalleryModalProps) => {
	return (
		<div className="fixed inset-0 bg-black flex justify-center items-center pt-[calc(72px_-_1rem)]">
			<div className="relative bg-black p-4 md:px-20 w-full h-full overflow-scroll">
				<XButton
					onClose={onClose}
					styles={"absolute top-4 right-2 text-white p-2 font-sans"}
				/>
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 mt-12">
					{images.map(({ src, alt }, index) => (
						<Image
							key={index}
							src={src}
							alt={alt}
							className="w-full h-auto cursor-pointer"
							width={100}
							height={100}
							onClick={() => onImageClick(index)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ImageGalleryModal;
