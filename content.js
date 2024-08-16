chrome.runtime.sendMessage('getPassword', (password) => {
  if (password) {
    const checkAndLogin = () =>
      setTimeout(() => {
        const passwordInput = document.getElementById('password');
        if (passwordInput) {
          passwordInput.value = password;
          passwordInput.dispatchEvent(new Event('input'));
          document.querySelector('button[type="submit"]')?.click();
        }
      }, Math.random() * (30000 - 10000) + 10000);

    new MutationObserver(checkAndLogin).observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
});
