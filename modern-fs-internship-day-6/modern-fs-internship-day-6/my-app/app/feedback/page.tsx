import submitFeedbackForm from "../action/submitFeedbackForm";
import getFeedback from "../action/getFeedback";
import SubmitButton from "./SubmitButton";

export default async function FeedbackForm() {
  const feedbacks = await getFeedback();

  return (
    <div>
      <h1>User Feedback</h1>

      <form action={submitFeedbackForm}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
        />

        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
        />

        <br />
        <br />

        <label htmlFor="feedback">
          Feedback:
        </label>

        <textarea
          id="feedback"
          name="feedback"
        />

        <br />
        <br />

        <SubmitButton />
      </form>

      <div>
        <h2>Feedbacks:</h2>

        <ul>
          {feedbacks.map((feedback: any) => (
            <li key={feedback.id}>
              <p>Name: {feedback.name}</p>
              <p>Email: {feedback.email}</p>
              <p>
                Feedback:
                {feedback.feedback}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}