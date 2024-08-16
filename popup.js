document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.local.get('userPassword', function (data) {
    if (data.userPassword) {
      document.getElementById('password').value = data.userPassword;
    }
  });

  document
    .getElementById('passwordForm')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      const password = document.getElementById('password').value;
      chrome.storage.local.set({ userPassword: password }, function () {
        alert('Password saved successfully!');
      });
    });
});
