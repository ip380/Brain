https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/#std-label-install-community-ubuntu-pkg
-Folow steps to install mongoDB comunity edition.


# MongoDB Setup and Command Selection Script

This guide will help you set up MongoDB aliases and a script for easy MongoDB command execution on your system.

## Step 1: Create Aliases for MongoDB Commands

To make it easier to manage MongoDB services, you can create aliases for commonly used MongoDB commands. Follow these steps:

1. Open your terminal and edit your shell configuration file (`.bashrc` for Bash or `.zshrc` for Zsh):

    ```bash
    nano ~/.bashrc  # For Bash users
    # or
    nano ~/.zshrc  # For Zsh users
    ```

2. Add the following aliases to the end of the file:

    ```bash
    alias mongodb-start="sudo systemctl start mongod"
    alias mongodb-stop="sudo systemctl stop mongod"
    alias mongodb-status="sudo systemctl status mongod"
    alias mongodb-enable="sudo systemctl enable mongod"
    alias mongodb-disable="sudo systemctl disable mongod"
    alias mongodb-restart="sudo systemctl restart mongod"
    alias mongodb-logs="sudo journalctl -u mongod --since '1 hour ago' | tail -n 20"
    alias mongodb-shell="mongo"
    ```

3. Save and close the file (`Ctrl + X`, then `Y` to confirm, and `Enter` to save).

4. Apply the changes by running:

    ```bash
    source ~/.bashrc  # For Bash users
    # or
    source ~/.zshrc  # For Zsh users
    ```

Now, you can use the following commands to manage MongoDB:

- `mongodb-start` to start MongoDB.
- `mongodb-stop` to stop MongoDB.
- `mongodb-status` to check MongoDB service status.
- `mongodb-enable` to enable MongoDB to start at boot.
- `mongodb-disable` to disable MongoDB from starting at boot.
- `mongodb-restart` to restart MongoDB.
- `mongodb-logs` to show the last 20 lines of MongoDB logs.
- `mongodb-shell` to start the MongoDB shell.

## Step 2: Create a MongoDB Command Selection Script

For even more convenience, you can create a script that lets you select MongoDB commands interactively. Follow these steps to create the script:

1. Open a terminal and create the script file:

    ```bash
    sudo touch /usr/local/bin/mongo-help
    ```

2. Open the script for editing:

    ```bash
    sudo nano /usr/local/bin/mongo-help
    ```

3. Add the following content to the script:

    ```bash
    #!/bin/bash

    # Function to execute MongoDB service command
    execute_command() {
        case $1 in
            1) sudo systemctl start mongod && echo "MongoDB started";;
            2) sudo systemctl stop mongod && echo "MongoDB stopped";;
            3) sudo systemctl status mongod;;
            4) sudo systemctl enable mongod && echo "MongoDB enabled to start at boot";;
            5) sudo systemctl disable mongod && echo "MongoDB disabled from starting at boot";;
            6) sudo systemctl restart mongod && echo "MongoDB restarted";;
            7) sudo journalctl -u mongod --since "1 hour ago" | tail -n 20;;  # Show the last 20 lines of MongoDB logs
            8) mongo;;  # Starts MongoDB shell
            9) echo "MongoDB Help Commands:" ;;
            *) echo "Invalid option. Please try again.";;
        esac
    }

    # Display the menu
    while true; do
        echo "MongoDB Help Commands:"
        echo "1. mongo start - Start MongoDB service"
        echo "2. mongo stop - Stop MongoDB service"
        echo "3. mongo status - Check MongoDB service status"
        echo "4. mongo enable - Enable MongoDB to start at boot"
        echo "5. mongo disable - Disable MongoDB from starting at boot"
        echo "6. mongo restart - Restart MongoDB service"
        echo "7. mongo logs - Show MongoDB logs"
        echo "8. mongo shell - Start MongoDB shell"
        echo "9. mongo-help - Show this help message"
        echo "0. Exit - Exit the script"

        # Read user input
        read -p "Enter your choice (0-9): " choice

        # Exit condition
        if [ "$choice" -eq 0 ]; then
            echo "Exiting..."
            break
        fi

        # Execute the chosen command
        execute_command $choice

        # Exit after executing the command
        echo "Command executed. Exiting..."
        break
    done
    ```

4. Make the script executable:

    ```bash
    sudo chmod +x /usr/local/bin/mongo-help
    ```

5. You can now run the script using:

    ```bash
    mongo-help
    ```

The script will display a list of MongoDB commands and allow you to select one by entering a number. After you choose an option, it will execute the corresponding MongoDB command and then exit.

---

## Step 3: Install express and mongoose

1. In terminal go into prooject folder and type:

npm install express mongoose
touch index.js
code index.js

       ```bash
       const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, Brain App!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
       ``` 





