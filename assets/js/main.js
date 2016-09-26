$("document").ready(function(){
  $("figcaption").on("click", function(){
    var url = $(this).attr("data");
    var newWindow = window.open(url, "_blank");
    newWindow.focus()
  })
});
