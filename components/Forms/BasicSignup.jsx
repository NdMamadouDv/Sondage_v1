"use client";
import { FormContext } from "@/app/(auth)/auth/signup/page";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSearchParams, usePathname } from "next/navigation";
import React, { useContext } from "react";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

// Recuperer l'email
const EmailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email requis"),
});
function BasicSignup() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  // Recuperer l'email dans les params
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  console.log(searchParams.get("email"));
  const router = useRouter();

  return (
    <div className="w-2/3">
      <Formik
        initialValues={{
          email: email,
        }}
        validationSchema={EmailSchema}
        onSubmit={(values) => {
          const data = { ...formData, ...values };
          setFormData(data);
          setActiveStepIndex(activeStepIndex + 1);
        }}
      >
        <Form className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-gray-900">Votre email</label>
            <Field
              name="email"
              className="input input-bordered input-primary disabled:bg-gray-300 "
              disabled
            />
          </div>
          <ErrorMessage name="email" render={renderError} />

          <button
            className="sinscrire mt-6 hover:bg-primary
          
          "
            type="submit"
          >
            Continuer
          </button>
        </Form>
      </Formik>
      <div className="flex flex-col items-center justify-center mt-24 w-full">
        <h1 className=" h2 lg:text-5xl font-heading leading-tight text-center">
          Vous n&apos;êtes qu&apos;à deux pas du sondage parfait !
        </h1>
      </div>
    </div>
  );
}

export default BasicSignup;
