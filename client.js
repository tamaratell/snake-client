const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });
  conn.setEncoding("utf-8");
  conn.on("connect", () => {
    console.log("Succesfully connected!");
    conn.write("Name: TTT");
  });
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  console.log("Connecting ...");
  return conn;
};

module.exports = connect;

//Move Commands
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)