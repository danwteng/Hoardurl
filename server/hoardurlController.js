const db = require ('./models/hoardurl.js');

const hoardurlController = {};

hoardurlController.getAllUrls = async (req, res, next) =>{
  const getUrlQuery = `
    SELECT * FROM hoardedurls;
  `
  try {
    const allUrls = await db.query(getUrlQuery);
    res.locals.allUrls = allUrls.rows
    console.log(res.locals.allUrls)
    return next()
  } catch (error) {
    return next({
      log:'Error in retrieving all urls'
    })
  }
}

module.exports = hoardurlController;