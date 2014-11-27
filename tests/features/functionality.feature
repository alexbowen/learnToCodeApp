Feature: Chat application

@functionality
Scenario: Chat Application functionality
  Given I go to the web application
  When the chat application is connected
  Then the user is prompted for a name
  When the user sends an empty message
  Then the message is not sent