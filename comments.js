// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const commentRouter = require('./routes/comments');

// Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up router
app.use('/comments', commentRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});