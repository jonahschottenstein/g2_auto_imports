"use client";

import { useRouter } from "next/navigation";
import React from "react";
import CustomButton from "./CustomButton";

const PostContact = () => {
	const router = useRouter();

	const storedContactInfo = sessionStorage.getItem("contactInfo");
	const contactInfo = storedContactInfo && JSON.parse(storedContactInfo);
	console.log("CONTACT INFO", contactInfo);

	return (
		<div className="form-container h-[calc(100%-20px)] flex flex-col max-w-screen-xl mx-auto">
			<div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
				<h1 className="text-center text-2xl font-display">
					Your contact information has been received!
				</h1>
			</div>
			<div className="flex flex-col pb-8 justify-between flex-1">
				<p className="font-sans">
					You will get an email confirmation at{" "}
					<span className="font-bold">
						{console.log(contactInfo)}
						{console.log(contactInfo.contactInfo)}
						{contactInfo.contactInfo.email}
					</span>
				</p>
				<CustomButton
					children="Return Home"
					styles="mx-auto w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none sm:w-60 font-sans"
					ariaLabel="Return to home page"
					handleClick={() => {
						router.push("/");
						sessionStorage.clear();
					}}
				/>
			</div>
		</div>
	);
};

export default PostContact;
