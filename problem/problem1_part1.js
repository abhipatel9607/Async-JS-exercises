const fs = require('fs'); // Internal module

// Function for creating JSON files
function createJsonFile(fileName, callBack) {
    let data = { fileName: fileName };
    fs.writeFile(fileName, JSON.stringify(data), "utf8", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(fileName + " Created Successfully");
            callBack();
        }
    });
}

// Function for Deleting JSON files
function deleteJsonFile(fileName, callBack) {
    fs.unlink(fileName, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(fileName + " Deleted Successfully");
            callBack()
        }
    })
}

function main() {
    // Creating 3 JSON files inside files directory- using callback functions
    fs.mkdir("./files", function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("files directory created in root directory");
            createJsonFile("./files/file1.json", () => {
                createJsonFile("./files/file2.json", () => {
                    createJsonFile("./files/file3.json", () => {
                    });
                });

            });
        }
    })

    // used setTimeout() to see everything happening live
    setTimeout(() => {
        // Deleting JSON files and files directory- using callback function
        deleteJsonFile("./files/file1.json", () => {
            deleteJsonFile("./files/file2.json", () => {
                deleteJsonFile("./files/file3.json", () => {
                    fs.rmdir("./files", function (err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("files directory deleted from root directory");
                        }
                    });
                })
            })
        })

    }, 1000)
}

module.exports = main