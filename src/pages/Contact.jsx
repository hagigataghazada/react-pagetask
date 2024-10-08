import React, { useState } from "react";
import { saveFormData, Toast } from "../hooks/hooks";
import Header from "../components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!formData.name.trim() && !formData.surname.trim() && !formData.message.trim()) throw new Error("Please provide a form data!")
      if (!formData.name.trim()) throw new Error("Please provide a name!");
      if (!formData.surname.trim())
        throw new Error("Please provide a surname!");
      if (!formData.message.trim())
        throw new Error("Please provide a message!");
      await saveFormData(formData);

      Toast.fire({
        icon: "success",
        title: "Data created successfully",
      });
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error.message,
      });
    }
  };

  return (
    <div className="bg-green-300 h-screen">
      <Header />
      <div className="container mx-auto py-10">
        <div className="flex column gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="px-5 py-2 border border-gray-500"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            className="px-5 py-2 border border-gray-500"
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            id=""
            cols="20"
            rows="2"
            placeholder="Your Message"
            className="border border-gray-500"
            onChange={handleInputChange}
          ></textarea>
          <button
            onClick={handleSubmit}
            className="bg-yellow-500 px-4 py-2 text-center"
          >
            Send Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
