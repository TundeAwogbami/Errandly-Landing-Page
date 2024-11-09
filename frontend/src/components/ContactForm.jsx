import React from "react";
import Botton from "./Botton";
import axiosInstance from "../utils/axiosInstance";

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const sendMessage = async () => {
    try {
      setIsLoading(true);
      await axiosInstance("/api/contact", form);
    } catch (error) {
      consile.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="pb-10 text-3xl font-bold text-white font-helveticaCompressed">
        Lets Connect
      </h1>
      <form action="" className="flex flex-col gap-2 text-white">
        <label htmlFor="email">your email</label>
        <input
          name="email"
          type="text"
          id="email"
          className="p-2 mb-4 text-white bg-transparent border border-green-700 rounded-lg outline-none"
          onChange={handleChange}
          value={form.email}
          disabled={isLoading}
        />
        <label htmlFor="message">your message</label>
        <textarea
          name="message"
          id="message"
          className="p-2 mb-4 text-white bg-transparent border border-green-700 rounded-lg outline-none"
          onChange={handleChange}
          value={form.message}
          disabled={isLoading}
        />
        <Botton
          img=""
          title={{
            name: "Send Message",
            styles: "text-2xl font-bold text-black",
          }}
          styles="bg-white rounded-xl mt-10"
          handleSubmit={sendMessage}
          isLoading={isLoading}
        />
      </form>
    </>
  );
};

export default ContactForm;
