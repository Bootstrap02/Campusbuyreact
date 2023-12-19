import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

export const Callbackmodals = ({ closeCallbackModals, openCallbackSuccessMessage }) => {
 
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Callback sent successfully!");
      closeCallbackModals();
      openCallbackSuccessMessage();
    } catch (error) {
      console.error("Callback sending failed:", error);
      // Handle error (show an error message to the user, etc.)
    }
  };

  return (
    <div className="container border">
      <form onSubmit={handleFormSubmit} className="w-[100%] flex flex-col gap-3 py-3 ">
        <div className="flex justify-center items-center gap-3">
          <h3>Input your details</h3>
          <MdCancel onClick={closeCallbackModals} className="ml-auto w-[30px] h-[30px]" />
        </div>
        <div className="w-[100%] ">
          <input className="border border-gray-600 w-[100%] inline-block p-2" type="text" placeholder="Your Name" />
        </div>
        <div>
          <input
            className="border border-gray-600 w-[100%] inline-block p-2"
            type="Tel"
            placeholder="Your Phone number"
          />
        </div>
        <button className="border-2 border-green-700 p-2 inline-block w-full m-2">Request Callback</button>
      </form>
    </div>
  );
};

export const Messagemodals = ({ closeModals, openSuccessMessage }) => {
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Message sent successfully!");
      closeModals();
      openSuccessMessage();
    } catch (error) {
      console.error("Email sending failed:", error);
      // Handle error (show an error message to the user, etc.)
    }
  };

  return (
    <div className="container border w-full p-4">
      <form onSubmit={handleFormSubmit}>
        <div className="flex justify-center">
          <label htmlFor="message">Type your message:</label>
          <MdCancel onClick={closeModals} className="ml-auto w-[30px] h-[30px]" />
        </div>
        <textarea id="message" name="message" className="border border-gray-600 w-full p-4" />
        <button className="border-2 border-green-700 p-2 inline-block w-full m-2">Send Message</button>
      </form>
    </div>
  );
};
