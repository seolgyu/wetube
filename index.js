const express = require('express'); //exprss를 호출하고
const app = express(); //add에 담고

const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening); //4000 port를  listen