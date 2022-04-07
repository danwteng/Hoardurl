const express = require('express');
const router = express.Router();
const hoardurlController = require('./hoardurlController')

router.get('/:id',
  hoardurlController.getOneURL,
  (req, res) =>{
  return res.status(200).json(res.locals.oneUrl);
})

router.get('/',
  hoardurlController.getAllUrls,
  (req, res) =>{
  return res.status(200).json(res.locals.allUrls);
})

router.post('/',
  hoardurlController.addURL,
  (req, res) =>{
  return res.status(200).json(res.locals.addedUrl);
})

module.exports = router;