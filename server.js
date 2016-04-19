// Create an instance of an Express app 
var app = require('express')(); 
// Create an instance of a Mobile App with default settings 
var mobileApp = require('azure-mobile-apps')(); 
 // Create a table for 'TodoItem' with default settings 
mobileApp.tables.add('TodoItem'); 
 
app.use(mobileApp);
app.listen(process.env.PORT || 3000);

