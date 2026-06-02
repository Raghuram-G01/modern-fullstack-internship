'use server';
import fs from "fs/promises";
import path from "path";
import {revalidatePath} from "next/cache";

async function submitFeedbackForm(formData: FormData) {
    console.log("Received feedback form data:",formData);
    const name = formData.get("name");
    const email = formData.get("email");
    const feedback = formData.get("feedback");
    const newFeedback = {
        name,
        email,
        feedback,
    }

    // we need to read the file
    // get existing feedbacks
    // append the new feedback
    // write back to the file
    // print a success message

    const filePath = path.join(process.cwd(),"app","data", "feedback.json");
    console.log("File path:", filePath);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const fileData = await fs.readFile(filePath, "utf-8");

    const jsData = fileData ? JSON.parse(fileData) : [];

    jsData.push(newFeedback);
    
    await fs.writeFile(filePath, JSON.stringify(jsData, null, 2), "utf-8");

    revalidatePath("/feedback");
    console.log("Feedback submitted successfully!");

    // after submitting the feedback display the feedback in the frontend

}
export default submitFeedbackForm;