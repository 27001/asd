// Tai Love // ASD 1311

var id;
var parse = function (data) {};

//Get Local Data
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
            var newObj = jsnObj[n][0] + " " + jsnObj[n][1];
            $('#giftList').append(newObj + "<br />");
        }
        $('#giftList').append(key + " " + '<br />');
        $('#giftList').append('<a href="#" data-key + key[n] + class="edit">Edit></a> | <a href="#" data-key + key[n] + class="delete">Delete></a>');
        $('.edit').attr('data-key', key[n]);
    }
}; // End Get Local Data

// Auto Populate Local Storage
var autoPopulateData = function () {
    //Actual JSON OBJECT data req.for this to work is coming from data.Json
    //Store the JO into Local Storage
    for (var n in json) {
        id = Math.floor(Math.random() * 100000001);
        localStorage.setItem(id, JSON.stringify(json[n]));
    }
}; // End Auto Populate 

// Save to local storage
var storeData = function (data) {
    if ($('#key').val() == '') {
        id = Math.floor(Math.random() * 100000001);
    } else {
        id = $('#key').val();
    }

    var detail = {};
        detail.recipient = $('#recipient').val();
        detail.occasion = $('#occasion').val();
        detail.gift = $('#gift').val();
        detail.purchased = $('#purchased').val();
        detail.store = $('#store').val();
        detail.cost = $('#cost').val();
        detail.notes = $('#textArea').val();

    //Save date to loal storage with Stringify to convert object to strings
    localStorage.setItem(id, JSON.stringify(detail));
    alert("Info Saved!");
    location.reload();
    //resetForm();
    $.mobile.changePage('#giftList', null, true, true);
    
}; // End save to local storage


// Home Page
$("#home").on('pageinit', function () {

}); // Home Page End

// Gift Form Page
$("#addGift").on('pageinit', function () {

    $('#submit').on('click', function(e) {
        e.preventDefault();
        
        storeData();
    }); // End submit prevent default 
        
        
            /*   // Validation
               var theGift = $('giftForm');
           
               theGift.validate({
                   invalidHandler: function (form, validator) {},
                   submitHandler: function () {
                       var data = theGift.serializeArray();
                       storeData(data);
                   }
               }); // End the Gift validate
            */   
}); // Gift Form Page End


// Load Json Data
$('#jsonStorage').on('click', function () {
    //var items = [];
    $.ajax({
        url: "data.json",
        type: "GET",
        dataType: "json",
        success: function (data, status) {
            console.log(status, data);
        },
        error: function (error, parseerror) {
            console.log(error, parseerror);
        }
    });
}); // End Load JSON Data


// Load XML Data
$('#xmlStorage').on('click', function () {
    $.ajax({
        url: "data.xml",
        type: "GET",
        dataType: "xml",
        success: function (data, status) {
            console.log(status, data);
        },
        error: function (error, parseerror) {
            console.log(error, parseerror);
        }
    });
}); // End Load XML Data


// Edit Links
$('.edit').on('click', function () {
    var key = $(this).data('key');

    $('span#key').text(key);
}); // End Edit Links



// Interests and Ideas Page
$("#addInfo").on('pageinit', function () {

    $('#submit2').on('click', function(e) {
         e.preventDefault();
        
        storeData();
    });

    $('clear').on('click', function () {
        location.reload();
    });

}); // Interests and Ideas Page End



// Browse Page
$("#browse").on('pageinit', function () {
    

// Delete Item
$('delete').on('click', function () {
    var askQ = confirm("Are you sure you want to delete entry?");
    if (askQ) {
        localStorage.remove($('.delete').data('key'));
        location.reload();
        alert("Info was deleted!");
    } else {
        alert("Info was NOT deleted!");
    }
}); // End Delete Item


// Clear Local Storage
$('clear').on('click', function clearData() {
if (localStorage.length === 0) {
    alert("There is no data to clear.");
} else {
    localStorage.clear();
    alert("All data will be cleared!");
    location.reload();
}
}); // End Clear Local Storage 



}); // Browse Page End
