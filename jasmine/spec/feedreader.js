/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
         /* The following two tests loop through the allFeeds array of objects
         * and test that the url and name key values are defined for each object
         * in the array, then it makes sure the key value is not an empty string or
         * some value other than a string, such as an integer or boolean.
         */
         it('urls there and not empty', function(){
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
                expect(typeof allFeeds[i].url).toBe('string');
            }
         });

         it('names there and not empty', function(){
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
                expect(typeof allFeeds[i].name).toBe('string');
            }
         });
    });

//Test to see if the menu is hidden by default, not hidden on a click, and then hidden again after another click
    describe('The menu', function() {
        /*variable that references the class type and returns a 
         *boolean of true or false
         */
         var visible = $('body').hasClass('menu-hidden');
        /*Tests to see if the visible variable returns true
         *for the body tag. As long as it does, the test should pass.
         */
         it('menu hidden', function(){
            expect(visible).toBe(true);
         });
        /* this test references the icon link and triggers a click
         * using jQuery then checks to see that the .menu-hidden
         * class is removed from the body tag upon the click event, 
         * additionally it triggers another click to
         * the icon and then checks to see if the .menu-hidden class
         * is added back to the body tag
         */
          it('menu displays on click and disappears on another click', function (){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);  
          });

    });

//Test to see if the loadFeed function works properly and causes a feed to be displayed
    describe('Initial Entries', function() {
         /* this beforeEach function assures that the loadFeed()
          * function function is called and finished before each 
          * expectation in the test starts
          */
         beforeEach(function(done){
            loadFeed(0,done);
            });
         /* this test accesses the .feed class and then finds
          * all the elements with the .entry class and gets the  
          * length of the array containing all elements with those
          * classes and makes sure that it is greater than 0
          */
         it('feeds displayed?', function(){
            var len = $("div.feed").find("article.entry").length;
            expect(len).toBeGreaterThan(0);
        });     
    });

//Test to see if the selecting a new feed will indeed display a new feed on the screen
    describe('New Feed Selection', function() {
         /* this beforeEach function loads the first feed in the 
          * list and then stores the value of the first h2 element
          * in a variable, the done function is obviously to make
          * certain that this callback function is finished before
          * moving on to any of the expectations
          */
         beforeEach(function(done){
            loadFeed(0,function (){
                contents = $('.feed').find('h2').html();
                    done();
            });
        });
         /* this makes sure that after the beforeEach finishes,
          * the a different feed is loaded, in this case the 2nd feed,
          * finally, after the second feed loads the test expects the 
          * cached string in the before each function to not be equal to 
          * the the string of the first h2 element on the new page
          */   
         it('new feed displays', function(done) {
            loadFeed(1,function(){
            expect($('.feed').find('h2').html()).not.toEqual(contents);
            done();

            });
        });
         /* this function assures that after all is said and done,
          * the initial feed is loaded back to the screen
          */
         afterAll(function(){
            loadFeed(0);
         })

    });
}());

