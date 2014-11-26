var chatApp = {};

$(document).ready(function () {

    // cache DOM elements
    var content = $('#content'), input = $('#chat-input'), status = $('#status'), connected = false;

    // initialise my color variable to be assigned by the server
    var myColor = false;
    // initialise my name variable sent to the server
    var myName = false;

    // if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // if browser doesn't support WebSocket, just show some notification and exit
    if (!window.WebSocket) {
        content.html($('<p>', { text: 'Sorry, but your browser doesn\'t '
                                    + 'support WebSockets.'} ));
        input.hide();
        $('span').hide();
        return;
    }

    // open connection
    var connection = new WebSocket('ws://secure-taiga-8058.herokuapp.com');

    connection.onopen = function () {

        chatApp.connected();
    };

    connection.onerror = function (error) {

        // just in there were some problems with conenction...
        content.html($('<p>', { text: 'Sorry, but there\'s some problem with your '
                                    + 'connection or the server is down.' } ));
    };

    //incoming messages
    connection.onmessage = function (message) {
        // try to parse JSON message to make sure it is valid
        try {
            var json = JSON.parse(message.data);
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ', message.data);
            return;
        }

        if (json.type === 'color') { // first response from the server with user's color
            myColor = json.data;
            status.text(myName + ': connected').css('color', myColor);
            input.removeAttr('disabled').focus();
            // from now user can start sending messages
        } else if (json.type === 'history') { // entire message history
            // insert every single message to the chat window
            for (var i=0; i < json.data.length; i++) {
                chatApp.addMessage(json.data[i].author, json.data[i].text,
                           json.data[i].color, new Date(json.data[i].time));
            }
        } else if (json.type === 'message') { // it's a single message
            input.removeAttr('disabled'); // let the user write another message
            chatApp.addMessage(json.data.author, json.data.text,
                       json.data.color, new Date(json.data.time));
        } else {
            console.log('Error in JSON: ', json);
        }
    };

    /**
     * Send mesage when user presses Enter key
     */
    input.keydown(function(e) {
        if (e.keyCode === 13) {
            chatApp.sendMessage($(this).val());
        }
    });

    chatApp.connected = function () {

        // first we want users to enter their names
        input.removeAttr('disabled');
        status.text('Choose name:');
    }

    chatApp.sendMessage = function (msg) {

        if (!msg) {
            return false;
        }

        // send the message as an ordinary text
        connection.send(msg);
        input.val('');
        // disable the input field to make the user wait until server
        // sends back response
        input.attr('disabled', 'disabled');

        // we know that the first message sent from a user their name
        if (myName === false) {
            myName = msg;
        }
    }

    /**
     * Add message to the chat window
     */
    chatApp.addMessage = function (author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    }
});