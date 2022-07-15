var today = moment();

$(document).ready(function() {
    $('#currentDay').text(today.format("dddd, MMMM Do"));
    $('.saveBtn').on('click', function() {
        var eventText = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(eventText, time);
    })

    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-1 .description').val(localStorage.getItem('hour-1'));
    $('#hour-2 .description').val(localStorage.getItem('hour-2'));
    $('#hour-3 .description').val(localStorage.getItem('hour-3'));
    $('#hour-4 .description').val(localStorage.getItem('hour-4'));
    $('#hour-5 .description').val(localStorage.getItem('hour-5'));

    function hourChange() {
        var currentHour = today.hour();
        $('.time-block').each(function() {
            var eventHour = parseInt($(this).attr('id'));
            
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
    var hourInt = setInterval(hourChange, 1000);
})