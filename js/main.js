function main() {
    $("#addContent").click(typeTextClickButton);
    $("#addContent").attr("disabled", true);
    $("#itemToDo").keyup(typeTextClickButton);
    var savedList = $("#list");

    $(function() {
        savedList.append("<li class=item>Kupić gazetę<label><input class=checkBox type=checkbox><span></span></label></li><li class=item>Zrobić pranie<label><input class=checkBox type=checkbox><span></span></label></li><li class=item>Wstawić zmywarkę<label><input class=checkBox type=checkbox><span></span></label></li>")
        if (localStorage.getItem("#list")) {
            savedList.html(localStorage.getItem("#list"));
        }
    });

    function typeTextClickButton(event) {
        if ($("#itemToDo").val() == "") {
            $("#addContent").attr("disabled", true);
            $(':input[value=""]').attr("disabled", "disabled");
            return true;
        } else {
            $(':input').removeAttr("disabled");
            $("#addContent").attr("disabled", false);
        }
        if (event.which == 13 || event.button == 0) {
            savedList.append("<li class=item>" + $("#itemToDo").val() + "<label><input class=checkBox type=checkbox><span></span></label>" + "</li>");
            $("#itemToDo").val("");
            localStorage.setItem("#list", savedList.html());
            $("#addContent").attr("disabled", true);
        }
    };

    $(document).on("click", ".checkBox", function() {
        if ($(this).is(":checked")) {
            $(this).closest("li").toggleClass("done");
            localStorage.setItem("#list", savedList.html())
        }
        if ($(this).is("input:checkbox:not(:checked)")) {
            $(this).closest("li").removeClass("done");
            localStorage.setItem("#list", savedList.html());
        }
    });

    $(document).on('click', ".remove", function() {
        $('li.done').remove();
        localStorage.setItem("#list", savedList.html());
    });
}
$(main)
