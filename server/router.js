const express = require('express');
const router = express.Router();
const hoardurlController = require('./hoardurlController')

//CREATE A URL ENTRY
router.post('/',
  hoardurlController.addURL,
  (req, res) =>{
  return res.status(200).json(res.locals.addedUrl);
})

//READ(GET) a URL entry
router.get('/:id',
  hoardurlController.getOneURL,
  (req, res) =>{
  return res.status(200).json(res.locals.oneUrl);
})

//UPDATE a URL entry
router.put('/:id',
  hoardurlController.updateOneURL,
  (req, res) =>{
  return res.status(200).json(res.locals.updatedUrl);
})

//DELETE a url entry
router.delete('/:id',
  hoardurlController.deleteOneURL,
  (req, res) =>{
  return res.status(200).json(res.locals.deletedUrl);
})

//RETRIEVE ALL URLS
router.get('/',
  hoardurlController.getAllUrls,
  (req, res) =>{
  return res.status(200).json(res.locals.allUrls);
})



module.exports = router;