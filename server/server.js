
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
// Define the port
const port = 8000;

// New endpoint at /hello that returns "Hello"
app.get('/hello', (req, res) => {
  res.send({msg:"Hello"});
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});