import ModelsForm from "@/components/ModelsForm";
import { useForm } from "@/context/request-import-form-context";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import React from "react";

const prisma = new PrismaClient();

const page = async () => {
	const models = await prisma.model.findMany();

	return (
		<div className="form-page h-full pt-20">
			<ModelsForm models={models} />
			<div className="step-buttons-container w-full flex justify-between">
				<Link href={"/request-import-form/step_1"}>{"<="}</Link>
				<Link href={"/request-import-form/step_3"}>{"=>"}</Link>
			</div>
		</div>
	);
};

export default page;
