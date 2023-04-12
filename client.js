const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541// PORT number here,
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

module.exports = {
  connect,
};