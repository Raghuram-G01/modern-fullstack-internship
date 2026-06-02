'use server';

import pool from "../database/db";
import { revalidatePath } from "next/cache";

export default async function submitFeedbackForm(
  formData: FormData
) {
  const name = formData.get("name");
  const email = formData.get("email");
  const feedback = formData.get("feedback");

  await pool.query(
    `
    INSERT INTO feedback
    (name, email, feedback)
    VALUES ($1, $2, $3)
    `,
    [name, email, feedback]
  );

  revalidatePath("/feedback");
}