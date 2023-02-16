const pool = require('../db');
const queries = require('./queries');

const getTasks = (req, res) => {
  pool.query(queries.getTasks, (error, results) => {
    if (error) throw error;
    
    res.status(200).json(
      // {message: "Retrieved all tasks."}, 
      results.rows
    )
  })
};

module.exports = {
  getTasks
};