$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat").prepend('<li class="catbutton">Meow!</li>');
    $("ul#dog").prepend("<li>Bark Bark!</li>");
  });


  $("button#dog").click(function() {
    $("ul#cat").prepend("<li>Meow meow!</li>");
    $("ul#dog").prepend("<li>Bark!</li>");
  });

  $("li.catbutton").click(function() {
    $("#cat").after('<img src="img/cat.jpeg">');
  });

  /*
    $("ul#cat").children("li").first().click(function() {
      $("li").insertAfter('<img src="img/cat.jpeg" alt="cat">');
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).before();
    });

  $('li').css('background-color', 'green');

  $("ul#user").children("li").first().click(function() {
    $(this).remove();
  });
  $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
  });*/

});
