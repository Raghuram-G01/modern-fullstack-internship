import submitReview from "../action/submitReview";
import getReviews from "../action/getReviews";
import SubmitButton from "./SubmitButton";

export default async function ProductFeedback() {
  const data = await getReviews();

  return (
    <div>
      <h1>Product Feedback</h1>
      <form action={submitReview}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <br />
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          placeholder="Rating"
        />
        <br />
        <br />
        <textarea name="review" placeholder="Write review" />
        <br />
        <br />
        <SubmitButton />
      </form>
      <hr />
      <h2>Average Rating: {data.average}</h2>
      <h2>Reviews</h2>
      <ul>
        {data.reviews.map((item: any, index: number) => (
          <li key={index}>
            <p>Name:{item.name}</p>
            <p>Rating: {item.rating}</p>
            <p>Review:{item.review}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
