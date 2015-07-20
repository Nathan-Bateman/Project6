$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
         /* The following two tests loop through the allFeeds array of objects
         * and test that the url and name key values are defined for each object
         * in the array, then it makes sure the key value is not an empty string or
         * some value other than a string, such as an integer or boolean.
         */
         it('have urls there and not empty', function(){
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
                expect(typeof allFeeds[i].url).toBe('string');
            }
         });

         it('have names there and not empty', function(){
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
                expect(typeof allFeeds[i].name).toBe('string');
            }
         });
    });

//Test to see if the menu is hidden by default, not hidden on a click, and then hidden again after another click
    describe('The menu', function() {
        /*Tests to see if the visible variable returns true
         *for the body tag. As long as it does, the test should pass.
         */
         it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
        /* this test references the icon link and triggers a click
         * using jQuery then checks to see that the .menu-hidden
         * class is removed from the body tag upon the click event, 
         * additionally it triggers another click to
         * the icon and then checks to see if the .menu-hidden class
         * is added back to the body tag
         */
          it('toggles visibility on click', function (){
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
         it('have feeds displayed', function(){
            var len = $("div.feed").find("article.entry").length;
            expect(len).toBeGreaterThan(0);
        });     
    });

//Test to see if the selecting a new feed will indeed display a new feed on the screen
    describe('New Feed Selection', function() {
         /* this beforeEach function loads the first feed in the 
          * list, the done function is obviously to make
          * certain that this callback function is finished before
          * moving on to any of the expectations
          */
         beforeEach(function(done){
            loadFeed(1,function (){
                    done();
            });
        });
         /* this makes sure that after the beforeEach finishes,
          * the a different feed is loaded, in this case the 2nd feed,
          * finally, after the second feed loads the test expects the 
          * cached string initiated before the second feed is loaded 
          * to not be equal to the the string of the 
          * first h2 element on the new page
          */   
         it('displays when a new feed is loaded', function(done) {
            var contents = $('.feed').find('h2').html();
            loadFeed(0,function(){
            expect($('.feed').find('h2').html()).not.toEqual(contents);
            done();

            });
        });
    });
}());

