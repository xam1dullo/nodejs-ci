const express = require('express');
const PORT =process.env.PORT || 4000


const app = express();

app.use((req, res) => {
  res.send('ASSALOMU ALAYKUM!.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
