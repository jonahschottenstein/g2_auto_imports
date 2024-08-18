import Image from "next/image";
import React from "react";
import { ImageModal } from "./CarPage";

const galleryItems = [
	{ src: "/P35-0901053_07.jpg", alt: "alt0", hasOverlay: false, index: 0 },
	{ src: "/P35-0901053_07.jpg", alt: "alt1", hasOverlay: false, index: 1 },
	{ src: "/P35-0901053_07.jpg", alt: "alt2", hasOverlay: false, index: 2 },
	{ src: "/P35-0901053_07.jpg", alt: "alt3", hasOverlay: false, index: 3 },
	{ src: "/P35-0901053_07.jpg", alt: "alt4", hasOverlay: false, index: 4 },
	{ src: "/P35-0901053_07.jpg", alt: "alt5", hasOverlay: false, index: 5 },
	{ src: "/P35-0901053_07.jpg", alt: "alt6", hasOverlay: false, index: 6 },
	{ src: "/P35-0901053_07.jpg", alt: "alt7", hasOverlay: false, index: 7 },
	{ src: "/P35-0901053_07.jpg", alt: "alt8", hasOverlay: true, index: 8 },
];

interface GalleryItemProps {
	src: string;
	alt: string;
	hasOverlay?: boolean;
	index?: number;
}

const GalleryItem = ({ src, alt }: GalleryItemProps) => {
	return (
		<div className="group block relative overflow-hidden rounded-lg">
			<Image
				className="w-full size-40 object-cover bg-gray-100 rounded-lg"
				src={src}
				alt={alt}
				width={100}
				height={100}
			/>
			<div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
				<div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg">
					<svg
						className="shrink-0 size-3"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round">
						<circle cx="11" cy="11" r="8" />
						<path d="m21 21-4.3-4.3" />
					</svg>
					<span className="text-xs">View</span>
				</div>
			</div>
			<ImageModal />
		</div>
	);
};

interface GalleryItemsProps {
	galleryItems: GalleryItemProps[];
}

const GalleryModalContent = ({ galleryItems }: GalleryItemsProps) => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
			{galleryItems.map(({ src, alt }) => (
				<GalleryItem src={src} alt={alt} />
			))}
		</div>
	);
};

const GalleryModal = () => {
	return (
		<div className="gallery-modal">
			<button
				type="button"
				className="gallery-modal-button py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600/50 text-white hover:bg-blue-700/60 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none absolute top-0 left-0 bottom-0 right-0 font-sans justify-center"
				aria-haspopup="dialog"
				aria-expanded="false"
				aria-controls="hs-vertically-centered-scrollable-modal"
				data-hs-overlay="#hs-vertically-centered-scrollable-modal">
				All Photos
			</button>
			<div
				id="hs-vertically-centered-scrollable-modal"
				className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
				role="dialog"
				tabIndex={-1}
				aria-labelledby="hs-vertically-centered-scrollable-modal-label">
				<div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
					<div className="w-full max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
						<div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
							<h3
								id="hs-vertically-centered-scrollable-modal-label"
								className="font-bold text-gray-800 dark:text-white">
								Modal title
							</h3>
							<button
								type="button"
								className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
								aria-label="Close"
								data-hs-overlay="#hs-vertically-centered-scrollable-modal">
								<span className="sr-only">Close</span>
								<svg
									className="shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round">
									<path d="M18 6 6 18"></path>
									<path d="m6 6 12 12"></path>
								</svg>
							</button>
						</div>
						<div className="p-4 overflow-y-auto">
							<div className="space-y-4">
								<GalleryModalContent galleryItems={galleryItems} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GalleryModal;
