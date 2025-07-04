import { FooterRowProps } from "@/types";
import {
	faInstagram,
	// faTiktok,
	// faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const siteLinks = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Request Import",
		href: "/request-import-form/step_1",
	},
	{
		title: "Inventory",
		href: "/inventory",
	},
	{
		title: "FAQs",
		href: "/faqs",
	},
	{
		title: "Contact",
		href: "/contact/form",
	},
];

const instagramIcon = (
	<FontAwesomeIcon className="fw w-7" icon={faInstagram} size="lg" />
);
// const tiktokIcon = (
// 	<FontAwesomeIcon className="fw w-7" icon={faTiktok} size="lg" />
// );
// const youtubeIcon = (
// 	<FontAwesomeIcon className="fw w-7" icon={faYoutube} size="lg" />
// );

const socialMediaLinks = [
	{
		title: "Instagram",
		icon: instagramIcon,
		href: "https://www.instagram.com/g2autoimports?igsh=MTV1YWt5ejJwbW14cw%3D%3D&utm_source=qr",
		target: "_blank",
	},
	// {
	// 	title: "TikTok",
	// 	icon: tiktokIcon,
	// 	href: "https://www.tiktok.com/",
	// 	target: "_blank",
	// },
	// {
	// 	title: "YouTube",
	// 	icon: youtubeIcon,
	// 	href: "https://www.youtube.com/",
	// 	target: "_blank",
	// },
];

const FooterRow = ({ listItems }: FooterRowProps) => {
	return (
		<div className="footer-row flex p-4 justify-center">
			<ul className="flex gap-4">
				{listItems.map((listItem, index) => {
					return (
						<li
							key={listItem.title}
							className="flex justify-center items-center text-center">
							<Link
								href={listItem.href}
								className="text-white text-sm flex justify-center items-center mx-2 hover:underline"
								aria-label={`${listItem.title}`}
								target={listItem.hasOwnProperty("target") ? "_blank" : "_self"}>
								{listItem.hasOwnProperty("icon")
									? listItem.icon
									: listItem.title}
							</Link>
							{/* // ? Don't know if it matters if I add hover:underline class to
							Links with icons instead of text */}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const Footer = () => {
	return (
		<footer className="bg-neutral-800 font-sans">
			<FooterRow listItems={siteLinks} />
			<FooterRow listItems={socialMediaLinks} />
		</footer>
	);
};

export default Footer;
