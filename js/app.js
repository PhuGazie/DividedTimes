$(document).ready(function(){

  // check if the li we clicked on has the class of “active.” If it does, it means that the user wants to slide the menu away from view, so we use the slideUp.  If it doesn’t have this class, it means that the user wants to see this piece of content.  Calling slideDown when the menu is already down won’t do anything, so it will stay visible.  Therefore we hide only the things we don’t want to see and how what we do wnat to see.

  $(document).on("click", "li.international", function(event){
    event.preventDefault();
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $("#slide-down").slideUp(100);
    } else {
      $("#international-drop").show();
      $("#politics-drop").hide();
      $("#business-drop").hide();
      $("#technology-drop").hide();
      $("#culture-drop").hide();
      $("#blogs-drop").hide();
      $("#slide-down").slideDown(100);
      $(this).addClass("active");
    }
});

$(document).on("click", "li.politics", function(event){
  event.preventDefault();
  if($(this).hasClass("active")){
    $(this).removeClass("active");
    $("#slide-down").slideUp(100);
  } else {
    $("#politics-drop").show();
    $("#international-drop").hide();
    $("#business-drop").hide();
    $("#technology-drop").hide();
    $("#culture-drop").hide();
    $("#blogs-drop").hide();
    $("#slide-down").slideDown(100);
    $(this).addClass("active");
  }
});

$(document).on("click", "li.business", function(event){
  event.preventDefault();
  if($(this).hasClass("active")){
    $(this).removeClass("active");
    $("#slide-down").slideUp(100);
  } else {
    $("#international-drop").hide();
    $("#politics-drop").hide();
    $("#business-drop").show(100);
    $("#technology-drop").hide();
    $("#culture-drop").hide();
    $("#blogs-drop").hide();
    $("#slide-down").slideDown();
    $(this).addClass("active");
  }
});

$(document).on("click", "li.technology", function(event){
  event.preventDefault();
  if($(this).hasClass("active")){
    $(this).removeClass("active");
    $("#slide-down").slideUp(100);
  } else {
    $("#international-drop").hide();
    $("#politics-drop").hide();
    $("#business-drop").hide();
    $("#technology-drop").show();
    $("#culture-drop").hide();
    $("#blogs-drop").hide();
    $("#slide-down").slideDown(100);
    $(this).addClass("active");
  }
});

$(document).on("click", "li.culture", function(event){
  event.preventDefault();
  if($(this).hasClass("active")){
    $(this).removeClass("active");
    $("#slide-down").slideUp(100);
  } else {
    $("#international-drop").hide();
    $("#politics-drop").hide();
    $("#business-drop").hide();
    $("#technology-drop").hide();
    $("#culture-drop").show(100);
    $("#blogs-drop").hide();
    $("#slide-down").slideDown();
    $(this).addClass("active");
  }
});

$(document).on("click", "li.blogs", function(event){
  event.preventDefault();
  if($(this).hasClass("active")){
    $(this).removeClass("active");
    $("#slide-down").slideUp(100);
  } else {
    $("#international-drop").hide();
    $("#politics-drop").hide();
    $("#business-drop").hide();
    $("#technology-drop").hide();
    $("#culture-drop").hide();
    $("#blogs-drop").show(100);
    $("#slide-down").slideDown();
    $(this).addClass("active");
  }
});
    //
    // $(document).on("click", "li.politics", function(){
    //
    //   $("#politics-drop").show();
    //   $("#international-drop").hide();
    //   $("#business-drop").hide();
    //   $("#technology-drop").hide();
    //   $("#culture-drop").hide();
    //   $("#blogs-drop").hide();
    //   $("#slide-down").slideDown();
    //   $(this).addClass("active");
    //   });


});
