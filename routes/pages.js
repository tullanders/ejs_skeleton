const express = require("express");
const router = express.Router();


//startpage
const user = {
    firstName: 'Tim',
    lastName: 'Cook',
}

router.get('/', function(req, res) {
  res.render('pages/index', {user: user, title: 'Startsidan'});
});

// about page
router.get('/about', function(req, res) {
  res.render('pages/about');
});

module.exports = router;