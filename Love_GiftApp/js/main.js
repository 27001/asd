// Tai Love // ASD 1312

var id;
var parse = function (data) {};
var items = [];
var key = localStorage.key;
var keyVal = localStorage.getItem(key);
var jsnObj = JSON.parse(keyVal);


// Delete Item
var deleteItem = function (id) {
    var askQ = confirm("Are you sure you want to delete entry?");
    if (askQ) {
        localStorage.removeItem(id);
        location.reload();
        alert("Info was deleted!");
    } else {
        alert("Info was NOT deleted!");
    }
}; // End Delete Item


// Edit Item
var editItem = function (id) {
    console.log('hello there');
        localStorage.getItem(id);
        //editItem.key = this.key;
}; // Edit Item


/* Auto Populate Local Storage
var autoPopulateData = function () {
    //Actual JSON OBJECT data req.for this to work is coming from data.Json
    //Store the JO into Local Storage
    for (var n in items) {
        id = Math.floor(Math.random() * 100000001);
        localStorage.setItem(id, JSON.stringify(items));
    }
}; // End Auto Populate
*/

// Save to local storage
var storeData = function (data) {
    if ($('#key').val() === '') {
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
        detail.textArea = $('#textArea').val();

    //Save date to loal storage with Stringify to convert object to strings
    localStorage.setItem(id, JSON.stringify(detail));
    alert("Info Saved!");
    //$('form')[0].reset();
    $.mobile.changePage('#display', null, true, true);
}; // End Save to Local Storage Function


// Get/Display Data
var getTheData = function () {
    if (localStorage.length === 0) {
        alert("There is no data in Local Storage.");
        //autoPopulateData();
    }
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var keyVal = localStorage.getItem(key);
        var jsnObj = JSON.parse(keyVal);
        for (var n in jsnObj) {
            var newObj = jsnObj[n];
            $('#display').append(newObj + "<br />");
        }
        $('#display').append(key + " " + '<br />');
        $('#display').append('<a href="#" class="edit" data-key="' + key + '">Edit</a> | <a href="#" class="delete" data-key="' + key + '">Delete</a><br><br>');
    }
    
    // Delete Item Link
   $('.delete').on('click', function(e) {
       e.preventDefault();
       var id = $(this).data('key');
       $('span#key').text(key);
       deleteItem(id);
    }); // End Delete Item Link
   
   
     // Edit Item Link
    $('.edit').on('click', function(e) {
        e.preventDefault();
        var id = $(this).data('key');
        console.log('testinggggg');
        localStorage.removeItem(key);
        $('span#key').text(key);
        editItem();
    }); // End Edit Item Link
   
    
}; // End Get Local Data

               
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


               
// Home Page
$("#home").on('pageinit', function () {

}); // Home Page End




// Gift Form Page
$("#addGift").on('pageinit', function () {

    $('#submit').on('click', function(e) {
        e.preventDefault();
        
        storeData();
      
        //$('form')[0].reset();
      
    }); // End submit prevent default

}); // Gift Form Page End




// Display Gifts Page
$("#display").on('pageinit', function () {
 
    
    // Load Json Data
    $('#jsonStorage').on('click', function () {
    $.mobile.changePage('#giftList')
        $.ajax({
           url: "data.json",
           type: "GET",
           dataType: "json",
           success: function (data, status) {
                $('#giftList').empty();
                $("<h3>** JSON DATA **</h3>").appendTo('#giftList');
                for (var i = 0; i< data.items.length; i++) {
                    //var key = localStorage.key(i);
                    //var keyVal = JSON.parse(localStorage.getItem(key));
                    var makeList = $("<li></li>");
                    var makeLi = $('<div>'+
                        "<p>..<strong>Recipient : </strong>"+data.items[i].recipient[1]+"</p>"+
                        "<p>..<strong>Occasion : </strong>"+data.items[i].occasion[1]+"</p>"+
                        "<p>..<strong>Gift : </strong>"+data.items[i].gift[1]+"</p>" +
                        "<p>..<strong>Date Purchased : </strong> "+data.items[i].purchased[1]+"</p>" +
                        "<p>..<strong>Store : </strong>"+data.items[i].store[1]+"</p>" +
                        "<p>..<strong>Cost : </strong>"+data.items[i].cost[1]+"</p>" +
                        "<p>..<strong>Notes : </strong>"+data.items[i].textArea[1]+"</p>"+
                        '</div><br>')
                    var makeLink = $("<p id='"+key+"'></p>");
                    makeLink.html(makeLi);
                    makeList.append(makeLink).appendTo("#giftList");
                }  
                //$("ul").listview(); 
                   
           },
           error: function (error, parseerror) {
               console.log(error, parseerror); 
           }
        });   
    });
         
  
  
   // Load XML Data
   $('#xmlStorage').on('click', function () {
        $('#giftList').empty();
        $.ajax({
           url: "data.xml",
           type: "GET",
           dataType: "xml",
           success: function (data, status) {
                console.log('i was clicked');
                $('#giftList').append("<h3>** XML DATA **</h3>");
                //for (var i = 0; i< data.items.length; i++) {
                    //var key = localStorage.key(i);
                    //var keyVal = JSON.parse(localStorage.getItem(key));
                    var makeList = $("<li></li>");
                     console.log('the list' + makeList);
                    var makeLi = $('<div></div><br>');
                    console.log('the second list' + makeLi);
                    //$(data).find("recipient").each(function(){
                        $('#giftList').append("<p>..<strong>Recipient : </strong>" + $(this).find("recipient").text() + "</p>");
                        $('#giftList').append("<p>..<strong>Occasion : </strong>" + $(this).find("recipient").text() + "</p>");
                        $('#giftList').append("<p>..<strong>Gift : </strong>" + $(this).find("recipient").text() + "</p>");
                        $('#giftList').append("<p>..<strong>Date Purchased : </strong> " + $(this).find("recipient").text() + "</p>");
                        $('#giftList').append("<p>..<strong>Store : </strong>" + $(this).find("recipient").text() + "</p>");
                        $('#giftList').append("<p>..<strong>Cost : </strong>" + $(this).find("recipient").text() + "</p>");
                        $('#giftList').append("<p>..<strong>Notes : </strong>" + $(this).find("recipient").text() + "</p>");
                        //'</div><br>')
                    var makeLink = $("<p id='"+key+"'></p>");
                    console.log('now im here' + makeList);
                    makeLink.html(makeLi);
                    makeList.append(makeLink).appendTo("#giftList");
                //}  
                //$("ul").listview(); 
                //});   
           },
           error: function (error, parseerror) {
               console.log(error, parseerror); 
           }
        });   
    });
              /* console.log(status, data);
               $('#display').empty();
                  for (var i = 0; i< items.length; i++){
                    var key = localStorage.key(i);
                    var keyVal = xmlDoc.parse(localStorage.getItem(key));
                    //console.log(data.items[i].purchased[1]);
                    var makeList = $("<li></li>");
                    var makeLi = $("<strong>"+items[i].recipient[1]+"</strong>"+
                        "<p>"+data.items[i].occasion[1]+"</p>"+
                        "<p>"+items[i].gift[1]+"</p>" +
                        "<p>"+items[i].purchased[1]+"</p>" +
                        "<p>"+items[i].store[1]+"</p>" +
                        "<p>"+items[i].cost[1]+"</p>" +
                        "<p>"+items[i].notes[1]+"</p><br>");
                    var makeLink = $("<p id='"+key+"'></p>");
                    makeLink.html(makeLi);
                    makeList.append(makeLink).appendTo("#display");
                };  
               $("ul").listview();
           },
           error: function (error, parseerror) {
               console.log(error, parseerror); 
           }
       });
   }); // End Load XML Data
   */
   
   
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

}); // Display Gifts Page End