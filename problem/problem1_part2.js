const fs = require('fs'); // Internal module

// Create own Promise for create JSON files
const writeFilePromise = (fileName) =>
    new Promise((resolve, reject) => {
        let data = { fileName: fileName }
        fs.writeFile(fileName, JSON.stringify(data), "utf8", (error, result) => {
            if (error) {
                reject(error);
            } else {
                console.log(fileName + " Created Successfully");
                resolve();
            }
        });
    });

// Create own Promise for delete JSON files
const deleteFilePromise = (fileName) => new Promise((resolve, reject) => {
    fs.unlink(fileName, (err) => {
        if (err) {
            reject(err)
        } else {
            console.log(fileName + " Deleted Successfully");
            resolve()
        }
    })
})

function main() {
    // Create 3 json files using Promise
    fs.mkdir("./files", function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("files directory created in root directory");
            writeFilePromise("./files/file1.json")
                .then(() => writeFilePromise("./files/file2.json"))
                .then(() => writeFilePromise("./files/file3.json"))
                .catch((error) => console.error("Failed to Create JSON file"));
        }
    })

    // Delete 3 json files using Promise - used setTimeout() to see everything happening live
    setTimeout(() => {
        deleteFilePromise("./files/file1.json")
            .then(() => deleteFilePromise("./files/file2.json"))
            .then(() => deleteFilePromise("./files/file3.json"))
            .catch((error) => console.error("Failed to Create JSON file"))
            .then(() => {
                return fs.rmdir("./files", (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("files directory deleted from root directory");
                    }
                });
            })
    }, 1000)
}

module.exports = main