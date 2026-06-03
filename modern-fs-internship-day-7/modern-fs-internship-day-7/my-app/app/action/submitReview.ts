"use server";

import pool from "../database/db";
import createTable from "../database/createTable";
import { revalidatePath } from "next/cache";

export default async function submitReview(
  formData: FormData
) {
  await createTable();

  const name =
    formData.get("name")
      ?.toString() || "";

  const email =
    formData.get("email")
      ?.toString() || "";

  const rating = Number(
    formData.get("rating")
  );

  const review =
    formData.get("review")
      ?.toString() || "";

  await pool.query(
    `
    INSERT INTO reviews
    (name,email,rating,review)
    VALUES ($1,$2,$3,$4)
    `,
    [
      name,
      email,
      rating,
      review,
    ]
  );

  revalidatePath(
    "/product-feedback"
  );
}