"use server";
import fs from "fs/promises";
import path from "path";

export async function submitContactForm(
  formData: FormData
) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const filePath = path.join(
    process.cwd(),
    "data",
    "contacts.json"
  );

  const fileData = await fs.readFile(
    filePath,
    "utf-8"
  );

  const contacts = JSON.parse(fileData);

  contacts.push({
    name,
    email,
    message,
  });

  await fs.writeFile(
    filePath,
    JSON.stringify(contacts, null, 2)
  );

  console.log("Saved successfully");
}