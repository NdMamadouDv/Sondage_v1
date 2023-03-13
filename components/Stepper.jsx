import React, { useContext, useEffect } from "react";
import { FormContext } from "@/app/(auth)/auth/signup/page";
function Stepper() {
  const { activeStepIndex } = useContext(FormContext);
  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    const diviseur = document.querySelectorAll(".diviseur");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-neutral", "text-white");
      } else {
        step.classList.remove("bg-neutral", "text-white");
      }
    });
    diviseur.forEach((step, i) => {
      if (i <= activeStepIndex - 1) {
        step.classList.add("border-primary");
      } else {
        step.classList.remove("bg-primary");
      }
    });
  }, [activeStepIndex]);
  return (
    <div className="w-2/3 flex flex-row items-center justify-evenly py-16">
      <div className="stepper-item w-8 h-8 text-center font-medium border-2  rounded-full flex items-center justify-center">
        1
      </div>
      <div className=" diviseur border w-4"></div>
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full flex items-center justify-center">
        2
      </div>
      <div className=" diviseur  border w-4"></div>
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full flex items-center justify-center">
        3
      </div>
      <div className=" diviseur  border w-4"></div>
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full flex items-center justify-center">
        4
      </div>
    </div>
  );
}

export default Stepper;
