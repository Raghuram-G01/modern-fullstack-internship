"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;