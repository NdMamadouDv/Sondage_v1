import { FormContext } from "@/app/(auth)/auth/signup/page";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
import * as Yup from "yup";
import { useSupabase } from "../supabase-provider";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email requis"),
  password: Yup.string()
    .required("Choisissez votre mot de passe")
    .min(8, "Un mot de passe de 8 charactères minimum")
    .matches(/[0-9]/, "Au moins un chiffre est requis")
    .matches(/[a-z]/, "Au moins une minuscule est requise")
    .matches(/[A-Z]/, "Au moins une majuscule est requise")
    .matches(/[^\w]/, "Au moins un symbole est requis"),
  passwordConfirmation: Yup.string()
    .required("")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
function BasicSignUp2() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  //   Recuperer l'email dans les params
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  //  Envoyer l'inscription par mail à la soumission du formulaire
  const { supabase, session } = useSupabase();
  async function signUpWithEmail(formData) {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });
  }
  return (
    <div className="w-2/3 flex items-center justify-center flex-col">
      <Formik
        initialValues={{
          email: email,
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          const data = { ...formData, ...values };
          setActiveStepIndex(activeStepIndex + 1);
          setFormData(data);
          signUpWithEmail(data);
        }}
      >
        <Form className="flex flex-col justify-center items-center space-y-2">
          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-gray-900">Email</label>
            <Field
              name="email"
              className="input input-bordered input-primary disabled:bg-gray-300 "
              disabled
            />
          </div>
          <ErrorMessage name="email" render={renderError} />
          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-gray-900">Mot de passe</label>
            <Field
              type="password"
              name="password"
              className="input input-bordered input-primary focus:bg-white "
            />
          </div>
          <ErrorMessage name="password" render={renderError} />
          <div className="flex flex-col items-center justify-center  w-full">
            <ul className="flex flex-col items-stretch w-full my-6">
              <li className="flex items-center justify-between w-full">
                <p className="text-sm">8 charactères minimum.</p>

                <span className="">
                  <BsCheck className="validPass " />
                </span>
              </li>
              <li className="flex items-center justify-between w-full">
                <p className="text-sm">Un charactère majuscule minimum.</p>{" "}
                <span className="">
                  <BsCheck className="validPass" />
                </span>
              </li>
              <li className="flex items-center justify-between w-full">
                <p className="text-sm">Un charactère minuscule minimum.</p>{" "}
                <span className="">
                  <BsCheck className="validPass" />
                </span>
              </li>
              <li className="flex items-center justify-between w-full">
                <p className="text-sm">
                  Un symbole: <span className="">" * # . , ! ?"</span>.
                </p>
                <span className="">
                  <BsCheck className="validPass" />
                </span>
              </li>
            </ul>

            <h1 className=" h2 lg:text-5xl font-heading leading-tight"></h1>
          </div>
          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-gray-900">
              Confirmez le mot de passe
            </label>
            <Field
              type="password"
              name="passwordConfirmation"
              className="input input-bordered input-primary focus:bg-white "
            />
          </div>
          <ErrorMessage name="passwordConfirmation" render={renderError} />

          <button className="sinscrire mt-6 hover:bg-primary" type="submit">
            Continuer
          </button>
        </Form>
      </Formik>
      <div className="flex flex-col items-center justify-center mt-24 w-full">
        <h1 className=" h2 lg:text-5xl font-heading leading-tight text-center">
          Plus qu&apos;un pas à faire après celui-là, c&apos;est promis !
        </h1>
      </div>
    </div>
  );
}

export default BasicSignUp2;
