import { FormContext } from "@/app/(auth)/auth/signup/page";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";
import { useSupabase } from "../supabase-provider";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email requis"),
  password: Yup.string().required("Mot de passe requis"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Les mots de passe doivent matcher!"
  ),
});
function BasicSignup() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);
  const { supabase, session } = useSupabase();
  async function signUp(formData) {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      console.log(error);
    }
  }
  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );
  return (
    <div className="">
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          const data = { ...formData, ...values };
          setFormData(data);
          signUp(data);
          setActiveStepIndex(activeStepIndex + 1);
        }}
      >
        <Form className="flex flex-col justify-center items-center">
          <div className="text-2xl font-medium self-center my-2">
            Bienvenue !
          </div>

          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-gray-900">Email</label>
            <Field
              name="email"
              className="input input-bordered input-primary focus:bg-white "
              placeholder="monemail@exemple.com"
            />
          </div>
          <ErrorMessage name="email" render={renderError} />
          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-gray-900">Mot de passe *</label>
            <Field
              name="password"
              className="input input-bordered input-primary focus:bg-white"
              placeholder=""
              type="password"
            />
          </div>
          <ErrorMessage name="password" render={renderError} />
          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-gray-900">Mot de passe *</label>
            <Field
              name="passwordConfirmation"
              className="input input-bordered input-primary focus:bg-white"
              placeholder=""
              type="password"
            />
          </div>
          <ErrorMessage name="passwordConfirmation" render={renderError} />
          <button
            className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
            type="submit"
          >
            Continuer
          </button>
        </Form>
      </Formik>
      <p className="mt-10 text-sm text-gray-600 font-medium text-center">
        Ou bien
      </p>
      <div className="flex flex-wrap justify-center my-2">
        <div className="w-auto p-2">
          <button className="flex items-center p-4 space-x-2 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
            <FcGoogle />
            <span className="font-semibold leading-normal">
              S&apos;inscrire avec Google
            </span>
          </button>
        </div>
        <div className="w-auto p-2">
          <button className="flex items-center p-4 space-x-2 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
            <BsFacebook className="text-[#4267B2]" />
            <span className="font-semibold leading-normal">
              S&apos;inscrire avec Facebook
            </span>
          </button>
        </div>
      </div>{" "}
    </div>
  );
}

export default BasicSignup;
