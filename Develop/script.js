var today = moment();

$(document).ready(function() {
    $('#currentDay').text(today.format("dddd, MMMM Do"));
    
    $('.saveBtn').on('click', function() {
        var eventText = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, eventText);
    })
    // document.querySelectorAll(".saveBtn").addEventListener("click", function(event) {
    //     var thisEl = event.target;
    //     var eventText = thisEl.previousSiblingElement.value;
    //     var time = "hour-9";
    //     localStorage.setItem("hour-9", "Breakfast");
    // })


    // your code for loading your localstroage values, and then rendering them into their corresponding textareas
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

    function hourChange() {
        var currentHour = today.hour();
        $('.time-block').each(function() {
            var eventHour = parseInt($(this).attr('id').split('-')[1]);
            console.log(eventHour);
            console.log(currentHour);
            console.log("===");
            if (eventHour < currentHour) {
                $(this).addClass('past');

            } else if (eventHour === currentHour) {
                $(this).addClass('present');
                $(this).removeClass('past');

            } else {$(this).addClass('future');
            $(this).removeClass('past');
            $(this).removeClass('present');
            }
        })
    }

    hourChange();
})