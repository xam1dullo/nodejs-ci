const express = require('express');

const app = express();

app.use((req, res) => {
  res.send('ASSALOMU ALAYKUM!.');
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
