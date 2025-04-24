//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Route for destination page
router.post('/destination', (req, res) => {
  // Save the selected destination to session data
  req.session.data.destination = req.body.destination

  // Validate form
  const errors = {}
  
  if (!req.session.data.destination) {
    errors.destination = {
      text: "Select a destination"
    }
    return res.render('destination', { errors: errors })
  }

  // Redirect to personal details page
  res.redirect('/personal-details')
})

// Route for personal details page
router.post('/personal-details', (req, res) => {
  // Save the entered details to session data
  req.session.data.fullName = req.body.fullName
  req.session.data.addressLine1 = req.body.addressLine1
  req.session.data.addressLine2 = req.body.addressLine2
  req.session.data.addressTown = req.body.addressTown
  req.session.data.addressCounty = req.body.addressCounty
  req.session.data.addressPostcode = req.body.addressPostcode

  // Validate form
  const errors = {}
  
  if (!req.session.data.fullName) {
    errors.fullName = {
      text: "Enter your full name"
    }
  }
  
  if (!req.session.data.addressLine1) {
    errors.addressLine1 = {
      text: "Enter the first line of your address"
    }
  }
  
  if (!req.session.data.addressTown) {
    errors.addressTown = {
      text: "Enter your town or city"
    }
  }
  
  if (!req.session.data.addressPostcode) {
    errors.addressPostcode = {
      text: "Enter your postcode"
    }
  }
  
  if (Object.keys(errors).length) {
    return res.render('personal-details', { errors: errors })
  }

  // Redirect to check answers page
  res.redirect('/check-answers')
})

// Routes for static pages
router.get('/destination', (req, res) => {
  res.render('destination', { errors: {} })
})

router.get('/personal-details', (req, res) => {
  res.render('personal-details', { errors: {} })
})

router.get('/check-answers', (req, res) => {
  res.render('check-answers')
})

router.post('/confirmation', (req, res) => {
  res.redirect('/confirmation')
})

router.get('/confirmation', (req, res) => {
  res.render('confirmation')
})
