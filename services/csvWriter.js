const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const writeDataToCsv = async (rows, tableName) => {
    const csvWriter = createCsvWriter({
        path: `./data/csv/${tableName}.csv`,
        header: [
            {id: 'id', title: 'ID'},
            {id: 'event_Time', title: 'Event Time'},
            {id: 'accX', title: 'AccX'},
            {id: 'accY', title: 'AccY'},
            {id: 'accZ', title: 'AccZ'},
            {id: 'gyroX', title: 'GyroX'},
            {id: 'gyroY', title: 'GyroY'},
            {id: 'gyroZ', title: 'GyroZ'},
            {id: 'rotX', title: 'RotX'},
            {id: 'rotY', title: 'RotY'},
            {id: 'rotZ', title: 'RotZ'} 
        ]
      })

    await csvWriter.writeRecords(rows);
}

module.exports = { writeDataToCsv }