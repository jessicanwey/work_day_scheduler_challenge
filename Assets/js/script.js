
var today = dayjs();
var currentHour = today.hour();
var saveButton = $('#saveBtn');
var hourId;
var activity;
var timeBlockElement = $('.time-block');


$(function () {
  //Display current date in the header
  $('#currentDay').text("Today is: " + today.format('dddd, MMM DD YYYY'));

  //when save button is clicked, the activity for that time block is saved to local storage with the hour ID
  $('.saveBtn').click(function (){
    activity = $(this).siblings(".description").val();
    console.log(activity);
    hourId = $(this).parent().attr("id");
    console.log(hourId);

    localStorage.setItem(hourId, activity);
  });

  //loop through all of the time block divs an apply appropriate styling based on the current time vs the time block on the calendar
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
   

  //get the values of the activities that were saved to each time block in the 
  //local storage and display them in the correct time block
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});


