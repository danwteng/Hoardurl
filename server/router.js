const express = require('express');
const router = express.Router();
const hoardurlController = require('./hoardurlController')

router.get('/',
  hoardurlController.getAllUrls,
  (req, res) =>{
  return res.status(200).json(res.locals.allUrls);
})

module.exports = router;