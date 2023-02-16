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

module.exports = {
  getTasks,
  getTaskById,
  getTasksByStatus,
  getTasksByPriority
};