const pool = require('../db');
const queries = require('./queries');

// GET all tasks
const getTasks = (req, res) => {
  pool.query(queries.getTasks, (error, results) => {
    if (error) throw error;
    
    res.status(200).json(
      // {message: "Retrieved all tasks."}, 
      results.rows
    )
  })
};

// GET one task by specified ID
const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getTaskById, [id], (error, results) => {
      if (error) throw error;
      
      res.status(200).json(
        // {message: "Retrieved all tasks."}, 
        results.rows
      )
  })
}

// GET tasks by completion status (true or false)
const getStatus = (req, res) => {
  console.log("Test", req.params.completed);
  const status = req.params.completed;

  pool.query(queries.getStatus, [status], (error, results) => {
      if (error) throw error;
      
      res.status(200).json(
        // {message: "Retrieved all tasks."}, 
        results.rows
      )
  })
}

module.exports = {
  getTasks,
  getTaskById,
  getStatus
};