"use client";
import React from "react";
import { useSupabase } from "@/components/supabase-provider";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { GrValidate } from "react-icons/gr";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email requis"),
  password: Yup.string().required("mot de passe requis"),
});
function page() {
  const { supabase, session } = useSupabase();
  const [errorMsg, setErrorMsg] = useState(null);

  async function signUp(formData) {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    }
  }
  return (
    <div className=" bg-white">
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
                  <div className="md:max-w-lg mx-auto pt-16 md:pb-32 space-y-10">
                    <h2 className=" md:mt-12 h2 lg:text-5xl font-heading  leading-8 ">
                      Créez un compte simplement. Optez pour le traditionnel
                      email, ou bien utilisez Google !
                    </h2>
                    <h3 className="mb-9 text-xl font-bold font-heading leading-normal">
                      L'avantage d'utiliser google ?
                    </h3>
                    <ul className="md:max-w-xs">
                      <li className="mb-5 flex flex-wrap items-center ">
                        <GrValidate className="mr-4" />
                        <span className="flex-1 font-medium leading-relaxed">
                          Pas de mot de passe multiple à devoir se souvenir !
                        </span>
                      </li>
                      <li className="mb-5 flex flex-wrap items-center">
                        <GrValidate className="mr-4" />
                        <span className="flex-1 font-medium leading-relaxed">
                          Vous pouvez être connecté avant même d'entrer sur
                          Isurvey!
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 mt-8 md:mt-0 md:order-last order-1  ">
            <div className="p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={SignInSchema}
                onSubmit={signUp}
                className=""
              >
                {({ errors, touched }) => (
                  <Form className="md:max-w-lg mx-auto">
                    <label className="block mb-4">
                      <p className="mb-2 text-gray-900 font-semibold leading-normal">
                        Addresse email *
                      </p>
                      <Field
                        className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 "
                        id="email"
                        name="email"
                        placeholder="monmail@exemple.com"
                        type="email"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-red-600">{errors.email}</div>
                      ) : null}
                    </label>
                    <label className="block mb-5">
                      <p className="mb-2 text-gray-900 font-semibold leading-normal">
                        Mot de passe *
                      </p>
                      <Field
                        className=" px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="*******"
                      />
                      {errors.password && touched.password ? (
                        <div className="text-red-600">{errors.password}</div>
                      ) : null}
                    </label>

                    {errorMsg && <div className="text-red-600">{errorMsg}</div>}

                    <button
                      className="mb-4 py-4 px-9 w-full text-white font-semibold btn btn-primary"
                      type="submit"
                    >
                      S'inscrire
                    </button>
                    <p className="my-5 text-sm text-gray-600 font-medium text-center">
                      Ou bien
                    </p>
                    <div className="flex flex-wrap justify-center -m-2">
                      <div className="w-auto p-2">
                        <button className="flex items-center p-4 space-x-2 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
                          <FcGoogle />
                          <span className="font-semibold leading-normal">
                            S'inscrire avec Google
                          </span>
                        </button>
                      </div>
                      <div className="w-auto p-2">
                        <button className="flex items-center p-4 space-x-2 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
                          <BsFacebook className="text-[#4267B2]" />
                          <span className="font-semibold leading-normal">
                            S'inscrire avec Facebook
                          </span>
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
