<!-- @format -->

# Project Tasks

This project consists of two problems, each with multiple parts. You'll be working with Node.js and the `fs` module to perform various file operations. The tasks include creating directories, reading, writing, and deleting files. You will solve these problems using different techniques, including callbacks, promises, and async/await.

## Problem 1: Creating and Deleting Files

### Part 1: Callbacks with Asynchronous Functions

- Create a directory programmatically that contains three random JSON files.
- Delete the three files concurrently using callbacks and the `fs` module's asynchronous functions.

### Part 2: Callbacks with Promises

- Implement the same directory creation and deletion as in Part 1, but use callbacks and promises. Avoid using async/await.

### Part 3: Async/Await

- Repeat the directory creation and deletion process using async/await.

## Problem 2: File Manipulation with Async/Await

Using callbacks and the `fs` module's asynchronous functions, perform the following tasks:

1. Read the content of the file 'lipsum.txt'.
2. Convert the content to uppercase and write it to a new file named 'uppercase.txt'. Store the name of the new file in 'filenames.txt'.
3. Read 'uppercase.txt', convert its content to lowercase, split it into sentences, and write each sentence to separate new files. Store the names of the new files in 'filenames.txt'.
4. Read the new files, sort their content, and write the sorted content to a new file called 'sorted.txt'. Store the name of the new file in 'filenames.txt'.
5. Read the contents of 'filenames.txt' and concurrently delete all the new files mentioned in that list.

Implement these tasks using async/await. Create separate functions for each step and chain them together in a main function.

## Getting Started

To run the project and execute the tasks, you need Node.js installed on your system.

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/abhipatel9607/Async-JS-exercises.git
   ```
2. Navigate to the project directory using the command line.
   ```bash
   cd Async-JS-exercises
   ```
3. Run the scripts associated with each problem to test and complete the tasks.

## Running the Code

Make sure you have Node.js installed. Use the following commands to run the code:

To run Problem 1, Part 3 with async/await

```bash
node problem1_part3.js
```

To run Problem 2 with async/await

```bash
node problem2.js
```
