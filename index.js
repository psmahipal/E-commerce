const express = require('express');
require('./db/config');
const User = require('./db/users');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result)
})


app.listen(5000);