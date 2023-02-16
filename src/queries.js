const getTasks = `
  SELECT * FROM tasks
`;

const getTaskById = `
  SELECT * FROM tasks WHERE id = $1
`;

const getStatus = `
SELECT * FROM tasks WHERE completed = $1
`;

module.exports = {
  getTasks,
  getTaskById,
  getStatus
};