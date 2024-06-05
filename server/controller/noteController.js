const Notes = require('../models/noteModel');
const getAllNotes = async (req, res) => {

  try {
    const notes = await Notes.find();
    // Send tasks as a response
    return res.status(200).json({ notes });
  }
  catch (error) {
    console.error('Error ', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
};
const createNote = async (req, res) => {
  try {
    const { title,note } = req.body;
    console.log(req.body);

    if (!note || !title) {
      res.status(400).json({
        message: "Title and note is required"
      });
      return
    }
    const newNote = await Notes.create({ 
      title:title,
      note:note,
    
    });
    return res.status(201).json({
      data: newNote,
    })
  } catch (error) {
    console.error('Error creating Note:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
};
const updateNote = async (req, res) => {
  try {
    const { Title } = req.body
    const currentNote = await Notes.findOneAndUpdate(
      { _id: req.params.id }, {
      $set: {
        title: Title,
      },
    }
    )
    return res
      .status(200)
      .json({ message: `update title` })
  } catch (error) {
    console.error('Error in updating  note:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Notes.findOneAndDelete({ _id: req.params.id })
    return res
      .status(200)
      .json({ message: `deleted note` })
  } catch (error) {
    console.error('Error in deleting note:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}


module.exports = { getAllNotes,createNote,updateNote,deleteNote };