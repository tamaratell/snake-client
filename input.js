//stores the active TCP connection object
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === '\u0077') { //w
      conn.write("Move: up");
    }
    if (key === '\u0073') { //s
      conn.write("Move: down");
    }
    if (key === '\u0061') { //a
      conn.write("Move: left");
    }
    if (key === '\u0064') { //d
      conn.write("Move: right");
    }
  });
  return stdin;
};

module.exports = setupInput;