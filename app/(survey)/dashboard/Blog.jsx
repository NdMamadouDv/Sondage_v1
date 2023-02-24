import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Blog() {
  return (
    <div className="py-6 container space-y-6 lg:space-y-12">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 items-center justify-center">
        <motion.div
          className="card 
          w-64 bg-base-100 shadow-xl"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
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
          <div className="card-body p-4">
            <h2 className="text-lg font-fjalla font-semibold">
              Voici quelques techniques pour mieux recueillir ce que pensent vos
              consommateurs !<div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Connaître ses consommateur c'est augmenter ses chances de ventes,
              voici pourquoi.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="card 
          w-64 bg-base-100 shadow-xl"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
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
          <div className="card-body p-4">
            <h2 className="text-lg font-fjalla font-semibold">
              Voici quelques techniques pour mieux recueillir ce que pensent vos
              consommateurs !<div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Connaître ses consommateur c'est augmenter ses chances de ventes,
              voici pourquoi.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="card 
          w-64 bg-base-100 shadow-xl"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
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
          <div className="card-body p-4">
            <h2 className="text-lg font-fjalla font-semibold">
              Voici quelques techniques pour mieux recueillir ce que pensent vos
              consommateurs !<div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Connaître ses consommateur c'est augmenter ses chances de ventes,
              voici pourquoi.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="card 
          w-64 bg-base-100 shadow-xl"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
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
          <div className="card-body p-4">
            <h2 className="text-lg font-fjalla font-semibold">
              Voici quelques techniques pour mieux recueillir ce que pensent vos
              consommateurs !<div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Connaître ses consommateur c'est augmenter ses chances de ventes,
              voici pourquoi.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Blog;
