var chatApp = {};

$(document).ready(function () {

    // cache DOM elements
    var input = $('#chat-input'), status = $('#status');

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
        if (!msg) {
            return false;
        }
    }
});