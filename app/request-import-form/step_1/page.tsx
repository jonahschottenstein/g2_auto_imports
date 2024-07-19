import FormStepper from "@/components/FormStepper";
import MakesForm from "@/components/MakesForm";
import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

// TODO: Think I need to do something when the page is refreshed. Currently, refreshing the page erases all user data, so if you're on the Model or Production page of the form, none of the options render.

const page = async () => {
	const makes = await prisma.make.findMany();

	return (
		<div
			// className="form-page flex flex-col flex-1 items-center overflow-x-hidden overflow-y-auto"
			className="form-page flex flex-col flex-1 items-center overflow-x-hidden overflow-y-clip min-h-[calc(100vh-72px)]">
			<FormStepper steps={["Make", "Model", "Year(s)", "Contact", "Review"]} />
			<MakesForm makes={makes} />
		</div>
	);
};

export default page;
