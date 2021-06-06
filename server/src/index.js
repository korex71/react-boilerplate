const express = require("express");
const app = express();
const Routes = require("./routes");
const PORT = process.env.PORT || 3333;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(Routes);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
