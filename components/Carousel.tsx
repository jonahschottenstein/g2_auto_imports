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

const Carousel = ({ swiperRef, onClick, onChange }) => {
	// const [swiperRef, setSwiperRef] = useState(null);
	/* 	const [slides, setSlides] = useState(
		Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
	); */
	// const [activeIndex, setActiveIndex] = useState(0);
	// const swiperRef = useRef(null);

	// const handleSwiperChange = (swiper) => {
	// 	setActiveIndex(swiper.activeIndex);
	// };

	// const components = [<Table />, <Terrasse />]; // Список компонентов
	// const slideNames = ["Restaurant", "Terrasse"]; // Список названий слайдов

	// const handleItemClick = (index) => {
	// 	if (!swiperRef.current) return;

	// 	swiperRef.current.swiper.slideTo(index);
	// };
	// const swiper = useSwiper();

	// const slideTo = (index: number) => {
	// 	console.log("SLIDE TO");
	// 	console.log("SWIPER REF", swiperRef);
	// 	if (!swiperRef) return;

	// 	swiperRef.slideTo(index - 1, 0);
	// };

	return (
		<>
			<Swiper
				ref={swiperRef}
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
				// onSwiper={setSwiperRef}
				onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={handleSwiperChange}
				onSlideChange={onChange}
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
