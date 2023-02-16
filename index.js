const express = require('express');
const taskRoutes = require('./src/routes');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("GET request successful.");
});

app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});