const express = require("express");
const cors = require("cors");

const app = express();


var corsOptions = {
    origin: ["http://localhost:4200"]
}

app.use(cors(corsOptions));

app.listen(8000, () => {
    console.log("server started and listening...");
});

app.get("/", function(request, response){    
    response.send("Hello, node.js!");   
});

require("./articles")(app);