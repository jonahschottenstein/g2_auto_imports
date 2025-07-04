"use client";

import { Step, StepContextType } from "@/types";
import { createContext, useContext, useState } from "react";

const StepContext = createContext<StepContextType | undefined>(undefined);

export function StepProvider({ children }: { children: React.ReactNode }) {
	const [step, setStep] = useState(1);

	const updateStep = (value: Step) => {
		console.log("updateStep", value);
		setStep(value);
	};

	return (
		<StepContext.Provider value={{ step, updateStep }}>
			{children}
		</StepContext.Provider>
	);
}

export function useStep() {
	const context = useContext(StepContext);

	if (!context) {
		throw new Error("useStep must be used within a StepProvider");
	}

	return context.step;
}

export function useStepUpdater() {
	const context = useContext(StepContext);

	if (!context) {
		throw new Error("useStepUpdater must be used within a StepProvider");
	}

	return context.updateStep;
}
