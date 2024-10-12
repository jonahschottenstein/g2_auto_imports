"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HamburgerMenuButton } from "./HamburgerMenuButton";
import XButton from "./XButton";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathName = usePathname();

	// Function to toggle the hamburger menu
	const toggleMenu = () => setIsMenuOpen((prev: boolean) => !prev);

	// Function to close the hamburger menu when a link is clicked
	const closeMenu = () => setIsMenuOpen(false);

	const unlockScroll = () => {
		const body = document.querySelector("body");

		if (!body) return;

		body.style.overflow = "visible";
	};

	const lockScroll = () => {
		const body = document.querySelector("body");

		if (!body) return;

		body.style.overflow = "hidden";
	};

	const handleResize = () => {
		if (window.innerWidth >= 768) {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		return isMenuOpen ? lockScroll() : unlockScroll();
	}, [isMenuOpen]);

	useEffect(() => {
		closeMenu();
	}, [pathName]);

	const links = [
		{ title: "Home", href: "/" },
		{ title: "Request Import", href: "/request-import-form/step_1" },
		{ title: "Inventory", href: "/inventory" },
		{ title: "FAQs", href: "/faqs" },
		{ title: "Contact", href: "/contact/form" },
	];

	return (
		<header className="border-b-2 border-gray-100 fixed flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-1 h-12 z-20 px-4 md:px-6 lg:px-8">
			<nav className="w-full mx-auto flex items-center justify-between max-w-screen-xl">
				{/* Logo */}
				<Link href={"/"} aria-label="Home page">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.2"
						viewBox="0 0 200 200"
						width="35"
						height="35"
						className="md:hidden">
						<path
							id="G2"
							className="s0 fill-black"
							d="m92.8 73.6h-21.2v-11.8q0-6.6-3.4-10.2-3.4-3.6-9.4-3.6-6 0-9.4 3.6-3.4 3.6-3.4 10.2v76.4q0 6.6 3.4 10.2 3.4 3.6 9.4 3.6 6 0 9.4-3.6 3.4-3.6 3.4-10.2v-24.8h-12.8v-20h34v44.8q0 15.2-9.4 24.6-9.4 9.2-24.6 9.2-15.2 0-24.6-9.2-9.4-9.4-9.4-24.6v-76.4q0-15.2 9.4-24.4 9.4-9.4 24.6-9.4 15.2 0 24.6 9.4 9.4 9.2 9.4 24.4zm63.4 39.4l-23.2 37h42v20h-67.2v-18.4l31-49.4q8.6-13.6 11.8-22 3.2-8.6 3.2-16.8 0-7.4-3.4-11.2-3.2-4-9.4-4-6.2 0-9.6 4-3.2 3.8-3.2 11.2v8.2h-20.4v-6.6q0-17.2 8.8-27 9-9.8 24.6-9.8 15.8 0 24.8 9.2 9 9.2 9 25.4 0 11.4-4.2 22.4-4 10.8-14.6 27.8z"></path>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.2"
						viewBox="0 25 320 50"
						width="208"
						height="35"
						className="hidden md:block">
						<path
							id="g2 auto imports"
							fillRule="evenodd"
							className="s0 fill-black"
							d="m21.4 43.5h-5.8v-3.3q0-1.8-1-2.8-0.9-0.9-2.6-0.9-1.6 0-2.5 0.9-1 1-1 2.8v21.1q0 1.8 1 2.8 0.9 0.9 2.5 0.9 1.7 0 2.6-0.9 1-1 1-2.8v-6.9h-3.6v-5.5h9.4v12.4q0 4.1-2.6 6.7-2.6 2.5-6.8 2.5-4.1 0-6.7-2.5-2.6-2.6-2.6-6.7v-21.1q0-4.1 2.6-6.7 2.6-2.5 6.7-2.5 4.2 0 6.8 2.5 2.6 2.6 2.6 6.7zm17.4 10.9l-6.3 10.2h11.5v5.5h-18.5v-5.1l8.5-13.6q2.4-3.7 3.3-6 0.9-2.4 0.9-4.7 0-2-1-3-0.8-1.1-2.5-1.1-1.8 0-2.7 1.1-0.9 1-0.9 3v2.3h-5.6v-1.8q0-4.7 2.4-7.4 2.5-2.7 6.8-2.7 4.3 0 6.8 2.5 2.5 2.5 2.5 7 0 3.1-1.2 6.1-1.1 3-4 7.7zm34 15.7l-1.3-8.6h-6.3l-1.2 8.6h-5.9l6.4-38.5h7.8l6.4 38.5zm-6.8-14.2h4.8l-2.4-16.1zm25.9 14.7q-4.1 0-6.6-2.5-2.5-2.5-2.5-6.5v-30.1h5.8v30.1q0 1.6 0.9 2.6 0.9 0.9 2.4 0.9 1.4 0 2.3-0.9 0.9-1 0.9-2.6v-30.1h5.7v30.1q0 4-2.5 6.5-2.4 2.5-6.4 2.5zm13.2-33.6v-5.5h18.6v5.5h-6.4v33h-5.8v-33zm31.9 33.6q-4.1 0-6.7-2.5-2.6-2.6-2.6-6.8v-21q0-4.2 2.6-6.7 2.6-2.6 6.7-2.6 4.2 0 6.8 2.6 2.6 2.5 2.6 6.7v21q0 4.2-2.6 6.8-2.6 2.5-6.8 2.5zm0-5.5q1.7 0 2.6-1 1-1 1-2.8v-21q0-1.8-1-2.8-0.9-1-2.6-1-1.6 0-2.5 1-1 1-1 2.8v21q0 1.8 1 2.8 0.9 1 2.5 1zm26.3 4.9v-38.5h5.8v38.5zm30.4-38.5h8.3v38.5h-5.8v-26.4l-5.4 26.4h-4.1l-5.5-26.4v26.4h-5.7v-38.5h8.3l5 24.6zm14.8 38.5v-38.5h9.1q4.2 0 6.7 2.6 2.4 2.4 2.4 6.6v4.5q0 4.2-2.4 6.7-2.5 2.5-6.7 2.5h-3.3v15.6zm5.8-21.1h3.1q1.7 0 2.6-0.9 0.9-1 0.9-2.7v-4.7q0-1.7-0.9-2.6-0.9-1-2.6-1h-3.1zm26.2 21.7q-4.2 0-6.8-2.5-2.5-2.6-2.5-6.8v-21q0-4.2 2.5-6.7 2.6-2.6 6.8-2.6 4.2 0 6.8 2.6 2.6 2.5 2.6 6.7v21q0 4.2-2.6 6.8-2.6 2.5-6.8 2.5zm0-5.5q1.7 0 2.6-1 0.9-1 0.9-2.8v-21q0-1.8-0.9-2.8-0.9-1-2.6-1-1.6 0-2.6 1-0.9 1-0.9 2.8v21q0 1.8 0.9 2.8 1 1 2.6 1zm34.4 4.9h-6.1l-4.2-15.8h-3v15.8h-5.9v-38.5h9.2q4.2 0 6.6 2.6 2.5 2.5 2.5 6.6v4.3q0 2.6-1 4.6-1.1 2.1-3 3.2zm-13.3-33v11.6h3q1.7 0 2.6-0.9 1-0.9 1-2.6v-4.5q0-1.7-1-2.6-0.9-1-2.6-1zm16.1 0v-5.5h18.6v5.5h-6.4v33h-5.8v-33zm31.1 33.6q-2.7 0-4.9-1.2-2.1-1.2-3.3-3.4-1.2-2.1-1.2-4.9v-1.4l5.6-0.6v1.5q0 2.1 1 3.3 1 1.2 2.8 1.2 1.7 0 2.7-1 1-1 1-2.7 0-1.9-1.1-3.6-1-1.7-4.2-4.7-4.3-4.1-5.9-6.8-1.5-2.7-1.5-5.9 0-4.3 2.3-6.8 2.4-2.6 6.5-2.6 4.1 0 6.5 2.6 2.4 2.6 2.4 6.9v1l-5.6 0.6v-1.1q0-2.2-0.9-3.4-0.8-1.1-2.3-1.1-1.6 0-2.4 0.9-0.8 1-0.8 2.8 0 1.8 1.1 3.5 1.1 1.6 4.2 4.8 4.3 4.3 5.8 6.9 1.6 2.6 1.6 5.7 0 2.8-1.2 4.9-1.1 2.2-3.3 3.4-2.1 1.2-4.9 1.2z"></path>
					</svg>
				</Link>

				{/* Hamburger Menu Button */}
				<div className="relative flex md:hidden">
					<HamburgerMenuButton onClick={toggleMenu} />
					{isMenuOpen && (
						<div className="fixed inset-0 bg-white z-50 flex flex-col items-start justify-start pt-header">
							<div className="open-menu-navbar h-[var(--header-height)] absolute top-0 left-0 right-0 flex justify-between p-4">
								<div className="font-sans text-black text-xl font-bold flex justify-center items-center">
									Menu
								</div>
								<XButton
									onClose={closeMenu}
									styles="focus:outline-none text-black flex justify-center items-center"
								/>
							</div>
							{links.map(({ title, href }) => (
								<div
									key={`${title}-link-mobile`}
									className="w-full h-14 flex items-center border-t-2 last:border-b-2 border-gray-100 cursor-pointer hover:bg-slate-100">
									<Link
										href={href}
										className="flex items-center w-full h-full px-4 py-2 text-base font-sans font-semibold text-black"
										aria-label={title}
										onClick={(e) => {
											const target = e.target as HTMLLinkElement;
											if (target.getAttribute("href") !== pathName) return;
											closeMenu();
										}}>
										{title}
									</Link>
								</div>
							))}
						</div>
					)}
				</div>

				{/* Desktop Links */}
				<div className="hidden md:flex space-x-4 font-sans text-base font-medium">
					{links.map(({ title, href }) => (
						<Link
							key={`${title}-link-desktop`}
							href={href}
							className="text-gray-600 hover:text-black"
							aria-label={title}
							onClick={closeMenu}>
							{title}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
