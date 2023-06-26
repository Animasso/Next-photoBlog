import ContactComponent from "@/components/ContactComponent";
import { Hero } from "@/components/Hero";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Send me your question or feedback with the form"
      />
      <ContactComponent />
    </div>
  );
};
export default Contact;
