const fs = require('fs').promises;

// Function to read a file and convert its content to uppercase
async function convertToUppercase() {
    const data = await fs.readFile('./lipsum.txt', 'utf8');
    await fs.writeFile('./uppercase.txt', data.toUpperCase());
    await fs.writeFile("./filenames.txt", "uppercase.txt\n");
    return 'uppercase.txt';
}

// Function to split content into sentences, create separate files, and store filenames
async function createSentencesFiles(uppercaseFileName) {
    const data = await fs.readFile(uppercaseFileName, 'utf8');
    const sentences = data.toLowerCase().split('.');
    const allFileNames = [];

    for (let i = 0; i < sentences.length; i++) {
        const sentenceFileName = `sentence${i}.txt`;
        await fs.writeFile(`./${sentenceFileName}`, sentences[i]);
        allFileNames.push(sentenceFileName);
    }
    await fs.writeFile("./filenames.txt", allFileNames.join("\n"), { flag: "a" });
    return allFileNames;
}

// Function to sort and rewrite the content of separate files
async function sortAndRewriteFiles(fileNames) {
    const allSortedContent = [];

    for (let i = 0; i < fileNames.length; i++) {
        const curFileName = fileNames[i];
        const curData = await fs.readFile(curFileName, 'utf8');
        const curSortedData = curData.split(' ').sort().join(' ');
        await fs.writeFile(curFileName, curSortedData);
        allSortedContent.push(curSortedData);
    }

    return allSortedContent;
}

// Function to delete all files mentioned in filenames.txt
async function deleteFilesFromList() {
    const allDirectories = await fs.readFile('filenames.txt', 'utf8');
    const allDirectoriesToDelete = allDirectories.split('\n');

    for (let i = 0; i < allDirectoriesToDelete.length; i++) {
        await fs.unlink(allDirectoriesToDelete[i]);
    }
}

// Main function to execute all steps in order
async function main() {
    try {
        const uppercaseFileName = await convertToUppercase();
        const sentenceFileNames = await createSentencesFiles(uppercaseFileName);
        const sortedContents = await sortAndRewriteFiles(sentenceFileNames);
        await fs.writeFile('./sorted.txt', sortedContents.join('\n'), { flag: 'a' });
        await fs.writeFile("./filenames.txt", "\n" + "sorted.txt", { flag: "a" });
        await deleteFilesFromList();
        console.log('All tasks completed successfully.');
    } catch (err) {
        console.error(err);
    }
}

// main();
module.exports = main