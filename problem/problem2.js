const fs = require("fs").promises


async function main() {

    const data = await fs.readFile("./lipsum.txt", "utf8");
    await fs.writeFile("./uppercase.txt", data.toUpperCase())
    await fs.writeFile("filenames.txt", "uppercase.txt\n")

    const sentences = data.toLowerCase().split(".")
    const allFileNames = []

    sentences.forEach((sentence, i) => {
        fs.writeFile(`./sentence${i}.txt`, sentence)
        allFileNames.push(`sentence${i}.txt`)
    })

    await fs.writeFile("filenames.txt", allFileNames.join("\n"), { flag: "a" })


    const allSortedContent = []

    for (let i = 0; i < allFileNames.length; i++) {
        let curFileName = allFileNames[i];
        let curData = await fs.readFile(curFileName, "utf8");
        let curSortedData = curData.split(" ").sort().join(" ")
        allSortedContent.push(curSortedData)
        await fs.writeFile(curFileName, curSortedData)
    }

    await fs.writeFile("./sorted.txt", allSortedContent.join("\n"), { flag: "a" })
    await fs.writeFile("filenames.txt", "\n" + "sorted.txt", { flag: "a" })

    const allDirectories = await fs.readFile("filenames.txt", "utf-8")
    const allDirectoriesToDelete = allDirectories.split("\n")

    for (let i = 0; i < allDirectoriesToDelete.length; i++) {
        await fs.unlink(allDirectoriesToDelete[i])
    }

}

module.exports = main
