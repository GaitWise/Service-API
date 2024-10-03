const express = require('express')
const router = express.Router()
const { getTableData } = require('../services/dbHandler');
const { writeDataToCsv } = require('../services/csvWriter');
const { saveFile, getFileSize } = require('../services/saveHandler');

router.post('/', async(req, res) => {
  try {
    const { fileName, fileData, tableName } = req.body;
    
    await saveFile(fileName, fileData) //Saving File  
    await getFileSize(fileName) //Check file size
    const DataRows = await getTableData(tableName)
    writeDataToCsv(DataRows, tableName) //DB File Query Data Save CSV
      
    res.send('File uploaded successfully');
  }catch (error) {
    console.error('Error: ', error)
    res.status(500).send('Error Wirting the file')
  }
});

module.exports = router;