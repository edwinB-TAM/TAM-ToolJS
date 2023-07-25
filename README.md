# Adapter Compatibility Check

This repository contains a NodeJS script that is used to check the compatibility of a mobile application's adapters with a specific version of the IronSource SDK.

## Requirements
- NodeJS
- Install npm:

  - Open the Terminal application on your Mac.
  
  - Check if Node.js is already installed by running:
`node -v`
`npm -v`
  - If Node.js is not installed, download the latest version from the official website: Node.js (https://nodejs.org/).
Once the download is complete, run the installer and follow the on-screen instructions.
After installation, open a new Terminal window and check if npm is installed by running: `npm -v`
You should see the version number of npm, indicating a successful installation.
- adb (for Android)
  - Open the Terminal application on your Mac.
  - If you have Homebrew installed, simply run:
     - `brew install android-platform-tools`
  - If you don't have Homebrew, you can install it from Homebrew website (https://brew.sh/).
  - Verify the installation by running:
    - `adb version`.
- Apple Configurator cfgutil ([Download Here](https://apps.apple.com/us/app/apple-configurator/id1037126344?mt=12))
- ![Screenshot 2023-07-25 at 3 08 52 PM](https://github.com/edwinB-TAM/TAM-ToolJS/assets/57118256/e927cc87-9918-4beb-9262-80c54822da44)
- ![Screenshot 2023-07-25 at 3 09 09 PM](https://github.com/edwinB-TAM/TAM-ToolJS/assets/57118256/9eedfb63-f553-404e-9de4-21a3df318095)



## Installation
1. Clone this repository or download the zip file(reccomended).
2. Navigate to the root directory of the repository in your command line interface.
3. Run npm install to install the necessary dependencies.


## Usage
Make sure your mobile device is connected to your computer via USB and that USB debugging is enabled with zero logs.
Open a command line interface and navigate to the root directory of the repository.
- Run the command:
  - `node adapterCheck.js.`
 
Follow the instructions on the command line to check the compatibility of the adapters in your mobile application with the IronSource SDK.



## Notes
- This script is currently only compatible with iOS, Android coming SOON!
- The script uses adb for Android devices and cfgutil for iOS devices to retrieve logs from the mobile device.
- The script expects the user to have adb or cfgutil installed on their computer and added to their PATH.
- The script requires user to launch the app before running the script
- The script will create a log file named test-{timestamp}.log in the root directory, which contains the logs retrieved from the mobile device.
