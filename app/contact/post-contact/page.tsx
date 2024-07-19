import React from "react";

const page = () => {
	return (
		<div className="form-page min-h-[calc(100vh-72px)]">
			<div className="form-container px-8 h-full flex flex-col">
				<h1 className="text-center text-2xl my-4 font-display">
					Your contact information has been submitted!
				</h1>
				<div>
					<p className="font-sans">
						You will receive an email confirmation at{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default page;
