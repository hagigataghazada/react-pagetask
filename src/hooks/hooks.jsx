import React from 'react'
import { config } from '../App';
import axios from 'axios';

export const saveFormData = async(data) => {
    try {
        const cv = await axios.post(config.JSON_SERVER_URL + '/contacts', data);

        const response = {
            'data': cv.data,
            'message': "OK",
            'status': 'success',
            'status_code': 201
        }
        return response;
    } catch (error){
        throw new Error(error.message);
    }
}
export const getContactMessages = async () => {
    const response = await axios.get(config.JSON_SERVER_URL + "/contacts");
    return response;
  };