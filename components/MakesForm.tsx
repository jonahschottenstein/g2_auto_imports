"use client";

import { useForm, useFormUpdater } from "@/context/request-import-form-context";
import { MakesFormProps } from "@/types";
import MakeModelSelector from "./MakeModelSelector";
import { BackLink, NextLink } from "./CustomLinks";
import { useEffect } from "react";
import FormContainer from "./FormContainer";

const MakesForm = ({ makes }: MakesFormProps) => {
	const user = useForm();
	const updateUserData = useFormUpdater();

	useEffect(() => {
		const storedUserData = sessionStorage.getItem("userData");
		const userData = storedUserData && JSON.parse(storedUserData);
		// * Think I might need something that exits here if no userData
		updateUserData(userData);
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;

		if (!target.className.includes("make-option")) return;
		// ? Not sure I should use className here

		const data = {
			make: { id: Number(target.dataset.makeId), name: target.value },
			model: {
				id: 0,
				name: "",
				makeId: 0,
			},
			productionYears: {
				startYear: 0,
				endYear: 0,
			},
		};
		// TODO: Think this needs to be changed. Don't think done correctly, and doesn't include contactInfo

		sessionStorage.setItem(
			"userData",
			JSON.stringify({
				make: { id: Number(target.dataset.makeId), name: target.value },
			})
		);

		updateUserData(data);
	};

	const makeIsSelected = user.make?.id && user.make.name;

	const STEPPER_HEIGHT = "92px";
	const H1_HEIGHT = "64px";

	// TODO: If you change 64px to 124px, make sure you remove unnecessary space at the bottom of the page
	// * Changed to 124px so Links don't overflow page

	return (
		<FormContainer h1="Select Make">
			<form className="request-import-form makes-form flex flex-col flex-1 justify-between">
				<MakeModelSelector
					category="make"
					options={makes}
					stateValue={user.make?.name || ""}
					handleChange={handleChange}
				/>
				<div className="form-nav-container w-full flex justify-around p-4">
					<BackLink href="/request-import-form/step_1" isDisabled={true} />
					<NextLink
						href="/request-import-form/step_2"
						// href={{ pathName: "/request-import-form/step_2", query: user.make }}
						// href={`/request-import-form/step_2?id=${user.make?.id}&name=${user.make?.name}`}
						isDisabled={!makeIsSelected}
					/>
				</div>
			</form>
		</FormContainer>
	);
};

export default MakesForm;
