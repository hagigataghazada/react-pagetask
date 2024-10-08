import React, { useEffect, useState } from "react";
import { getContactMessages } from "../hooks/hooks";
import { config } from "../App";
import axios from "axios";
import Header from "../components/Header";

const ContactMessages = () => {
  const [contactMessages, setContactMessages] = useState([]);

  const getContactData = async () => {
    const response = await getContactMessages();
    setContactMessages(response.data);
  };

  useEffect(() => {
    getContactData();
  }, [contactMessages]); //[contactMessages] contactmessages deyisende ise dus 
  //component yuklenib bitdikden sonra useEffect funksiyasi ishe dusur

  const handleDelete = async(id) => {
    await axios.delete(config.JSON_SERVER_URL + '/contacts/' + id);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-blue-300">
        <Header/>
      <table className="border">
        <thead>
          <tr className="border">
            <th className="p-3">ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Message</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contactMessages &&
            contactMessages.map((cm) => (
              <tr className="border p-3  text-center" key={cm.id}>
                <td>{cm.id}</td>
                <td>{cm.name ?? 'No Name'}</td>
                <td>{cm.surname}</td>
                <td>{cm.message}</td>
                <td>
                  <button className="border bg-red-500 px-4 py-2" onClick={() => handleDelete(cm.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactMessages;
