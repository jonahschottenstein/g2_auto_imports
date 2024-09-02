"use client";

import { useForm, useFormUpdater } from "@/context/request-import-form-context";
import React, { useEffect } from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

const PostRequest = () => {
	const user = useForm();
	const updateUserData = useFormUpdater();
	const router = useRouter();

	useEffect(() => {
		const storedUserData = sessionStorage.getItem("userData");
		const userData = storedUserData && JSON.parse(storedUserData);

		updateUserData(userData);
	}, []);

	return (
		<div className="form-container h-full flex flex-col max-w-screen-xl mx-auto">
			<div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
				<h1 className="text-center text-2xl font-display">
					Your import request has been submitted!
				</h1>
			</div>
			<div className="flex flex-col pb-8 justify-between flex-1">
				<div>
					<p className="font-sans">
						You will get an email confirmation at{" "}
						<span className="font-bold">{user.contactInfo?.email}</span>
					</p>
				</div>
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

export default PostRequest;
