//import path
const path = require('path');
//import express
const express = require('express');
const bodyParser = require('body-parser');

//=======================================================================================================
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//=======================================================================================================
//defined routes
const naviRoutes = require('./routes/navigation');
const ErrorRoutes = require('./routes/error')

//=======================================================================================================
//Routes folder
app.use(naviRoutes);


//this part is for anypages that not matched previous routes then will routes to 404 page
app.use(ErrorRoutes.get404);

app.listen(process.env.PORT || 3000,() => {
    console.log(`Server is up and running on port ${process.env.PORT || 3000}!`);
});
