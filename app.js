import express from "express";
import {db} from "./models/index.js";
import menuRoutes from './routes/menuRoute.js';
const app = express();
let port = process.env.port || 8080;

db.sequelize.sync({force: false })
    .then(() => {
        console.log("DB Connected");
    }).catch((err) => {
    console.error(err);
    })

app.use(express.json);
app.use(express.urlencoded({extended: false}));

app.use('/menu', menuRoutes);

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} Router Not Found`);
    error.status = 404;
    next(error);
});

app.listen(port, () => {
    console.log(`server on ${port}`);
});