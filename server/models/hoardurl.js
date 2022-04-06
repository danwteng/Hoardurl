const { Pool } = require('pg');

const PG_URI = 'postgres://ovrtjzik:XdO82TjpdL_ZCQ2t2g2e1eXN-99kgm0D@batyr.db.elephantsql.com/ovrtjzik';

//creating a new pool (using collection from the DB)
const pool = new Pool({
  connectionString: PG_URI,
})

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback)
  }
}