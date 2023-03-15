"use client";
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormContext } from "../page";
import Stepper from "@/components/Stepper";
import Step from "@/components/Step";

function page() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  // console.log(email);
  function backtoAuth() {
    router.push("/auth/signup");
  }
  return (
    <div className="min-h-screen mt-16 flex flex-col items-center  w-full max-w-xl ">
      {email ? (
        <div className="md:py-16 w-full flex flex-col items-center justify-center ">
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
      ) : (
        backtoAuth()
      )}
    </div>
  );
}

export default page;
