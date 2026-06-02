"use client";

import { useOptimistic, startTransition } from "react";

export default function Page() {
  const comments = ["Hello"];

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment: string) => [...state, newComment],
  );

  function handleClick() {
    const newComment = "I am optimistic";

    startTransition(() => {
      addOptimisticComment(newComment);
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Add Comment</button>

      <ul>
        {optimisticComments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}
