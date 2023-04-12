# Integration Helper

This repository contains a NodeJS script that is used to check the compatibility of a mobile application's adapters with a specific version of the IronSource SDK.

## Requirements
- NodeJS
- npm
- adb (for Android) or cfgutil (for iOS)
## Installation
1. Clone this repository or download the zip file.
2. Navigate to the root directory of the repository in your command line interface.
3. Run npm install to install the necessary dependencies.
4. Run npm link to create a global command for the script.

## Usage
Make sure your mobile device is connected to your computer via USB and that USB debugging is enabled.
Open a command line interface and navigate to the root directory of the repository.
Run the command node tam-tool.js.
Follow the instructions on the command line to check the compatibility of the adapters in your mobile application with the IronSource SDK.

## Notes
- This script is currently only compatible with iOS and Android devices.
- The script uses adb for Android devices and cfgutil for iOS devices to retrieve logs from the mobile device.
- The script expects the user to have adb or cfgutil installed on their computer and added to their PATH.
- The script requires user to launch the app before running the script
- The script will create a log file named test-{timestamp}.log in the root directory, which contains the logs retrieved from the mobile device.
