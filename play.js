//Web view: http://165.227.47.243:8081/
//  ^--- go here on your browser

// IP for client : 165.227.47.243
//  ^--- enter this in your .js code to connect to server
// Port for client : 50541

//IP: 165.227.47.243 | PORT: 50541


const connect = require("./client");

const setupInput = require("./input");

setupInput(connect());