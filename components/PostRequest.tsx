"use client";

import { useForm } from "@/context/request-import-form-context";
import React from "react";

const PostRequest = () => {
	const user = useForm();

	return (
		<div className="form-container px-8 h-full flex flex-col">
			<h1 className="text-center text-2xl my-4">
				Your import request has been submitted!
			</h1>
			<div>
				<p>
					You will get an email confirmation at{" "}
					<span className="font-bold">{user.contactInfo?.email}</span>
				</p>
			</div>
		</div>
	);
};

export default PostRequest;
