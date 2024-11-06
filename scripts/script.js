$("button").click(function(){
    $.getJSON("scripts/data.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });