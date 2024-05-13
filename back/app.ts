import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.set("port", process.env.PORT || 3001);

app.get("/", (req, res) => {
  res.status(200).send("Hello World-Sign");
});

app.post("/getToken", (req, res) => {
  const { codeId } = req.body;

  const data = new URLSearchParams();
  data.append("code", codeId);
  data.append("grant_type", "authorization_code");
  data.append(
    "redirect_uri",
    "http://localhost:3000/api/auth/callback/worldcoin"
  );

  const credentials = btoa(
    `${process.env.REACT_APP_WLD_CLIENT_ID}:${process.env.REACT_APP_WLD_CLIENT_SECRET}`
  );
  const config = {
    method: "post",
    url: "https://id.worldcoin.org/token",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios(config)
    // Success
    .then((response) => {
      console.log(response.data);

      res.json(response.data)
    })
    // Fail
    .catch(function (error) {
      console.error(error.response.data);
      res.status(400).json(error.response.data)
    });
});


// app.post("/getToken",(req,res) => {
//     const {codeId} = req.body;

//     console.log("codeId : " + codeId);

//     const data = new URLSearchParams();
//     data.append("code", codeId);
//     data.append("grant_type", "authorization_code");
//     data.append("redirect_uri", "http://localhost:3000/api/auth/callback/worldcoin");

//     fetch("https://id.worldcoin.org/token", {
//       method: "POST",
//       headers: {
//         Authorization: `Basic ${btoa(
//           `${process.env.REACT_APP_WLD_CLIENT_ID}:${process.env.REACT_APP_WLD_CLIENT_SECRET}`
//         )}`,
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: data,
//     }).then((data) => {
//       console.log(data.headers);
//       res.send(data)
//     });
// })

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.use((req, res) => {
  res.status(500).send("Invaild Status");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "port start server");
});

module.exports = app;
