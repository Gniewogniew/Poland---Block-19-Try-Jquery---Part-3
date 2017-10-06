function main() {
    $("#addContent").click(TypeTextClickButton);
    $("#addContent").attr("disabled", true);
    $("#itemToDo").keyup(TypeTextClickButton);

    function TypeTextClickButton() {

        if ($("#itemToDo").val() == "") {
            $("#addContent").attr("disabled", true);
            alert("Empty, need text")
        } else {
            $("#addContent").attr("disabled", false);  
        }
        if (event.which == 13 || event.button == 0) {
            $("#list").append("<li class=item>" + $("#itemToDo").val() + "<button class=remove>Clear</button>" + "<label><input class=checkBox type=checkbox><span></span></label>" + "</li>");
            $("#itemToDo").val("");
            $("#addContent").attr("disabled", true);
        }
    };

    $(document).on("click", ".checkBox", function() {
        if ($(this).is(":checked")) {
            $(this).closest("li").toggleClass("done");
        }
        if ($(this).is("input:checkbox:not(:checked)")) {
            $(this).closest("li").removeClass("done")
        }
    });
    $(document).on('click', ".remove", function() {
        $('li.done').remove();
    });
}
$(main)