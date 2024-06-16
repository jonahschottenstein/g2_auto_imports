import MakesForm from "@/components/MakesForm";
import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

// TODO: Think I need to do something when the page is refreshed. Currently, refreshing the page erases all user data, so if you're on the Model or Production page of the form, none of the options render.

const page = async () => {
	const makes = await prisma.make.findMany();

	return (
		<div className="form-page h-full">
			<MakesForm makes={makes} />
		</div>
	);
};

export default page;
