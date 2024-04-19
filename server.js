const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
