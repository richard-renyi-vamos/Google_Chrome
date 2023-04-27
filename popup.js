document.addEventListener('DOMContentLoaded', function() {
  var searchButton = document.getElementById('search-button');
  var searchQuery = document.getElementById('search-query');

  searchButton.addEventListener('click', function() {
    var query = searchQuery.value;
    var url = 'https://www.google.com/search?q=' + query;
    chrome.tabs.create({url: url});
  });
});
