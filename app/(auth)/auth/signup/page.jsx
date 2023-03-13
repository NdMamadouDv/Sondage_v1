"use client";
import React, { createContext, use } from "react";
import { useSupabase } from "@/components/supabase-provider";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { GrValidate } from "react-icons/gr";
import { useRouter, useSearchParams } from "next/navigation";
import { supabaseClient } from "@/lib/supabase";
import Stepper from "@/components/Stepper";
import Step from "@/components/Step";

import Image from "next/image";

export const FormContext = createContext();
const GetEmailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email requis"),
});
function page() {
  const [email, setEmail] = useState("");
  const supabase = supabaseClient;
  const searchParams = useSearchParams();
  const router = useRouter();
  // S'inscrire en utilisant d'autre providers (Google et Microsoft)
  async function useFacebook() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
    });
  }
  async function signInWithAzure() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "azure",
      options: {
        scopes: "email",
      },
    });
  }
  // s'inscrire par email flow

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  function handlesubmit(email) {
    const params = new URLSearchParams(searchParams);
    params.set("email", email.email);
    // Verifier que l'email n'est pas déja présent dans la db

    console.log(params.get("email"));
    if (params.get("email") !== "undefined") {
      router.push(`/auth/signup/email?email=${params.get("email")}`);
    }
  }
  // console.log(formData);
  return (
    <div className="min-h-screen bg-white">
      <div className="  overflow-hidden text-neutral layout">
        <div className="relative z-10 flex flex-wrap mt-8">
          <div className="w-full md:w-1/2 mt-20 md:mt-0  order-first">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="md:max-w-lg mx-auto md:pt-16  space-y-10">
                    <h2 className=" md:mt-12 h2 md:text-3xl lg:text-5xl  leading-10 md:leading-loose lg:leading-loose">
                      Créez un compte simplement. Optez pour Google, Facebook ou
                      bien pour le traditionnel email !
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 mt-3 md:mt-0 order-last   align-self-start">
            <div className=" py-12  flex flex-col items-center justify-start space-y-6  max-w-sm mx-auto">
              <Link
                href="https://ubjoszfoggmhdexjqllr.supabase.co/auth/v1/authorize?provider=google"
                className="flex items-center p-4 space-x-2 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200 max-w-xs w-full"
              >
                <FcGoogle />
                <span className="font-semibold leading-normal flex-1 text-center">
                  S&apos;inscrire avec Google
                </span>
              </Link>

              <button
                className="flex items-center p-4 space-x-2 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200 max-w-xs w-full"
                onClick={signInWithAzure}
              >
                <Image
                  src="/microsoft-5.svg"
                  alt="Microsoft logo"
                  width={300}
                  height={300}
                  className="h-auto w-5"
                />
                <span className="font-semibold leading-normal flex-1">
                  S&apos;inscrire avec Microsoft
                </span>
              </button>
            </div>
            <p className="my-2 text-sm text-gray-600 font-medium text-center">
              Ou bien
            </p>
            <p className="text-xl font-light  text-center my-2">
              Inscription par mail
            </p>
            <div className="flex items-center justify-center flex-col w-full py-6">
              {/* Créer un input qui enverra l'email vers /auth/email */}
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={GetEmailSchema}
                onSubmit={(values, actions) => {
                  actions.setSubmitting(false);
                  const data = { ...values };

                  handlesubmit(data);
                }}
              >
                <Form className="flex flex-col items-center justify-between space-y-6">
                  <Field
                    name="email"
                    className="input input-bordered input-primary focus:bg-white "
                    placeholder="monemail@exemple.com"
                  />
                  <ErrorMessage name="email" render={renderError} />

                  <button className="sinscrire" type="submit">
                    S'inscrire
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
