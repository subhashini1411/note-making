const express = require('express');
const router = express.Router();
const validate=require('../middleware/validate')
const { getAllNotes,createNote,deleteNote,updateNote}=require('../controller/noteController');
router.route('/',validate).get(getAllNotes);
router.route('/create').post(createNote);
router.route('/update/:id').put(updateNote);
router.route('/delete').delete(deleteNote);
module.exports=router;