$(document).ready(function(event) {
  $("#formOne").submit(function(event) {
  event.preventDefault();
//   var userInput = $("input#missingVowels").val();
//   $(".yourSentence").text(userInput);
//   $(".yourSentence").show(userInput);
//
  // var vowels = ['a', 'e', 'i', 'o', 'u'];

  var userInput = $("input#enterInput").val();
  // var noVowelsArr = userInput.split("i");
  // var noVowelStr = noVowelsArr.join("-");

  // for (var i = 0; i < vowels.length; i++) {


var userArr = userInput.split("");

for (var i = 0; i <= userArr.length; i ++) {
  if (userArr[i] === "a" || userArr[i] === "e" || userArr[i] === "i" || userArr[i] === "o" || userArr[i] === "u") {
    userArr.splice(i, 1, "-");
  }
}
  var noVowelStr = userArr.join("");
  $(".yourSentence").text(noVowelStr);
});




  // $(".yourSentence").text(noVowelStr);
//
//   var vowelled = $("Your i sentence here!");
//   var devolvingArr = vowelled.split("i");
//   var devolvedStr = devolvingArr.join("-");
//

// })
// var res = str.split(" ")

  // var input = $("input#missingVowels").val();
//   var strWithoutVowels = [];
//   string = string.split(' ');
//   var vowels = ["a", "e", "i", "o", "u"];
//
// for ( var index = 0; index < string.length; i++) {
//   if (vowels.indexOf(string[index]) < 0) {
//     strWithoutVowels.push(string[index])
//   }
// }
//
// strWithoutVowels = strWithoutVowels.join(' ');
// return strWithoutVowels;
  // var sentenceString = ["Believe you can and you're halfway there."]

  // var extractedVowels = sentenceString.map(function(vowel) {//   return vowel
  // });
 });
