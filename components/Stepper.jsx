import React, { useContext, useEffect } from "react";
import { FormContext } from "@/app/(auth)/auth/signup/page";
function Stepper() {
  const { activeStepIndex } = useContext(FormContext);
  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    // const diviseur = document.querySelector(".diviseur");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-indigo-500", "text-white");
      } else {
        step.classList.remove("bg-indigo-500", "text-white");
      }
    });
  }, [activeStepIndex]);
  return (
    <div className="w-2/3 flex flex-row items-center justify-evenly ">
      <div className="stepper-item w-8 h-8 text-center font-medium border-2  rounded-full">
        1
      </div>
      <div className=" diviseur border w-4"></div>
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
        2
      </div>
      <div className=" diviseur  border w-4"></div>
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
        3
      </div>
    </div>
  );
}

export default Stepper;
