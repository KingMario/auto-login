chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'getPassword') {
    chrome.storage.local.get('userPassword', (data) => {
      sendResponse(data.userPassword);
    });
  }
  return true;
});
