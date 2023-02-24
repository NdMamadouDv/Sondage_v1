import Image from "next/image";
import React from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import { motion } from "framer-motion";

function Sondages() {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 items-center justify-center py-6">
      <div className="flex items-start justify-evenly flex-col ">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="card card-compact w-64 bg-base-100 shadow-xl"
        >
          <figure>
            <Image
              src="/handshake.jpg"
              alt="Shoes"
              width={300}
              height={300}
              className="h-auto w-auto"
            />
          </figure>
          <div className="card-body">
            <h3 className="hs sm:text-lg">
              Sondage concernant les habitudes de consommation de jeunes de
              12-25ans
            </h3>
            <div className="flex items-center justify-between">
              <p className="font-fjalla font-bold text-primary">
                {" "}
                15 réponse !
              </p>
              <TfiMoreAlt className="hover:text-primary cursor-pointer" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Sondages;
