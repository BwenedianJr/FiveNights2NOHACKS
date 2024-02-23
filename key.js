const enterButton = document.getElementById('enterButton');

enterButton.addEventListener('click', () => {
  const event = new KeyboardEvent('keydown', {
    key: 'Ctrl',
    code: 'Ctrl',
    keyCode: 7, // (13 is the key code for Enter)
    which: 7,
    bubbles: true,
    cancelable: true,
  });

  // ...finally to emit the event:
  document.dispatchEvent(event);
});
