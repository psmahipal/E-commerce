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
    result = result.toObject();
    delete result.password
    resp.send(result)
})

app.post("/login", async (req, resp) => {
    if(req.body.email && req.body.password) {
let user = await User.find(req.body).select("-password");
    console.log(user);
    if (user.length > 0) {
        resp.send(user)
    } else {
        resp.send({ result: "No user found" })
    }
    } else {
        return resp.status(400).send({ error: "Email and password are required" });
    }
})

app.listen(5000);