var today = moment();

// Function will run after HTML document is rendered.
$(document).ready(function() {

    // Targeting id element to have it display current day of the week followed by month then day of the month.
    $('#currentDay').text(today.format("dddd, MMMM Do"));
    
    // Event listener for save button on click.
    $('.saveBtn').on('click', function() {

        // Event tareting saveBtn sibling <text area> class description value.
        var eventText = $(this).siblings('.description').val();

        // Event targeting saveBtn parent <div> id element.
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, eventText);
    })
    
    // Code for loading your localstroage key values, and then rendering them into their corresponding textareas
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

    // Function for taking current hour.
    function hourChange() {
        var currentHour = today.hour();
        
        // function for targeting time block class spliting the id element and returning it as an integer.
        $('.time-block').each(function() {
            var eventHour = parseInt($(this).attr('id').split('-')[1]);
            
            // Arguement to determine which classes will be added/removed.
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

    // Function call
    hourChange();
})