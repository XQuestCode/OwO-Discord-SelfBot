# Discord Selfbot Command Documentation

## Overview
This documentation provides information on the usage and functionality of the Discord selfbot commands implemented in the provided code.

### Prerequisites
1. Node.js installed
2. Discord.js selfbot v13 library installed
3. dotenv library installed

### Installation
1. Clone the repository or download the code.
2. Install dependencies by running the following command:
    ```bash
    npm install discord.js-selfbot-v13 dotenv
    ```
3. Create a `.env` file and add your Discord token as `TOKEN`.

### Usage
1. Ensure the prerequisites are met and the installation is complete.
2. Run the selfbot using the following command:
    ```bash
    node your_script_name.js
    ```

## Commands

### 1. `Owobanbypass`
- **Description:** Enables the Owoban bypass feature.
- **Usage:** Send a message with the content 'Owobanbypass' in any channel where the selfbot is present.

### 2. `Autoowostop`
- **Description:** Disables the Owoban bypass feature.
- **Usage:** Send a message with the content 'Autoowostop' in any channel where the selfbot is present.

## Code Explanation

### Initialization
```javascript
const { Client } = require('discord.js-selfbot-v13');
require('dotenv').config();
const client = new Client();
```
- Imports the necessary libraries and initializes the Discord.js selfbot client.

### Sleep Function
```javascript
async function sleep(second) {
    return new Promise(resolve => setTimeout(resolve, second * 1000));
}
```
- Asynchronous function to introduce a delay in seconds.

### Owobanbypass Command
```javascript
client.on('messageCreate', async (message) => {
    if (message.author.id !== client.user.id) return;
    if (message.content.toLowerCase() === 'Owobanbypass') {
        // ... implementation details ...
    }
    if (message.content.toLowerCase() === 'autoowostop') {
        // ... implementation details ...
    }
});
```
- Listens for messages and triggers the Owobanbypass or Autoowostop commands based on content.

### Ready Event
```javascript
client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
});
```
- Logs a message when the selfbot is successfully connected and ready.

### Login
```javascript
client.login(process.env.TOKEN);
```
- Logs in the selfbot using the provided Discord token.

## Note
- Use selfbots responsibly and in accordance with Discord's Terms of Service.
- This code snippet includes a loop that sends messages periodically. Ensure compliance with Discord's rate limits to avoid any issues.