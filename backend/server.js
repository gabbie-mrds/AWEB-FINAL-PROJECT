// * cd backend tapos npm start

// npm i express cors
// npm i nodemon --save-dev
// ^ always a must for backend init

import express from 'express';
import cors from 'cors';
import adminRoute from './routes/admin.js';

const app = express();

// ------ TO BE ADDED WITH FRONTEND INIT ------ //

// app.use(cors({
//   origin: 'https://<frontendlink.com>',
//   methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
//   exposedHeaders: ['Content-Disposition'],
// }));

// ^ cors is typically required kapag fullstack kase the frontend & backend is hosted on different servers,
// basically it specifies which frontend server can get access to backend resources

// * if di nakaspecify yung link don sa origin sa taas, frontend won't be able to get data from backend

app.use(cors());
// ^ sa ngayon backend is accessible to any origin, kase ala pa tau server for frontend

app.use(express.json());
// ^ always a must for backend kase it processes json requests from the frontend

const PORT = process.env.PORT || 3000;

// ROUTES
app.use('/admin', adminRoute);
// ^ http://localhost:3000/admin

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("It's not you, it's us!");
});
// ^ global error handler in case na merong unhandled errors

app.listen(PORT || 3000, () => {
  console.log(`Listening on Port ${PORT}`);
});
