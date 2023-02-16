const express = require('express');
const cors = require('cors');
const taskRoutes = require('./src/routes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true })) // Access form data
app.use(express.json()); // Parse form data

// Homepage route
app.get('/', (req, res) => {
  res.send("GET request successful.");
});

// Tasks route
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});