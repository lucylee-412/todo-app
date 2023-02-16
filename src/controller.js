const pool = require('../db');

const getTasks = (req, res) => {
  pool.query("SELECT * FROM tasks", (error, results) => {
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