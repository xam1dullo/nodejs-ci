const express = require('express');
const PORT =process.env.PORT || 4040


const app = express();

app.use("/greet", (req, res) => {
  res.send('SALOMLAR!');
});

app.use((req, res) => {
  res.send('ASSALOMU ALAYKUM!.');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
