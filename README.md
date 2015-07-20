 #Download this project to your machine.

 Then open index.html in your browser. 

 The below tests written using the jasmine testing library
 will run automatically. They should all pass if the application
 is running properly.

 <h4>Test #1: RSS Feeds</h4>

 1.<strong>'are defined'</strong> - Makes sure the allFeeds variable is defined and contains some content.

 2.<strong>'have urls there and not empty'</strong> -  makes sure the url and name key values are defined for each object<br>
 3.<strong>'have names there and not empty'</strong> -  in the array, then it makes sure the key values are not empty strings or
         						                  some value other than a string, such as an integer or boolean.


 <h4>Test #2: The Menu</h4>

 1.<strong>'is hidden by default'</strong> - checks to see that the body tag has the class that hides the menu

 2.<strong>'toggles visibility on click'</strong> - checks to see that the menu appears and disapears 
                                        when the hamburger icon is clicked

 <h4>Test #3: Initial Entries</h4>

 1.<strong>'have feeds displayed'</strong> - checks to see if the loadFeed function works properly and causes a feed to be displayed when                         called

 <h4>Test #4: New Feed Selection</h4>

 1. <strong>'displays when a new feed is loaded'</strong> - checks to see if selecting a new feed will indeed display a new feed on the screen

