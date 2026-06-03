"use server";

import pool from "../database/db";
import createTable from "../database/createTable";

export default async function getReviews() {
  await createTable();

  const reviews =
    await pool.query(`
      SELECT
        name,
        review,
        rating
      FROM reviews
      ORDER BY id DESC
    `);

  const avg =
    await pool.query(`
      SELECT
        ROUND(
          AVG(rating)::numeric,
          1
        ) AS average
      FROM reviews
    `);

  return {
    reviews: reviews.rows,

    average:
      avg.rows[0]
        ?.average ?? 0,
  };
}