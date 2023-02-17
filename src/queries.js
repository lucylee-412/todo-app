const getDescription = `
  SELECT task FROM tasks task WHERE task.description = $1
`;

const getTasks = `
  SELECT * FROM tasks
`;

const getTaskById = `
  SELECT * FROM tasks WHERE id = $1
`;

const getTasksByStatus = `
  SELECT * FROM tasks WHERE status = $1
`;

const getTasksByPriority = `
  SELECT * FROM tasks WHERE priority = $1
`;

////////////////////////////////////////////////////

const addTask = `
  INSERT INTO tasks (description, status, priority) 
  VALUES ($1, 'in-progress', $2)
`;

const deleteTask = `
  DELETE FROM tasks WHERE id = $1
`;

module.exports = {
  addTask,
  deleteTask,
  getDescription,
  getTasks,
  getTaskById,
  getTasksByStatus,
  getTasksByPriority
};