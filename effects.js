$('button').on("click", function(){
  // 1000 is 1 second
  // sets display to none
  $('div').fadeOut(1000, function(){
    // console.log("fade completed");
    // it's important to put the code in the callback function because the remove doesn't wait for fadeout to finish
    $(this).remove()
  });
});
// $('div').fadeOut();
