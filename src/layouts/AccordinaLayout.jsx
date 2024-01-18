import { Accordion } from "flowbite-react";
import React from "react";

const AccordinaLayout = ({ title, children }) => {
  return (
    <Accordion collapseAll className=" w-[80%] p-4 my-2">
      <Accordion.Panel className="hover:bg-[#242424]  focus:border-none focus-within:border-none ">
        <Accordion.Title className="hover:bg-[#242424] focus:border-none text-white bg-[#242424]">
          {title}
        </Accordion.Title>
        <Accordion.Content>
          {children}
          {/* {" "}
          <p className=" text-gray-500 dark:text-gray-400">
            Fix Health (YourPhysio previously) was started by Dr. Sheetal
            Mundhada who's a renowned physiotherapist with 33+ years of
            experience. The team has 60+ physiotherapists & has delivered
            30,000+ online sessions with 96% patient satisfaction.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            The organization has been featured in Economic Times, Business
            World, Times of India for its effective online pain relief programs.{" "}
            <br />
            Fix Health shares the same investors as companies like Ola, Snapdeal
            & Khatabook and the technology innovation is done by a team from IIT
            Bombay, IIT Madras & BITS Pilani.
          </p> */}
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default AccordinaLayout;
