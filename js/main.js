function main() {
    $(addingButton).attr("disabled", true);
    $(eventsHandlers);
}

$(main);
var savedList = $("#list");
var addingButton = $("#addContent");
var inputForItemsToDo = $("#itemToDo");

function eventsHandlers() {
    $("#addContent").click(typeTextClickButton);
    $(inputForItemsToDo).keyup(typeTextClickButton);
    $(savedList).on("click", ".checkBox", selectFinishedTask);
    $(".remove").on("click", removeFinishedTask);
}

$(function() {
    savedList.append("<li class=item>Kupić gazetę<label><input class=checkBox type=checkbox><span></span></label></li><li class=item>Zrobić pranie<label><input class=checkBox type=checkbox><span></span></label></li><li class=item>Wstawić zmywarkę<label><input class=checkBox type=checkbox><span></span></label></li>")
    if (localStorage.getItem("#list")) {
        savedList.html(localStorage.getItem("#list"));
    }
});

function typeTextClickButton(event) {
    if ($(inputForItemsToDo).val() === "") {
        $(addingButton).attr("disabled", true);
        $(':input[value=""]').attr("disabled", "disabled");
        return true;
    } else {
        $(':input').removeAttr("disabled");
        $(addingButton).attr("disabled", false);
    }
    if (event.which === 13 || event.button === 0) {
        $(addItemsOnList);
    }
}

function addItemsOnList() {
    savedList.append("<li class=item>" + $(inputForItemsToDo).val() + "<label><input class=checkBox type=checkbox><span></span></label>" + "</li>");
    $(inputForItemsToDo).val("");
    localStorage.setItem("#list", savedList.html());
    $(addingButton).attr("disabled", true);
}

function selectFinishedTask() {
    if ($(this).is(":checked")) {
        $(this).closest("li").toggleClass("done");
        localStorage.setItem("#list", savedList.html())
    }
    if ($(this).is("input:checkbox:not(:checked)")) {
        $(this).closest("li").removeClass("done");
        localStorage.setItem("#list", savedList.html());
    }
}

function removeFinishedTask() {
    $("li.done").remove();
    localStorage.setItem("#list", savedList.html());
}
