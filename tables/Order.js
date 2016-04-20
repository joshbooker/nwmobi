
var azureMobileApps = require('azure-mobile-apps');

// Create a new table definition
var table = azureMobileApps.table();

table.dynamicSchema = false;
/*
table.columns = {
    userid: 'string',
    text: 'string',
    complete: 'boolean',
    due: 'datetime',
    alert: 'number'
};



table.schema = 'dbo';
*/
table.name = 'Orders';
table.pkName = 'OrderId';
table.databaseTableName = 'Orders';

/*table.access = 'disabled';

table.maxTop = 1000;
table.softDelete = false;
table.access = 'authenticated';
*/
 //middleware example
table.read(function (context) {
    // Pre-operation tasks
    var id = context.query.id;
    context.query = azureMobileApps.query.create(table.name);
    context.query.where({ OrderId: id });
    return context.execute();//.then((response) => {
        // Post-operation tasks
    //});
});


/*
// Configure specific code when the client does a request
// READ - only return records belonging to the authenticated user
table.read(function (context) {
   //context.query.where({ userId: context.user.id });
   return context.execute();
 });
*/
// CREATE - add or overwrite the userId based on the authenticated user
 table.insert(function (context) {
   //context.item.userId = context.user.id;
   return context.execute();
 });

 //UPDATE - for this scenario, we don't need to do anything - this is
// the default version
table.update(function (context) {
    //var id = context.query.id;
    //context.query = azureMobileApps.query.create(table.name);
   // context.query.where({ OrderId: id });
    return context.execute();
});

// DELETE - for this scenario, we don't need to do anything - this is
// the default version
table.delete(function (context) {
  return context.execute();
});

// Finally, export the table to the Azure Mobile Apps SDK - it can be
// read using the azureMobileApps.tables.import(path) method

module.exports = table;