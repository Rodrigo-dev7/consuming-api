const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    // console.log(data)

    return res.json(data);
  } catch (error) {
    console.error(error);
  }

  // users = [
  //   { name: "Mayker", age: 30 },
  //   { name: "Jeff", age: 56 },
  //   { name: "David", age: 45 },
  // ];
});

app.listen(3333, () => console.log("Server Rodando"));
