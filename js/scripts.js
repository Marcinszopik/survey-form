$(document).ready(function(){
  $("form#work_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    alert("boom");
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");

    });
    $('#work_survey').hide();
  });
debugger;
$("form#leisure_survey").submit(function(event){
  event.preventDefault();
  $("#leisure-responses").show();
  $("input:checkbox[name=leisure-transportation]:checked").each(function(){
    var leisureTransportation = $(this).val();
    $('#leisure-responses').append(leisureTransportation + "<br>");
  });
    $('#leisure_survey').hide();
  });
});
