// Import express
const express = require('express')

// Import books-controller
const dataRoutes = require('/Users/emmadavis/Desktop/USFS-Capstone-2023-main/react_sandbox/my-app/src/server/controllers.js')

// Create router
const router = express.Router()

router.get('/all', dataRoutes.booksAll)
// Add route for POST request to create new book
// In server.js, books route is specified as '/books'
// this means that '/create' translates to '/books/create'
router.post('/create', dataRoutes.dataLichenCreate)


// Export router
module.exports = router