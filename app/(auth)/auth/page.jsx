"use client";

import { useSupabase } from "@/components/supabase-provider";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { GoRocket } from "react-icons/go";
import { useRouter } from "next/navigation";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email requis"),
  password: Yup.string().required("mot de passe requis"),
});

export default function Login() {
  const { supabase, session } = useSupabase();
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();
  async function useFacebook() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
    });
  }

  async function signIn(formData) {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    }
    if (session) {
      router.push("/dashboard");
    }
  }

  return (
    <div className=" bg-white min-h-screen">
      <section className="relative  overflow-hidden text-neutral layout">
        <div className="relative z-10 flex flex-wrap mt-8">
          <div className="w-full md:w-1/2 p-8 md:order-1 order-last">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="md:max-w-lg mx-auto pt-16 md:pb-32 space-y-10">
                    <h2 className=" md:mt-12 h2 lg:text-5xl font-heading  leading-tight ">
                      Connectez-vous et commencez à créer vos propres
                      questionnaire.
                    </h2>
                    <h3 className="mb-9 text-xl font-bold font-heading leading-normal">
                      Et pourquoi pas nous rejoindre ?
                    </h3>
                    <ul className="md:max-w-xs">
                      <li className="mb-5 flex flex-wrap">
                        <span className="flex-1 font-medium leading-relaxed">
                          Utilisez cet outil facilement, avec une multitude de
                          modèle. Il est désormais facile de créer le parfait
                          questionnaire !
                        </span>
                      </li>
                      <li className="mb-5 flex flex-wrap">
                        <span className="flex-1 font-medium leading-relaxed">
                          24/7 Support venant d'un équipe dédié à votre
                          satisfaction.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2  mt-8 md:mt-0 md:order-last order-1  ">
            <div className="p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={SignInSchema}
                onSubmit={signIn}
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
                    <div className="flex flex-wrap justify-end -m-2 mb-4">
                      <div className="w-auto p-2">
                        <Link
                          className="text-sm text-primary font-medium hover:underline"
                          href=""
                        >
                          Mot de passe oublié
                        </Link>
                      </div>
                    </div>
                    {errorMsg && <div className="text-red-600">{errorMsg}</div>}
                    <div className="space-y-4">
                      <button
                        className="mb-9 py-4 px-9 w-full text-white font-semibold btn btn-primary"
                        type="submit"
                      >
                        Se connecter
                      </button>
                      <Link
                        href="https://ubjoszfoggmhdexjqllr.supabase.co/auth/v1/authorize?provider=google"
                        className="flex items-center p-2 md:p-4 space-x-2 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200 text-sm md:text-base w-full justify-center"
                      >
                        <FcGoogle />
                        <span className="font-semibold leading-normal flex-1">
                          Se connecter avec Google
                        </span>
                      </Link>
                      <button
                        className="flex items-center p-2 md:p-4 space-x-2 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200 text-sm md:text-base"
                        onClick={useFacebook}
                      >
                        <BsFacebook className="text-[#4267B2]" />
                        <span className="font-semibold leading-normal">
                          Se connecter avec Facebook
                        </span>
                      </button>
                    </div>

                    <p className="my-5 text-sm text-gray-600  text-center w-full">
                      Ou bien
                    </p>
                    <button className="btn btn-secondary w-full text-white flex justify-between items-center">
                      <GoRocket className="text-white" />
                      <Link href="auth/signup" className="flex-1">
                        <span className="">Créer mon compte</span>
                      </Link>
                    </button>
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
