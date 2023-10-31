// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {


  for (let hour = 9; hour <= 17; hour++) {
    var AmPmHour = dayjs().hour(hour).format('ha');
    var row = $("<div>").addClass("row time-block").attr("id", "hour-" + hour);
    var hourDiv = $("<div>").addClass("hour col-1").text(AmPmHour);
    var textArea = $("<textarea>").addClass("description col-10");
    var saveBtn = $("<button>").addClass("saveBtn col-1").html('<i class="fas fa-save"></i>');

    row.append(hourDiv, textArea, saveBtn);
    $("#timePlanner").append(row);
}




    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    // TODO: Add code to display the current date in the header of the page.

    var today = dayjs();
    $("#currentDay").text(today.format('dddd, MMMM D'));
  });
  