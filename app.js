import express from 'express';

const app = express();
let port = process.env.port || 8080;

app.get(`/`, (req, res) => {
    res.send(`Hello World!`);
});

const app = app.listen(port, () => {
    console.log(`server on ${port}`);
});