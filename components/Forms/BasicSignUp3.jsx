import { FormContext } from "@/app/(auth)/auth/signup/page";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useEffect } from "react";
import * as Yup from "yup";
import { supabaseClient } from "@/lib/supabase";

// Valider le mot de passe
const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("Veuillez entrer votre nom de famille"),
  firstName: Yup.string().required("Veuillez entrer votre prénom"),
  website: Yup.string(),
  state: Yup.string().required("Le pays est requis"),
  city: Yup.string(),
  postCode: Yup.number(),
});

function BasicSignUpStep3() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const supabase = supabaseClient;
  const renderError = (message) => (
    <p className="italic text-red-600 text-xs">{message}**</p>
  );

  async function updateProfile(formData) {
    // const { id } = await supabase
    //   .from("profiles")
    //   .select("id")
    //   .eq("email", formData.email);

    const { errorClient } = await supabase
      .from("profiles")
      .update({
        name: formData.name,
        firstName: formData.firstName,
        website: formData.website,
        state: formData.state,
        postCode: formData.postCode,
      })
      .eq("email", formData.email);
    if (errorClient) {
      console.log(errorClient);
    }
  }
  return (
    <Formik
      initialValues={{
        name: "",
        firstName: "",
        website: "",
        state: "",
        city: "",
        postCode: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
        updateProfile(data);
      }}
    >
      <Form className="flex flex-col justify-center items-center space-y-2  ">
        <div className="flex flex-col items-start my-2">
          <label className="font-medium text-gray-900">Prénom</label>
          <Field
            name="firstName"
            className="input input-bordered input-primary focus:bg-white"
            placeholder="Mon prénom"
          />
        </div>{" "}
        <ErrorMessage name="firstName" render={renderError} />
        <div className="flex flex-col items-start my-2">
          <label className="font-medium text-gray-900">Nom</label>
          <Field
            name="name"
            className="input input-bordered input-primary focus:bg-white"
            placeholder="Mon nom"
          />
        </div>
        <ErrorMessage name="name" render={renderError} />
        <div className="flex flex-col items-start my-2">
          <label className="font-medium text-gray-900">Pays</label>
          <Field
            name="state"
            className="input input-bordered input-primary focus:bg-white"
            placeholder="Pays"
          />
        </div>
        <ErrorMessage name="state" render={renderError} />
        <div className="flex flex-col items-start my-2">
          <label className="font-medium text-gray-900">Ville</label>
          <Field
            name="city"
            className="input input-bordered input-primary focus:bg-white"
            placeholder="Ville"
          />
        </div>
        <div className="flex flex-col items-start my-2">
          <label className="font-medium text-gray-900">Code postal</label>
          <Field
            name="postCode"
            className="input input-bordered input-primary focus:bg-white"
            placeholder="83000"
          />
        </div>
        <div className="flex flex-col items-start my-2">
          <label className="font-medium text-gray-900">Site web</label>
          <Field
            name="website"
            className="input input-bordered input-primary focus:bg-white"
            placeholder="https://my-workspace.com"
          />
        </div>
        <button className="sinscrire" type="submit">
          Continue
        </button>
        <button
          className="sinscrire"
          onClick={setActiveStepIndex(activeStepIndex - 1)}
        >
          Continue
        </button>
      </Form>
      <div className="flex flex-col items-center justify-center mt-24 w-full">
        ggggg
        <h1 className=" h2 lg:text-5xl font-heading leading-tight">
          Vous allez recevoir après cette étape un email dans votre boîte !
        </h1>
      </div>
    </Formik>
  );
}

export default BasicSignUpStep3;
