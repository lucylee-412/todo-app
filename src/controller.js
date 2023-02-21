const pool = require('../db');
const queries = require('./queries');

// GET all tasks
const getTasks = (req, res) => {
  pool.query(queries.getTasks, (error, results) => {
    if (error) throw error;

    console.log("Test", results.rows[0].description)

    res.status(200).json(
      // {message: "Retrieved all tasks."}, 
      results.rows
    )
  });
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
  });
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
  });
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
  });
};

////////////////////////////////////////////////////////

const addTask = (req, res) => {
  const { description, priority } = req.body;

  // Check if task with same description already exists
  pool.query(queries.getDescription, [description], (error, results) => {
    // If a matching description is found, returned length will be truthy
    if (results.rows.length) {
      return res.send("A task with this description already exists on the to-do list.");
    }

    // Task is new -> Add to database
    pool.query(queries.addTask, [description, priority], (error, results) => {
      if (error) throw error;
      res.status(201).send(
        "New task to-do added."
      )
    });
  });
};

const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getTaskById, [id], (error, results) => {
      if (!results.rows.length) {
        return res.send("A task by this ID does not exist.");
      }

      pool.query(queries.deleteTask, [id], (error, results) => {
        if (error) throw error;
      
        res.status(200).json(
          // {message: "Retrieved all tasks."}, 
          results.rows
        )
      });  
  });
};

const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const { description, status, priority } = req.body;

  pool.query(queries.getTaskById, [id], (error, results) => {
    if (!results.rows.length) {
      return res.send("A task by this ID does not exist.");
    }

    let newDescription = description;
    let newStatus = status;
    let newPriority = priority;

    if (!description) {
      newDescription = results.rows[0].description;
    }
    if (!status) {
      newStatus = results.rows[0].status;
    }
    if (!priority) {
      newPriority = results.rows[0].priority;
    }
    
    pool.query(queries.updateTask, [id, newDescription, newStatus, newPriority], (error, results) => {
      if (error) throw error;

      res.status(201).send("Task has been successfully updated.");
    })
  })
}

/*
const updateDescription = (req, res) => {
  const id = parseInt(req.params.id);
  const { description } = req.body;

  pool.query(queries.getTaskById, [id], (error, results) => {
    if (!results.rows.length) {
      return res.send("A task by this ID does not exist.");
    }

    pool.query(queries.updateDescription, [id, description], (error, results) => {
      if (error) throw error;

      res.status(201).send("Task has been successfully updated.");
    })
  })
}

const updatePriority = (req, res) => {
  const id = parseInt(req.params.id);
  const { priority } = req.body;

  pool.query(queries.getTaskById, [id], (error, results) => {
    if (!results.rows.length) {
      return res.send("A task by this ID does not exist.");
    }

    pool.query(queries.updatePriority, [id, priority], (error, results) => {
      if (error) throw error;

      res.status(201).send("Task has been successfully updated.");
    })
  })
}

const updateStatus = (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;

  pool.query(queries.getTaskById, [id], (error, results) => {
    if (!results.rows.length) {
      return res.send("A task by this ID does not exist.");
    }

    pool.query(queries.updateStatus, [id, status], (error, results) => {
      if (error) throw error;

      res.status(201).send("Task has been successfully updated.");
    })
  })
}
*/


module.exports = {
  addTask,
  deleteTask,
  getTasks,
  getTaskById,
  getTasksByStatus,
  getTasksByPriority,
  updateTask
  // updateDescription,
  // updatePriority,
  // updateStatus,
};