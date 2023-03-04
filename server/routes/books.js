/*
books.js
Name        : Visal Mohan
Student Id  : 301225547
Date        : 04-March-2023
*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

let bookController = require('../controllers/books');

/* GET books List page. READ */
router.get('/', bookController.getBookList);

//  GET the Book Details page in order to add a new Book
router.get('/add', bookController.getAddPage);

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', bookController.submitAddPage);


// GET the Book Details page in order to edit an existing Book
router.get('/:id', bookController.getEditPage);


// POST - process the information passed from the details form and update the document
router.post('/:id', bookController.submitEditPage);



// GET - process the delete by user id
router.get('/delete/:id', bookController.performDelete);



module.exports = router;
