$("document").ready(()=>{
  $("figcaption").on("click", function(){
    let url = $(this).attr("data");
    let newWindow = window.open(url, "_blank");
    newWindow.focus()
  })
});
