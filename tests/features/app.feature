Feature: Chat application

@structure
Scenario: Chat Application Structure
  Given I go to the web application
  Then i see a header section
  Then i see correct title in header
  Then i see a profile section
  Then i see a chat section
  Then i see a footer section

@style
Scenario: Chat Application Style
  Given I go to the web application
  Then title is black 24px tahoma font
  Then profile title is black 20px tahoma font
  Then chat title is black 20px tahoma font

@functionality
Scenario: Chat Application functionality
  Given I go to the web application
  When the chat application is connected
  Then the user is prompted for a name
  When the user enters a name
  Then the user cannot send a blank message