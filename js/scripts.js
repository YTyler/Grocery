$(document).ready(function()  {
  $("#formOne").submit(function() {
    var blanks = ['person1', 'person2', 'person3', 'animal', 'exclamation', 'verb', 'noun']
    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });
    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput= $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();
    // var person3Input = $("input#person3").val();

    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);
    // $(".person3").text(person3Input);

    $("#story").show();

    event.preventDefault();
  });
});
