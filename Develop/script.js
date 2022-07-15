var today = moment();

$(document).ready(function() {
    $("#currentDay").text(today.format("dddd, MMMM Do"));
})