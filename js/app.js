var chatApp = {};

$(document).ready(function () {

    // cache DOM elements
    var input = $('#chat-input'), status = $('#status');

    // initialise my name variable sent to the server
    var myName = false;

    /**
     * Send mesage when user presses Enter key
     */
    input.keydown(function(e) {
        if (e.keyCode === 13) {
            chatApp.sendMessage($(this).val());
        }
    });

    chatApp.connected = function () {
        input.removeAttr('disabled');
        status.text('Choose name:');
    }

    chatApp.sendMessage = function (msg) {
        console.log('send message ' + msg);
        
        // we know that the first message sent from a user their name
        if (myName === false) {
            myName = msg;
        }

        status.text(myName + ': connected')
    }
});