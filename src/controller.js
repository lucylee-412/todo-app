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
};

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
};

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
};

////////////////////////////////////////////////////////

const addTask = (req, res) => {
  const { description, priority } = req.body;

  // Check if task with same description already exists
  pool.query(queries.getDescription, [description], (error, results) => {
    // If a matching description is found, returned length will be truthy
    if (results.rows.length) {
      res.send("A task with this description already exists on the to-do list.");
    }

    // Task is new -> Add to database
    pool.query(queries.addTask, [description, priority], (error, results) => {
      if (error) throw error;
      res.status(201).send(
        "New task to-do added."
      )
    });
  })
};

module.exports = {
  addTask,
  getTasks,
  getTaskById,
  getTasksByStatus,
  getTasksByPriority
};