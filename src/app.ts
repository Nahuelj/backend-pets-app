// import {connectMongo} from './db/connect'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'

const app = express();
app.use(cors())
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  // connectMongo();
});


app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' });
   });
  