const fs = require("fs");
const path = require("path");

//update file
fs.appendFile("Sample.txt", "Hello New World!", (err) => {
    console.log("Content Updated");
});

//read file
fs.readFile("Sample.txt", "utf-8", (err, data) => {
    console.log(data);
});

//write file
fs.writeFile(path.join(__dirname, "posts", "blogPost.txt"), "Hello", (err) => {
    if (err) {
        throw err;
    } else {
        console.log("File created");
    }
});