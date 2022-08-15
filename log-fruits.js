const fs = require('fs');

fs.readFile('fruits.txt', (error, data) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(data.toString());
  }
});