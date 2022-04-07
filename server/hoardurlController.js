const db = require ('./models/hoardurl.js');

const hoardurlController = {};

//RETRIEVE ALL URLS/ENTIRE DATABASE

hoardurlController.getAllUrls = async (req, res, next) =>{
  const getAllUrlsQuery = `
    SELECT * FROM hoardedurls;
  `
  try {
    const allUrls = await db.query(getAllUrlsQuery);
    res.locals.allUrls = allUrls.rows
    // console.log('THIS IS WHAT THE DATA LOOKS LIKE',res.locals.allUrls)
    return next()
  } catch (error) {
    return next({
      log:'Error in retrieving all urls'
    })
  }
}

//CREATE ONE ENTRY IN THE DATABASE

hoardurlController.addURL = async (req, res, next) =>{
  const { title, description, url } = req.body;
  // console.log('this is the body', req.body);
  const insertUrlQuery = `
    INSERT INTO hoardedurls (title, description, url) 
    VALUES ($1, $2, $3)
    RETURNING *;
  `
  
  try {
    const addedUrl = await db.query(insertUrlQuery, [title, description, url]);
    res.locals.addedUrl = addedUrl.rows[0]
    // console.log('THIS IS WHAT THE DATA LOOKS LIKE',res.locals.addedUrl)
    return next()
  } catch (error) {
    return next({
      log:'Error in adding a url'
    })
  }
}

//READ/GET ONE ENTRY FROM THE DATABASE

hoardurlController.getOneURL = async (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  const getOneQuery = `
    SELECT * FROM hoardedurls
    WHERE hoardedurls_id = $1
    RETURNING *;
  `
  try {
    const oneUrl = await db.query(getOneQuery, [id])
    res.locals.oneUrl = oneUrl.rows[0]
    console.log('THIS IS JUST ONE URL', res.locals.oneUrl)
    return next()
  } catch (error) {
    return next({
      log:'Error in fetching just one url'
    })
  }
}

//UPDATE ONE ENTRY FROM THE DATABASE
hoardurlController.updateOneURL = async (req, res, next) => {
  const { id } = req.params;
  const { title, description, url } = req.body;
  
  const updateOneQuery = `
    UPDATE hoardedurls
    SET title = $2,
        description = $3,
        url = $4
    WHERE hoardedurls_id = $1
    RETURNING *;
  `

  try {
    const updatedUrl = await db.query(updateOneQuery, [id, title, description, url])
    // console.log(updatedUrl);
    res.locals.updatedUrl = updatedUrl.rows[0]
    // console.log('THIS IS JUST ONE URL', res.locals.updatedUrl)
    return next()
  } catch (error) {
    return next({
      log:'Error in updating just one url'
    })
  }
}

//DELETE ONE ENTRY FROM THE DATABASE
hoardurlController.deleteOneURL = async (req, res, next) => {
  const { id } = req.params;
  const deleteOneQuery = `
    DELETE FROM hoardedurls
    WHERE hoardedurls_id = $1
    RETURNING *;
  `
  try {
    const deletedUrl = await db.query(deleteOneQuery, [id])
    res.locals.deletedUrl = deletedUrl.rows[0]
    console.log('THIS IS JUST ONE URL', res.locals.deletedUrl)
    return next()
  } catch (error) {
    return next({
      log:'Error in fetching just one url'
    })
  }
}

module.exports = hoardurlController;