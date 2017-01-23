var express = require("express");
 var myParser = require("body-parser");
 var app = express();

   app.use(myParser.urlencoded({extended : true}));
   app.get("/yourpath", function(request, response) {
   response.send('request received');   
// console.log(request.body); 
   });
 
 app.listen(8080);
