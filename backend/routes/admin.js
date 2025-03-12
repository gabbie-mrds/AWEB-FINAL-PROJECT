import express from 'express';
import Contact from '../models/Contact.js';
import db from '../config/db_config.js';

const app = express();
app.use(express.json());

const router = express.Router();

// get all contact & volunteer data
router.get('/', async (req, res) => {
  try {
    const data = await Contact.find();
    res.status(200).send(data);
  } catch (error) {
    console.error("Error fetching all data:", error);
    res.status(500).json({message: 'Internal Server Error'});
  }
});

// dummy route to get contact_form
router.get('/contact', async (req, res) => {
  try {
    const docs = await Contact.find();
    console.log(docs);
  } catch (error) {
    console.error('Error:', error)
  }
});

// dummy route to add contact_form
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const numOfDocs = await Contact.countDocuments();
    const docs = await Contact.create({
      cid: numOfDocs + 1,
      name: name,
      email: email,
      message: message,
    });
    res.status(200).json(docs);
  } catch (error) {
    console.error('Error sending form:', error);
    res.send(500).json({message:'Internal Server Error'});
  }
});

// dummy route to test connection
router.get('/books', async (req, res) => {
  try {
    const database = await db;
    const data = await database.collection("books").find().toArray();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching all data:", error);
    res.status(500).json({message: 'Internal Server Error'});
  }
});


export default router;