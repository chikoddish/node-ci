const express = require('express');

const app = express();

const PORT = 2500

app.send({"message": "message"})

app.listen(PORT, ()=>{
  console.log('listening on port')
});