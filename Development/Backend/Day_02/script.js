const fs = require('fs');
const http = require('http');

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
// fs.rename('copied_file.txt', 'renamed_copiedfile.txt', (err) => {
//     if (err) throw err;
//     console.log('File renamed successfully.');
// });

// Delete a file
// fs.unlink('renamed_copiedfile.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted successfully.');
// });

// HTTP Server
// const server = http.createServer((req, res) => {
//     // res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello from the HTTP server!\n');
// });

// server.listen(3000);