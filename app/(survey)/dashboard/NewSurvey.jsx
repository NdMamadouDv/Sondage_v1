import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsPlusCircleFill, BsPlusCircle } from "react-icons/bs";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import Link from "next/link";

function NewSurvey() {
  return (
    <div className="">
      <Dialog.Root className="">
        <Dialog.Trigger asChild>
          <button className="btn btn-primary text-black hover:text-white text-xs">
            <BsPlusCircleFill className="h-auto w-4 md:w-5 mr-5" />
            Créer un nouveau questionnaire
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent flex flex-col space-y-6 ">
            <Dialog.Title className="h4">Créer un sondage </Dialog.Title>
            <Dialog.Description className="info-text">
              Vous pouvez créer le sandage à partir d'un modèle ou bien le créer
              à partir de zéro.
            </Dialog.Description>
            <div
              className="grid grid-cols-2 gap-6 bg-white items-center  "
              data-theme="garden"
            >
              <Dialog.Root>
                <Dialog.Trigger className="h-full">
                  <div className="h-full card text-center border border-gray-400/40 p-4 items-center bg-white hover:bg-primary-focus hover:text-white">
                    <figure>
                      <BsPlusCircle className="h-auto w-12 " />
                    </figure>
                    <div className="card-body">
                      <p className="info-title">Personnalisé</p>
                      <p className=" ">Créez un sondage à partir de zéro.</p>
                    </div>
                  </div>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <form action="">
                    <Dialog.Content className="DialogContent flex flex-col space-y-6 ">
                      <Dialog.Title className="h4">
                        Nom du questionnaire
                      </Dialog.Title>
                      <Dialog.Description className="space-y-2">
                        <p className="info-text">
                          Choisissez le nom de votre questionnaire.
                        </p>

                        <input
                          type="text"
                          placeholder="Nouveau sondage"
                          className="input input-bordered input-primary w-full "
                        />
                      </Dialog.Description>
                      <div
                        style={{
                          display: "flex",
                          marginTop: 25,
                          justifyContent: "flex-end",
                        }}
                      >
                        <Dialog.Close asChild>
                          <motion.button
                            type="submit"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            className="btn btn-outline "
                          >
                            Créer mon questionnaire
                          </motion.button>
                        </Dialog.Close>
                      </div>
                      <Dialog.Close asChild className="absolute top-0 right-3">
                        <motion.button
                          className="b"
                          aria-label="Close"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.2 }}
                        >
                          <IoCloseSharp className="h-auto w-8 text-accent" />
                        </motion.button>
                      </Dialog.Close>
                    </Dialog.Content>
                  </form>
                </Dialog.Portal>
              </Dialog.Root>
              <Link href="/dashboard/models">
                <div className="h-full card text-center border border-gray-400/40 p-4 items-center bg-white hover:bg-primary-focus hover:text-white">
                  <figure>
                    <BsPlusCircle className="h-auto w-12 " />
                  </figure>
                  <div className="card-body">
                    <p className="info-title">A partir d'un modèle</p>
                    <p className="">
                      Créez un sondage à partir d'une selection de modèle.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            {/* <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="btn btn-outline "
              >
                Créer mon questionnaire
              </motion.button>
            </Dialog.Close>
          </div> */}
            <Dialog.Close asChild className="absolute top-0 right-3">
              <motion.button
                className="b"
                aria-label="Close"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
              >
                <IoCloseSharp className="h-auto w-8 text-accent" />
              </motion.button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default NewSurvey;
