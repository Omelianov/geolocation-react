const app = require("./app");
const mongoose = require("mongoose");
const { DB_HOST, PORT = 3030 } = process.env;

mongoose.set("strictQuery", false);

mongoose
  .connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to DB"))
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
