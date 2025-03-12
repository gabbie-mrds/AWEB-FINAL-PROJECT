import express from 'express';
import db from '../config/db_config.js';
import Contact from '../models/Contact.js';
import Volunteer from '../models/Volunteer.js';

const app = express();
app.use(express.json());

const router = express.Router();

// get all contact & volunteer data
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    const volunteers = await Volunteer.find();
    res.status(200).json({
      contacts: contacts,
      volunteers: volunteers
    });
  } catch (error) {
    console.error("Error fetching all data:", error);
    res.status(500).json({message: 'Internal Server Error'});
  }
});

// add contact_form
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

// delete contact_form
router.delete('/contact/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Contact.findOneAndDelete({cid: id});
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.send(500).json({message:'Internal Server Error'});
  }
});

// post volunteer form
router.post('/volunteer', async (req, res) => {
  const { name, email, birthDate, workCourse, companySchool, phoneNum, facebook, address, chapter, committee, altCommittee } = req.body;

  try {
    const numOfDocs = await Volunteer.countDocuments();
    const docs = await Volunteer.create({
      vid: numOfDocs + 1,
      name: name,
      email: email,
      birthDate: birthDate,
      workCourse: workCourse,
      companySchool: companySchool,
      phoneNum: phoneNum,
      facebook: facebook,
      address: address,
      chapter: chapter,
      committee: committee,
      altCommittee: altCommittee,
      status: "Pending"
    });
    res.status(200).json(docs);
  } catch (error) {
    console.error('Error sending form:', error);
    res.send(500).json({message:'Internal Server Error'});
  }
});

router.patch('/volunteer/:id', async (req, res) => {
  const id = req.params.id
  const status = req.body.status;

  try {
    const data = await Volunteer.findOneAndUpdate({vid: id}, 
      { $set: { status: status } },
      { new: true }
    );
    res.status(200).json({ message: 'Status field updated successfully!' });
  } catch (error) {
    console.error('Error updating status field:', error);
    res.send(500).json({message:'Internal Server Error'});
  }
});

// dummy route to test connection
// router.get('/books', async (req, res) => {
//   try {
//     const database = await db;
//     const data = await database.collection("books").find().toArray();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Error fetching all data:", error);
//     res.status(500).json({message: 'Internal Server Error'});
//   }
// });


export default router;