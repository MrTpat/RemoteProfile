const express = require('express')
const app = express()
const port = 3000

app.get('/userInfo', (req, res) => res.json({
    "name": "Tilak Patel",
    "age": 19
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))