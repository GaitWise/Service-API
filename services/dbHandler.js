const sqlite3 = require('sqlite3').verbose();

const getTableData = (tableName) => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./data/db/sensor_data.db');
        
        db.all(`SELECT * FROM "${tableName}"`, (err, rows) => {
            if (err) {
                console.error('Database query error:', err);
                reject(err); 
                return;
            }
            resolve(rows); 
        });

        db.close(); 
    });
};

module.exports = { getTableData };
