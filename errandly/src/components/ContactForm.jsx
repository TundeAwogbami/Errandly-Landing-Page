import React from "react";
import Botton from "./Botton";

const ContactForm = () => {
  return (
    <>
      <h1 className="pb-10 text-3xl font-bold text-white font-helveticaCompressed">
        Lets Connect
      </h1>
      <form action="" className="flex flex-col gap-2 text-white">
        <label htmlFor="email">your email</label>
        <input
          type="text"
          id="email"
          className="p-2 mb-4 text-white bg-transparent border border-green-700 rounded-lg outline-none"
        />
        <label htmlFor="message">your message</label>
        <textarea
          name="message"
          id="message"
          className="p-2 mb-4 text-white bg-transparent border border-green-700 rounded-lg outline-none"
        ></textarea>
        <Botton
          img=""
          title={{
            name: "Send Message",
            styles: "text-2xl font-bold text-black",
          }}
          styles="bg-white rounded-xl mt-10"
        />
      </form>
    </>
  );
};

export default ContactForm;
