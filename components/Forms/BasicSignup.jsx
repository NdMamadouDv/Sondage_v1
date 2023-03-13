import { FormContext } from "@/app/(auth)/auth/signup/page";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSearchParams } from "next/navigation";
import React, { useContext } from "react";

import * as Yup from "yup";
import { useSupabase } from "../supabase-provider";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email requis"),
});
function BasicSignup() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);
  const { supabase, session } = useSupabase();

  async function signUp(formData) {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
    });

    if (error) {
      console.log(error);
    }
  }
  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  // Recuperer l'email dans les params
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  console.log(email);
  return (
    <div className="">
      <Formik
        initialValues={{
          email: email,
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
          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-gray-900">Email</label>
            <Field
              name="email"
              className="input input-bordered input-primary focus:bg-white "
              value={email}
            />
          </div>
          <ErrorMessage name="email" render={renderError} />

          <button className="sinscrire mt-2" type="submit">
            Continuer
          </button>
        </Form>
      </Formik>{" "}
    </div>
  );
}

export default BasicSignup;
