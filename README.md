# Email Draft Chrome Extension

# Name : "Email Assistant"

This is a Chrome extension that generates email drafts based on a short description. It uses the OpenAI API to provide intelligent email generation.

## Features

- **Compose Email Description**: Enter a short description of the email you want to write in the input box.
- **Get Email Draft**: Click the "Get" button to generate an email draft based on the description. The extension will make an API call to the OpenAI API endpoint for email draft generation.
- **Clear Input**: Click the "Clear" button to clear the input text box and the generated email draft.
- **Copy Email Draft**: Click the "Copy Draft" button to copy the generated email draft to the clipboard.
- **Save Email Draft**: Click the "Save Draft" button to save the generated email draft as a text file.
- **Confirmation on Saving/Copying**: You will see a confirmation message on the buttons when the draft is copied or saved.
- **Loading Button**: The "Get" button displays a loading state while the extension is fetching the email draft from the API.
- **Error Handling**: If there is an error fetching the email draft from the API, an error message will be displayed.

## Main Files

The main files of this Chrome extension are:

- `popup.js`: This file contains the JavaScript code that handles the functionality of the extension's popup window. It includes event handlers for user interactions, API calls to fetch the email draft, and state management for input, output, loading state, and error handling.

- `popup.css`: This file contains the CSS styles that define the visual appearance of the popup window. It includes styling for the input box, buttons, output box, loading state, and other elements in the extension's user interface.

## Installation

1. Download the ZIP file (build.zip) of the Chrome extension.
2. Unzip the file to a location on your computer.
3. Open Google Chrome and go to the Extensions page (`chrome://extensions`).
4. Enable the "Developer mode" toggle on the top right corner of the page.
5. Click on the "Load unpacked" button.
6. Select the unzipped folder (build) containing the extension files and click "Open".
7. The extension will be loaded and ready to use.
8. Find the extension in the list of extensions in the chrome toolbar and locate the pin icon (a small thumbtack) next to it.
9. Click on the pin icon to pin the extension to the Chrome toolbar. The extension's icon (green colored email icon) will now appear in the toolbar for easy access.
10. Now, when you click on the extension's icon in the Chrome toolbar, the popup will be displayed. 

## If you want to run the extension by running code

1. Download the zip file of react project (email-extension.zip) and unzip it. 
2. Make sure you have Node.js installed. 
2. Run "npm install" 
3. Run "npm run build"
4. Use the build folder similar to what was mentioned earlier in the installation steps. 

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup window.
2. Enter a short description of the email you want to write in the input box.
3. Click the "Get" button to generate the email draft.
4. The generated email draft will be displayed in the output box.
5. Use the "Copy Draft" button to copy the email draft to the clipboard.
6. Use the "Save Draft" button to save the email draft as a text file.
7. To clear the input and output, click the "Clear" button.


