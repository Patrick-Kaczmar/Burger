$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = newDevoured;
        $.ajax("/api/eatburger/" + id + "/" + newDevouredState, {
            type: "PUT"
        }).then(function () {
            console.log("changed devoured to", newDevoured);
            location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bu")
                .val()
                .trim(),
            devoured: 0
        };

        $.ajax("/api/addburger", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        });
    });

    $(".delete-button").on("click", function(event) {
        console.log("Delete worked");
        console.log(this);
        let button = $(this);
        // grabs id from button
        let id = button.attr("data-id");
        $.ajax("/api/burger/" + id, {
          type: "DELETE"
        }).then(
          function(results) {
            console.log(results);
            location.reload();
          }
        );
      });
});