"use client";

import React from "react";
import Link from "next/link";
import { PostContactProps } from "@/types";

const PostContact = ({ userEmail }: PostContactProps) => {
	return (
		<div className="form-container flex flex-col flex-1 max-w-screen-xl mx-auto">
			<div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
				<h1 className="text-center text-2xl font-display">
					Your contact information has been received!
				</h1>
			</div>
			<div className="flex flex-col justify-between flex-1">
				<p className="font-sans">
					You will get an email confirmation at{" "}
					<span className="font-bold">{userEmail}</span>
				</p>
				<Link
					href={"/"}
					aria-label="Return to home page"
					className="mx-auto w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none sm:w-60 font-sans">
					Return Home
				</Link>
			</div>
		</div>
	);
};

export default PostContact;
