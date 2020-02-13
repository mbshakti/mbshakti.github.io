$("#show_schedule_button").click(function() {
    $("#schedule_table_all").fadeIn();
    $("#show_info_all").hide();
    $("#show_faq_all").hide();
    $("#welcome_text").hide();
});

$("#show_info_button").click(function() {
    $("#show_info_all").fadeIn();
    $("#schedule_table_all").hide();
    $("#show_faq_all").hide();
    $("#welcome_text").hide();
});

$("#show_faq_button").click(function() {
    $("#show_faq_all").fadeIn();
    $("#show_info_all").hide();
    $("#schedule_table_all").hide();
    $("#welcome_text").hide();
});

$("#container").click(function() {
    $("#schedule_table_all").hide();
    $("#show_info_all").hide();
    $("#show_faq_all").hide();
    $("#welcome_text").fadeIn();
});