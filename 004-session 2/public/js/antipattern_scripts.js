

// CALL BACK HELL
$('#letter-selection').on('change', function() {
    var letter = $(this).val();
    $.ajax({
        url: "http://127.0.0.1:3000/actors/" + letter,
        success: function (res) {
            var html = "<ul>";
            $.each(res, function (i, v) {
                html += "<li>";
                html += "<a href='#'>";
                html += v.first_name + " " + v.last_name;
                html += "</a>";
                html += "</li>";
            });
            html += "</ul>";
        }
    })
});