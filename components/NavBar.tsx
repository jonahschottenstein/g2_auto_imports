"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HamburgerMenuButton } from "./HamburgerMenuButton";
import XButton from "./XButton";
import HalfLogo from "./logos/HalfLogo";
import FullLogo from "./logos/FullLogo";

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
					<HalfLogo fillColor="black" />
					<FullLogo fillColor="black" />
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
