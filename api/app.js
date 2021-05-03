var express = require('express');
var app = express();
var cors = require('cors')
const port = 8000;

app.use(cors())

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(
    express.urlencoded({
        extended: true
    })
)

// Parse JSON bodies (as sent by API clients)
app.use(express.json())

require('./routes/RouteManager')(app);


app.listen(port, () => {
    console.log(`App running on port ${port}`)
});