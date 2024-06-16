import ModelsForm from "@/components/ModelsForm";
import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

const page = async () => {
	const models = await prisma.model.findMany();

	return (
		<div className="form-page h-full">
			<ModelsForm models={models} />
		</div>
	);
};

export default page;
