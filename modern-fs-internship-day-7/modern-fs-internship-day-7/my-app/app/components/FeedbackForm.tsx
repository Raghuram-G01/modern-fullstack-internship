"use client";

import { useOptimistic, useActionState, useRef } from "react";
import { submitFeedback } from "../database/actions";
import { Feedback, ActionResult } from "../database/types";
import FeedbackList from "./FeedbackList";

export default function FeedbackForm({ initial }: { initial: Feedback[] }) {
  const formRef = useRef<HTMLFormElement>(null);

  const [optimisticFeedback, addOptimistic] = useOptimistic(
    initial,
    (state: Feedback[], newMessage: string) => [
      {
        id: crypto.randomUUID(),
        message: newMessage,
        createdAt: new Date().toISOString(),
      },
      ...state,
    ],
  );

  const [result, formAction, isPending] = useActionState(
    async (prev: ActionResult | null, formData: FormData) => {
      const message = formData.get("message");
      if (typeof message === "string" && message.trim()) {
        addOptimistic(message.trim());
      }
      const res = await submitFeedback(prev, formData);
      if ("success" in res) formRef.current?.reset();
      return res;
    },
    null,
  );

  const error = result && "error" in result ? result.error : null;

  return (
    <div className="space-y-6">
      <form ref={formRef} action={formAction} className="space-y-3">
        <textarea
          name="message"
          rows={3}
          placeholder="Share your feedback..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={isPending}
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Submitting…" : "Submit Feedback"}
        </button>
      </form>

      <FeedbackList items={optimisticFeedback} />
    </div>
  );
}
