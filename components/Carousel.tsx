// import React from "react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

// import "./styles.css";

interface CarouselItem {
	src: string;
	alt: string;
}

const CarouselItem = ({ src, alt }: CarouselItem) => {
	return (
		<SwiperSlide>
			<Image src={src} alt={alt} loading="lazy" width={100} height={100} />
			<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
		</SwiperSlide>
	);
};

const images = [
	{ src: "/P35-0901053_07.jpg", alt: "test-image" },
	{ src: "/P35-0901053_07.jpg", alt: "test-image" },
	{ src: "/P35-0901053_07.jpg", alt: "test-image" },
	{ src: "/P35-0901053_07.jpg", alt: "test-image" },
	{ src: "/P35-0901053_07.jpg", alt: "test-image" },
	{ src: "/P35-0901053_07.jpg", alt: "test-image" },
	{ src: "/P35-0901053_07.jpg", alt: "test-image" },
	{ src: "/P35-0901053_07.jpg", alt: "test-image" },
	{ src: "/P35-0901053_07.jpg", alt: "test-image" },
];

const Carousel = () => {
	const [swiperRef, setSwiperRef] = useState(null);
	const [slides, setSlides] = useState(
		Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
	);
	const swiper = useSwiper();

	const slideTo = (index) => {
		swiperRef.slideTo(index - 1, 0);
	};

	return (
		<>
			<Swiper
				// style={{
				//   '--swiper-navigation-color': '#fff',
				//   '--swiper-pagination-color': '#fff',
				// }}
				// lazy={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper">
				{/* {images.map(({ src, alt }) => (
					<CarouselItem src={src} alt={alt} />
				))} */}
				<SwiperSlide>
					<Image
						src="/P35-0901053_07.jpg"
						alt="test-image"
						width={356}
						height={356}
						loading="lazy"
					/>
					<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://swiperjs.com/demos/images/nature-2.jpg"
						loading="lazy"
					/>
					<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://swiperjs.com/demos/images/nature-3.jpg"
						loading="lazy"
					/>
					<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://swiperjs.com/demos/images/nature-4.jpg"
						loading="lazy"
					/>
					<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://swiperjs.com/demos/images/nature-5.jpg"
						loading="lazy"
					/>
					<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://swiperjs.com/demos/images/nature-6.jpg"
						loading="lazy"
					/>
					<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://swiperjs.com/demos/images/nature-7.jpg"
						loading="lazy"
					/>
					<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://swiperjs.com/demos/images/nature-8.jpg"
						loading="lazy"
					/>
					<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://swiperjs.com/demos/images/nature-9.jpg"
						loading="lazy"
					/>
					<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Carousel;
