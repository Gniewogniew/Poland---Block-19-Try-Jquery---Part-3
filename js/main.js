function main() {
    $("#addContent").click(TypeTextClickButton);
    $("#addContent").attr("disabled", true);
    $("#itemToDo").keyup(TypeTextClickButton);
    var savedList = $("#list");

    $(document).ready(function() {
        if (localStorage.getItem("#list")) {
            savedList.html(localStorage.getItem("#list"));
        }
    });

    function TypeTextClickButton() {
        if ($("#itemToDo").val() == "") {
            $("#addContent").attr("disabled", true);
            $(':input[value=""]').attr("disabled", "disabled");
            return true;
        } else {
            $(':input').removeAttr("disabled");
            $("#addContent").attr("disabled", false);
        }
        if (event.which == 13 || event.button == 0) {
            savedList.append("<li class=item>" + $("#itemToDo").val() + "<button class=remove>Clear</button>" + "<label><input class=checkBox type=checkbox><span></span></label>" + "</li>");
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
            $(this).closest("li").removeClass("done")
            localStorage.setItem("#list", savedList.html())
        }
    });

    $(document).on('click', ".remove", function() {
        $('li.done').remove();
        localStorage.setItem("#list", savedList.html())
    });
}
$(main)
