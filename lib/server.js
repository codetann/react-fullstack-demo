import express from "express";

const app = express();

const data = {
  names: ["tanner", "taylor", "scott", "gage", "cheyanne"],
};

app.use(express.static("public"));

// react app
app.get("/", (req, res) => {
  res.render("index.html");
});

// api routes
app.get("/api/names", (req, res) => {
  res.send(data.names);
});

app.listen(3000, () => console.log("server running on port 3000"));
