const express = require("express");
const { v4: uuidv4 } = require("uuid");
/*Declraring as let as we are not going to use any DB.
we are manipulating the data in the server */
let contactsData = require("../Data/contactsData");
const contactsRouter = express.Router();

const today = new Date();
const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

//Route for getting all contacts.
contactsRouter.get("/", (req, res) => {
  res.status(200).send({ message: "success", data: contactsData });
});

//Route for adding a new contact
contactsRouter.post("/add", (req, res) => {
  const { name, number, location } = req.body;
  if (name && number && location) {
    // console.log({ name, number, location });
    const newContactData = {
      name,
      number,
      location,
      incomingCallCount: 0,
      outgoingCallCount: 0,
      createdDate: date,
      _id: uuidv4()
    };
    contactsData.push(newContactData);
    res.status(200).send({ message: "success", data: newContactData });
  } else {
    res.status(400).send({ message: "sorry, you are unathorized" });
  }
});

//Route for deleting a contact using _id
contactsRouter.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    const updatedContacts = contactsData.filter(ct => ct._id !== id);
    if (updatedContacts.length < contactsData.length) {
      contactsData = updatedContacts;
      res.status(200).send({ message: "success", data: contactsData });
    } else {
      res.status(200).send({ message: "sorry, you are unathorized" });
    }
  } else {
    res.status(400).send({ message: "sorry, you are unathorized" });
  }
});
 
//Route for updating a contact using _id
contactsRouter.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const editedContact = req.body;
  if (id && editedContact.name) {
    const updatedContacts = contactsData.map(ct => {
      if (ct._id === id) {
        return { ...ct, ...editedContact };
      } else return ct;
    });
    contactsData = updatedContacts;
    res.status(200).send({ message: "success", data: contactsData });
  } else {
    res.status(400).send({ message: "sorry, you are unathorized" });
  }
});

module.exports = contactsRouter;
