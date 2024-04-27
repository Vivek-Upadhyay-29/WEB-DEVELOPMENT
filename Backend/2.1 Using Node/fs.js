const fs = require('fs');

// fs.readFile('info.txt','utf8' ,  (err, data)=>{
//     console.log(err, data);
// })

fs.writeFile('info-2.txt',"I am great", ()=>{
    console.log('something is written   ')
})
fs.readFile('info-2.txt', 'utf8',(err,data)=>{
    console.log(err,data)
})
console.log('finished reading file')    