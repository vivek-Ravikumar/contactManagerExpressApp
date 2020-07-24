const today = new Date();
const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const contactsData = [
  {
    name: "Dany",
    createdDate: "2020-7-23",
    number: "789787979",
    location: "chennai",
    incomingCallCount: 5,
    outgoingCallCount: 6,
    _id: "62a02259-5e71-4f37-8c10-6aba2dc3fb25"
  },
  {
    name: "Rohit",
    createdDate: "2020-7-23",
    number: "789787979",
    location: "chennai",
    incomingCallCount: 5,
    outgoingCallCount: 6,
    _id: "ec2adcb1-a2b0-4899-9054-5f9aef53bc82"
  },
  {
    name: "Ram",
    createdDate: "2020-7-23",
    number: "789787979",
    location: "chennai",
    incomingCallCount: 5,
    outgoingCallCount: 6,
    _id: "5f5caf61-727f-4b8e-bb94-c6121bf6daab"
  },
  {
    name: "Satheesh",
    createdDate: "2020-7-23",
    number: "789787979",
    location: "chennai",
    incomingCallCount: 5,
    outgoingCallCount: 6,
    _id: "438d8132-844b-4c2c-8c07-ef6f57a4e3eb"
  },
  {
    name: "Salman",
    createdDate: "2020-7-23",
    number: "789787979",
    location: "chennai",
    incomingCallCount: 5,
    outgoingCallCount: 6,
    _id: "6842fb81-7322-4764-8756-e01aa880f88d"
  }
];

module.exports = contactsData;
