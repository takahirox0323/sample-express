import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// リクエストボディを受け取るための設定
app.use(
  express.urlencoded({
    extended: true,
  })
);

const port = "8888";
app.listen(port, () => {
  console.log(`app start listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});
