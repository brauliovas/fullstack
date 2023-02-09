const WebSocket = require('ws');
const spawn = require('child_process').spawn;

const wss = new WebSocket.Server({ port: 5500 });

wss.on('connection', (ws) => {
  console.log('Client connected') ;
  const bash = spawn('/bin/bash', ['-i']);
  bash.stdout.on('data', (data) => {
    ws.send(data.toString(), (error) => {
      if (error) {
        console.error(`Error sending data: ${error}`);
      }
    });
  });
  bash.stderr.on('data', (data) => {
    ws.send(data.toString(), (error) => {
      if (error) {
        console.error(`Error sending data: ${error}`);
      }
    });
  });
  ws.on('message', (message) => {
    bash.stdin.write(`${message}\n`);
  });
  ws.on('close', () => {
    console.log('Client disconnected');
    bash.kill();
  });
});

