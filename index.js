const express = require('express');
const cors = require('cors');
const taskRoutes = require('./src/routes');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Parse form data

app.get('/', (req, res) => {
  res.send("GET request successful.");
});

app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});