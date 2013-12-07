// Tai Love // ASD 1312

var id;
var parse = function (data) {};
var items = [];

// Get/Display Data
var getTheData = function () {
    if (localStorage.length === 0) {
        alert("There is no data in Local Storage, so default data was added.");
        autoPopulateData();
    }
    for (var i = 0, ls = localStorage.length; i < ls; i++) {
        var key = localStorage.key(i);
        var keyVal = localStorage.getItem(key);
        var jsnObj = JSON.parse(keyVal);
        for (var n in jsnObj) {
            var newObj = jsnObj[n];
            $('#browse').append(newObj + "<br />");
        }
        $('#browse').append(key + " " + '<br />');
        $('#browse').append('<a href="#" class="edit" data-key="' + key[n] + '">Edit<a/> | <a href="#" data-key + key[n] + class="delete">Delete</a>');
        $('.edit').attr('data-key', key[n]);
    }
}; // End Get Local Data

        
 /*       
// Home Page
$("#home").on('pageinit', function () {

}); // Home Page End




// Gift Form Page
$("#addGift").on('pageinit', function () {

}); // Gift Form Page End




// Browse Page
$("#browse").on('pageinit', function () {

}); // Browse Page End

*/
