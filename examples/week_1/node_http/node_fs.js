const fs = require('fs')

// reading from a file

fs.readFile('example.txt', 'utf-8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})

// Writing to a file

const content = "Hello from node";

fs.writeFile('example.txt', content, 'utf-8', (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("File has been written");
})

// appending to a file

const content2 = "\nthis is added on";

fs.appendFile('example.txt', content2, 'utf-8', (err) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log("Data has been appended");
})

// check if a file exists

if(fs.existsSync('exampleadf.txt')){
    console.log("It exists");
}else{
    console.log("it does not exist")
}


// creating and removing directories

// fs.mkdir('myDirectory', (err) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('Directory has been created');
// })

fs.rmdir('myDirectory', (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("Directory removed");
})