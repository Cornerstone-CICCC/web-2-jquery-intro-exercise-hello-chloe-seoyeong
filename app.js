$(function() {
  // YOUR CODE HERE
  // Exercise 1
  $("#toggleButton").on("click", () => {
    $("#myParagraph").toggle();
  });

  // Exercise 2
  $("#colorButton").on("click", () => {
    $("#colorDiv").css({
      backgroundColor: "yellow"
    })
  });

  // Exercise 3
  $("#addClassButton").on("click", () => {
    $("#classDiv").addClass("new-class");
  });
  $("#removeClassButton").on("click", () => {
    $("#classDiv").removeClass("new-class")
  })

  // Exercise 4
  $("#fadeInButton").on("click", () => {
    $("#fadeDiv").fadeIn();
  });
  $("#fadeOutButton").on("click", () => {
    $("#fadeDiv").fadeOut();
  });

  // Exercise 5
  $("#slideUpButton").on("click", () => {
    $("#slideDiv").slideUp();
  });
  $("#slideDownButton").on("click", () => {
    $("#slideDiv").slideDown();
  });
})