import PostContact from "@/components/PostContact";
import React from "react";

const page = ({
	searchParams,
}: {
	searchParams: { [key: string]: string };
}) => {
	return (
		<div className="post-contact-page w-full flex flex-1 px-4 md:px-6 lg:px-8 pt-12 pb-6">
			<PostContact userEmail={searchParams.email} />
		</div>
	);
};

export default page;
