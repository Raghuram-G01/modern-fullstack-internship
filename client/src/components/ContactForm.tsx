import { useState } from "react";

function ContactForm() {

  // State Variables

  const [fullName, setFullName] =
    useState<string>("");

  const [email, setEmail] =
    useState<string>("");

  const [message, setMessage] =
    useState<string>("");

  // Submit Function

  async function handleSubmit(
    e: any
  ) {

    // Prevent Page Refresh

    e.preventDefault();

    try {

      // Send Data To Backend

      const response = await fetch(
        "http://localhost:5000/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            fullName,
            email,
            message,
          }),
        }
      );
      console.log("Response:", response);

      // Convert Response Into JSON

      const data =
        await response.json();

      console.log("data", data);

      // Clear Form Only If Request Success

      if (response.ok) {

        setFullName("");

        setEmail("");

        setMessage("");

      }

    }

    catch (error) {

      console.log(
        "Error:",
        error
      );

    }

  }

  return (

    <div>

      <h1>
        Contact Form
      </h1>

      <form onSubmit={handleSubmit}>

        {/* Full Name */}

        <input
          type="text"

          placeholder="Enter Full Name"

          value={fullName}

          onChange={(e) =>
            setFullName(e.target.value)
          }
        />

        <br />
        <br />

        {/* Email */}

        <input
          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />

        {/* Message */}

        <textarea

          placeholder="Enter Message"

          value={message}

          onChange={(e) =>
            setMessage(e.target.value)
          }

        />

        <br />
        <br />

        {/* Submit Button */}

        <button type="submit">

          Send Message

        </button>

      </form>

    </div>

  );

}

export default ContactForm;