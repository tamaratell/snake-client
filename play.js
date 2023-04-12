//Web view: http://165.227.47.243:8081/
//  ^--- go here on your browser

// IP for client : 165.227.47.243
//  ^--- enter this in your .js code to connect to server
// Port for client : 50541

//IP: 165.227.47.243 | PORT: 50541

//const net = require("net");

const { connect } = require("./client.js");

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (handleUserInput) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
  return stdin;
};



connect();