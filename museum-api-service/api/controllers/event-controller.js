'use strict';


let faker = require('faker');



module.exports = {
  events: getEvents,
  events2: getEvents2,
  events3: getEvents3,
};


function getEvents(req, res) {
  const museums = ["Louvre", "Hermitage", "Uffizi Gallery", " Metropolitan Museum", "Tretyakov Gallery" ]
  const loc = ["Basialovskaya street", "Vasnetsova 2nd lane", "Gagarin Street", " Germanovsky lane", "Denisovsky lane" ]
  res.json([{

    "id": "" + faker.random.number(),
    "nameOfMuseum": "" + museums[Math.floor(Math.random() * museums.length)],
    "time": "время : " + faker.random.number({
      min:0,
      max:24}),
    "rate": "",
    "location": "" + loc[Math.floor(Math.random() * loc.length)],
  }]);
}

function getEvents2(req, res) {
  const museums = ["Louvre", "Hermitage", "Uffizi Gallery", " Metropolitan Museum", "Tretyakov Gallery" ]
  const rev = ["Graet", "good", "cool","wow"]
  res.json([{

    "id": "" + faker.random.number(),
    "nameOfMuseum": "" + museums[Math.floor(Math.random() * museums.length)],
    "image": "fest.jpg",
    "review": "" + rev[Math.floor(Math.random() * rev.length)],
    "namesOfPeople": "" + faker.name.findName(),
  }]);
}

function getEvents3(req, res) {
  const loc = ["Basialovskaya street", "Vasnetsova 2nd lane", "Gagarin Street", " Germanovsky lane", "Denisovsky lane" ]
  const museums = ["Louvre", "Hermitage", "Uffizi Gallery", " Metropolitan Museum", "Tretyakov Gallery" ]
  res.json([{

    "id": "" + faker.random.number(),
    "nameOfMuseum": "" + museums[Math.floor(Math.random() * museums.length)],
    "location": "" + loc[Math.floor(Math.random() * loc.length)],
    "image": "fest.jpg",
    "time": "время : " + faker.random.number({
      min:0,
      max:24}),
  }]);
}