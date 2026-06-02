// get feedback from the feedback.json file and display it in the frontend
import fs from "fs/promises";
import path from "path";

async function getFeedback() {
    const filePath = path.join(process.cwd(),"app","data", "feedback.json");
    console.log("File path:", filePath);
    const fileData = await fs.readFile(filePath, "utf-8");
    const jsData = fileData ? JSON.parse(fileData) : [];
    return jsData;
}
export default getFeedback;