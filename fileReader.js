const fs =require('fs');
//console.log(typeof(fs.readFileSync('Fruits.txt', 'utf8')));

// const fileContentsToArray=(filePath)=>{
//     const text = fs.readFileSync(filePath, 'utf-8');
//     const fruits = text.split('\r\n')
//     return fruits;
// }
const fileContentsToArray = (filePath) => {
    fs.readFile(filePath ,'utf-8', (err,data) => {
        const fruits = data.split('\r\n');
        console.log(fruits);
    })
}
const fileContentsToArrayPromises =(filePath) => {
    return new Promise((fulfill , reject ) => {
        fs.readFile(filePath ,'utf-8', (err,data) => {
            if(err)
            {
                return reject("ERROR!");
            }
            const fruits = data.split('\r\n');
            return fulfill(fruits);
        })
    })
}
fileContentsToArray('./Fruits.txt');
module.exports = { fileContentsToArray, fileContentsToArrayPromises };