// Tai Love // ASD 1311

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
        //var editLink = '<a href="#" class="edit" data-key="' + id + '">Edit<a/>';
        //var deleteLink='<a href="#" class="delete" data-key="' + id + '">Delete<a/>';
        $('#browse').append('<a href="#" class="edit" data-key="' + key[n] + '">Edit<a/> | <a href="#" data-key + key[n] + class="delete">Delete</a>');
        //$('#browse').append('<a href="#" data-key + key[n] + class="edit">Edit</a> | <a href="#" data-key + key[n] + class="delete">Delete</a>');
        $('.edit').attr('data-key', key[n]);
    }
}; // End Get Local Data

// Auto Populate Local Storage
var autoPopulateData = function () {
    //Actual JSON OBJECT data req.for this to work is coming from data.Json
    //Store the JO into Local Storage
    for (var n in items) {
        id = Math.floor(Math.random() * 100000001);
        localStorage.setItem(id, JSON.stringify(items[n]));
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
    //location.reload();
    
    $.mobile.changePage('#browse', null, true, true);
    
    // Save to storage detail for Interest Page
        detail.forWho = $('#forWho').val();
        detail.birthday = $('#birthday').val();
        detail.baptism = $('#baptism').val();
        detail.anniversary = $('#anniversary').val();
        detail.favs = $('#favs').val();
        detail.hobby = $('#hobby').val();
        detail.myNotes = $('#textArea2').val();
        
    //Save date to loal storage with Stringify to convert object to strings
    localStorage.setItem(id, JSON.stringify(detail));
    alert("Info Saved!");
    //location.reload();
    
    $.mobile.changePage('#browse', null, true, true);    
}; // End save to local storage

// Clear Local Storage
var clearData = function () {
    if (localStorage.length === 0) {
        alert("There is no data to clear.");
    } else {
        localStorage.clear();
        alert("All data will be cleared!");
        location.reload();
    }    
}; // End Clear Local Storage


// Delete Item
var deleteItem = function () {
    var askQ = confirm("Are you sure you want to delete entry?");
    if (askQ) {
        localStorage.removeItem($('.deleteItem').data('key'));
        location.reload();
        alert("Info was deleted!");
    } else {
        alert("Info was NOT deleted!");
    }
}; // End Delete Item

/*
var toChangePage = function (toPageId) {
        $.mobile.changePage("#" + toPageId , {
            type:"post",
            data:$("form").serialize(),
            reloadPage:true
        });
    };

*/


// Home Page
$("#home").on('pageinit', function () {

}); // Home Page End

// Gift Form Page
$("#addGift").on('pageinit', function () {

    $('#submit').on('click', function(e) {
        e.preventDefault();
        
        storeData();
        location.reload();
      
    }); // End submit prevent default
    
}); // Gift Form Page End




// Interests and Ideas Page
$("#addInfo").on('pageinit', function () {

    $('#submit2').on('click', function(e) {
        e.preventDefault();
        
        storeData();
        location.reload();
    });

}); // Interests and Ideas Page End



// Browse Page
$("#browse").on('pageinit', function () {

    // Load Json Data
   $('#jsonStorage').on('click', function () {
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
   
   
   
   // Clear Stored Data Link
   $('#clearData').on('click', function(e) {
       e.preventDefault();
       
       clearData();
   }); // End Clear Data Link
    
    
   // Display Data Link
   $('#displayData').on('click', function(e) {
       e.preventDefault();
       
       getTheData();
   }); // End Display Data Link
   
       
   // Delete Item Link
   $('.delete').on('click', function(e) {
       e.preventDefault();
       
       var id = $(this).data('key');
       
       localStorage.removeItem('id');
    }); // End Delete Item Link
   
       
    // Edit Links
    $('.edit').on('click', function(e) {
        e.preventDefault();
        
        var id = $(this).data('key');
    
        localStorage.removeItem('key');
    }); // End Edit Links
       
       
  
}); // Browse Page End



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
            
            
          