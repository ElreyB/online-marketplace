$(document).ready(function(){
  $("#store-form").submit(function(){
    var nameInput = $("input#name").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();
    var jewelryInput = $("select#jewelry").val();
    var stoneInput = $("input:radio[name=stone]:checked").val();

    $(".name").text(nameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);
    $(".jewelry").text(jewelryInput);
    $(".stone").text(stoneInput);

    $("#store-form").hide();
    $(".receipt-page").show();
    event.preventDefault();
  });

  $("h3").click(function() {
    $("#store-form").show();
    $(".receipt-page").hide();
  });
});
