import PostContact from "@/components/PostContact";
import React from "react";

// const page = () => {
// 	return (
// 		<div className="form-page min-h-[calc(100vh-74px)]">
// 			<PostContact />
// 		</div>
// 	);
// };
const page = ({
	searchParams,
}: {
	searchParams: { [key: string]: string };
}) => {
	return (
		<div className="post-contact-page w-full px-4 md:px-6 lg:px-8 py-12 h-full min-h-[calc(100vh-74px)]">
			<PostContact userEmail={searchParams.email} />
		</div>
	);
};

export default page;
