import pool from "../database/db";

export default async function getFeedback() {
  const data = await pool.query(
    "SELECT * FROM feedback ORDER BY id DESC"
  );

  return data.rows;
}