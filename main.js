$(function () {
    $('#button').click(function () {
        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        const paramValue = params.get('text');

        navigator.clipboard.writeText(paramValue);

        $('.msg').fadeIn("slow", function () {
            $(this).delay(2000).fadeOut("slow");
        });
    });
});