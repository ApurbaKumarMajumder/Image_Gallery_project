## What is Node JS?
Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine.
Node.js is a JavaScript running on the server.

## Histroy of Node JS
In 2009 an idea came in the mind of Ryan Dahl (Google Engineer) that why not run JavaScript outside browser, so he took V8 engine and embedded in a C++ program and called it Node.exe later on became Nodejs.

## JS-Server Fun Fact
In 1995 Netscape written a program called Netscape Enterprise Server which allowed Developer to run JavaScript at server side.

## When to use Node JS?
* I/O bound
* Data streaming Application -> Never ending scrolling (ex. Netflix, Facebook)
* Real time chat Application (ex. Whatsapp)

## Node JS Prerequisites
* Basics of JavaScript (Advanced JS will be bonus)
* ES5 & ES6 | ECMAScript 6
* Client Server Model(optional)

## Node JS REPL
The REPL feature of Node is very useful in experimenting with Node.js codes and to debug JavaScript codes.

* Read - Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
* Eval - Takes and evaluates the data structure.
* Print - Prints the results.
* Loop - Loops the above command until the user presses ctrl-c twice.

## Node.JS Core Modules
Consider modules to be the same as JavaScript libraries. A set of functions you want to include in your application.

Node.js has a set of built-in modules which you can use without any further installation.

                         Special Functions for File System

## File:
* CREATE -> writefilesync("address of the file", "content for the file")
* READ -> readfilesync("address of the file")
* APPEND -> appendfilesync("address of the file", "content")
* DELETE -> deletefilesync("address of the file")
* COPY FILE -> copyfilesync("source file", "destination file")

Note: for the copyfilesync new file is first created in the destination folder and then the content is copied from the source file.  (not same as normal copy)
* over write content -> writefilesync("address of the file", "content")

## Folder:
* CREATE -> mkdirsync() 
* DELETE -> rmdirsync()
* READ -> readdirsync()

## Extra Functions:
* existsync() -> whether a file or folder exists on the position or not.
* lstatsync() -> to check is the given path stores a file or a folder.

## Path Function
* process.cwd() -> dirname -> path of the folder of current js file
* filename -> path of the current working js file
* path.join 
* path.extname
* path.basename