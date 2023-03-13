"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FormContext } from "../page";
import Stepper from "@/components/Stepper";
import Step from "@/components/Step";

function page() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <div className="mt-20 flex flex-col items-center justify-center w-full max-w-lg">
      <FormContext.Provider
        value={{
          activeStepIndex,
          setActiveStepIndex,
          formData,
          setFormData,
        }}
      >
        <Stepper />
        <Step />
      </FormContext.Provider>
    </div>
  );
}

export default page;
