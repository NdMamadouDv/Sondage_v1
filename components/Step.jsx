import React, { useContext } from "react";
import { FormContext } from "@/app/(auth)/auth/signup/page";
import BasicSignup from "./Forms/BasicSignup";
import BasicSignUpStep2 from "./Forms/BasicSignUp2";
import BasicSignUpStep3 from "./Forms/BasicSignUp3";
import Success from "./Forms/Success";

function Step() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <BasicSignup />;
      break;
    case 1:
      stepContent = <BasicSignUpStep2 />;
      break;
    case 2:
      stepContent = <BasicSignUpStep3 />;
      break;
    case 3:
      stepContent = <Success />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;
