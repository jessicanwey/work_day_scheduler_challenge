// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var today = dayjs();
var currentHour = today.hour();
var saveButton = $('#saveBtn');
var hourId;
var activity;
var timeBlockElement = $('.time-block');


$(function () {
  //Display current date in the header
  $('#currentDay').text(today.format('dddd, MMM DD YYYY'));

  //when save button is clicked, the activity for that time block is saved to local storage with the hour ID
  $('.saveBtn').click(function (){
    activity = $(this).siblings(".description").val();
    console.log(activity);
    hourId = $(this).parent().attr("id");
    console.log(hourId);

    localStorage.setItem(activity, hourId);
  });

  //loop through all of the time block divs an apply appropriate styling based on the current time vs the time block on the calendar
  setHourBlockFormat();

  //get the values of the activities that were saved to each time block if there are any
  getTimeBlockActivity();

  console.log('current hour ' + currentHour);
});

function setHourBlockFormat(){

  $(timeBlockElement).each(function(){
    var timeBlockId = parseInt($(this).attr('id').split("hour-")[1]);
    console.log(timeBlockId);

    if(timeBlockId < currentHour){
      $(this).addClass('past');
    } else if (timeBlockId === currentHour){
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }

  })
};

function getTimeBlockActivity(){
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  console.log($("#hour-9 .description"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
};
