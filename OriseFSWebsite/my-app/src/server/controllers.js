// Import database
const knex = require('/Users/emmadavis/Desktop/USFS-Capstone-2023-main/react_sandbox/my-app/src/server/db.js')


exports.dataAll = async (req, res) => {
  // Get all books from database
  knex
    .select('*') // select all records
    .from('fieldPacket') // from 'books' table
    .then(userData => {
      // Send books extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving books: ${err}` })
    })
}

// Create new book
exports.dataLichenCreate = async (req, res) => {
  // Add new book to database
  knex('fieldPacket')
    .insert({ // insert new record, a book
      'plot_use': req.body.plot_use,
      'year': req.body.year,
      'pkt_no': req.body.pkt_no,
      'scinamepkt': req.body.scinamepkt,
      'substrat': req.body.substrat,
      'abun': req.body.abun,
      'chemtest': req.body.chemtest,
      'spnotes': req.body.spnotes
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Entry for plot: \'${req.body.plot_use}\' added` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.plot_use} entry` })
    })
}

