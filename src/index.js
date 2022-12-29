// index.js
const { database } = require('./infrastructure/database/database');

// database.connect();

const { app } = require('./server');

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});