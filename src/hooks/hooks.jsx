import React from "react";
import { config } from "../App";
import axios from "axios";
import Swal from 'sweetalert2'

export const saveFormData = async (data) => {
  try {
    const cv = await axios.post(config.JSON_SERVER_URL + "/contacts", data);

    const response = {
      data: cv.data,
      message: "OK",
      status: "success",
      status_code: 201,
    };
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getContactMessages = async () => {
  const response = await axios.get(config.JSON_SERVER_URL + "/contacts");
  return response;
};

export const deleteContactMessage = async (id) => {
  await axios.delete(config.JSON_SERVER_URL + "/contacts/" + id);
};
export const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
