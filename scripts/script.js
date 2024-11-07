$("button").click(function(){
    $.getJSON("https://github.com/KethanPilla/dev-george-lab/blob/main/scripts/data.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
