//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'questions');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log({file});
    });

    let unique = [...new Set(files.map(f => {
      let newF = f.split(".");
      return newF[0] + "." + newF[1] + "." + newF[2]
    }))];
    //listing all files using forEach
    fs.writeFile('./questionContents.json', JSON.stringify(files) , err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    }) 
    fs.writeFile('./questionUnique.json', JSON.stringify(unique) , err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    }) 
});