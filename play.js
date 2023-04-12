//Web view: http://165.227.47.243:8081/
//  ^--- go here on your browser

// IP for client : 165.227.47.243
//  ^--- enter this in your .js code to connect to server
// Port for client : 50541

//IP: 165.227.47.243 | PORT: 50541

const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541// PORT number here,
  });
  conn.setEncoding("utf-8");
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();