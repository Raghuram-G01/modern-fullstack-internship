const express = require("express");

const cors = require("cors");

const fs = require("fs");

const path = require("path");

const app = express();

app.use(cors());

app.use(express.json());

app.post("/contact", (req, res) => {

  const newContact = req.body;
  "C:/Users/Nishchal Gupta/Desktop/next-app/my-app/server/co"
const filePath = path.join(__dirname, "contacts.json");
  const fileData =

    fs.readFileSync(
      filePath,
      "utf-8" //encoding the format in which the data should be read 
    );

  const contacts =
    JSON.parse(fileData);

  contacts.push(newContact);

  fs.writeFileSync(

    filePath,

    JSON.stringify(
      contacts,
      null,
      2
    )

  );

  console.log(
    "Data Added:",
    newContact
  );

  res.json({
    message:
      "Data Saved Successfully",
  });

});

app.listen(5000, () => {

  console.log(
    "Server Running On Port 5000"
  );

});