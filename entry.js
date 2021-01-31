const mongoose = require("mongoose");

const express = require('express')

const app = express()

const port = process.env.PORT || 6500

connect = async () => {
  mongoose
    .connect("mongodb+srv://shivaniyadawar:98pWsoj1Qd3XTFXh@cluster0.6v3sb.mongodb.net/soccour?retryWrites=true&w=majority", {
       
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.
        log(err));
};

connect();
console.log("welcome"); 
app.use((request, response, next) => {
  let requestId = "";
  if (request.header("requestId")) {
    requestId = request.header("requestId");
  } else {
    requestId = 'some id';
  }
  response.setHeader("requestId", requestId);
  next();
});


require("./route")(app);

app.get("*", (request, response) => {
  response.send({ message: "Sorry, this is an invalid URL. vikky" });
});

app.post("*", (request, response) => {
  response.send({ message: "Sorry, this is an invalid URL." });
});

app.use((request, response, err) => {
  response.status(404).send({ message: "Not found" });
  // logger.error("error middleware", err);
});
app.listen(port, () => {
  console.log(`light it up on given port ${port}`)
})