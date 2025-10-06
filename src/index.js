import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
// import session from "express-session";
import env from "dotenv";
import cors from "cors";

const app = express();
const port = 3000;
env.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    let body = {name: "fotis", surname: "fotiadis"};



    res.status(200).json({
        data: body

    });
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}/`);
});