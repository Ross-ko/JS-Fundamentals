function chatLogger(data) {

    let chat = [];

    for (let i = 0; i < data.length; i++) {

        let commandAndMsg = data[i].split(' ');
        let command = commandAndMsg[0];

        if (command == 'Chat') {
            chat.push(commandAndMsg[1]);

        } else if (command == 'Delete') {
            if (chat.includes(commandAndMsg[1])) {
                let index = chat.indexOf(commandAndMsg[1]);
                chat.splice(index, 1);
            }

        } else if (command == 'Edit') {
            let msgToEdit = commandAndMsg[1];
            let editedMsg = commandAndMsg[2];

            if (chat.includes(msgToEdit)) {
                let index = chat.indexOf(msgToEdit);
                chat.splice(index, 1, editedMsg);
            }

        } else if (command == 'Pin') {
            if (chat.includes(commandAndMsg[1])) {
                let index = chat.indexOf(commandAndMsg[1]);
                let msg = chat.splice(index, 1);
                chat.push(msg);
            }

        } else if (command == 'Spam') {           
            for (let x = 1; x < commandAndMsg.length; x++) {
                let msg = commandAndMsg[x];
                chat.push(msg);
            }

        } else if (command == 'end') {
            break;
        }
    }

    console.log(chat.join('\n'));
}

chatLogger(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"]);

chatLogger(["Chat Hello",
    "Delete John",   
    "Pin Hi",
    "end"]);

chatLogger(["Chat John", 
    "Spam Let's go to the zoo", 
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"])