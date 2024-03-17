const fs= require("fs");

const readFile =(filePath) => fs.promises.readFile(filePath);
const readFileCallbackSucess= (fileData)=>
console.log("file Data:"+ fileData.toString());
const readFileCallbackError =(error) => console.log("error:"+error);

// readFile("f1.txt").then(readFileCallbackSucess).catch(readFileCallbackError);
// readFile("f2.txt").then(readFileCallbackSucess).catch(readFileCallbackError);
// readFile("f3.txt").then(readFileCallbackSucess).catch(readFileCallbackError);

readFile("f1.txt")
   .then((data)=>{
    readFileCallbackSucess(data);
    return readFile("f2.txt");
   })
   .then((data)=>{
    readFileCallbackSucess(data);
    return readFile("f3.txt");
   })
   .then((data)=> readFileCallbackSucess(data))
   .then((error)=> readFileCallbackError(error));