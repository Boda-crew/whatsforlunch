import express from "express";
import db from "./models/index.js";
import menuRoutes from './routes/menuRoute.js';

const app = express();
let port = process.env.port || 8080;

db.sequelize.sync({force: false })
    .then(() => {
        console.log("DB Connected");
    }).catch((err) => {
    console.error(err);
    })

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/menu', menuRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "잘못된 요청입니다."
    });
});

app.listen(port, () => {
    console.log(`server on ${port}`);
});