import PostRequest from "@/components/PostRequest";
import React from "react";

const page = ({
	searchParams,
}: {
	searchParams: { [key: string]: string };
}) => {
	return (
		<div className="form-page w-full flex flex-1 px-4 md:px-6 lg:px-8 pt-12 pb-6">
			<PostRequest email={searchParams.email} />
		</div>
	);
};

export default page;
