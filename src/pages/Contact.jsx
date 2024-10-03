import React, { useState } from "react";

const Contact = () => {

  const [ formData, setFormData ] = useState(null);

  const handleInputChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(formData);
  }

  return (
    <div className="bg-green-300 h-screen">
      <div className="container mx-auto py-10">
        <div className="flex column gap-4">
          <input type="text" name="name" placeholder="Name" className="px-5 py-2 border border-gray-500" onChange={handleInputChange}/>
          <input type="text"  name="surname" placeholder="Surname" className="px-5 py-2 border border-gray-500" onChange={handleInputChange}/>
          <textarea
            name="message"
            id=""
            cols="20"
            rows="2"
            placeholder="Your Message" className="border border-gray-500" onChange={handleInputChange}
          ></textarea>
          <button className="bg-yellow-500 px-4 py-2 text-center">
            Send Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
