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

// GET tasks by completion status (in-progress or completed)
const getTasksByStatus = (req, res) => {
  const status = req.params.status;

  pool.query(queries.getTasksByStatus, [status], (error, results) => {
      if (error) throw error;
      
      res.status(200).json(
        // {message: "Retrieved all tasks."}, 
        results.rows
      )
  })
}

// GET tasks by priority level (low, medium, or high)
const getTasksByPriority = (req, res) => {
  const priority = req.params.priority;

  pool.query(queries.getTasksByPriority, [priority], (error, results) => {
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
  getTasksByStatus,
  getTasksByPriority
};