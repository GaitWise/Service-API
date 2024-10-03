const fs = require('fs').promises

// Saving file
const saveFile = async (fileName, fileData) => {
    const fileBuffer = Buffer.from(fileData, 'base64');
    await fs.writeFile(`./data/db/${fileName}`, fileBuffer);
    console.log('File saved successfully.');
  };

// Check file size 
const getFileSize = async (fileName) => {
     const fileState = await fs.stat(`./data/db/${fileName}`)
     console.log(`Saved file size: ${fileState.size} bytes`);
}

module.exports = {
    saveFile,
    getFileSize
}