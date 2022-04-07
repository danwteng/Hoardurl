const db = require ('./models/hoardurl.js');

const hoardurlController = {};

hoardurlController.getAllUrls = async (req, res, next) =>{
  const getAllUrlsQuery = `
    SELECT * FROM hoardedurls;
  `
  try {
    const allUrls = await db.query(getAllUrlsQuery);
    res.locals.allUrls = allUrls.rows
    console.log('THIS IS WHAT THE DATA LOOKS LIKE',res.locals.allUrls)
    return next()
  } catch (error) {
    return next({
      log:'Error in retrieving all urls'
    })
  }
}

hoardurlController.addURL = async (req, res, next) =>{
  const { title, description, url } = req.body;
  console.log('this is the body', req.body);
  const insertUrlQuery = `
    INSERT INTO hoardedurls (title, description, url) 
    VALUES ($1, $2, $3)
    RETURNING *;
  `
  
  try {
    const addedUrl = await db.query(insertUrlQuery, [title, description, url]);
    res.locals.addedUrl = addedUrl.rows[0]
    console.log('THIS IS WHAT THE DATA LOOKS LIKE',res.locals.addedUrl)
    return next()
  } catch (error) {
    return next({
      log:'Error in adding a url'
    })
  }
}

hoardurlController.getOneURL = async (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  const getOneQuery = `
    SELECT * FROM hoardedurls
    WHERE hoardedurls_id = $1;
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

module.exports = hoardurlController;