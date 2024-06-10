$(function () { // Ensure the DOM is fully loaded before executing the code
    // Function to load content based on the menu item clicked
    window.loadContent = function (contentName) {
      var contentDisplay = $('#content-display');
      contentDisplay.addClass('active');
      contentDisplay.html('<h2>' + contentName + '</h2><p>Loading content for ' + contentName + '...</p>');
  
      // Simulate loading new content
      setTimeout(function () {
        contentDisplay.html('<h2>' + contentName + '</h2><p>This is the content for ' + contentName + '.</p>');
        contentDisplay.removeClass('active');
      }, 1000);
    };
  });
  