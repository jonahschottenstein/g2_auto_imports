"use client";

import { useForm, useFormUpdater } from "@/context/request-import-form-context";
import { Make } from "@/types";
import MakeModelSelector from "./MakeModelSelector";

interface MakesFormProps {
	makes: Make[];
}

const MakesForm = ({ makes }: MakesFormProps) => {
	const user = useForm();
	const updateUserData = useFormUpdater();

	const resetFormField = (formField: string) => {
		switch (formField) {
			case "make":
				return { make: { id: 0, name: "" } };
			case "model":
				return { model: { id: 0, name: "", makeId: 0 } };
			case "productionYears":
				return { productionYears: { startYear: 0, endYear: 0 } };

			default:
				console.log("default");
				break;
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;

		if (!target.className.includes("make-option")) return;
		// ? Not sure I should use className here

		const data = {
			make: { id: Number(target.id), name: target.value },
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

		updateUserData(data);
	};

	return (
		<div className="form-container">
			<form className="request-import-form makes-form h-full overflow-y-auto">
				<MakeModelSelector
					category="make"
					options={makes}
					stateValue={user.make?.name || ""}
					handleChange={handleChange}
				/>
			</form>
		</div>
	);
};

export default MakesForm;
