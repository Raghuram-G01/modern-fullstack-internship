import { submitContactForm } from "@/app/action/page";

export default function ContactFormPage() {
  return (
    <div>
      <h1>Contact Form</h1>
      <form action={submitContactForm}>
        <label>Name:</label>
        <input type="text" name="name" required />
        <br></br>
        <br></br>
        <label>Email:</label>
        <input type="email" name="email" required />
        <br></br>
        <br></br>
        <label>Message:</label>
        <textarea name="message" required />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


