"use client";
import React, { createContext } from "react";
import { useSupabase } from "@/components/supabase-provider";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Link from "next/link";

import { GrValidate } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/supabase";
import Stepper from "@/components/Stepper";
import Step from "@/components/Step";

export const FormContext = createContext();

function page() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  console.log(formData);
  return (
    <div className="min-h-screen bg-white">
      <section className="relative  overflow-hidden text-neutral layout">
        <Link
          className=" font-Fjalla normal-case text-3xl text-primary hover:text-primary-focus  absolute top-8 left-15 md:top-12"
          href="/"
        >
          ISurvey.com
        </Link>
        <div className="relative z-10 flex flex-wrap mt-8">
          <div className="w-full md:w-1/2 p-8 md:order-1 order-last">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="md:max-w-lg mx-auto md:pt-16  space-y-10">
                    <h2 className=" md:mt-12 h2 md:text-3xl lg:text-5xl  leading-10 md:leading-loose lg:leading-loose">
                      Créez un compte simplement. Optez pour le traditionnel
                      email, Google ou bien Facebook!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 mt-8 md:mt-0 md:order-last order-1  align-self-start">
            <div className=" py-12  flex flex-col items-center justify-start bg-blueGray-100 h-full">
              <div className="flex items-center justify-center flex-col w-full">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
