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
		<div className="form-container px-8 h-full flex flex-col">
			<h1 className="text-center text-2xl my-4 font-display">
				Your import request has been submitted!
			</h1>
			<div>
				<p className="font-sans">
					You will get an email confirmation at{" "}
					<span className="font-bold">
						{console.log(contactInfo)}
						{console.log(contactInfo.contactInfo)}
						{contactInfo.contactInfo.email}
					</span>
				</p>
			</div>
			<CustomButton
				children="Return Home"
				styles="mt-[29rem] mx-auto w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none sm:w-60 font-sans"
				handleClick={() => {
					router.push("/");
					sessionStorage.clear();
				}}
			/>
		</div>
	);
};

export default PostContact;
