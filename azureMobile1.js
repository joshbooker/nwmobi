var winston = require('winston');
 
module.exports = {
    logging: {
        transports: [
            new winston.transports.Console({ colorize: true, timestamp: true })
        ],
       level: 'verbose'
    }, 
    // See http://azure.github.io/azure-mobile-apps-node/global.html#dataConfiguration
    // Normally this is not required for Azure hosted environments - we pick it up
    // from the ConnectionString for SQL Azure in the App Settings of the Azure Portal
    data: {
      provider: 'mssql',
      server: 'nwmobi.database.windows.net',
      database: 'nmobi_db',
      user: 'jbooker@nwmobi',
      password: 'Jb122476'
    },
     data2: {
      provider: 'mssql',
      server: '(local)\SQLEXPRESS',
      database: 'nmobi_db',
      user: 'azuremobile',
      password: 'Jb122476'
    }
};
