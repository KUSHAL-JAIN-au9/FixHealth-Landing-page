import React from "react";
import Input from "./Input";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "flowbite-react";

const Contact = () => {
  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      id="subscribe"
    >
      <div className="text-center">
        <h2 className="lg:text-5xl text-3xl text-brightColor font-semibold mb-6 lg:leading-snug">
          Still have Questions?
        </h2>
        <span className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Can't find the answer you're looking for? Please chat with our
          friendly team
        </span>

        <div className="flex gap-8 items-center justify-center my-4">
          {/* <Input /> */}

          <Button className="bg-brightColor">
            Get In Touch
            <FaWhatsapp className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
