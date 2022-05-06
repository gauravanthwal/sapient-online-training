const express = require("express");
const app = express();
const path = require("path");
let data = require("./models/courses.model");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.sendFile("Index.html", { root: __dirname });
});

// Courses Route
app.get("/courses", (req, res) => {
  res.json(data);
});

// Create new <Course></Course>
app.post("/newcourse", (req, res) => {
  try {
    const newCourse = req.body;
    data.push(newCourse);

    return res.json({ msg: "Course saved successfully", success: true });
  } catch (err) {
    return res.json({
      msg: "something went wrong while creating new course!",
      success: false,
    });
  }
});

// Delete Course Route
app.delete("/courses/:id", (req, res) => {
  const id = req.params.id;

  data = data.filter((item) => item.id != id);

  return res.json({
    msg: `successfully deleted course id ${id}`,
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
