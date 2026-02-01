const fs = require('fs');

// writefile
// Append
// copyfile
// rename
// unlink

// Write a file
// fs.writeFile('example.txt', 'Hello, World!', (err) => {
//     if (err) throw err;
//     console.log('File created successfully.');
// });

// Append to a file
// fs.appendFile('example.txt', '\nAppended text.', (err) => {
//     if (err) throw err;
//     console.log('Text appended successfully.');
// });

// Copy a file
// fs.copyFile('example.txt', 'copied_file.txt', (err) => {
//     if (err) throw err;
//     console.log('File copied successfully.');
// });

// Rename a file
fs.rename('copied_file.txt', 'renamed_copiedfile.txt', (err) => {
    if (err) throw err;
    console.log('File renamed successfully.');
});