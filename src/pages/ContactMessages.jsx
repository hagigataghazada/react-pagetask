import React from 'react'

const ContactMessages = () => {

    const getContactMessages = async() => {

    }

  return (
    <div className='flex justify-center items-center h-screen bg-blue-300'>
        <table className='border w-96'>
            <thead>
                <tr className='border'>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                <tr className='border text-center'>
                    <td>1</td>
                    <td>ad</td>
                    <td>soyad</td>
                    <td>mesaj</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ContactMessages