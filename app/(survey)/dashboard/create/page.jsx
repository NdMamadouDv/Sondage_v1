"use client";
import React from "react";
import Sidebar from "../../Sidebar";
import { motion } from "framer-motion";
import { GrFormAdd } from "react-icons/gr";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputItem from "./InputItem";

function page() {
  // Page dynamique servant à permettre au utilisateur de créer leur propre logique
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     profession: professions[0],
  //     age: "",
  //   },
  //   onSubmit: function (values) {
  //     alert(`You are registered! Name: ${values.name}. Email: ${values.email}. Profession: ${values.profession}.
  //       Age: ${values.age}`);
  //   },
  // });
  // Valider 8  types de questions différentes
  // choix unique, choix multiple réponse textuelle, choix entre différentes image (préférée) , évaluation , comparaison entre plusieurs elements, echelle d'evaluation, ordre de préférence
  return (
    <div className="flex flex-wrap relative">
      <Sidebar />

      <div className=" flex flex-col justify-start items-center basis-0 grow layout min-h-screen  py-6">
        {/* Mettre en place le formulaire avec les inputs et different choix de type de question  */}
        <form
          action=""
          className="max-w-2xl mx-auto grid justif y-stretch justify-items-center w-full space-y-4"
        >
          <div className="flex flex-col items-center justify-center border border-black rounded-lg w-full p-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-lg">Titre de votre questionnaire</span>
              </label>
              <input
                type="text"
                placeholder="Choisissez un titre .."
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <motion.span
            className="self-center"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <GrFormAdd className="h-auto w-10 bg-primary rounded-lg" />
          </motion.span>
          <InputItem />
        </form>
      </div>
    </div>
  );
}

export default page;
