const fs = require('fs').promises; // Internal module with promises

// Functions for creating JSON files
async function createJsonFile(fileName) {
    try {
        const data = { fileName: fileName };
        await fs.writeFile(fileName, JSON.stringify(data), 'utf8');
        console.log(fileName + ' Created Successfully');
    } catch (err) {
        console.log(err);
    }
}

async function createFiles(file1, file2, file3) {
    try {
        await createJsonFile(file1);
        await createJsonFile(file2);
        await createJsonFile(file3);
    } catch (err) {
        console.log(err);
    }
}

// Functions for creating JSON files
async function deleteJsonFile(fileName) {
    try {
        await fs.unlink(fileName);
        console.log(fileName + ' Deleted Successfully');
    } catch (err) {
        console.log(err);
    }
}

async function deleteFiles(file1, file2, file3) {
    try {
        await deleteJsonFile(file1);
        await deleteJsonFile(file2);
        await deleteJsonFile(file3);
    } catch (err) {
        console.log(err);
    }
}

// Function Execution- Used setTimeout() to see everything happening live
async function main() {
    try {
        await fs.mkdir('./files');
        console.log('files directory created in the root directory');
        await createFiles('./files/file1.json', './files/file2.json', './files/file3.json');
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await deleteFiles('./files/file1.json', './files/file2.json', './files/file3.json');
        await fs.rm("./files", { recursive: true })
        console.log('files directory deleted from the root directory');
    } catch (err) {
        console.error(err);
    }
}


module.exports = main