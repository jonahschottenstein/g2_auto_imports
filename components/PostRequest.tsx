"use client";

import { useForm, useFormUpdater } from "@/context/request-import-form-context";
import React, { useEffect } from "react";

const PostRequest = () => {
	const user = useForm();
	const updateUserData = useFormUpdater();

	useEffect(() => {
		const storedUserData = sessionStorage.getItem("userData");
		const userData = storedUserData && JSON.parse(storedUserData);

		updateUserData(userData);
	}, []);

	useEffect(() => {
		sessionStorage.clear();
	}, []);

	return (
		<div className="form-container px-8 h-full flex flex-col">
			<h1 className="text-center text-2xl my-4 font-display">
				Your import request has been submitted!
			</h1>
			<div>
				<p className="font-sans">
					You will get an email confirmation at{" "}
					<span className="font-bold">{user.contactInfo?.email}</span>
				</p>
			</div>
		</div>
	);
};

export default PostRequest;
