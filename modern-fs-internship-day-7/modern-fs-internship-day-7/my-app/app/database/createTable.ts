import pool from "./db";

export default async function createTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS reviews (
      id SERIAL PRIMARY KEY,

      name VARCHAR(255) NOT NULL,

      email VARCHAR(255) NOT NULL,

      rating INT NOT NULL
        CHECK (
          rating >= 1
          AND rating <= 5
        ),

      review TEXT NOT NULL
    );
  `);
}