const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const connectDB = require("./utils/mongoDB");
const { config } = require("dotenv");
const multer = require("multer");
const Presc = require("./api/model/Presc");
const cors = require("cors");
const aws = require("aws-sdk");
const fs = require("fs");
config();

const filefilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const app = express();
const PORT = 8080;
connectDB();
app.use(cors());

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const upload = multer({ dest: "uploads", fileFilter: filefilter });
const currentDate = new Date();

app.get("/", (req, res) => {
  res.status(200).send("API is live !");
});

app.post("/chat", async (req, res) => {
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: req.body.prompt }],
  });
  console.log("sucessfully");
  console.log(response.data.choices[0].message.content);
  res.status(200).send(response.data.choices[0].message.content);
});

app.get("/timeline", async (req, res) => {
  const { startDate, endDate } = req.query;
  try {
    const timelineData = await Presc.find({
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    });
    console.log(timelineData);
    res.json(timelineData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/upload", upload.single("file"), async (req, res) => {
  const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  const key = "patient_prescription/" + req.file.originalname;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME, // bucket that we made earlier
    Key: key, // Name of the image
    Body: fs.createReadStream(req.file.path), // Body which will contain the image in buffer format
    ACL: "public-read-write", // defining the permissions to get the public link
    ContentType: "application/pdf", // Necessary to define the image content-type to view the photo in the browser with the link
  };

  s3.upload(params, async (err, data) => {
    if (err) {
      res.status(500).send({ err: err });
    }

    const fileData = {
      file: data.Location,
      originalName: req.file.originalname,
      description: req.body.description,
      diseaseName: req.body.diseaseName,
      date: currentDate,
    };

    const newPresc = await Presc.create(fileData);
    await newPresc.save();

    res.send({
      message: "Entry Created in the existing timeline",
      fileData,
    });
  });
});

app.get("/getAll", async (req, res) => {
  Presc.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});