const ws = new WebSocket('ws://' + window.location.host + '/terminal');
const terminal = document.getElementById('terminal');
const input = document.getElementById('input');

ws.onmessage = function(event) {
  terminal.innerHTML += event.data;
  terminal.scrollTop = terminal.scrollHeight;
};

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    ws.send(input.value + '\n');
    input.value = '';
  }
});