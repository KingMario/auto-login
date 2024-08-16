# Auto Login Chrome Extension

## Password Autofill Feature

This extension automatically fills in the password field on the login page and submits the form.

### How It Works

- It listens for a message to retrieve the password.
- It uses a `MutationObserver` to detect when the password input field is available.
- It fills the password input and triggers the submit button click.
- It also dispatches an `input` event to trigger v-model data binding if `v-model` of Vue.js is used.

It's especially useful if you want to automatically log in when a session times out, and you are redirected to the login
page.

## Installation

1. Download the extension files.
2. Tailor them to your needs.
3. Open Chrome and go to `chrome://extensions/`.
4. Enable Developer mode.
5. Click on "Load unpacked" and select the extension files.

## Features

- Automatically log you in with a stored password.
- Tailorable to your needs.
- Dispatch `input` event to trigger v-model data binding if the site is using Vue.js `v-model`.

## Tailoring

Open `manifest.json` and update `matches` for the `content.js` file item of `content_scripts` to restrict which websites
can be accessed.

Open `content.js` and tailor it to your needs:

- update the element selectors for password input field and submit button
- update the interval duration for password element detection
- remove the `input` event dispatch if the site is not using Vue.js
- add your error handling if needed

If you want to store your password in your Google account, you may replace `chrome.storage.local` with
`chrome.storage.sync` in both `background.js` and `popup.js`.

### Usage

1. Ensure the extension is installed and active.
2. Click on the extension icon in the Chrome toolbar.
3. Enter your password and click "Save".
4. Navigate to the login page of a site specified in `manifest.json`.
5. The password will be automatically filled and submitted.

<span style="color: red;">**Caution**: The password is saved in Chrome's local storage, and the password you save are
easily accessible to experienced developers. If you are using this extension within your organization, please make sure
that using this extension meets your organization's information security requirements. You can prevent password theft by
locking your screen every time you leave your computer. Use it
at your own risk.</span>

## TODO List

[] password storage for different sites
[] configurable form structures for different sites
[] error handling
[] hold on the form without submitting

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.LIC) file for details.
