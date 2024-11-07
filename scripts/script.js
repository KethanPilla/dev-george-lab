$("button").click(function(){
    $.getJSON("https://kethanpilla.github.io/dev-george-lab/scripts/data.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
