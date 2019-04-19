A website explaining everything below - https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf


The JavaScript engine is made up of a memory head and a call stack.

-----------------------------------

Memory Heap - this is information, like variables and objects, stored in memory.

Memory Leak - there is a limited amount of memory, and memory leaks happen when you have unused information sitting in the memory heap. This is part of why global variables are bad.

-----------------------------------

Call Stack - reads and executes scripts in the order in which they are found in the code. Each script executed is input into the stack, executed, then removed before the next script is put into the stack. If the script is a function that contains another function which returns something it will add the first, then the second, then the return, then remove the return, then remove the second, then remove the first.

Javascript is a single-threaded language that can be non-blocking.
Single-threaded means that there is only one call stack, so only one thing can be done at a time. Other languages have multiple call stacks and are called multi-threaded.

Running code on a single-thread is helpful because there is only one thing to worry about at a time; i.e. it is simpler. With multi-threaded environments things like deadlocks can occur.

The above is what synchronous programming means, which is that one thing is executed at a time, in order.

A stack overflow is like a memory leak for a call stack. The call stack is filled with code waiting to be executed. This can happen with recursion, which is a function that calls itself.

-----------------------------------

*****THIS IS HOW JS, WHICH IS SYNCHRONOUS, CAN BE USED ASYNCHRONOUSLY*****

JavaScript is single-thread BUT it can be non-blocking by using callback functions. This means that although JS is synchronous, it allows asynchronous programming. This can be done by writing code that tells the program to wait a chosen amount of time to run certain parts of the code.

In order for the JS engine to work we need more than just the memory heap and call stack. We need the JavaScript Run-Time Environment. The JS-RTE is part of the browser. On top of the engine there are Web APIs, callback queue, and event loop.

The browser provides the ability to write asynchronous code through the use of the setTimeout Web API. This is not a part of JS. When setTimeout is run, the Web API pops the code out of the program, so the JS call stack moves to the next script.

After the time on setTimeout is up, the Web API puts the code into the callback queue, letting the browser know that it's ready to run.

The event loop checks if the call stack is empty over and over all the time. If nothing is running in the call stack it will check the callback queue for anything that may need to be run and moves it to the call stack.

//CALL STACK

//WEB API

//CALLBACK QUEUE

//EVENT LOOP

Very helpful graph - https://cdn-images-1.medium.com/max/2250/1*4lHHyfEhVB0LnQ3HlhSs8g.png