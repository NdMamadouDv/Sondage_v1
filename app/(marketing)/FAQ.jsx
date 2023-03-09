"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { BsChevronDown } from "react-icons/bs";
function FAQ() {
  return (
    <div className="flex flex-col space-y-24 items-center justify-evenly py-24 layout">
      <h2 className="h2 text-primary mb-8">Foire aux Questions</h2>
      <Accordion.Root
        className="AccordionRoot border"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <Accordion.Item
          className="AccordionItem text-xs sm:text-base lg:text-lg"
          value="item-1"
        >
          <AccordionTrigger>Est-ce que c'est payant ?</AccordionTrigger>
          <AccordionContent>
            Non ! Notre service est completement gratuit, et accessible pour
            tous le monde. Nous voulons permettre à un maximum d'accéder à cet
            outil.Cependant, nous travaillons sur l'éventuelle mise en place
            d'un système payant au niveau des partages.
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item
          className="AccordionItem text-xs sm:text-base lg:text-lg"
          value="item-2"
        >
          <AccordionTrigger>
            Puis-je partir d'un modèle pour créer mon sondage ?
          </AccordionTrigger>
          <AccordionContent>
            Bien sûr ! C'est bien pour vous faire gagner du temps que nous avons
            créée cette outil ! Vous pouvez parcourir une séléction de plus de
            40 modèles de questionnaire préparé par nos experts.
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item
          className="AccordionItem text-xs sm:text-base lg:text-lg"
          value="item-3"
        >
          <AccordionTrigger>
            Par quel moyen je peux partager mon sondage ?
          </AccordionTrigger>
          <Accordion.Content className="AccordionContentText">
            En réalité toute personne détenant le lien de votre sondage peut y
            participer. C'est à vous de le partager à votre public cible ! Donc
            vous pouvez utiliser Gmail, Facebook, Twitter, Instagram ou meme
            votre propre site internet !
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className="AccordionTrigger bg-base-300"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <BsChevronDown />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className="AccordionContent"
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);
export default FAQ;
