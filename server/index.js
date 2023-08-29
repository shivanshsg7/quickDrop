import express from 'express'
import router from './router/router.js';
import DBConnetion from './database/db.js';
import cors from 'cors';
const app = express();
const port = 4000;
app.use(cors());
app.use('/', router);

DBConnetion();


app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
})
