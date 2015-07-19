 #Download this project to your machine.

 Then open the index file in your browser. 

 The below tests written using the jasmine testing library
 will run automatically. They should all pass if the application
 is running properly.

 Test #1: RSS Feeds

 1.'are defined' - Makes sure the allFeeds variable is defined and contains some content.

 2.'urls there and not empty' -  makes sure the url and name key values are defined for each object
 3.'names there and not empty'-  in the array, then it makes sure the key values are not empty strings or
         						 some value other than a string, such as an integer or boolean.


 Test #2: The Menu

 1.'menu hidden' - checks to see that the body tag has the class that hides the menu

 2.'menu toggles visibility on click' - checks to see that the menu appears and disapears when the hamburger icon is clicked

 Test #3: Initial Entries

 1.'feeds displayed' - checks to see if the loadFeed function works properly and causes a feed to be displayed when called

 Test #4: New Feed Selection

 1. 'new feed displays' - checks to see if selecting a new feed will indeed display a new feed on the screen

