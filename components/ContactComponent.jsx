import React from "react";

const ContactComponent = () => {
  return (
    <div className=" max-w-[1240px] m-auto p-4 h-screen">
      <h1 className=" text-2xl font-bold text-center p-4">Contact me</h1>
      <form className=" max-w-[600px] m-auto">
        <div className=" grid grid-cols-2 gap-2">
          <input
            className=" border shadow-lg p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className=" border shadow-lg p-3"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className=" border shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className=" border shadow-lg p-3 w-full"
          cols="30"
          rows="10"
          placeholder="message"
        ></textarea>
        <button
          className=" border shadow-lg p-3 w-full mt-2 hover:bg-slate-500 hover:text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactComponent;
